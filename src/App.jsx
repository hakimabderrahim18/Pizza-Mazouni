import React, { useState, useEffect } from 'react';

// Extracted Pizza Mazouni menu database with generic category high-res food photography
const MENU_ITEMS = [
  {
    "id": "tom-margherita",
    "name": "Margherita Classique",
    "ingredients": "Sauce Tomate, Fromage, Olive.",
    "price": 200,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-royale",
    "name": "Royale",
    "ingredients": "Sauce Tomate, Fromage, Olive, Viande hachée.",
    "price": 250,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-napolitaine",
    "name": "Napolitaine",
    "ingredients": "Sauce Tomate, Fromage, Olive, Viande hachée, Maïs.",
    "price": 300,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-chef",
    "name": "Chef",
    "ingredients": "Sauce Tomate, Fromage, Olive, Poulet, Viande hachée.",
    "price": 350,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-vegetarienne-c",
    "name": "Végétarienne Classique",
    "ingredients": "Sauce Tomate, Fromage, Olive, Tomate, Oignon, Maïs, Poivron.",
    "price": 350,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-viande-hachee",
    "name": "Viande Hachée",
    "ingredients": "Sauce Tomate, Fromage, Olive, Viande hachée.",
    "price": 400,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-au-thon",
    "name": "Au Thon",
    "ingredients": "Sauce Tomate, Fromage, Olive, Thon.",
    "price": 400,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-poulet-c",
    "name": "Poulet Classique",
    "ingredients": "Sauce Tomate, Fromage, Olive, Poulet.",
    "price": 400,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-kebab-c",
    "name": "Kebab Classique",
    "ingredients": "Sauce Tomate, Fromage, Olive, Kebab.",
    "price": 400,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-merguez-c",
    "name": "Merguez Classique",
    "ingredients": "Sauce Tomate, Fromage, Olive, Merguez.",
    "price": 400,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-speciale-c",
    "name": "Spéciale Classique",
    "ingredients": "Sauce Tomate, Fromage, Olive, Poulet, Viande Hachée, Maïs.",
    "price": 400,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-4saisons",
    "name": "4 Saisons",
    "ingredients": "Sauce Tomate, Fromage, Olive, Merguez, Viande Hachée, Œuf.",
    "price": 400,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-mexicaine",
    "name": "Mexicaine",
    "ingredients": "Sauce Tomate, Fromage, Olive, Poulet, Viande Hachée, Thon, Maïs.",
    "price": 450,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-maison",
    "name": "Maison Sauce Tomate",
    "ingredients": "Sauce Tomate, Fromage, Olive, Viande hachée, Poulet, Kebab, Thon, Maïs, Fromage blanc.",
    "price": 500,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-4fromages-c",
    "name": "4 Fromages Classique",
    "ingredients": "Sauce Tomate, Fromage Rouge, Gouda, Gruyère, Canserbort, Olive.",
    "price": 550,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-fermier",
    "name": "Le Fermier",
    "ingredients": "Sauce Tomate, Fromage, Olive, Poulet fumé, Camembert, Bœuf fumé, Champignon.",
    "price": 550,
    "category": "sauce-tomate",
    "badge": "Spécial",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-souffle",
    "name": "Soufflé",
    "ingredients": "Sauce Tomate, Fromage, Olive, Kebab, Viande hachée, Fromage Blanc, Mozzarella.",
    "price": 700,
    "category": "sauce-tomate",
    "badge": "Chaud",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-reine",
    "name": "Reine",
    "ingredients": "Sauce tomate, Fromage, Poulet, Kebab, Viande Hachée, Camembert, Mozzarella.",
    "price": 750,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-super",
    "name": "Super",
    "ingredients": "Sauce Tomate, Fromage, Olive, Poulet, Viande hachée, Thon, Maïs, Bordure fromage blanc, Mozzarella.",
    "price": 750,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-extra-fromage",
    "name": "Extra Fromage",
    "ingredients": "Sauce Tomate, Fromage, Olive, Poulet, Merguez, Viande hachée, Kebab, Fromage blanc, Gruyère, Fromage rouge, Camembert, Mozzarella.",
    "price": 800,
    "category": "sauce-tomate",
    "badge": "Maxi Fromage",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-istanbul",
    "name": "Istanbul",
    "ingredients": "Sauce Tomate, Fromage, Olive, Poulet, Viande hachée, Poivron, Merguez, Kebab, Mozzarella.",
    "price": 800,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "tom-gruyere",
    "name": "Gruyère",
    "ingredients": "Sauce Tomate, Fromage, Olive, Viande hachée, Merguez, Kebab, Gruyère, Mozzarella.",
    "price": 800,
    "category": "sauce-tomate",
    "image": "/mazouni_special.png"
  },
  {
    "id": "crm-poulet",
    "name": "Poulet Crème",
    "ingredients": "Crème Fraîche, Fromage, Olive, Poulet.",
    "price": 500,
    "category": "creme-fraiche",
    "image": "/mazouni_special.png"
  },
  {
    "id": "crm-kebab",
    "name": "Kebab Crème",
    "ingredients": "Crème Fraîche, Fromage, Olive, Kebab.",
    "price": 500,
    "category": "creme-fraiche",
    "image": "/mazouni_special.png"
  },
  {
    "id": "crm-maison",
    "name": "Maison Crème",
    "ingredients": "Crème Fraîche, Fromage, Olive, Viande hachée, Poulet, Kebab, Thon, Maïs, Fromage Blanc.",
    "price": 600,
    "category": "creme-fraiche",
    "badge": "Spécial Maison",
    "image": "/mazouni_special.png"
  },
  {
    "id": "crm-6fromages",
    "name": "6 Fromages",
    "ingredients": "Crème Fraîche, Olive, Cheddar, Fromage blanc, Fromage Rouge, Mozzarella, Gouda, Gruyère.",
    "price": 750,
    "category": "creme-fraiche",
    "badge": "Crémeux",
    "image": "/mazouni_special.png"
  },
  {
    "id": "snd-kebab",
    "name": "Sandwich Kebab",
    "ingredients": "Pain maison chaud, viande kebab grillée, frites, salade, sauces.",
    "price": 300,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "snd-poulet",
    "name": "Sandwich Poulet",
    "ingredients": "Pain maison, émincé de poulet mariné, frites, salade, sauces.",
    "price": 300,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "snd-kebda",
    "name": "Sandwich Kebda",
    "ingredients": "Pain maison, foie épicé sauté, frites, salade, sauces.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "snd-crispy",
    "name": "Sandwich Crispy",
    "ingredients": "Pain maison, filet de poulet croustillant pané, frites, salade, sauces.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "snd-merguez",
    "name": "Sandwich Merguez",
    "ingredients": "Pain maison, merguez grillées, frites, salade, sauces.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "snd-viande-hachee",
    "name": "Sandwich Viande Hachée",
    "ingredients": "Pain maison, viande hachée assaisonnée, frites, salade, sauces.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "snd-mixte",
    "name": "Sandwich Mixte",
    "ingredients": "Pain maison, mélange généreux de viandes au choix, frites, salade, sauces.",
    "price": 450,
    "category": "sandwiches",
    "badge": "Gros Appétit",
    "image": "/sandwich.png"
  },
  {
    "id": "chs-poulet",
    "name": "Cheese Poulet",
    "ingredients": "Pain de mie toasté grillé, fromage fondant, poulet mariné, frites.",
    "price": 300,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "chs-kebab",
    "name": "Cheese Kebab",
    "ingredients": "Pain de mie toasté, fromage fondant, viande kebab grillée, frites.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "chs-kebda",
    "name": "Cheese Kebda",
    "ingredients": "Pain de mie toasté, fromage fondant, foie épicé sauté, frites.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "chs-crispy",
    "name": "Cheese Crispy",
    "ingredients": "Pain de mie toasté, fromage fondant, poulet croustillant pané, frites.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "chs-merguez",
    "name": "Cheese Merguez",
    "ingredients": "Pain de mie toasté, fromage fondant, merguez grillées, frites.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "chs-viande-hachee",
    "name": "Cheese Viande Hachée",
    "ingredients": "Pain de mie toasté, fromage fondant, viande hachée, frites.",
    "price": 350,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "chs-mixte",
    "name": "Cheese Mixte",
    "ingredients": "Pain de mie toasté, fromage fondant, mélange de viandes, frites.",
    "price": 450,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "lib-poulet",
    "name": "Libanais Poulet",
    "ingredients": "Pain libanais enroulé, poulet émincé, frites, salade, crème d'ail.",
    "price": 400,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "lib-kebab",
    "name": "Libanais Kebab",
    "ingredients": "Pain libanais enroulé, viande kebab grillée, frites, salade, sauces.",
    "price": 400,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "lib-crispy",
    "name": "Libanais Crispy",
    "ingredients": "Pain libanais, poulet croustillant pané, frites, salade, sauces.",
    "price": 450,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "lib-viande-hachee",
    "name": "Libanais Viande Hachée",
    "ingredients": "Pain libanais, viande hachée assaisonnée, frites, salade, sauces.",
    "price": 450,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "lib-merguez",
    "name": "Libanais Merguez",
    "ingredients": "Pain libanais, merguez dorées, frites, salade, sauces.",
    "price": 450,
    "category": "sandwiches",
    "image": "/sandwich.png"
  },
  {
    "id": "lib-mixte",
    "name": "Libanais Mixte",
    "ingredients": "Pain libanais, mélange de viandes grillées, frites, salade, sauces.",
    "price": 500,
    "category": "sandwiches",
    "badge": "Populaire",
    "image": "/sandwich.png"
  },
  {
    "id": "plt-escalope",
    "name": "Plat Escalope",
    "ingredients": "Assiette d'escalope de poulet tendre grillée, frites, salade, sauces.",
    "price": 550,
    "category": "tacos-plats",
    "image": "/plat.png"
  },
  {
    "id": "plt-steak",
    "name": "Plat Steak Haché",
    "ingredients": "Assiette de steak haché de bœuf grillé, frites dorées, salade, sauces.",
    "price": 550,
    "category": "tacos-plats",
    "image": "/plat.png"
  },
  {
    "id": "plt-merguez",
    "name": "Plat Merguez",
    "ingredients": "Assiette de merguez grillées au four traditionnel, frites dorées, salade, sauces.",
    "price": 550,
    "category": "tacos-plats",
    "image": "/plat.png"
  },
  {
    "id": "plt-kebab",
    "name": "Plat Kebab",
    "ingredients": "Assiette de viande kebab marinée et grillée, frites dorées, salade, sauces.",
    "price": 600,
    "category": "tacos-plats",
    "image": "/plat.png"
  },
  {
    "id": "plt-crispy",
    "name": "Plat Crispy",
    "ingredients": "Assiette de filets de poulet croustillants panés, frites dorées, salade, sauces.",
    "price": 650,
    "category": "tacos-plats",
    "image": "/plat.png"
  },
  {
    "id": "plt-kebda",
    "name": "Plat Kebda",
    "ingredients": "Assiette de foie épicé sauté aux oignons, frites dorées, salade, sauces.",
    "price": 650,
    "category": "tacos-plats",
    "image": "/plat.png"
  },
  {
    "id": "plt-mixte",
    "name": "Plat Mixte",
    "ingredients": "Assiette royale avec un assortiment de viandes au choix, frites, salade, sauces.",
    "price": 700,
    "category": "tacos-plats",
    "badge": "Complet",
    "image": "/plat.png"
  },
  {
    "id": "tco-kebab",
    "name": "Tacos Kebab",
    "ingredients": "Galette de blé grillée, viande kebab, frites dorées, sauce fromagère onctueuse.",
    "price": 450,
    "category": "tacos-plats",
    "image": "/tacos.png"
  },
  {
    "id": "tco-viande-hachee",
    "name": "Tacos Viande Hachée",
    "ingredients": "Galette de blé, viande hachée grillée, frites, sauce fromagère maison.",
    "price": 450,
    "category": "tacos-plats",
    "image": "/tacos.png"
  },
  {
    "id": "tco-poulet",
    "name": "Tacos Poulet",
    "ingredients": "Galette de blé, émincé de poulet grillé, frites, sauce fromagère.",
    "price": 450,
    "category": "tacos-plats",
    "image": "/tacos.png"
  },
  {
    "id": "tco-merguez",
    "name": "Tacos Merguez",
    "ingredients": "Galette de blé, merguez grillées, frites, sauce fromagère maison.",
    "price": 450,
    "category": "tacos-plats",
    "image": "/tacos.png"
  },
  {
    "id": "tco-crispy",
    "name": "Tacos Crispy",
    "ingredients": "Galette de blé, poulet pané extra-croustillant, frites, sauce fromagère.",
    "price": 500,
    "category": "tacos-plats",
    "image": "/tacos.png"
  },
  {
    "id": "tco-mixte",
    "name": "Tacos Mixte",
    "ingredients": "Galette de blé, mélange de viandes au choix, frites, sauce fromagère maison.",
    "price": 550,
    "category": "tacos-plats",
    "badge": "Succès",
    "image": "/tacos.png"
  },
  {
    "id": "tco-gratine",
    "name": "Tacos Gratiné",
    "ingredients": "Tacos mixte garni de fromage fondant et gratiné au four.",
    "price": 650,
    "category": "tacos-plats",
    "badge": "Gratiné",
    "image": "/tacos.png"
  },
  {
    "id": "tco-4fromages",
    "name": "Tacos 4 Fromages",
    "ingredients": "Tacos généreux avec mozzarella, cheddar, gruyère et fromage rouge fondu.",
    "price": 700,
    "category": "tacos-plats",
    "image": "/tacos.png"
  },
  {
    "id": "bgr-simple",
    "name": "Burger Simple",
    "ingredients": "Pain burger moelleux, steak haché grillé, salade, tomate, oignons, sauce maison.",
    "price": 200,
    "category": "tacos-plats",
    "image": "/burger.png"
  },
  {
    "id": "bgr-cheese",
    "name": "Cheese Burger",
    "ingredients": "Pain burger, steak haché grillé, tranche de cheddar fondant, salade, sauce.",
    "price": 250,
    "category": "tacos-plats",
    "image": "/burger.png"
  },
  {
    "id": "bgr-double",
    "name": "Double Burger",
    "ingredients": "Pain burger, double steak de bœuf grillé, double cheddar fondant, salade, sauce.",
    "price": 350,
    "category": "tacos-plats",
    "badge": "XXL",
    "image": "/burger.png"
  },
  {
    "id": "bgr-poulet",
    "name": "Burger Poulet",
    "ingredients": "Pain burger, filet de poulet grillé, cheddar fondant, salade, sauce.",
    "price": 250,
    "category": "tacos-plats",
    "image": "/burger.png"
  },
  {
    "id": "bgr-krispy",
    "name": "Burger Krispy",
    "ingredients": "Pain burger, filet de poulet pané croustillant, cheddar fondant, salade, sauce.",
    "price": 350,
    "category": "tacos-plats",
    "image": "/burger.png"
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Cart state
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('pizza_mazouni_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState(() => localStorage.getItem('pizza_mazouni_name') || '');
  const [customerPhone, setCustomerPhone] = useState(() => localStorage.getItem('pizza_mazouni_phone') || '');

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('pizza_mazouni_cart', JSON.stringify(cart));
  }, [cart]);

  // Save customer info to local storage
  useEffect(() => {
    localStorage.setItem('pizza_mazouni_name', customerName);
  }, [customerName]);
  
  useEffect(() => {
    localStorage.setItem('pizza_mazouni_phone', customerPhone);
  }, [customerPhone]);

  const categories = [
    { id: 'all', name: 'Tout' },
    { id: 'sauce-tomate', name: 'Pizzas Sauce Tomate' },
    { id: 'creme-fraiche', name: 'Pizzas Crème Fraîche & Méga' },
    { id: 'tacos-plats', name: 'Plats, Tacos & Burgers' },
    { id: 'sandwiches', name: 'Sandwiches, Cheese & Libanais' }
  ];

  // Filtering and sorting logic
  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) || 
      (item.ingredients && item.ingredients.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // keeps default order
  });

  // Cart operations
  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateCartQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => item.id === itemId ? { ...item, quantity: newQty } : item)
    );
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Veuillez remplir votre nom et numéro de téléphone.");
      return;
    }

    // Build structured WhatsApp message
    let message = `*Nouvelle commande - Pizza Mazouni* 🍕\n`;
    message += `--------------------------------\n`;
    message += `*Nom du client :* ${customerName}\n`;
    message += `*Téléphone :* ${customerPhone}\n`;
    message += `--------------------------------\n\n`;
    message += `*Détails de la commande :*\n`;

    let total = 0;
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      message += `${index + 1}. *${item.name}* (x${item.quantity}) - ${itemTotal} DA\n`;
    });

    message += `\n*Total à payer :* *${total} DA*\n`;
    message += `--------------------------------\n`;
    message += `_Commande envoyée depuis le site Pizza Mazouni_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/213797060052?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    // Clear cart after order
    setCart([]);
    setIsCartOpen(false);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ''; // restore scrolling
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('default');
  };

  return (
    <div className="app-root">
      {/* HEADER / HERO BANNER */}
      <header className="hero-banner">
        <div className="hero-content">
          <img src="/logo.jpg" alt="Pizza Mazouni" className="hero-image" />
        </div>
      </header>

      {/* APP CONTAINER */}
      <main className="app-container">
        
        {/* SEARCH & CONTROLS */}
        <section className="controls-section">
          <div className="search-bar-wrapper">
            {/* SVG Search Icon */}
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un plat (ex: Poulet, Royale...)" 
              aria-label="Rechercher un plat"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="clear-btn" aria-label="Effacer la recherche">&times;</button>
            )}
          </div>

          {/* SORT FILTER */}
          <div className="filter-wrapper">
            <label htmlFor="sort-select" className="filter-label">Trier par :</label>
            <select 
              id="sort-select" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Trier le menu"
            >
              <option value="default">Ordre du menu</option>
              <option value="price-asc">Prix : croissant</option>
              <option value="price-desc">Prix : décroissant</option>
            </select>
          </div>
        </section>

        {/* NAVIGATION TABS */}
        <nav className="category-tabs" aria-label="Catégories du menu">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={selectedCategory === cat.id ? 'tab-btn active' : 'tab-btn'}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* MENU GRID */}
        <section className="menu-grid-section">
          {sortedItems.length > 0 ? (
            <div className="menu-grid">
              {sortedItems.map(item => (
                <div 
                  key={item.id} 
                  className="menu-card"
                  onClick={() => openModal(item)}
                >
                  <div className="menu-card-img-container">
                    <img src={item.image} alt={item.name} className="menu-card-img" loading="lazy" />
                  </div>
                  <div className="menu-card-info">
                    <div className="menu-card-header">
                      <h3 className="menu-card-title">{item.name}</h3>
                      <span className="menu-card-price">{item.price} DA</span>
                    </div>
                    <p className="menu-card-ingredients">{item.ingredients}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }} 
                      className="btn-card-add"
                    >
                      Ajouter au panier 🛒
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="no-results">
              <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>Aucun plat ne correspond à votre recherche.</p>
              <button onClick={resetSearch} className="btn-reset">Voir tout le menu</button>
            </div>
          )}
        </section>
      </main>

      {/* QUICK OVERVIEW MODAL */}
      {isModalOpen && selectedItem && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="Fermer">&times;</button>
            <div className="modal-body">
              <div className="modal-img-container">
                <img src={selectedItem.image} alt={selectedItem.name} />
              </div>
              <div className="modal-info">
                <h2>{selectedItem.name}</h2>
                <span className="modal-price">{selectedItem.price} DA</span>
                <p className="ingredients-label">Ingrédients :</p>
                <p className="modal-ingredients">{selectedItem.ingredients}</p>
                <div className="modal-actions-grid">
                  <button 
                    onClick={() => {
                      addToCart(selectedItem);
                      closeModal();
                      setIsCartOpen(true);
                    }}
                    className="btn-order"
                  >
                    Ajouter au panier 🛒
                  </button>
                  <a href="tel:0797060052" className="btn-order-call">
                    Appeler : 0797060052
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STICKY BOTTOM CART BAR */}
      {cart.length > 0 && (
        <div className="cart-sticky-bar" onClick={() => setIsCartOpen(true)}>
          <div className="cart-sticky-info">
            <span className="cart-sticky-count">
              🛒 {cart.reduce((sum, item) => sum + item.quantity, 0)} articles
            </span>
            <span className="cart-sticky-total">
              Total : {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)} DA
            </span>
          </div>
          <button className="cart-sticky-btn">Voir le panier →</button>
        </div>
      )}

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="cart-drawer-container">
          <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
          <div className="cart-drawer">
            <div className="cart-header">
              <h2>Votre Panier 🛒</h2>
              <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
            </div>
            
            {cart.length === 0 ? (
              <div className="cart-empty">
                <p>Votre panier est vide.</p>
                <button className="btn-reset" onClick={() => setIsCartOpen(false)}>Retour au menu</button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <span className="cart-item-price">{item.price} DA</span>
                      </div>
                      <div className="cart-item-actions">
                        <div className="quantity-controller">
                          <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                          Supprimer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="cart-total-row">
                    <span>Total :</span>
                    <span className="cart-total-price">
                      {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)} DA
                    </span>
                  </div>
                  
                  <form onSubmit={handleOrderSubmit} className="cart-form">
                    <div className="form-group">
                      <label htmlFor="customer-name">Votre Nom *</label>
                      <input 
                        type="text" 
                        id="customer-name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ex: Mohamed Amine"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="customer-phone">Numéro de Téléphone *</label>
                      <input 
                        type="tel" 
                        id="customer-phone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Ex: 0550123456"
                        required 
                      />
                    </div>
                    <button type="submit" className="btn-checkout">
                      Commander via WhatsApp 💬
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* FLOATING CTA BUTTON */}
      <a href="tel:0797060052" className="floating-cta" title="Appeler pour commander">
        <svg className="phone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <span>Commander : 0797060052</span>
      </a>

      {/* FOOTER */}
      <footer className="app-root-footer" style={{ display: 'none' }} />
      <footer className="app-footer">
        <div className="footer-info">
          <h3>Pizza Mazouni</h3>
          <p className="tagline">Le goût du fait maison, le secret de notre tradition ✨</p>
          <p className="phone">Téléphone : 0797060052</p>
          <p className="partner">À côté de la mosquée Ibn Badis EPLF, Tiaret</p>
        </div>
        <div className="footer-qr">
          <img src="/code_qr.png" alt="QR Code du Menu" className="footer-qr-img" />
          <span>Scanner pour partager</span>
        </div>
      </footer>
    </div>
  );
}