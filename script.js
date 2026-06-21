/* 
========================================================================
   DEEPIKA PICKLES - OFFICIAL INTERACTIVE LOGIC
   Direct WhatsApp ordering system version.
======================================================================== 
*/

document.addEventListener('DOMContentLoaded', () => {

  // --- MULTI-LANGUAGE TRANSLATION DICTIONARY ---
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About Us",
      nav_why: "Why Choose Us",
      nav_products: "Our Pickles",
      nav_howto: "How to Order",
      nav_reviews: "Reviews",
      nav_gallery: "Gallery",
      nav_contact: "Contact",
            btn_shop_now: "Shop Now",
      btn_add_to_cart: "Cart",
      btn_buy_now: "Buy Now",
      cart_title: "Your Cart",
      cart_total: "Grand Total",
      btn_cart_checkout: "Checkout on WhatsApp",
      
      hero_badge: "100% Homemade Pickles",
      hero_title: "Authentic Homemade Pickles Delivered to Your Doorstep",
      hero_sub: "Prepared using traditional family recipes, premium ingredients, and authentic Andhra flavors.",
      btn_view_products: "View Products",
      btn_order_whatsapp: "Order on WhatsApp",
      
      about_tagline: "Experience the Magic of Homemade Pickles",
      about_title: "The Story of Deepika Pickles",
      about_p1: "Our journey began in Chittoor, Andhra Pradesh, inside a warm family kitchen filled with the aroma of roasting mustard seeds, fenugreek, and cold-pressed oils. Deepika Pickles was born out of a passion for preserving traditional Indian culinary heritage, using age-old recipes passed down through generations.",
      about_p2: "We believe that pickles are not just side dishes, but the heart of an Indian meal. That is why we source the freshest local mangoes, plump lemons, and green roselle (Gongura) leaves directly from local farmers. Every single jar is packed by hand under strict hygienic standards, ensuring an authentic taste that reminds you of home.",
      about_feat1: "Family Recipes",
      about_feat2: "Locally Sourced",
      about_feat3: "Pure Hygiene",
      
      why_title: "Why Choose Us",
      why_sub: "We strive to bring the purity and taste of home to your dining table. Here is what makes our pickles special.",
      why_card1_title: "100% Homemade",
      why_card1_desc: "Every single batch of Deepika Pickles is prepared by hand in small kitchen quantities, rather than mass-produced in heavy factories.",
      why_card2_title: "Traditional Andhra Taste",
      why_card2_desc: "Passed down from grandmother recipes, our pickling methods retain the vintage aroma and taste that has defined South Indian kitchens for centuries.",
      why_card3_title: "Fresh Ingredients",
      why_card3_desc: "We use premium local quality mangoes, fresh garden limes, high-grade ground spices, and pure cold-pressed oils for pickling.",
      why_card4_title: "No Artificial Preservatives",
      why_card4_desc: "Our pickles are naturally preserved by acidity, salt, and oil content. We add zero artificial food colors, chemicals, or stabilizers.",
      why_card5_title: "Hygienic Preparation",
      why_card5_desc: "Cleanliness is our top priority. We use sterilized jars, dry utensils, hair coverings, and gloves during preparation and packaging.",
      why_card6_title: "Premium Packaging",
      why_card6_desc: "Our jars are sealed with double leak-proof packaging to lock in freshness and guarantee spill-free delivery to your doorstep.",
      why_card7_title: "Fast Delivery",
      why_card7_desc: "We pack and ship our pickles immediately after receiving orders. Delivery reaches across India with prompt transit tracking.",
      
      prod_title: "Our Homemade Pickles",
      prod_sub: "Explore our premium range of freshly prepared traditional South Indian pickles. Sourced from Chittoor and prepared by hand.",
      prod_search_placeholder: "Search for pickles (e.g. Mango, Tomato, Chicken)...",
      filter_all: "All Pickles",
      filter_veg: "Veg Pickles",
      filter_nonveg: "Non-Veg Pickles",
      
      label_size: "Size / Weight",
      label_qty: "Jars Qty",
      btn_order: "Order",
      
      prod_mango: "Mango (Avakaya)",
      prod_tomato: "Tomato",
      prod_gongura: "Gongura",
      prod_pudina: "Pudina (Mint)",
      prod_gooseberry: "Gooseberry",
      prod_mixed_veg: "Mixed Vegetable",
      prod_red_chilli: "Red Chilli",
      prod_gongura_red_chilli: "Gongura Red Chilli",
      prod_drumstick: "Drumstick",
      prod_lemon: "Lemon",
      prod_brinjal: "Brinjal (Eggplant)",
      prod_ginger: "Ginger",
      prod_chicken_bone: "Chicken Bone",
      prod_chicken_boneless: "Chicken Boneless",
      prod_mutton_bone: "Mutton Bone",
      prod_mutton_boneless: "Mutton Boneless",
      prod_fish_bone: "Fish Bone",
      prod_fish_boneless: "Fish Boneless",
      prod_prawns: "Prawns",
      
      howto_title: "How To Order",
      howto_sub: "Ordering our fresh, homemade pickles via WhatsApp is extremely simple. Follow these three quick steps.",
      step1_title: "Choose Your Pickle",
      step1_desc: "Browse our catalog of Veg and Non-Veg pickles. Select your package weight (e.g. 500g, 1kg) and quantity directly on the card.",
      step2_title: "Click Order Button",
      step2_desc: "Click the 'Order' button on the card. You will be redirected to WhatsApp with a pre-filled message detailing your selection.",
      step3_title: "Confirm & Pay",
      step3_desc: "We will calculate the shipping, share payment details (UPI/GPay/PhonePe), double-seal your jars, and ship them to your address.",
      
      reviews_title: "From Our Kitchen to Yours",
      reviews_sub: "Read what our happy customers have to say about the taste, hygiene, and authenticity of Deepika Pickles.",
      
      gallery_title: "Our Pickle Gallery",
      gallery_sub: "Peek into our kitchen to see how we prepare, pack, and seal the authentic taste of Andhra pickles.",
      gallery_feat1: "Pickle Preparation",
      gallery_desc1: "Traditional mixing process",
      gallery_feat2: "Fresh Ingredients",
      gallery_desc2: "Locally sourced fresh produce",
      gallery_feat3: "Traditional Spices",
      gallery_desc3: "Authentic roasted spice blends",
      gallery_feat4: "Hygienic Packaging",
      gallery_desc4: "Leak-proof double sealed jars",
      
      contact_title: "Get in Touch",
      contact_sub: "Have questions about bulk orders, custom spice levels, or delivery? Reach out to us directly.",
      contact_info_title: "Contact Information",
      contact_phone_label: "Phone / WhatsApp",
      contact_email_label: "Email Address",
      contact_location_label: "Our Location",
      contact_location_desc: "Chittoor, Andhra Pradesh, India",
      contact_hours_title: "Business Hours",
      contact_hours_week: "Monday - Saturday:",
      contact_hours_sun: "Sunday:",
      
      form_title: "Send us a Message",
      form_name_label: "Full Name *",
      form_name_placeholder: "Enter your full name",
      form_email_label: "Email Address *",
      form_email_placeholder: "Enter your email",
      form_phone_label: "Phone Number",
      form_phone_placeholder: "Enter your phone number",
      form_interest_label: "Pickle Interest",
      form_interest_opt0: "Select a pickle category",
      form_interest_opt1: "Vegetarian Pickles",
      form_interest_opt2: "Non-Vegetarian Pickles",
      form_interest_opt3: "Bulk Order Inquiry",
      form_interest_opt4: "General Inquiry",
      form_msg_label: "Your Message *",
      form_msg_placeholder: "Type your message here...",
      btn_send_message: "Send Message",
      
      loc_title: "Our Delivery Network",
      loc_card1_title: "Andhra & Telangana",
      loc_card1_time: "1 - 2 Days Delivery",
      loc_card1_desc: "Express shipping to Vijayawada, Visakhapatnam, Tirupati, Hyderabad, Secunderabad, Warangal, and all local towns.",
      loc_card2_title: "South India Metro",
      loc_card2_time: "2 - 3 Days Delivery",
      loc_card2_desc: "Swift courier network to Bangalore, Chennai, Coimbatore, Madurai, Mysore, Mangalore, Kochi, and key southern regions.",
      loc_card3_title: "Pan-India Network",
      loc_card3_time: "3 - 5 Days Delivery",
      loc_card3_desc: "Secure shipping to Mumbai, Pune, Delhi NCR, Kolkata, Gujarat, Rajasthan, and all remaining states across India.",
      loc_card4_title: "Global Deliveries",
      loc_card4_time: "Available on Request",
      loc_card4_desc: "We export our pickles to NRI families in USA, UK, UAE, and Canada. Contact us on WhatsApp for customs and shipping rates.",
      
      chat_title: "Deepika AI Assistant",
      chat_greeting: "Hello! 👋 I am the Deepika AI Assistant.",
      chat_ask_order: "How can I help you today?",
      chat_btn_yes: "🛒 I want to order",
      chat_btn_no: "👀 Just looking around",
      chat_btn_menu: "📋 View our menu",
      chat_btn_delivery: "🚚 Delivery info",
      chat_btn_bestseller: "⭐ Best sellers",
      chat_response_yes: "Perfect! I can prepare a WhatsApp message with our <strong>Total Menu</strong>. You can simply fill in the quantities you want next to each item and hit send!",
      chat_response_no: "No problem at all! Feel free to explore our website. If you get hungry for some spicy homemade pickles, I'll be right here! 😊",
      chat_btn_whatsapp: "Order on WhatsApp",
      chat_menu_ask: "We have a wide variety of pickles! Which category are you interested in?",
      chat_btn_veg: "🥬 Veg Pickles",
      chat_btn_nonveg: "🍗 Non-Veg Pickles",
      chat_btn_all: "📜 Full Menu",
      chat_veg_list: "Here are our <strong>Veg Pickles</strong>:<br><br>🥭 Mango (Avakaya) - ₹650/kg<br>🍅 Tomato - ₹600/kg<br>🌿 Gongura - ₹600/kg<br>🌿 Pudina (Mint) - ₹600/kg<br>🫚 Gooseberry - ₹600/kg<br>🥗 Mixed Veg - ₹600/kg<br>🌶️ Red Chilli - ₹600/kg<br>🌶️ Gongura Red Chilli - ₹600/kg<br>🥦 Drumstick - ₹600/kg<br>🍋 Lemon - ₹600/kg<br>🍆 Brinjal - ₹600/kg<br>🫚 Ginger - ₹600/kg",
      chat_nonveg_list: "Here are our <strong>Non-Veg Pickles</strong>:<br><br>🍗 Chicken Bone - ₹900/kg<br>🍗 Chicken Boneless - ₹1200/kg<br>🥩 Mutton Bone - ₹1400/kg<br>🥩 Mutton Boneless - ₹1600/kg<br>🐟 Fish Bone - ₹1200/kg<br>🐟 Fish Boneless - ₹1600/kg<br>🦐 Prawns - ₹1600/kg",
      chat_menu_followup: "Would you like to place an order now?",
      chat_btn_order_now: "🛒 Yes, order now!",
      chat_btn_back: "⬅️ Back to menu",
      chat_delivery_info: "We deliver across India! 🌍<br><br>📦 <strong>Andhra & Telangana:</strong> 1-2 days<br>📦 <strong>South India Metro:</strong> 2-3 days<br>📦 <strong>Pan-India:</strong> 3-5 days<br>🌏 <strong>International (USA, UK, UAE, Canada):</strong> On request<br><br>Free shipping on orders above ₹1500!",
      chat_bestseller_info: "Our customers' favorites! ❤️<br><br>🥇 <strong>Mango (Avakaya)</strong> - Our #1 bestseller!<br>🥈 <strong>Chicken Boneless</strong> - Most loved non-veg<br>🥉 <strong>Gongura</strong> - Authentic Andhra taste<br>🏅 <strong>Mutton Boneless</strong> - Premium pick",
      chat_anything_else: "Is there anything else I can help you with?",
      chat_btn_restart: "🔄 Start over"
    },
    te: {
      nav_home: "హోమ్",
      nav_about: "మా గురించి",
      nav_why: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",
      nav_products: "మా పచ్చళ్ళు",
      nav_howto: "ఆర్డర్ చేయడం ఎలా",
      nav_reviews: "సమీక్షలు",
      nav_gallery: "గ్యాలరీ",
      nav_contact: "సంప్రదించండి",
            btn_shop_now: "ఇప్పుడే కొనండి",
      btn_add_to_cart: "కార్ట్",
      btn_buy_now: "కొనండి",
      cart_title: "మీ కార్ట్",
      cart_total: "మొత్తం",
      btn_cart_checkout: "వాట్సాప్‌లో చెల్లించండి",
      
      hero_badge: "100% ఇంట్లోనే తయారు చేసిన పచ్చళ్ళు",
      hero_title: "ఆథెంటిక్ ఇంట్లో చేసిన పచ్చళ్ళు మీ ఇంటి వద్దకే డెలివరీ",
      hero_sub: "తరతరాల సాంప్రదాయక కుటుంబ వంటకాలతో, స్వచ్ఛమైన నాణ్యమైన పదార్థాలతో మరియు అసలైన ఆంధ్రా రుచులతో తయారుచేయబడినది.",
      btn_view_products: "పచ్చళ్ళు చూడండి",
      btn_order_whatsapp: "వాట్సాప్‌లో ఆర్డర్ చేయండి",
      
      about_tagline: "ఇంట్లోనే చేసిన రుచికరమైన పచ్చళ్ళ మ్యాజిక్",
      about_title: "దీపిక పచ్చళ్ళ ప్రస్థానం",
      about_p1: "మా ప్రస్థానం ఆంధ్రప్రదేశ్‌లోని చిత్తూరులో, ఆవాలు, మెంతులు, స్వచ్ఛమైన నూనెల సువాసనలతో నిండిన ఒక చిన్న ఇంటి వంటగదిలో ప్రారంభమైంది. తరతరాల నుండి మాకు అందించబడిన సాంప్రదాయ వంటకాలను భద్రపరచాలనే తపనతో దీపికా పచ్చళ్ళు పుట్టుకొచ్చాయి.",
      about_p2: "భారతీయ భోజనానికి పచ్చళ్లే ప్రాణం అని మేము నమ్ముతాము. అందుకే మేము స్థానిక రైతుల నుండి స్వచ్ఛమైన మామిడికాయలు, నిమ్మకాయలు, మరియు తాజా గోంగూర ఆకులను నేరుగా సేకరిస్తాము. ప్రతి జార్ కూడా పరిశుభ్రమైన వాతావरणంలో చేతితో ప్యాక్ చేయబడుతుంది.",
      about_feat1: "తరాల నాటి వంటకాలు",
      about_feat2: "స్థానికంగా సేకరించినవి",
      about_feat3: "పరిశుభ్రతకు ప్రాధాన్యత",
      
      why_title: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",
      why_sub: "మీ భోజన టేబుల్‌కి స్వచ్ఛమైన ఇంటి రుచిని అందించడమే మా లక్ష్యం. మా పచ్చళ్ళను ప్రత్యేకంగా మార్చే విషయాలు ఇవే.",
      why_card1_title: "100% ఇంట్లోనే చేసినవి",
      why_card1_desc: "దీపిక పచ్చళ్ళు ఫ్యాక్టరీలలో భారీగా తయారు చేసేవి కావు, చిన్న పరిమాణంలో పరిశుభ్రమైన ఇంటి వంటగదిలోనే స్వయంగా తయారు చేయబడతాయి.",
      why_card2_title: "సాంప్రదాయ ఆంధ్రా రుచి",
      why_card2_desc: "అమ్మమ్మ, నానమ్మల కాలం నాటి వంటకాలతో ఆంధ్రా ఇళ్లకు మాత్రమే సొంతమైన అసలైన రుచి మరియు సువాసనను అందిస్తాము.",
      why_card3_title: "తాజా వస్తువులు",
      why_card3_desc: "మేము ప్రీమియం నాణ్యమైన స్థానిక మామిడికాయలు, నిమ్మకాయలు, స్వచ్ఛమైన ఘాటైన మసాలాలు మరియు గానుగ నూనెలను మాత్రమే ఉపയോగిస్తాము.",
      why_card4_title: "కృత్రిమ రసాయనాలు లేనివి",
      why_card4_desc: "నూనె, ఉప్పు, మరియు సహజమైన పులుపుతోనే మా పచ్చళ్ళు నిల్వ ఉంటాయి. ఇందులో ఎటువంటి కృత్రిమ రంగులు లేదా రసాయనాలు వాడము.",
      why_card5_title: "పరిశుభ్రమైన తయారీ",
      why_card5_desc: "పరిశుభ్రత మా మొదటి ప్రాధాన్యత. స్టెరిలైజ్డ్ జార్స్, తడి లేని పాత్రలు, గ్లౌవ్స్ ధరించి పచ్చళ్ళను ప్యాక్ చేస్తాము.",
      why_card6_title: "నాణ్యమైన ప్యాకేజింగ్",
      why_card6_desc: "పచ్చళ్ళు లీక్ కాకుండా డబుల్ సీల్డ్ ప్యాకింగ్ చేస్తాము, తద్వారా పచ్చడి ఏమాత్రం ఒలికిపోకుండా మీ ఇంటికి చేరుకుంటుంది.",
      why_card7_title: "వేగవంతమైన డెలివరీ",
      why_card7_desc: "మీ ఆర్డర్ అందిన వెంటనే మేము పచ్చడిని ప్యాక్ చేసి షిప్ చేస్తాము. భారతదేశం అంతటా వేగంగా డెలివరీ చేస్తాము.",
      
      prod_title: "మా సాంప్రదాయ పచ్చళ్ళు",
      prod_sub: "తాజాగా, చేతితో తయారు చేసిన మా సాంప్రదాయ ఆంధ్రా వెజ్ మరియు నాన్-వెజ్ పచ్చళ్ళను ఇప్పుడే ఆర్డర్ చేయండి.",
      prod_search_placeholder: "పచ్చడి కోసం వెతకండి (ఉదాహరణకు: మామిడి, టమోటా, చికెన్)...",
      filter_all: "అన్ని పచ్చళ్ళు",
      filter_veg: "వెజ్ పచ్చళ్ళు",
      filter_nonveg: "నాన్-వెజ్ పచ్చళ్ళు",
      
      label_size: "పరిమాణం / బరువు",
      label_qty: "జాడీల సంఖ్య",
      btn_order: "ఆర్డర్ చేయండి",
      
      prod_mango: "మామిడికాయ (ఆవకాయ)",
      prod_tomato: "టమోటా పచ్చడి",
      prod_gongura: "గోంగూర పచ్చడి",
      prod_pudina: "పుదీనా పచ్చడి",
      prod_gooseberry: "ఉసిరికాయ పచ్చడి",
      prod_mixed_veg: "మిక్స్డ్ వెజిటబుల్ పచ్చడి",
      prod_red_chilli: "పండుమిరపకాయ పచ్చడి",
      prod_gongura_red_chilli: "గోంగూర పండుమిరప పచ్చడి",
      prod_drumstick: "ములక్కాడ పచ్చడి",
      prod_lemon: "నిమ్మకాయ పచ్చడి",
      prod_brinjal: "వంకాయ పచ్చడి",
      prod_ginger: "అల్లం పచ్చడి",
      prod_chicken_bone: "చికెన్ పచ్చడి (ఎముకలతో)",
      prod_chicken_boneless: "చికెన్ పచ్చడి (బోన్‌లెస్)",
      prod_mutton_bone: "మటన్ పచ్చడి (ఎముకలతో)",
      prod_mutton_boneless: "మటన్ పచ్చడి (బోన్‌లెస్)",
      prod_fish_bone: "చేపల పచ్చడి (ఎముకలతో)",
      prod_fish_boneless: "చేపల పచ్చడి (బోన్‌లెస్)",
      prod_prawns: "రొయ్యల పచ్చడి",
      
      howto_title: "ఆర్డర్ చేయడం ఎలా",
      howto_sub: "వాట్సాప్ ద్వారా పచ్చడిని ఆర్డర్ చేయడం చాలా సులభం. ఈ మూడు చిన్న దశలను అనుసరించండి.",
      step1_title: "మీ పచ్చడిని ఎంచుకోండి",
      step1_desc: "మా వెజ్ మరియు నాన్-వెజ్ పచ్చళ్ళను చూసి, మీకు కావలసిన సైజు (ఉదా. 500 గ్రాములు, 1 కిలో) మరియు పరిమాణం సెలెక్ట్ చేసుకోండి.",
      step2_title: "ఆర్డర్ బటన్ క్లిక్ చేయండి",
      step2_desc: "కార్డులోని 'ఆర్డర్' బటన్ నొక్కండి. మీ వివరాలతో వాట్సాప్‌కి ఆటోమేటిక్‌గా మెసేజ్ వెళుతుంది.",
      step3_title: "ధృవీకరించి చెల్లించండి",
      step3_desc: "మేము షిప్పింగ్ ఛార్జ్ లెక్కించి, UPI/GPay వివరాలు పంపుతాము. పేమెంట్ పూర్తయిన తర్వాత జార్స్ ని పంపుతాము.",
      
      reviews_title: "మా వంటగది నుండి మీ ఇంటికి",
      reviews_sub: "దీపికా పచ్చళ్ళ రుచి, పరిశుభ్రత మరియు నాణ్యత పై మా కస్టమర్ల అభిప్రాయాలు చదవండి.",
      
      gallery_title: "మా పచ్చళ్ళ గ్యాలరీ",
      gallery_sub: "మా వంటగదిలో పచ్చళ్ళ తయారీ, నాణ్యత మరియు పరిశుభ్రమైన ప్యాకింగ్ విధానాన్ని ఇక్కడ చూడండి.",
      gallery_feat1: "పచ్చడి తయారీ",
      gallery_desc1: "సాంప్రదాయ కలుపుడు విధానం",
      gallery_feat2: "తాజా వస్తువులు",
      gallery_desc2: "స్థానిక తోటల నుండి సేకరించినవి",
      gallery_feat3: "సాంప్రదాయ మసాలాలు",
      gallery_desc3: "చేతితో దంచిన సుగంధ ద్రవ్యాలు",
      gallery_feat4: "సురక్షితమైన ప్యాకింగ్",
      gallery_desc4: "లీక్-ఫ్రీ డబుల్ సీల్డ్ జార్లు",
      
      contact_title: "సంప్రదించండి",
      contact_sub: "బల్క్ ఆర్డర్లు, మసాలా స్థాయిలు లేదా డెలివరీ పై ఏవైనా సందేహాలు ఉంటే మమ్మల్ని సంప్రదించండి.",
      contact_info_title: "సంప్రదింపు వివరాలు",
      contact_phone_label: "ఫోన్ / వాట్సాప్",
      contact_email_label: "ఈమెయిల్ అడ్రస్",
      contact_location_label: "మా చిరునామా",
      contact_location_desc: "చిత్తూరు, ఆంధ్రప్రదేశ్, భారతదేశం",
      contact_hours_title: "పని వేళలు",
      contact_hours_week: "సోమవారం - శనివారం:",
      contact_hours_sun: "ఆదివారం:",
      
      form_title: "సందేశం పంపండి",
      form_name_label: "పూర్తి పేరు *",
      form_name_placeholder: "మీ పూర్తి పేరు రాయండి",
      form_email_label: "ఈమెయిల్ అడ్రస్ *",
      form_email_placeholder: "మీ ఈమెయిల్ రాయండి",
      form_phone_label: "ఫోన్ నెంబర్",
      form_phone_placeholder: "మీ ఫోన్ నెంబర్ రాయండి",
      form_interest_label: "ఆసక్తి ఉన్న పచ్చడి",
      form_interest_opt0: "పచ్చడి రకాన్ని ఎంచుకోండి",
      form_interest_opt1: "వెజ్ పచ్చళ్ళు",
      form_interest_opt2: "నాన్-వెజ్ పచ్చళ్ళు",
      form_interest_opt3: "బల్క్ ఆర్డర్ ఎంక్వైరీ",
      form_interest_opt4: "సాధారణ సమాచారం",
      form_msg_label: "మీ సందేశం *",
      form_msg_placeholder: "ఇక్కడ టైప్ చేయండి...",
      btn_send_message: "సందేశం పంపండి",
      
      loc_title: "మా డెలివరీ నెట్‌వర్క్",
      loc_card1_title: "ఆంధ్ర & తెలంగాణ",
      loc_card1_time: "1 - 2 రోజుల్లో డెలివరీ",
      loc_card1_desc: "విజయవాడ, విశాఖపట్నం, తిరుపతి, హైదరాబాద్, వరంగల్ మరియు అన్ని స్థానిక పట్టణాలకు ఎక్స్‌ప్రెస్ షిప్పింగ్.",
      loc_card2_title: "దక్షిణ భారతదేశ మెట్రోలు",
      loc_card2_time: "2 - 3 రోజుల్లో డెలివరీ",
      loc_card2_desc: "బెంగళూరు, చెన్నై, కోయంబత్తూరు, మైసూర్, మంగళూరు, కొచ్చి మరియు ఇతర ప్రధాన నగరాలకు వేగవంతమైన రవాణా.",
      loc_card3_title: "భారతదేశ వ్యాప్తంగా",
      loc_card3_time: "3 - 5 రోజుల్లో డెలివరీ",
      loc_card3_desc: "ముంబై, పూణే, ఢిల్లీ NCR, కోల్‌కతా, గుజరాత్, రాజస్థాన్ మరియు భారతదేశంలోని అన్ని ఇతర రాష్ట్రాలకు సురక్షితమైన డెలివరీ.",
      loc_card4_title: "ప్రపంచవ్యాప్తంగా",
      loc_card4_time: "అభ్యర్థనపై అందుబాటులో ఉంటుంది",
      loc_card4_desc: "అమెరికా, యూకే, యూఏఈ, కెనడాలోని NRI కుటుంబాలకు షిప్పింగ్ సౌకర్యం కలదు. వాట్సాప్ ద్వారా మమ్మల్ని సంప్రదించండి.",
      
      chat_title: "దీపికా AI అసిస్టెంట్",
      chat_greeting: "నమస్కారం! 👋 నేను దీపికా AI అసిస్టెంట్ ని.",
      chat_ask_order: "ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
      chat_btn_yes: "🛒 నేను ఆర్డర్ చేయాలనుకుంటున్నాను",
      chat_btn_no: "👀 కేవలం చూస్తున్నాను",
      chat_btn_menu: "📋 మెనూ చూడండి",
      chat_btn_delivery: "🚚 డెలివరీ సమాచారం",
      chat_btn_bestseller: "⭐ బెస్ట్ సెల్లర్స్",
      chat_response_yes: "అద్భుతం! నేను మా <strong>పూర్తి మెనూ</strong>తో వాట్సాప్ సందేశాన్ని సిద్ధం చేస్తాను. మీరు కేవలం పరిమాణాలను నమోదు చేసి పంపవచ్చు!",
      chat_response_no: "పర్వాలేదు! మా వెబ్‌సైట్‌ను చూడండి. మీకు కమ్మని ఇంటి పచ్చళ్ళు తినాలనిపిస్తే, నేను ఇక్కడే ఉంటాను! 😊",
      chat_btn_whatsapp: "వాట్సాప్ ద్వారా ఆర్డర్ చేయండి",
      chat_menu_ask: "మా దగ్గర రకరకాల పచ్చళ్ళు ఉన్నాయి! మీకు ఎంత కావాలి?",
      chat_btn_veg: "🥬 శాకాహార పచ్చళ్ళు",
      chat_btn_nonveg: "🍗 మాంసాహార పచ్చళ్ళు",
      chat_btn_all: "📜 పూర్తి మెనూ",
      chat_veg_list: "మా <strong>శాకాహార పచ్చళ్ళు</strong>:<br><br>🥭 మామిడి (ఆవకాయ) - ₹650/కేజీ<br>🍅 టమాటా - ₹600/కేజీ<br>🌿 గోంగూర - ₹600/కేజీ<br>🌿 పుదీనా - ₹600/కేజీ<br>🫚 ఉసిరి - ₹600/కేజీ<br>🥗 మిక్స్డ్ - ₹600/కేజీ<br>🌶️ ఎర్ర మిరప - ₹600/కేజీ<br>🥦 మునగ - ₹600/కేజీ<br>🍋 నిమ్మ - ₹600/కేజీ<br>🍆 గుత్తి - ₹600/కేజీ<br>🫚 అల్లం - ₹600/కేజీ",
      chat_nonveg_list: "మా <strong>మాంసాహార పచ్చళ్ళు</strong>:<br><br>🍗 చికెన్ బోన్ - ₹900/కేజీ<br>🍗 చికెన్ బోన్‌లెస్ - ₹1200/కేజీ<br>🥩 మటన్ బోన్ - ₹1400/కేజీ<br>🥩 మటన్ బోన్‌లెస్ - ₹1600/కేజీ<br>🐟 చేప బోన్ - ₹1200/కేజీ<br>🐟 చేప బోన్‌లెస్ - ₹1600/కేజీ<br>🦐 రొయ్యలు - ₹1600/కేజీ",
      chat_menu_followup: "ఇప్పుడు ఆర్డర్ చేయాలనుకుంటున్నారా?",
      chat_btn_order_now: "🛒 అవును, ఆర్డర్ చేయండి!",
      chat_btn_back: "⬅️ మెనూకు వెళ్ళండి",
      chat_delivery_info: "మేము భారతదేశం అంతటా డెలివర్ చేస్తాం! 🌍<br><br>📦 <strong>ఆంధ్ర & తెలంగాణ:</strong> 1-2 రోజులు<br>📦 <strong>దక్షిణ భారతం:</strong> 2-3 రోజులు<br>📦 <strong>భారతదేశం అంతటా:</strong> 3-5 రోజులు<br>🌏 <strong>అంతర్జాతీయం:</strong> అభ్యర్థనపై<br><br>₹1500 పైన ఆర్డర్లకు ఉచిత షిప్పింగ్!",
      chat_bestseller_info: "మా కస్టమర్ల ఇష్టమైనవి! ❤️<br><br>🥇 <strong>మామిడి (ఆవకాయ)</strong> - #1 బెస్ట్ సెల్లర్!<br>🥈 <strong>చికెన్ బోన్‌లెస్</strong> - అత్యంత ఇష్టమైనది<br>🥉 <strong>గోంగూర</strong> - అసలైన ఆంధ్ర రుచి<br>🏅 <strong>మటన్ బోన్‌లెస్</strong> - ప్రీమియం చాయ్స్",
      chat_anything_else: "ఇంకా ఏమైనా సహాయం కావాలా?",
      chat_btn_restart: "🔄 మళ్ళీ మొదలు నుండి"
    },
    hi: {
      nav_home: "होम",
      nav_about: "हमारे बारे में",
      nav_why: "हमें क्यों चुनें",
      nav_products: "हमारे अचार",
      nav_howto: "ऑर्डर कैसे करें",
      nav_reviews: "समीक्षाएं",
      nav_gallery: "गैलरी",
      nav_contact: "संपर्क करें",
            btn_shop_now: "अभी खरीदें",
      btn_add_to_cart: "कार्ट",
      btn_buy_now: "खरीदें",
      cart_title: "आपकी कार्ट",
      cart_total: "कुल राशि",
      btn_cart_checkout: "व्हाट्सएप पर चेकआउट",
      
      hero_badge: "100% घर का बना अचार",
      hero_title: "प्रामाणिक होममेड अचार सीधे आपके दरवाजे पर डिलीवर",
      hero_sub: "पारंपरिक पारिवारिक रेसिपी, प्रीमियम सामग्री और प्रामाणिक आंध्र स्वादों का उपयोग करके तैयार किया गया।",
      btn_view_products: "अचार देखें",
      btn_order_whatsapp: "व्हाट्सएप पर ऑर्डर करें",
      
      about_tagline: "घर के बने अचार का जादू चखें",
      about_title: "दीपिका अचार की कहानी",
      about_p1: "हमारी यात्रा आंध्र प्रदेश के चित्तूर में, सरसों, मेथी और कोल्ड-प्रेस तेलों की सुगंध से भरी एक पारिवारिक रसोई में शुरू हुई। पीढ़ियों से चली आ रही पारंपरिक व्यंजनों को सहेजने के जुनून से दीपिका अचार का जन्म हुआ।",
      about_p2: "हमारा मानना है कि अचार सिर्फ साइड डिश नहीं, बल्कि भारतीय भोजन का दिल है। इसलिए हम ताजे कच्चे आम, नींबू और हरी गोंगुरा पत्तियों को सीधे स्थानीय किसानों से खरीदते हैं। प्रत्येक जार को स्वच्छ परिस्थितियों में हाथ से पैक किया जाता है।",
      about_feat1: "पारंपरिक रेसिपी",
      about_feat2: "स्थानीय सामग्री",
      about_feat3: "पूर्ण स्वच्छता",
      
      why_title: "हमें क्यों चुनें",
      why_sub: "हम आपकी डाइनिंग टेबल पर घर की शुद्धता और स्वाद लाने का प्रयास करते हैं। जानिए हमारे अचारों को क्या खास बनाता है।",
      why_card1_title: "100% होममेड",
      why_card1_desc: "दीपिका अचार का हर एक बैच बड़ी फैक्ट्रियों के बजाय घर की रसोई में छोटी मात्रा में तैयार किया जाता है।",
      why_card2_title: "पारंपरिक आंध्र स्वाद",
      why_card2_desc: "दादी-नानी के पारंपरिक नुस्खों से तैयार हमारा अचार वही विंटेज स्वाद और खुशबू देता है जो सदियों से दक्षिण भारतीय रसोई की पहचान रही है।",
      why_card3_title: "ताजा सामग्री",
      why_card3_desc: "हम अचार बनाने के लिए प्रीमियम गुणवत्ता के स्थानीय आम, ताजे नींबू, उच्च श्रेणी के मसाले और शुद्ध कोल्ड-प्रेस्ड तेल का उपयोग करते हैं।",
      why_card4_title: "कोई कृत्रिम रसायन नहीं",
      why_card4_desc: "हमारे अचार तेल, नमक और प्राकृतिक खटास से सुरक्षित रहते हैं। हम इसमें कोई कृत्रिम रंग या प्रिजर्वेटिव नहीं मिलाते।",
      why_card5_title: "स्वच्छता से तैयार",
      why_card5_desc: "साफ-सफाई हमारी सर्वोच्च प्राथमिकता है। हम बाँझ (sterilized) जार, सूखे बर्तनों, हेड कवर और दस्तानों का उपयोग करते हैं।",
      why_card6_title: "प्रीमियम पैकेजिंग",
      why_card6_desc: "हमारे कांच के जार लीक-प्रूफ डबल सील के साथ आते हैं ताकि अचार ताजा रहे और आपके घर तक सुरक्षित बिना किसी रिसाव के पहुंचे।",
      why_card7_title: "तेज डिलीवरी",
      why_card7_desc: "ऑर्डर मिलते ही हम तुरंत डिस्पैच करते हैं। लीक-proof पैकेजिंग के साथ पूरे भारत में सुरक्षित डिलीवरी की जाती है।",
      
      prod_title: "हमारे होममेड अचार",
      prod_sub: "चित्तूर से मंगाई गई ताजी सामग्री और हाथ से बने पारंपरिक आंध्र के शाकाहारी और मांसाहारी अचारों की सूची देखें।",
      prod_search_placeholder: "अचार खोजें (जैसे: आम, टमाटर, चिकन)...",
      filter_all: "सभी अचार",
      filter_veg: "शाकाहारी अचार",
      filter_nonveg: "मांसाहारी अचार",
      
      label_size: "आकार / वजन",
      label_qty: "जार की संख्या",
      btn_order: "ऑर्डर करें",
      
      prod_mango: "आम का अचार (आवकाया)",
      prod_tomato: "टमाटर का अचार",
      prod_gongura: "गोंगुरा अचार",
      prod_pudina: "पुदीना अचार",
      prod_gooseberry: "आंवले का अचार",
      prod_mixed_veg: "मिक्स वेज अचार",
      prod_red_chilli: "लाल मिर्च का अचार",
      prod_gongura_red_chilli: "गोंगुरा लाल मिर्च",
      prod_drumstick: "सहजन (ड्रमस्टिक) अचार",
      prod_lemon: "नींबू का अचार",
      prod_brinjal: "बैंगन का अचार",
      prod_ginger: "अदरक का अचार",
      prod_chicken_bone: "चिकन अचार (हड्डी के साथ)",
      prod_chicken_boneless: "चिकन अचार (बोनलेस)",
      prod_mutton_bone: "मटन अचार (हड्डी के साथ)",
      prod_mutton_boneless: "मटन अचार (बोनलेस)",
      prod_fish_bone: "मछली अचार (हड्डी के साथ)",
      prod_fish_boneless: "मछली अचार (बोनलेस)",
      prod_prawns: "झींगा (प्रॉन्स) अचार",
      
      howto_title: "ऑर्डर कैसे करें",
      howto_sub: "व्हाट्सएप के जरिए हमारे ताजे अचार ऑर्डर करना बेहद आसान है। बस इन तीन चरणों का पालन करें।",
      step1_title: "अपना अचार चुनें",
      step1_desc: "हमारे शाकाहारी और मांसाहारी अचारों की सूची देखें। जार का वजन (जैसे 500 ग्राम, 1 किलोग्राम) और संख्या चुनें।",
      step2_title: "ऑर्डर बटन पर क्लिक करें",
      step2_desc: "कार्ड पर दिए गए 'ऑर्डर' बटन पर क्लिक करें। आपके व्हाट्सएप पर पहले से लिखा संदेश खुल जाएगा।",
      step3_title: "पुष्टि करें और भुगतान करें",
      step3_desc: "हम कूरियर शुल्क जोड़कर भुगतान विवरण (UPI/GPay) साझा करेंगे। भुगतान के बाद हम शिपमेंट भेज देंगे।",
      
      reviews_title: "हमारी रसोई से आपके घर तक",
      reviews_sub: "दीपिका अचार के स्वाद, स्वच्छता और गुणवत्ता के बारे में हमारे संतुष्ट ग्राहकों की राय पढ़ें।",
      
      gallery_title: "हमारी अचार गैलरी",
      gallery_sub: "देखें कि हमारी रसोई में पारंपरिक तरीके से अचार कैसे तैयार, पैक और सील किए जाते हैं।",
      gallery_feat1: "अचार की तैयारी",
      gallery_desc1: "पारंपरिक मिलाने की विधि",
      gallery_feat2: "ताजी सामग्रियां",
      gallery_desc2: "स्थानीय खेतों से सीधे मंगाई गईं",
      gallery_feat3: "पारंपरिक मसाले",
      gallery_desc3: "हाथ से भुने और पीसे गए मसाले",
      gallery_feat4: "सुरक्षित पैकेजिंग",
      gallery_desc4: "लीक-प्रूफ डबल सील जार",
      
      contact_title: "संपर्क करें",
      contact_sub: "थोक ऑर्डर, कस्टमाइज्ड तीखापन या डिलीवरी के बारे में किसी भी सवाल के लिए हमसे सीधे संपर्क करें।",
      contact_info_title: "संपर्क जानकारी",
      contact_phone_label: "फोन / व्हाट्सएप",
      contact_email_label: "ईमेल पता",
      contact_location_label: "हमारा स्थान",
      contact_location_desc: "चित्तूर, आंध्र प्रदेश, भारत",
      contact_hours_title: "काम के घंटे",
      contact_hours_week: "सोमवार - शनिवार:",
      contact_hours_sun: "रविवार:",
      
      form_title: "हमें संदेश भेजें",
      form_name_label: "पूरा नाम *",
      form_name_placeholder: "अपना पूरा नाम लिखें",
      form_email_label: "ईमेल पता *",
      form_email_placeholder: "अपना ईमेल लिखें",
      form_phone_label: "फोन नंबर",
      form_phone_placeholder: "अपना फोन नंबर लिखें",
      form_interest_label: "अचार में रुचि",
      form_interest_opt0: "अचार श्रेणी चुनें",
      form_interest_opt1: "शाकाहारी अचार",
      form_interest_opt2: "मांसाहारी अचार",
      form_interest_opt3: "थोक ऑर्डर पूछताछ",
      form_interest_opt4: "सामान्य प्रश्न / फीडबैक",
      form_msg_label: "आपका संदेश *",
      form_msg_placeholder: "अपना संदेश यहाँ टाइप करें...",
      btn_send_message: "संदेश भेजें",
      
      loc_title: "हमारा डिलीवरी नेटवर्क",
      loc_card1_title: "आंध्र और तेलंगाना",
      loc_card1_time: "1 - 2 दिन में डिलीवरी",
      loc_card1_desc: "विजयवाड़ा, विशाखापत्तनम, तिरुपति, हैदराबाद, वारंगल और सभी स्थानीय शहरों में एक्सप्रेस शिपिंग।",
      loc_card2_title: "दक्षिण भारतीय मेट्रो",
      loc_card2_time: "2 - 3 दिन में डिलीवरी",
      loc_card2_desc: "बेंगलुरु, चेन्नई, कोयंबटूर, मदुरै, मैसूर, मैंगलोर, कोच्चि और अन्य प्रमुख शहरों में त्वरित डिलीवरी।",
      loc_card3_title: "अखिल भारतीय नेटवर्क",
      loc_card3_time: "3 - 5 दिन में डिलीवरी",
      loc_card3_desc: "मुंबई, पुणे, दिल्ली NCR, कोलकाता, गुजरात, राजस्थान और भारत के सभी राज्यों में कूरियर द्वारा सुरक्षित शिपिंग।",
      loc_card4_title: "वैश्विक डिलीवरी",
      loc_card4_time: "अनुरोध पर उपलब्ध",
      loc_card4_desc: "हम अमेरिका, यूके, यूएई और कनाडा में रहने वाले प्रवासी भारतीय (NRI) परिवारों को भी अचार निर्यात करते हैं।",
      
      chat_title: "दीपिका AI असिस्टेंट",
      chat_greeting: "नमस्ते! 👋 मैं दीपिका AI असिस्टेंट हूँ।",
      chat_ask_order: "आज मैं आपकी कैसे मदद कर सकता हूँ?",
      chat_btn_yes: "🛒 मुझे ऑर्डर करना है",
      chat_btn_no: "👀 मैं बस देख रहा हूँ",
      chat_btn_menu: "📋 मेनू देखें",
      chat_btn_delivery: "🚚 डिलीवरी जानकारी",
      chat_btn_bestseller: "⭐ बेस्ट सेलर्स",
      chat_response_yes: "बहुत बढ़िया! मैं हमारे <strong>पूरे मेनू</strong> के साथ एक व्हाट्सएप संदेश तैयार कर सकता हूँ। आप बस मात्रा भरें और भेजें!",
      chat_response_no: "कोई बात नहीं! बेझिझक हमारी वेबसाइट देखें। अगर आपका चटपटे अचार खाने का मन करे, तो मैं यहीं हूँ! 😊",
      chat_btn_whatsapp: "व्हाट्सएप पर ऑर्डर करें",
      chat_menu_ask: "हमारे पास तरह-तरह के अचार हैं! आपको कौन सा चाहिए?",
      chat_btn_veg: "🥬 शाकाहारी अचार",
      chat_btn_nonveg: "🍗 मांसाहारी अचार",
      chat_btn_all: "📜 पूरा मेनू",
      chat_veg_list: "हमारे <strong>शाकाहारी अचार</strong>:<br><br>🥭 आम (आवाकाया) - ₹650/किलो<br>🍅 टमाटर - ₹600/किलो<br>🌿 गोंगूरा - ₹600/किलो<br>🌿 पुदीना - ₹600/किलो<br>🫚 आंवला - ₹600/किलो<br>🥗 मिक्स्ड - ₹600/किलो<br>🌶️ लाल मिर्च - ₹600/किलो<br>🥦 सहजन - ₹600/किलो<br>🍋 नींबू - ₹600/किलो<br>🍆 बैंगन - ₹600/किलो<br>🫚 अदरक - ₹600/किलो",
      chat_nonveg_list: "हमारे <strong>मांसाहारी अचार</strong>:<br><br>🍗 चिकन बोन - ₹900/किलो<br>🍗 चिकन बोनलेस - ₹1200/किलो<br>🥩 मटन बोन - ₹1400/किलो<br>🥩 मटन बोनलेस - ₹1600/किलो<br>🐟 मछली बोन - ₹1200/किलो<br>🐟 मछली बोनलेस - ₹1600/किलो<br>🦐 झींगा - ₹1600/किलो",
      chat_menu_followup: "क्या आप अभी ऑर्डर करना चाहेंगे?",
      chat_btn_order_now: "🛒 हाँ, अभी ऑर्डर करें!",
      chat_btn_back: "⬅️ मेनू पर वापस जाएं",
      chat_delivery_info: "हम पूरे भारत में डिलीवर करते हैं! 🌍<br><br>📦 <strong>आंध्र और तेलंगाना:</strong> 1-2 दिन<br>📦 <strong>दक्षिण भारत:</strong> 2-3 दिन<br>📦 <strong>पूरे भारत:</strong> 3-5 दिन<br>🌏 <strong>अंतर्राष्ट्रीय:</strong> अनुरोध पर<br><br>₹1500 से ऊपर के ऑर्डर पर मुफ्त शिपिंग!",
      chat_bestseller_info: "हमारे ग्राहकों की पसंद! ❤️<br><br>🥇 <strong>आम (आवाकाया)</strong> - #1 बेस्ट सेलर!<br>🥈 <strong>चिकन बोनलेस</strong> - सबसे प्रिय नॉन-वेज<br>🥉 <strong>गोंगूरा</strong> - असली आंध्रा स्वाद<br>🏅 <strong>मटन बोनलेस</strong> - प्रीमियम चोइस",
      chat_anything_else: "क्या कुछ और मदद चाहिए?",
      chat_btn_restart: "🔄 फिर से शुरू करें"
    }
  };

  let currentLang = 'en';

  function getQtyLabel(lang, qty, weight) {
    if (lang === 'te') {
      return qty === 1 ? `ప్రతి ${weight} జాడీకి` : `${qty} జాడీలు (${weight} చొప్పున)`;
    } else if (lang === 'hi') {
      return qty === 1 ? `प्रति ${weight} जार` : `${qty} जार (प्रत्येक ${weight})`;
    } else {
      return qty === 1 ? `per ${weight} jar` : `for ${qty} jars (${weight} each)`;
    }
  }

  
  // --- SELECTORS ---
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  // --- MOBILE NAVIGATION DRAWER ---
  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Stop scrolling behind drawer
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Resume scrolling
  }

  menuToggle.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  // Close drawer when a link is clicked
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // --- STICKY HEADER & SCROLL TO TOP ---
  window.addEventListener('scroll', () => {
    // Add shadow/shrink header
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll to Top button visibility
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- ACTIVE LINK ON SCROLL (INTERSECTION OBSERVER) ---
  const sectionObserverOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle portion
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update header links
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Update mobile drawer links
        drawerLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, sectionObserverOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // --- SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER) ---
  const revealObserverOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger slightly before element comes into view
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, revealObserverOptions);

  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // --- PRODUCT CATALOG FILTERING & SEARCH ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const searchInput = document.getElementById('productSearch');

  function filterProducts() {
    const activeTab = document.querySelector('.filter-btn.active');
    const filterValue = activeTab ? activeTab.getAttribute('data-filter') : 'all';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    productCards.forEach(card => {
      const categories = card.getAttribute('data-category').split(' ');
      const h3 = card.querySelector('h3');
      const p = card.querySelector('.product-desc');
      const name = h3 ? h3.textContent.toLowerCase() : '';
      const desc = p ? p.textContent.toLowerCase() : '';

      const matchesCategory = filterValue === 'all' || categories.includes(filterValue);
      const matchesSearch = name.includes(query) || desc.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        // Force reflow
        card.offsetHeight; 
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        // Delay display: none slightly to let fadeout transition complete
        setTimeout(() => {
          // Recheck in case query/filter changed before timeout
          const currentTab = document.querySelector('.filter-btn.active');
          const currentFilter = currentTab ? currentTab.getAttribute('data-filter') : 'all';
          const currentQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
          const stillMatchesCategory = currentFilter === 'all' || categories.includes(currentFilter);
          const stillMatchesSearch = name.includes(currentQuery) || desc.includes(currentQuery);
          if (!(stillMatchesCategory && stillMatchesSearch)) {
            card.style.display = 'none';
          }
        }, 300);
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts();
    });
  });

  // --- TOAST NOTIFICATIONS ---
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer;

  function showToast(message) {
    clearTimeout(toastTimer);
    toastMsg.textContent = message;
    toast.classList.add('show');
    
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // --- PRODUCT CARD DYNAMIC PRICING & QUANTITY CONTROLS ---
  productCards.forEach(card => {
    const decBtn = card.querySelector('.qty-dec-btn');
    const incBtn = card.querySelector('.qty-inc-btn');
    const qtyInput = card.querySelector('.card-qty-input');
    const weightSelect = card.querySelector('.prod-weight-select');
    const priceVal = card.querySelector('.price-val');
    const priceQty = card.querySelector('.price-qty');
    const basePrice = parseFloat(card.getAttribute('data-base-price')) || 600;

    function updatePrice() {
      if (!priceVal || !priceQty) return;
      
      const qty = parseInt(qtyInput.value) || 1;
      const weight = weightSelect ? weightSelect.value : '1kg';
      
      // Calculate weight factor
      let weightFactor = 1.0;
      if (weight === '250g') weightFactor = 0.25;
      else if (weight === '500g') weightFactor = 0.5;
      else if (weight === '1kg') weightFactor = 1.0;
      else if (weight === '2kg') weightFactor = 2.0;

      const totalPrice = Math.round(basePrice * weightFactor * qty);
      priceVal.textContent = `₹${totalPrice}`;

      priceQty.textContent = getQtyLabel(currentLang, qty, weight);
    }

    if (decBtn && incBtn && qtyInput) {
      decBtn.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) {
          qtyInput.value = val - 1;
          updatePrice();
        }
      });

      incBtn.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val < 20) {
          qtyInput.value = val + 1;
          updatePrice();
        }
      });
    }

    if (weightSelect) {
      weightSelect.addEventListener('change', updatePrice);
    }

    // Initial calculation to align price tags on load
    updatePrice();
  });

  // --- DIRECT WHATSAPP ORDER LOGIC ---
  const orderButtons = document.querySelectorAll('.card-buy-btn');
  const whatsappNumber = "919652286824";

  orderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      // Get the translated name from the card title dynamically
      const h3 = card ? card.querySelector('h3') : null;
      const productName = h3 ? h3.textContent.trim() : btn.getAttribute('data-product');
      
      const weightSelect = card.querySelector('.prod-weight-select');
      const qtyInput = card.querySelector('.card-qty-input');
      
      const weight = weightSelect.value;
      const qty = qtyInput.value;

      // Quantity format: e.g. "1 x 1kg" or "2 x 500g"
      const quantityStr = `${qty} x ${weight}`;

      // Compile WhatsApp message matching the requested format:
      // Hello Deepika Pickles,
      // 
      // I would like to place an order.
      // 
      // Product: [PRODUCT]
      // Quantity: [QUANTITY]
      // 
      // Please share the total price and delivery details.
      // 
      // Thank you.
      const textMsg = `Hello, I would like to order:

- ${productName} (${weight}) × ${qty}

Total Items: ${qty}

Please confirm my order.`;

      // Encode message
      const encodedMsg = encodeURIComponent(textMsg);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

      // Show toast and redirect
      showToast(`Ordering ${productName} (${quantityStr})...`);
      
      window.open(whatsappUrl, '_blank');
    });
  });

  
  // --- SHOPPING CART LOGIC ---
  let cart = [];
  try {
    const savedCart = localStorage.getItem('deepika_pickles_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
      if (!Array.isArray(cart)) cart = [];
    }
  } catch (e) {
    console.error("Cart parse error:", e);
    cart = [];
    localStorage.removeItem('deepika_pickles_cart');
  }
  
  const headerCartBtn = document.getElementById('headerCartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const headerCartBadge = document.getElementById('headerCartBadge');
  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

  function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCart();
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if(headerCartBtn) headerCartBtn.addEventListener('click', openCart);
  if(cartClose) cartClose.addEventListener('click', closeCart);
  if(cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function saveCart() {
    localStorage.setItem('deepika_pickles_cart', JSON.stringify(cart));
    updateCartBadge();
  }

  function updateCartBadge() {
    if(headerCartBadge) {
      const totalItems = cart.reduce((sum, item) => sum + parseInt(item.qty), 0);
      headerCartBadge.textContent = totalItems;
    }
  }

  function renderCart() {
    if(!cartItemsList) return;
    cartItemsList.innerHTML = '';
    
    let grandTotal = 0;

    if (cart.length === 0) {
      cartItemsList.innerHTML = '<p style="text-align:center; color:var(--color-text-muted); margin-top: 40px;">Your cart is empty.</p>';
      cartGrandTotal.textContent = '₹0';
      return;
    }

    cart.forEach((item, index) => {
      grandTotal += item.price * item.qty;
      
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-info">
          <span class="cart-item-title">${item.name}</span>
          <span class="cart-item-meta">${item.weight} × ${item.qty}</span>
        </div>
        <div style="display:flex; align-items:center; gap: 12px;">
          <span class="cart-item-price">₹${item.price * item.qty}</span>
          <button class="cart-remove-btn" onclick="window.removeFromCart(${index})">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
          </button>
        </div>
      `;
      cartItemsList.appendChild(div);
    });

    cartGrandTotal.textContent = `₹${grandTotal}`;
  }

  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  };

  // Add to Cart Buttons
  const cartButtons = document.querySelectorAll('.card-cart-btn');
  cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const h3 = card ? card.querySelector('h3') : null;
      const productName = h3 ? h3.textContent.trim() : btn.getAttribute('data-product');
      const weightSelect = card.querySelector('.prod-weight-select');
      const qtyInput = card.querySelector('.card-qty-input');
      
      const weight = weightSelect.value;
      const qty = parseInt(qtyInput.value) || 1;
      const basePrice = parseFloat(card.getAttribute('data-base-price')) || 600;
      
      let weightFactor = 1.0;
      if (weight === '250g') weightFactor = 0.25;
      else if (weight === '500g') weightFactor = 0.5;
      else if (weight === '1kg') weightFactor = 1.0;
      else if (weight === '2kg') weightFactor = 2.0;

      const unitPrice = Math.round(basePrice * weightFactor);

      // Check if item already exists
      const existingItemIndex = cart.findIndex(i => i.name === productName && i.weight === weight);
      if(existingItemIndex >= 0) {
        cart[existingItemIndex].qty += qty;
      } else {
        cart.push({
          name: productName,
          weight: weight,
          qty: qty,
          price: unitPrice
        });
      }

      saveCart();
      showToast(`Added ${productName} to cart`);
      // Flash animation on badge
      if(headerCartBadge) {
        headerCartBadge.style.transform = 'scale(1.5)';
        setTimeout(() => headerCartBadge.style.transform = 'scale(1)', 300);
      }
    });
  });

  // Cart Checkout
  if(cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', () => {
      if(cart.length === 0) {
        showToast("Your cart is empty!");
        return;
      }

      let msg = "Hello, I would like to order:\n\n";
      let totalItems = 0;
      let grandTotal = 0;

      cart.forEach(item => {
        msg += `- ${item.name} (${item.weight}) × ${item.qty}\n`;
        totalItems += item.qty;
        grandTotal += item.price * item.qty;
      });

      msg += `\nTotal Items: ${totalItems}\n`;
      msg += `Grand Total: ₹${grandTotal}\n\n`;
      msg += "Please confirm my order.";

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/919652286824?text=${encodedMsg}`;
      
      window.open(whatsappUrl, '_blank');
    });
  }

  // Init badge
  updateCartBadge();

  // --- CONTACT FORM SUBMISSION LOGIC ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');
      const messageInput = document.getElementById('formMessage');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('error');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('error');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.closest('.form-group').classList.add('error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('error');
      }

      if (isValid) {
        // Show success toast
        showToast("Thank you! Your message has been sent successfully.");
        // Reset form
        contactForm.reset();
      }
    });

    // Remove error highlights on input
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const formGroup = input.closest('.form-group');
        if (formGroup && formGroup.classList.contains('error')) {
          formGroup.classList.remove('error');
        }
      });
    });
  }

  // --- LANGUAGE SWITCHER CONTROLLER ---
  const langSelect = document.getElementById('langSelect');
  const drawerLangSelect = document.getElementById('drawerLangSelect');

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;

    // Synchronize select dropdowns
    if (langSelect) langSelect.value = lang;
    if (drawerLangSelect) drawerLangSelect.value = lang;

    // Save choice
    localStorage.setItem('deepika_pickles_lang', lang);

    // Translate HTML content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        const svg = el.querySelector('svg');
        if (svg) {
          // Preserve SVG structure (like search icon or Whatsapp logo)
          el.innerHTML = '';
          el.appendChild(svg);
          el.appendChild(document.createTextNode(' ' + translations[lang][key]));
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Translate Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update dynamic labels across all cards
    document.querySelectorAll('.product-card').forEach(card => {
      const qtyInput = card.querySelector('.card-qty-input');
      const weightSelect = card.querySelector('.prod-weight-select');
      const priceQty = card.querySelector('.price-qty');
      const basePrice = parseFloat(card.getAttribute('data-base-price')) || 600;

      if (qtyInput && priceQty) {
        const qty = parseInt(qtyInput.value) || 1;
        const weight = weightSelect ? weightSelect.value : '1kg';
        priceQty.textContent = getQtyLabel(lang, qty, weight);
      }
    });

    // Rerun text filtering to update matching case queries
    if (typeof filterProducts === 'function') {
      filterProducts();
    }
  }

  // Hook change listeners
  if (langSelect) {
    langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
  }
  if (drawerLangSelect) {
    drawerLangSelect.addEventListener('change', (e) => setLanguage(e.target.value));
  }

  // Load language settings on startup
  const savedLang = localStorage.getItem('deepika_pickles_lang') || 'en';
  setLanguage(savedLang);

  // --- AI CHAT WIDGET LOGIC ---
  const aiChatBtn = document.getElementById('aiChatBtn');
  const aiChatWidget = document.getElementById('aiChatWidget');
  const aiChatClose = document.getElementById('aiChatClose');
  const aiChatBody = document.getElementById('aiChatBody');
  const aiChatOptions = document.getElementById('aiChatOptions');
  
  let chatState = 0;

  function appendAiMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-bubble ai';
    msgDiv.innerHTML = text;
    aiChatBody.appendChild(msgDiv);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
  }

  function appendUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-bubble user';
    msgDiv.innerHTML = text;
    aiChatBody.appendChild(msgDiv);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
  }

  function renderOptions(options) {
    aiChatOptions.innerHTML = '';
    options.forEach(opt => {
      if (opt.type === 'whatsapp') {
        const btn = document.createElement('button');
        btn.className = 'chat-whatsapp-btn';
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.002-2.63-1.023-5.101-2.886-6.968C16.583 1.922 14.113.896 11.485.894 6.047.894 1.624 5.308 1.62 10.744c-.001 1.679.444 3.313 1.29 4.743L1.875 21.8l6.525-1.711zM17.06 14.37c-.274-.137-1.62-.8-1.87-.892-.25-.092-.433-.137-.614.137-.18.274-.7.892-.857 1.077-.158.18-.315.205-.59.069-.274-.138-1.157-.426-2.204-1.36-1.134-1.01-1.9-2.257-2.122-2.64-.223-.383-.024-.59.167-.776.17-.168.384-.447.576-.67.192-.224.256-.383.384-.638.128-.256.064-.482-.032-.687-.096-.205-.815-1.964-1.116-2.693-.293-.706-.592-.611-.815-.622-.21-.011-.45-.011-.69-.011-.24 0-.63.091-.96.447-.33.356-1.26 1.233-1.26 3.01s1.29 3.493 1.47 3.738c.18.24 2.54 3.88 6.16 5.45.86.37 1.53.59 2.06.76.87.27 1.66.23 2.28.14.69-.1 2.12-.87 2.42-1.7.3-.83.3-1.54.21-1.7-.09-.16-.3-.25-.57-.38z"/></svg> ${opt.label}`;
        btn.onclick = () => window.open(opt.url, '_blank');
        aiChatOptions.appendChild(btn);
      } else {
        const btn = document.createElement('button');
        btn.className = 'chat-option-btn';
        btn.textContent = opt.label;
        btn.onclick = () => handleUserSelection(opt.action, opt.label);
        aiChatOptions.appendChild(btn);
      }
    });
  }

  function handleUserSelection(action, label) {
    appendUserMessage(label);
    aiChatOptions.innerHTML = '';
    
    const t = translations[currentLang];
    
    const fullMenuText = `Hello Deepika Pickles! I would like to place an order. Here is my list, please let me know the total price:

*VEG PICKLES:*
[ ] Mango Pickle (Avakaya) - ₹650/kg
[ ] Tomato Pickle - ₹600/kg
[ ] Gongura Pickle - ₹600/kg
[ ] Pudina (Mint) Pickle - ₹600/kg
[ ] Gooseberry Pickle - ₹600/kg
[ ] Mixed Veg Pickle - ₹600/kg
[ ] Red Chilli Pickle - ₹600/kg
[ ] Gongura Red Chilli - ₹600/kg
[ ] Drumstick Pickle - ₹600/kg
[ ] Lemon Pickle - ₹600/kg
[ ] Brinjal Pickle - ₹600/kg
[ ] Ginger Pickle - ₹600/kg

*NON-VEG PICKLES:*
[ ] Chicken Bone Pickle - ₹900/kg
[ ] Chicken Boneless Pickle - ₹1200/kg
[ ] Mutton Bone Pickle - ₹1400/kg
[ ] Mutton Boneless Pickle - ₹1600/kg
[ ] Fish Bone Pickle - ₹1200/kg
[ ] Fish Boneless Pickle - ₹1600/kg
[ ] Prawns Pickle - ₹1600/kg

My Name: 
Delivery Address: `;
    
    const waUrl = `https://wa.me/919652286824?text=${encodeURIComponent(fullMenuText)}`;
    
    setTimeout(() => {
      if (action === 'start_order') {
        appendAiMessage(t.chat_response_yes);
        setTimeout(() => {
          renderOptions([
            { label: t.chat_btn_whatsapp, type: 'whatsapp', url: waUrl },
            { label: t.chat_btn_back, action: 'back_to_main' }
          ]);
        }, 800);

      } else if (action === 'just_looking') {
        appendAiMessage(t.chat_response_no);
        setTimeout(() => {
          appendAiMessage(t.chat_anything_else);
          renderOptions([
            { label: t.chat_btn_menu, action: 'view_menu' },
            { label: t.chat_btn_bestseller, action: 'best_sellers' },
            { label: t.chat_btn_restart, action: 'restart' }
          ]);
        }, 1000);

      } else if (action === 'view_menu') {
        appendAiMessage(t.chat_menu_ask);
        setTimeout(() => {
          renderOptions([
            { label: t.chat_btn_veg, action: 'show_veg' },
            { label: t.chat_btn_nonveg, action: 'show_nonveg' },
            { label: t.chat_btn_all, action: 'show_all' },
            { label: t.chat_btn_back, action: 'back_to_main' }
          ]);
        }, 600);

      } else if (action === 'show_veg') {
        appendAiMessage(t.chat_veg_list);
        setTimeout(() => {
          appendAiMessage(t.chat_menu_followup);
          renderOptions([
            { label: t.chat_btn_order_now, action: 'start_order' },
            { label: t.chat_btn_nonveg, action: 'show_nonveg' },
            { label: t.chat_btn_back, action: 'back_to_main' }
          ]);
        }, 1000);

      } else if (action === 'show_nonveg') {
        appendAiMessage(t.chat_nonveg_list);
        setTimeout(() => {
          appendAiMessage(t.chat_menu_followup);
          renderOptions([
            { label: t.chat_btn_order_now, action: 'start_order' },
            { label: t.chat_btn_veg, action: 'show_veg' },
            { label: t.chat_btn_back, action: 'back_to_main' }
          ]);
        }, 1000);

      } else if (action === 'show_all') {
        appendAiMessage(t.chat_veg_list);
        setTimeout(() => {
          appendAiMessage(t.chat_nonveg_list);
          setTimeout(() => {
            appendAiMessage(t.chat_menu_followup);
            renderOptions([
              { label: t.chat_btn_order_now, action: 'start_order' },
              { label: t.chat_btn_back, action: 'back_to_main' }
            ]);
          }, 800);
        }, 800);

      } else if (action === 'delivery_info') {
        appendAiMessage(t.chat_delivery_info);
        setTimeout(() => {
          appendAiMessage(t.chat_anything_else);
          renderOptions([
            { label: t.chat_btn_order_now, action: 'start_order' },
            { label: t.chat_btn_menu, action: 'view_menu' },
            { label: t.chat_btn_back, action: 'back_to_main' }
          ]);
        }, 1000);

      } else if (action === 'best_sellers') {
        appendAiMessage(t.chat_bestseller_info);
        setTimeout(() => {
          appendAiMessage(t.chat_anything_else);
          renderOptions([
            { label: t.chat_btn_order_now, action: 'start_order' },
            { label: t.chat_btn_menu, action: 'view_menu' },
            { label: t.chat_btn_back, action: 'back_to_main' }
          ]);
        }, 1000);

      } else if (action === 'back_to_main' || action === 'restart') {
        appendAiMessage(t.chat_ask_order);
        setTimeout(() => {
          renderOptions([
            { label: t.chat_btn_yes, action: 'start_order' },
            { label: t.chat_btn_menu, action: 'view_menu' },
            { label: t.chat_btn_delivery, action: 'delivery_info' },
            { label: t.chat_btn_bestseller, action: 'best_sellers' },
            { label: t.chat_btn_no, action: 'just_looking' }
          ]);
        }, 600);
      }
    }, 600);
  }

  function initChat() {
    if (chatState === 0) {
      setTimeout(() => {
        appendAiMessage(translations[currentLang].chat_greeting);
      }, 300);
      
      setTimeout(() => {
        const t = translations[currentLang];
        appendAiMessage(t.chat_ask_order);
        renderOptions([
          { label: t.chat_btn_yes, action: 'start_order' },
          { label: t.chat_btn_menu, action: 'view_menu' },
          { label: t.chat_btn_delivery, action: 'delivery_info' },
          { label: t.chat_btn_bestseller, action: 'best_sellers' },
          { label: t.chat_btn_no, action: 'just_looking' }
        ]);
        chatState = 1;
      }, 1200);
    }
  }

  if (aiChatBtn) {
    aiChatBtn.addEventListener('click', () => {
      aiChatWidget.classList.add('open');
      aiChatWidget.setAttribute('aria-hidden', 'false');
      initChat();
    });
  }

  if (aiChatClose) {
    aiChatClose.addEventListener('click', () => {
      aiChatWidget.classList.remove('open');
      aiChatWidget.setAttribute('aria-hidden', 'true');
    });
  }

});
