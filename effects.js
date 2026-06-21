document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('ambient-effects');
  if (!container) return;

  // --- CONFIGURATION ---
  const MAX_DUST = 40;
  const MAX_FALLING = 25;
  const FALL_SPAWN_RATE = 1200; // ms

  // --- ASSETS ---
  const SVGS = {
    chili: `<svg viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M15,85 C5,45 35,15 75,15 C55,25 25,50 25,85 Z" fill="#9e1818" />
      <path d="M75,15 Q82,10 85,15" stroke="#4a6b22" stroke-width="3" stroke-linecap="round" fill="none" />
    </svg>`,
    turmeric: `<svg viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M30,25 Q55,10 75,30 T85,75 Q55,95 25,70 T20,40 Z" fill="#c78c06" />
      <path d="M35,35 Q50,25 65,45" stroke="#a36f00" stroke-width="2" fill="none" />
    </svg>`,
    mangoLeaf: `<svg viewBox="0 0 100 200" width="100%" height="100%">
      <path d="M50 0 C 80 40, 95 90, 50 180 C 5 90, 20 40, 50 0 Z" fill="#3a6b2b" />
      <path d="M50 0 L50 180" stroke="#25471b" stroke-width="2" fill="none" />
      <path d="M50 40 Q 65 60 80 50 M50 80 Q 70 100 85 90 M50 120 Q 65 140 75 130" stroke="#25471b" stroke-width="1.5" fill="none" />
      <path d="M50 40 Q 35 60 20 50 M50 80 Q 30 100 15 90 M50 120 Q 35 140 25 130" stroke="#25471b" stroke-width="1.5" fill="none" />
    </svg>`,
    curryLeaf: `<svg viewBox="0 0 100 40" width="100%" height="100%">
      <path d="M5,20 C30,0 70,5 95,20 C70,35 30,40 5,20 Z" fill="#2E5A1C" />
      <path d="M5,20 C30,10 70,12 95,20" stroke="#1A3A0E" stroke-width="1.5" fill="none" />
    </svg>`
  };

  let fallingCount = 0;

  // --- SUNBEAMS (STATIC / SLOW PULSE) ---
  function initSunbeams() {
    for (let i = 0; i < 2; i++) {
      const beam = document.createElement('div');
      beam.classList.add('sunbeam');
      beam.style.left = i === 0 ? '-10%' : '60%';
      beam.style.top = i === 0 ? '-20%' : '10%';
      beam.style.animationDelay = `${i * 5}s`;
      container.appendChild(beam);
    }
  }

  // --- FLOATING DUST ---
  function initDust() {
    for (let i = 0; i < MAX_DUST; i++) {
      const dust = document.createElement('div');
      dust.classList.add('dust-particle');
      
      const size = Math.random() * 2 + 1; // 1-3px
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const duration = Math.random() * 20 + 20; // 20-40s
      const delay = Math.random() * -40; // Random start in time
      
      dust.style.width = `${size}px`;
      dust.style.height = `${size}px`;
      dust.style.left = `${startX}px`;
      dust.style.top = `${startY}px`;
      dust.style.animationDuration = `${duration}s`;
      dust.style.animationDelay = `${delay}s`;
      
      container.appendChild(dust);
    }
  }

  // --- FALLING ELEMENTS ---
  function createFallingElement() {
    if (fallingCount >= MAX_FALLING) return;

    const el = document.createElement('div');
    el.classList.add('falling-element');
    
    // Types: 0=Mustard, 1=Fenugreek, 2=Coriander, 3=Chili, 4=Turmeric, 5=CurryLeaf, 6=MangoLeaf
    // Weighted probabilities: More seeds, fewer large elements
    const rand = Math.random();
    let type = 0;
    if (rand < 0.2) type = 0; // 20% Mustard
    else if (rand < 0.4) type = 1; // 20% Fenugreek
    else if (rand < 0.6) type = 2; // 20% Coriander
    else if (rand < 0.7) type = 3; // 10% Chili
    else if (rand < 0.8) type = 4; // 10% Turmeric
    else if (rand < 0.95) type = 5; // 15% Curry Leaf
    else type = 6; // 5% Mango Leaf

    let size, color, borderRadius, innerHTML = '';
    let isSVG = false;
    let widthRatio = 1; // aspect ratio width multiplier
    
    if (type === 0) { // Mustard
      size = Math.random() * 2 + 3; // 3-5px
      color = '#2c1e16';
      borderRadius = '50%';
    } else if (type === 1) { // Fenugreek
      size = Math.random() * 3 + 4; // 4-7px
      color = '#b88645';
      borderRadius = '2px';
    } else if (type === 2) { // Coriander
      size = Math.random() * 3 + 5; // 5-8px
      color = '#8f5724';
      borderRadius = '50%';
    } else if (type === 3) { // Chili
      size = Math.random() * 15 + 25; // 25-40px
      isSVG = true;
      innerHTML = SVGS.chili;
    } else if (type === 4) { // Turmeric
      size = Math.random() * 10 + 15; // 15-25px
      isSVG = true;
      innerHTML = SVGS.turmeric;
    } else if (type === 5) { // Curry Leaf
      size = Math.random() * 15 + 25; // 25-40px
      widthRatio = 2.5; // Wider than tall
      isSVG = true;
      innerHTML = SVGS.curryLeaf;
    } else if (type === 6) { // Mango Leaf
      size = Math.random() * 25 + 40; // 40-65px
      widthRatio = 0.5; // Taller than wide
      isSVG = true;
      innerHTML = SVGS.mangoLeaf;
    }

    const startX = Math.random() * window.innerWidth;
    // Layering logic
    const layer = Math.random();
    const isBackground = layer < 0.4;
    const opacity = isBackground ? (Math.random() * 0.3 + 0.15) : (Math.random() * 0.4 + 0.5);
    const filter = isBackground ? 'blur(3px)' : 'blur(0.5px)';
    
    // Physical properties
    // Larger items fall slightly faster in this stylized animation, or vary randomly
    const duration = isBackground ? (Math.random() * 15 + 20) : (Math.random() * 10 + 12); 
    const driftX = (Math.random() * 300 - 100); // Gentle breeze to the right usually, sometimes left
    const rotStart = Math.random() * 360;
    const rotEnd = rotStart + (Math.random() * 360 - 180);

    // Apply styles
    el.style.width = isSVG ? `${size * widthRatio}px` : `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${startX}px`;
    el.style.top = `-100px`;
    el.style.opacity = opacity;
    el.style.filter = filter;
    
    if (!isSVG) {
      el.style.backgroundColor = color;
      el.style.borderRadius = borderRadius;
    } else {
      el.innerHTML = innerHTML;
      // Add subtle swaying to SVGs
      const swayClass = Math.random() > 0.5 ? 'sway-1' : 'sway-2';
      el.children[0].classList.add(swayClass);
      el.children[0].style.animationDuration = `${Math.random() * 3 + 3}s`;
    }

    el.style.animationDuration = `${duration}s`;
    el.style.setProperty('--end-x', `${driftX}px`);
    el.style.setProperty('--end-y', `${window.innerHeight + 150}px`);
    el.style.setProperty('--rot-start', `${rotStart}deg`);
    el.style.setProperty('--rot-end', `${rotEnd}deg`);

    container.appendChild(el);
    fallingCount++;

    setTimeout(() => {
      if(el.parentNode) {
        el.parentNode.removeChild(el);
        fallingCount--;
      }
    }, duration * 1000);
  }

  // --- INITIALIZE ---
  initSunbeams();
  initDust();
  
  // Staggered initial burst of falling elements
  for(let i=0; i<15; i++) {
    setTimeout(createFallingElement, i * 400);
  }
  
  setInterval(createFallingElement, FALL_SPAWN_RATE);
});
