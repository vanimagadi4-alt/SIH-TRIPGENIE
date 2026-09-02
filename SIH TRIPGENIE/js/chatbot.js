/**
 * TRIP GENIE - AI TRAVEL COPILOT (GENIE AI)
 * Handles Natural Conversational Queries, Predefined Intelligent Responses,
 * Itinerary Generation, Packing Suggestions, and Typing Indicators.
 */

const GenieChatbot = {
  isOpen: false,
  isTyping: false,
  chatHistory: [],

  // Predefined Knowledge Base
  knowledgeBase: {
    'goa': {
      title: '✨ 3-Day Ultimate Goa Trip Plan',
      text: `Here is your curated 3-day beach & culture itinerary for Goa:

📍 **Day 1: North Beaches & Vibrant Nightlife**
• Morning: Arrive & check in at Calangute/Baga
• Afternoon: Relax at Baga Beach, water sports & beach shacks
• Evening: Sunset at Anjuna & Tito's Lane nightlife
• Dinner: Fresh seafood at Coastal Spice Shack

📍 **Day 2: Historic Portuguese Heritage & Forts**
• Morning: Explore Fort Aguada & historic lighthouse
• Afternoon: UNESCO Heritage Churches in Old Goa (Basilica of Bom Jesus)
• Evening: Mandovi River Sunset Cruise with Goan folk dance
• Dinner: Traditional Goan Fish Curry & Bebinca

📍 **Day 3: Serene South Goa & Spice Plantations**
• Morning: Visit Sahakari Spice Farm with traditional buffet lunch
• Afternoon: Peaceful vibes at Palolem & Colva Beach
• Evening: Souvenir shopping at Panjim Latin Quarter (Fontainhas)

💰 **Estimated Budget:** ₹10,000 – ₹15,000 per person (including stay & local travel).`,
      actions: [{ label: 'Book Goa Flight (₹4,299)', url: 'pages/services.html#travel' }, { label: 'Explore Stays in Goa', url: 'pages/services.html#stays' }]
    },

    'manali': {
      title: '🏔️ 4-Day Manali & Solang Valley Adventure',
      text: `Here is your thrilling Himalayan getaway itinerary:

📍 **Day 1: Arrival & Old Manali Cafes**
• Check in at Pine Cliff Villa, visit Hadimba Devi Temple & Mall Road shopping.

📍 **Day 2: Solang Valley Snow & Adventure**
• Paragliding, Zorbing, and scenic ATV rides in Solang Valley.

📍 **Day 3: Rohtang Pass / Atal Tunnel & Sissu**
• Drive through world-famous Atal Tunnel into snow-capped Lahaul Valley.

📍 **Day 4: Vashisht Hot Springs & Departure**
• Dip in natural sulfur hot springs & buy warm Kullu shawls.

💰 **Estimated Budget:** ₹12,000 – ₹18,000 per person.`,
      actions: [{ label: 'View Manali Villas', url: 'pages/services.html#stays' }]
    },

    'kerala': {
      title: '🌴 4-Day God\'s Own Country - Kerala Backwaters',
      text: `A peaceful rejuvenating journey through misty hills and backwaters:

📍 **Day 1-2: Munnar Tea Hills**
• Walk through sprawling tea plantations, visit Mattupetty Dam & Eravikulam National Park.

📍 **Day 3: Alleppey Luxury Houseboat Cruise**
• Cruise through serene palm-fringed canals with traditional Karimeen Pollichathu meal.

📍 **Day 4: Kochi Heritage & Chinese Fishing Nets**
• Explore Fort Kochi, spice markets, and Kathakali cultural performances.

💰 **Estimated Budget:** ₹14,000 – ₹20,000 per person.`,
      actions: [{ label: 'Explore Kerala Packages', url: 'pages/explore.html?dest=dest-kerala' }]
    },

    'mysore': {
      title: '🏰 3-Day Mysore Royal Karnataka Itinerary',
      text: `Here is a culture-rich Mysore plan with relaxed local travel:\n\n📍 **Day 1: Royal Mysore**\n• Check in near the city centre, explore Mysore Palace and the illuminated palace evening view.\n• Dinner: Mysore masala dosa and traditional Karnataka thali.\n\n📍 **Day 2: Hills, Markets & Heritage**\n• Sunrise at Chamundi Hills, then Devaraja Market and St. Philomena's Church.\n• Evening: Karanji Lake nature walk and local handicraft shopping.\n\n📍 **Day 3: Gardens & Srirangapatna**\n• Visit Brindavan Gardens and the historic Srirangapatna island.\n• Keep a flexible evening for sandalwood, silk, and coffee souvenirs.\n\n💰 **Estimated Budget:** ₹7,000 – ₹12,000 per person for 3 days.\n🛡️ **Safety tip:** Use registered autos or app cabs and keep valuables secure in busy markets.`,
      actions: [{ label: 'Explore Mysore', url: 'pages/explore.html?dest=dest-mysore' }, { label: 'Find Karnataka Stays', url: 'pages/services.html#stays' }]
    },

    'pack': {
      title: '🎒 Genie Smart Travel Packing Checklist',
      text: `Based on standard Indian travel destinations:

✅ **Documents & Essentials:**
• Government ID (Aadhaar / Passport / Driving License)
• Digital Boarding Passes & Hotel Confirmations on TRIP GENIE
• Portable Power Bank (10,000mAh+) & Universal Multi-plug
• Offline Maps downloaded in TRIP GENIE

✅ **Clothing & Comfort:**
• 3-4 Breathable cotton outfits / Layered thermals (for hills)
• Comfortable walking shoes + waterproof sandals
• UV Protection Sunglasses & SPF 50+ Sunscreen

✅ **Health & Safety:**
• Personal first-aid kit (Paracetamol, ORS, band-aids, motion sickness pills)
• Sanitizer & Mosquito repellent cream`,
      actions: []
    },

    'budget': {
      title: '💡 Genie Travel Budget Estimator & Money Hacks',
      text: `Here is how to travel smart and maximize savings:

1. **Book Flights Mid-Week:** Tuesdays and Wednesdays offer up to 20% lower airfares.
2. **Use TRIP PAY Wallet:** Earn instant cashback rewards on every booking.
3. **Opt for Genie Homestays:** Save up to 40% compared to luxury hotels while enjoying home-cooked regional meals.
4. **Offline GPS Navigation:** Use TRIP MAP offline mode to save mobile data battery when roaming.`,
      actions: [{ label: 'Check TRIP PAY Cashback', url: 'pages/services.html#pay' }]
    },

    'emergency': {
      title: '🚨 Emergency Quick Assistance',
      text: `If you are in immediate danger or need urgent help:

🆘 **Instant Help:** Press the red **SOS** button in the top navigation bar to trigger emergency broadcast and location sharing.
📞 **National Emergency Helpline:** 112
👮 **Police:** 100 | 🚑 **Ambulance:** 108 | 🛡️ **Women Safety:** 1091
🏥 **Nearby Hospital Radar:** Available in TRIP MAP.`,
      actions: [{ label: 'Open Emergency SOS Hub', url: 'pages/emergency.html' }]
    },

    'default': {
      title: '🧞 Genie AI Assistant',
      text: `I'm your 24/7 AI Travel Assistant! I can help you:
• Plan custom itineraries for any Indian or global destination
• Recommend top hotels, homestays, and local food spots
• Suggest packing checklists tailored to your destination weather
• Provide emergency safety guidance and offline travel tips

What would you like to explore next?`,
      actions: []
    }
  },

  init() {
    this.bindEvents();
    // Render initial message if empty
    const container = document.getElementById('chatMessages');
    if (container && container.children.length === 0) {
      this.addBotMessage("✨ Namaste & Hello! I'm your **Genie AI** Travel Copilot. Where would you like to travel today? Or ask me to plan an itinerary!");
    }
  },

  bindEvents() {
    const toggleBtn = document.getElementById('floatingGenieBtn');
    const closeBtn = document.getElementById('chatCloseBtn');
    const sendBtn = document.getElementById('chatSendBtn');
    const input = document.getElementById('chatInput');

    if (toggleBtn) {
      toggleBtn.onclick = () => this.toggleChat();
    }
    if (closeBtn) {
      closeBtn.onclick = () => this.toggleChat(false);
    }
    if (sendBtn && input) {
      sendBtn.onclick = () => this.handleUserSend();
      input.onkeypress = (e) => {
        if (e.key === 'Enter') this.handleUserSend();
      };
    }
  },

  toggleChat(forceState = null) {
    const windowEl = document.getElementById('genieChatWindow');
    if (!windowEl) return;

    this.isOpen = forceState !== null ? forceState : !this.isOpen;
    if (this.isOpen) {
      windowEl.classList.add('active');
      const input = document.getElementById('chatInput');
      if (input) setTimeout(() => input.focus(), 150);
    } else {
      windowEl.classList.remove('active');
    }
  },

  handleUserSend() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text || this.isTyping) return;

    // Add user message
    this.addUserMessage(text);
    input.value = '';

    // Simulate AI response
    this.processBotResponse(text);
  },

  sendQuickPrompt(promptText) {
    if (this.isTyping) return;
    this.addUserMessage(promptText);
    this.processBotResponse(promptText);
  },

  addUserMessage(text) {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    const div = document.createElement('div');
    div.className = 'chat-msg chat-msg-user';
    div.textContent = text;
    container.appendChild(div);
    this.scrollToBottom();
  },

  addBotMessage(text, actions = []) {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    const div = document.createElement('div');
    div.className = 'chat-msg chat-msg-bot';
    
    // Convert basic markdown like **bold** and newlines
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');

    let actionsHtml = '';
    if (actions && actions.length > 0) {
      actionsHtml = `
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:10px;">
          ${actions.map(a => `<a href="${a.url}" class="btn btn-sm btn-primary" style="font-size:0.75rem; padding:4px 10px;">${a.label}</a>`).join('')}
        </div>
      `;
    }

    div.innerHTML = formatted + actionsHtml;
    container.appendChild(div);
    this.scrollToBottom();
  },

  showTypingIndicator() {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    const div = document.createElement('div');
    div.id = 'chatTypingIndicator';
    div.className = 'chat-msg chat-msg-bot typing-indicator';
    div.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    container.appendChild(div);
    this.scrollToBottom();
    this.isTyping = true;
  },

  removeTypingIndicator() {
    const indicator = document.getElementById('chatTypingIndicator');
    if (indicator) indicator.remove();
    this.isTyping = false;
  },

  processBotResponse(query) {
    this.showTypingIndicator();
    const lower = query.toLowerCase();

    // Determine response
    let responseObj = this.knowledgeBase.default;

    if (lower.includes('goa')) {
      responseObj = this.knowledgeBase.goa;
    } else if (lower.includes('manali') || lower.includes('snow') || lower.includes('mountain') || lower.includes('himachal')) {
      responseObj = this.knowledgeBase.manali;
    } else if (lower.includes('kerala') || lower.includes('backwater') || lower.includes('houseboat')) {
      responseObj = this.knowledgeBase.kerala;
    } else if (lower.includes('mysore') || lower.includes('mysuru') || lower.includes('karnataka') || lower.includes('chamundi')) {
      responseObj = this.knowledgeBase.mysore;
    } else if (lower.includes('pack') || lower.includes('luggage') || lower.includes('clothes') || lower.includes('what to bring')) {
      responseObj = this.knowledgeBase.pack;
    } else if (lower.includes('budget') || lower.includes('cost') || lower.includes('money') || lower.includes('save') || lower.includes('cheap')) {
      responseObj = this.knowledgeBase.budget;
    } else if (lower.includes('emergency') || lower.includes('help') || lower.includes('sos') || lower.includes('police') || lower.includes('doctor')) {
      responseObj = this.knowledgeBase.emergency;
    } else if (lower.includes('hotel') || lower.includes('stay') || lower.includes('resort')) {
      responseObj = {
        title: '🏨 Best Stays Recommended by Genie',
        text: `I've found top-rated stays matching your preferences:\n\n• **Ocean Pearl Beach Resort (Goa)** — ⭐ 4.8 | ₹3,499/night (Pool, Beach Access)\n• **Pine Cliff Luxury Villa (Manali)** — ⭐ 4.9 | ₹5,299/night (Mountain View)\n• **Emerald Palm Homestay (Kerala)** — ⭐ 4.9 | ₹2,499/night (Backwater canal)`,
        actions: [{ label: 'Explore Stays Hub', url: 'pages/services.html#stays' }]
      };
    } else if (lower.includes('food') || lower.includes('restaurant') || lower.includes('eat') || lower.includes('dinner')) {
      responseObj = {
        title: '🍜 Top Local Dining Recommendations',
        text: `Here are the highest rated food spots near popular destinations:\n\n• **Coastal Spice (Goa):** Goan Prawn Curry & Garlic Crab (⭐ 4.8)\n• **Royal Biryani Hub:** Hyderabadi Dum Biryani & Galouti Kebabs (⭐ 4.7)\n• **Green Oasis:** Authentic Filter Coffee & Ghee Masala Dosa (⭐ 4.9)`,
        actions: [{ label: 'Order Food with TRIP FOOD', url: 'pages/services.html#food' }]
      };
    }

    // Delay for realistic typing experience
    setTimeout(() => {
      this.removeTypingIndicator();
      this.addBotMessage(responseObj.text, responseObj.actions);
    }, 1100);
  },

  scrollToBottom() {
    const container = document.getElementById('chatMessages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
};

window.GenieChatbot = GenieChatbot;

document.addEventListener('DOMContentLoaded', () => {
  GenieChatbot.init();
});
