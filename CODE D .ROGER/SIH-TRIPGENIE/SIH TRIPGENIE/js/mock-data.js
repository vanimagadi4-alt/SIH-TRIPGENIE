/**
 * TRIP GENIE - COMPREHENSIVE MOCK DATASET
 * Contains rich datasets for all super-app modules
 */

const TRIP_GENIE_DATA = {
  // 1. Popular Destinations
  destinations: [
    {
      id: 'dest-goa',
      name: 'Goa',
      category: 'Beaches',
      rating: 4.8,
      reviews: 14200,
      description: 'Sun-kissed golden beaches, Portuguese heritage churches, vibrant nightlife, and mouth-watering seafood.',
      startingPrice: 4299,
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
      tag: 'Most Popular',
      state: 'Goa, India',
      bestTime: 'Nov - Feb',
      highlights: ['Baga Beach', 'Fort Aguada', 'Old Goa Churches', 'Dudhsagar Falls']
    },
    {
      id: 'dest-manali',
      name: 'Manali',
      category: 'Mountains',
      rating: 4.9,
      reviews: 9840,
      description: 'Snow-capped Himalayan peaks, roaring river valleys, paragliding adventures, and serene pine forests.',
      startingPrice: 5999,
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
      tag: 'Adventure Hub',
      state: 'Himachal Pradesh, India',
      bestTime: 'Oct - Jun',
      highlights: ['Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Old Manali Cafes']
    },
    {
      id: 'dest-kerala',
      name: 'Kerala Backwaters',
      category: 'Family',
      rating: 4.8,
      reviews: 11500,
      description: 'Tranquil emerald backwaters, luxurious houseboats, spice plantations, and Ayurvedic wellness retreats.',
      startingPrice: 6499,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=80',
      tag: "God's Own Country",
      state: 'Kerala, India',
      bestTime: 'Sep - Mar',
      highlights: ['Alleppey Houseboats', 'Munnar Tea Gardens', 'Kovalam Beach', 'Periyar Wildlife']
    },
    {
      id: 'dest-jaipur',
      name: 'Jaipur Pink City',
      category: 'Historical',
      rating: 4.7,
      reviews: 12800,
      description: 'Magnificent royal palaces, towering historic forts, bustling bazaars, and rich Rajputana grandeur.',
      startingPrice: 3499,
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&auto=format&fit=crop&q=80',
      tag: 'Heritage Marvel',
      state: 'Rajasthan, India',
      bestTime: 'Oct - Mar',
      highlights: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Nahargarh Fort']
    },
    {
      id: 'dest-mysore',
      name: 'Mysore',
      category: 'Heritage',
      rating: 4.8,
      reviews: 10800,
      description: 'Royal palaces, sandalwood markets, heritage walks, and the glowing lights of Mysore Palace.',
      startingPrice: 3299,
      image: 'https://images.unsplash.com/photo-1600112356915-089abb8fc3a3?w=800&auto=format&fit=crop&q=80',
      tag: 'Royal Karnataka',
      state: 'Karnataka, India',
      bestTime: 'Oct - Feb',
      highlights: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens', 'Devaraja Market']
    },
    {
      id: 'dest-mumbai',
      name: 'Mumbai',
      category: 'City Life',
      rating: 4.7,
      reviews: 16400,
      description: 'Sea-facing promenades, iconic architecture, street food, arts, and the energy of India’s city of dreams.',
      startingPrice: 2999,
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop&q=80',
      tag: 'City Explorer',
      state: 'Maharashtra, India',
      bestTime: 'Oct - Feb',
      highlights: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Colaba Causeway']
    },
    {
      id: 'dest-hyderabad',
      name: 'Hyderabad',
      category: 'Food & Culture',
      rating: 4.7,
      reviews: 9300,
      description: 'Historic forts, Charminar lanes, biryani trails, pearls, and a lively modern tech culture.',
      startingPrice: 2799,
      image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=800&auto=format&fit=crop&q=80',
      tag: 'Food Capital',
      state: 'Telangana, India',
      bestTime: 'Oct - Feb',
      highlights: ['Charminar', 'Golconda Fort', 'Hussain Sagar', 'Biryani Trail']
    },
    {
      id: 'dest-kashmir',
      name: 'Kashmir Valley',
      category: 'Romantic',
      rating: 4.9,
      reviews: 8600,
      description: 'Paradise on earth with mirror-like Dal Lake, traditional Shikaras, Mughal gardens, and snow slopes in Gulmarg.',
      startingPrice: 8999,
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&auto=format&fit=crop&q=80',
      tag: 'Paradise on Earth',
      state: 'Jammu & Kashmir, India',
      bestTime: 'Year Round',
      highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Sonamarg']
    },
    {
      id: 'dest-andaman',
      name: 'Andaman Islands',
      category: 'Adventure',
      rating: 4.9,
      reviews: 6700,
      description: 'Crystal turquoise waters, coral reefs, scuba diving, and white sandy beaches secluded in the Indian Ocean.',
      startingPrice: 12999,
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop&q=80',
      tag: 'Tropical Escape',
      state: 'Andaman & Nicobar Islands',
      bestTime: 'Oct - May',
      highlights: ['Radhanagar Beach', 'Scuba Diving Havelock', 'Cellular Jail', 'Elephant Beach']
    },
    {
      id: 'dest-varanasi',
      name: 'Varanasi',
      category: 'Historical',
      rating: 4.8,
      reviews: 15400,
      description: 'The spiritual capital of India on the sacred banks of Ganga, illuminated by mesmerizing evening Maha Aarti.',
      startingPrice: 2799,
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop&q=80',
      tag: 'Spiritual Capital',
      state: 'Uttar Pradesh, India',
      bestTime: 'Oct - Mar',
      highlights: ['Dashashwamedh Ghat Aarti', 'Kashi Vishwanath', 'Sunrise Boat Ride', 'Sarnath']
    },
    {
      id: 'dest-ladakh',
      name: 'Leh Ladakh',
      category: 'Adventure',
      rating: 4.9,
      reviews: 7900,
      description: 'High-altitude mountain passes, azure Pangong Lake, ancient Buddhist monasteries, and thrilling road trips.',
      startingPrice: 14500,
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800&auto=format&fit=crop&q=80',
      tag: 'Land of High Passes',
      state: 'Ladakh, India',
      bestTime: 'May - Sep',
      highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Thiksey Monastery']
    }
  ],

  // 2. Flights Mock Data
  flights: [
    {
      id: 'FL-601',
      airline: 'IndiGo Airlines',
      flightNumber: '6E-2044',
      logo: '✈️',
      fromCode: 'DEL',
      fromCity: 'New Delhi',
      toCode: 'GOI',
      toCity: 'Goa',
      departureTime: '06:30',
      arrivalTime: '09:05',
      duration: '2h 35m',
      stops: 'Non-stop',
      price: 4299,
      seatsLeft: 4,
      baggage: '15 kg Check-in, 7 kg Cabin'
    },
    {
      id: 'FL-602',
      airline: 'Air India',
      flightNumber: 'AI-883',
      logo: '🇮🇳',
      fromCode: 'BOM',
      fromCity: 'Mumbai',
      toCode: 'GOI',
      toCity: 'Goa',
      departureTime: '08:15',
      arrivalTime: '09:30',
      duration: '1h 15m',
      stops: 'Non-stop',
      price: 3199,
      seatsLeft: 7,
      baggage: '25 kg Check-in, 7 kg Cabin'
    },
    {
      id: 'FL-603',
      airline: 'Vistara',
      flightNumber: 'UK-921',
      logo: '✨',
      fromCode: 'BLR',
      fromCity: 'Bengaluru',
      toCode: 'COK',
      toCity: 'Kochi (Kerala)',
      departureTime: '11:00',
      arrivalTime: '12:15',
      duration: '1h 15m',
      stops: 'Non-stop',
      price: 3699,
      seatsLeft: 5,
      baggage: '15 kg Check-in, 7 kg Cabin'
    },
    {
      id: 'FL-604',
      airline: 'Akasa Air',
      flightNumber: 'QP-1352',
      logo: '⚡',
      fromCode: 'MAA',
      fromCity: 'Chennai',
      toCode: 'GOI',
      toCity: 'Goa',
      departureTime: '14:20',
      arrivalTime: '16:00',
      duration: '1h 40m',
      stops: 'Non-stop',
      price: 3899,
      seatsLeft: 9,
      baggage: '15 kg Check-in, 7 kg Cabin'
    }
  ],

  // 3. Stays / Hotels Mock Data
  stays: [
    {
      id: 'stay-1',
      name: 'Ocean Pearl Luxury Beach Resort',
      category: 'Resorts',
      location: 'Calangute Beach, Goa',
      rating: 4.8,
      reviews: 840,
      pricePerNight: 3499,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      amenities: ['Free High-Speed Wi-Fi', 'Infinity Pool', 'Complimentary Breakfast', 'Private Beach Access', 'Spa & Wellness', 'Free Valet Parking'],
      tag: 'Best Seller'
    },
    {
      id: 'stay-2',
      name: 'Himalayan Pine Cliff Villa',
      category: 'Villas',
      location: 'Old Manali, Himachal Pradesh',
      rating: 4.9,
      reviews: 520,
      pricePerNight: 5299,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
      amenities: ['Mountain View Balcony', 'Bonfire & BBQ', 'Kitchenette', 'Heated Rooms', 'Wi-Fi', 'Pet Friendly'],
      tag: 'Superhost'
    },
    {
      id: 'stay-3',
      name: 'Heritage Haveli & Boutique Palace',
      category: 'Hotels',
      location: 'Old City, Jaipur',
      rating: 4.7,
      reviews: 690,
      pricePerNight: 2899,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80',
      amenities: ['Rooftop Restaurant', 'Heritage Courtyard', 'Cultural Folk Show', 'Wi-Fi', 'Swimming Pool'],
      tag: 'Heritage Living'
    },
    {
      id: 'stay-4',
      name: 'Emerald Palm Backwater Homestay',
      category: 'Homestays',
      location: 'Alleppey, Kerala',
      rating: 4.9,
      reviews: 410,
      pricePerNight: 2499,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
      amenities: ['Canal View', 'Authentic Kerala Meals', 'Shikara Boat Rides', 'Village Walk Tour', 'Free Wi-Fi'],
      tag: 'Eco Friendly'
    }
  ],

  // 4. Rides Mock Data
  rides: [
    {
      type: 'bike',
      name: 'Genie Bike',
      icon: '🏍️',
      eta: '2 mins away',
      capacity: '1 person',
      fare: 89,
      distance: '4.2 km',
      description: 'Beat the traffic, super fast & economical'
    },
    {
      type: 'auto',
      name: 'Genie Auto',
      icon: '🛺',
      eta: '3 mins away',
      capacity: '3 persons',
      fare: 129,
      distance: '4.2 km',
      description: 'Pocket-friendly local auto with digital meter'
    },
    {
      type: 'mini',
      name: 'Genie Mini',
      icon: '🚕',
      eta: '4 mins away',
      capacity: '4 persons',
      fare: 179,
      distance: '4.2 km',
      description: 'Affordable compact AC hatchback rides'
    },
    {
      type: 'sedan',
      name: 'Genie Prime Sedan',
      icon: '🚘',
      eta: '5 mins away',
      capacity: '4 persons',
      fare: 249,
      distance: '4.2 km',
      description: 'Top-rated drivers with spacious legroom & Wi-Fi'
    },
    {
      type: 'suv',
      name: 'Genie Prime SUV',
      icon: '🚙',
      eta: '6 mins away',
      capacity: '6 persons',
      fare: 399,
      distance: '4.2 km',
      description: 'Extra luggage room & luxury seats for groups'
    }
  ],

  // Mock Drivers
  mockDrivers: [
    { name: 'Ramesh Sharma', rating: 4.9, trips: 3420, vehicle: 'Maruti Dzire (Silver)', plate: 'GA-03-AB-4921', phone: '+91 98765 43210' },
    { name: 'Praveen Kumar', rating: 4.8, trips: 2180, vehicle: 'Hyundai i20 (White)', plate: 'GA-07-K-8812', phone: '+91 98123 45678' },
    { name: 'Sandeep Naik', rating: 4.9, trips: 4100, vehicle: 'Toyota Innova (Black)', plate: 'GA-01-X-1940', phone: '+91 98456 78901' }
  ],

  // 5. Food Discovery Mock Data
  restaurants: [
    {
      id: 'rest-1',
      name: 'Coastal Spice Beach Shack',
      cuisine: 'Goan • Seafood • Coastal',
      rating: 4.8,
      deliveryTime: '25 min',
      priceRange: '₹₹',
      location: 'Baga Road, Goa',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
      menu: [
        { id: 'f1', name: 'Goan Prawn Curry with Steamed Rice', price: 380, isVeg: false, tag: 'Bestseller' },
        { id: 'f2', name: 'Butter Garlic Crab', price: 540, isVeg: false, tag: 'Chef Special' },
        { id: 'f3', name: 'Goan Fish Thali', price: 290, isVeg: false, tag: 'Popular' },
        { id: 'f4', name: 'Bebinca Traditional Dessert', price: 160, isVeg: true, tag: 'Sweet' }
      ]
    },
    {
      id: 'rest-2',
      name: 'Royal Heritage Biryani Hub',
      cuisine: 'Hyderabadi • Mughlai • Kebabs',
      rating: 4.7,
      deliveryTime: '30 min',
      priceRange: '₹₹',
      location: 'Heritage Lane',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
      menu: [
        { id: 'f5', name: 'Hyderabadi Dum Chicken Biryani', price: 320, isVeg: false, tag: 'Must Try' },
        { id: 'f6', name: 'Mutton Galouti Kebab (4 pcs)', price: 380, isVeg: false, tag: 'Rich' },
        { id: 'f7', name: 'Paneer Tikka Biryani', price: 280, isVeg: true, tag: 'Veg Special' },
        { id: 'f8', name: 'Double Ka Meetha', price: 140, isVeg: true, tag: 'Dessert' }
      ]
    },
    {
      id: 'rest-3',
      name: 'Green Oasis Pure Veg & South Delights',
      cuisine: 'South Indian • Dosa • Thali',
      rating: 4.9,
      deliveryTime: '20 min',
      priceRange: '₹',
      location: 'Station Road',
      image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800&auto=format&fit=crop&q=80',
      menu: [
        { id: 'f9', name: 'Ghee Podi Masala Dosa', price: 160, isVeg: true, tag: 'Signature' },
        { id: 'f10', name: 'Grand South Indian Thali', price: 220, isVeg: true, tag: 'Filling' },
        { id: 'f11', name: 'Steamed Button Idlis (4 pcs)', price: 90, isVeg: true, tag: 'Healthy' },
        { id: 'f12', name: 'Filter Coffee Traditional Brass Pot', price: 60, isVeg: true, tag: 'Iconic' }
      ]
    }
  ],

  // 6. Movies & Events Mock Data
  entertainment: [
    {
      id: 'mov-1',
      title: 'Starlight: Beyond Earth (3D IMAX)',
      type: 'movie',
      language: 'English, Hindi, Tamil',
      genre: 'Sci-Fi • Adventure • Action',
      rating: 4.7,
      duration: '2h 45m',
      poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80',
      showtimes: ['11:30 AM', '02:45 PM', '06:15 PM', '09:45 PM'],
      venue: 'CineGenie IMAX Screen 1',
      silverPrice: 220,
      goldPrice: 340,
      reclinerPrice: 550
    },
    {
      id: 'mov-2',
      title: 'Sunburn Goa Sunset Music Festival',
      type: 'concert',
      language: 'Live Music',
      genre: 'EDM • Cultural • Live DJ',
      rating: 4.9,
      duration: '6 Hours',
      poster: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80',
      showtimes: ['04:00 PM', '07:30 PM'],
      venue: 'Vagator Beach Arena, Goa',
      silverPrice: 999,
      goldPrice: 1999,
      reclinerPrice: 3499
    },
    {
      id: 'mov-3',
      title: 'Rajasthan Royal Folk Dance & Puppet Gala',
      type: 'event',
      language: 'Hindi, Rajasthani',
      genre: 'Traditional • Cultural • Family',
      rating: 4.8,
      duration: '2 Hours',
      poster: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80',
      showtimes: ['06:30 PM', '08:45 PM'],
      venue: 'Bagore Ki Haveli Amphitheatre',
      silverPrice: 250,
      goldPrice: 450,
      reclinerPrice: 700
    }
  ],

  // 7. Offline Mesh Network Peers (Trip Connect)
  meshPeers: [
    { id: 'peer-1', name: 'Rahul Sharma', distance: '12m away', signal: 95, status: 'Connected', avatar: '👨‍💼', lastSeen: 'Just now' },
    { id: 'peer-2', name: 'Priya Patel', distance: '28m away', signal: 82, status: 'Connected', avatar: '👩‍⚕️', lastSeen: '1m ago' },
    { id: 'peer-3', name: 'Arjun Das', distance: '45m away', signal: 65, status: 'Connected', avatar: '👨‍🎨', lastSeen: '3m ago' },
    { id: 'peer-4', name: 'Sneha Roy', distance: '85m away', signal: 40, status: 'Connecting...', avatar: '👩‍💻', lastSeen: '5m ago' },
    { id: 'peer-5', name: 'Vikram Singh', distance: '120m away', signal: 25, status: 'Nearby Signal', avatar: '🧗‍♂️', lastSeen: '8m ago' }
  ],

  // 8. Travel Insurance Plans (Trip Protect)
  insurancePlans: [
    {
      id: 'ins-gold',
      name: 'TRIP GENIE TRAVEL PROTECT - GOLD',
      coverageAmount: 500000,
      price: 299,
      status: 'Active',
      policyNo: 'TG-INS-2026-8849102',
      validTill: '31 Dec 2026',
      benefits: [
        'Emergency Medical Hospitalization up to ₹5,00,000',
        'Trip Cancellation & Delay Reimbursement up to ₹25,000',
        'Lost Checked-in Baggage Cover up to ₹30,000',
        '24x7 Emergency Evacuation Assistance',
        'Zero Deductibles on Medical Claims'
      ]
    },
    {
      id: 'ins-platinum',
      name: 'TRIP GENIE SHIELD PLATINUM PLUS',
      coverageAmount: 1500000,
      price: 699,
      status: 'Available',
      policyNo: 'TG-INS-PLAT-9021',
      validTill: '1 Year Full Protection',
      benefits: [
        'High Altitude & Adventure Sports Injury Cover',
        'International Medical Evacuation up to ₹15,00,000',
        'Emergency Cash Advance & Flight Rescheduling',
        'Home Burglary Insurance during Travel',
        'Dedicated VIP Claim Concierge'
      ]
    }
  ],

  // 9. Initial Mock Transactions for TRIP PAY
  initialTransactions: [
    { id: 'TXN-9841', title: 'IndiGo Flight to Goa (DEL → GOI)', category: 'Travel', date: '02 Sep 2026, 09:30 AM', amount: -4299, status: 'Success', icon: '✈️' },
    { id: 'TXN-9840', title: 'Ocean Pearl Luxury Resort Advance', category: 'Hotel', date: '01 Sep 2026, 04:15 PM', amount: -3499, status: 'Success', icon: '🏨' },
    { id: 'TXN-9839', title: 'Coastal Spice Goan Dinner', category: 'Food', date: '01 Sep 2026, 08:45 PM', amount: -620, status: 'Success', icon: '🍜' },
    { id: 'TXN-9838', title: 'Genie Prime Cab Ride (Airport to Hotel)', category: 'Rides', date: '01 Sep 2026, 10:20 AM', amount: -249, status: 'Success', icon: '🚕' },
    { id: 'TXN-9837', title: 'Added to Trip Genie Wallet (UPI)', category: 'Wallet Top-up', date: '30 Aug 2026, 02:00 PM', amount: 15000, status: 'Success', icon: '💳' }
  ],

  // 10. Initial Bookings List
  initialBookings: [
    {
      id: 'TG-BK-7701',
      serviceType: 'Flights',
      title: 'Delhi (DEL) → Goa (GOI)',
      provider: 'IndiGo 6E-2044',
      date: '15 Oct 2026',
      time: '06:30 AM',
      passengers: '2 Adults',
      price: 4299,
      status: 'Confirmed',
      seat: '12A, 12B',
      gate: 'Terminal 3, Gate 14'
    },
    {
      id: 'TG-BK-7702',
      serviceType: 'Hotels',
      title: 'Ocean Pearl Luxury Beach Resort',
      provider: 'Calangute Beach, Goa',
      date: '15 Oct - 19 Oct 2026',
      time: 'Check-in: 02:00 PM',
      passengers: '2 Guests • Deluxe Sea View',
      price: 3499,
      status: 'Confirmed',
      seat: 'Room 304'
    },
    {
      id: 'TG-BK-7703',
      serviceType: 'Rides',
      title: 'Goa Airport (GOI) → Calangute',
      provider: 'Genie Prime Sedan (Maruti Dzire)',
      date: '15 Oct 2026',
      time: '09:30 AM',
      passengers: 'Driver: Ramesh Sharma',
      price: 249,
      status: 'Confirmed',
      seat: 'GA-03-AB-4921'
    }
  ],

  // 11. Emergency Helplines Directory
  emergencyServices: [
    { name: 'National Emergency SOS', number: '112', icon: '🆘', desc: 'Unified All-India Emergency Number' },
    { name: 'Police Helpline', number: '100', icon: '👮‍♂️', desc: 'Immediate Police Assistance' },
    { name: 'Ambulance & Medical', number: '108', icon: '🚑', desc: 'Medical Trauma & Emergency Care' },
    { name: 'Fire & Rescue Service', number: '101', icon: '🚒', desc: 'Fire Brigade & Disaster Management' },
    { name: 'Women Safety Helpline', number: '1091', icon: '🛡️', desc: 'Dedicated 24x7 Women Safety Cell' },
    { name: 'National Tourist Helpline', number: '1363', icon: '🧭', desc: 'Multi-lingual Tourist Assistance' }
  ]
};

// Export to window
window.TRIP_GENIE_DATA = TRIP_GENIE_DATA;
