import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  Flame, 
  ChevronRight, 
  Award, 
  Sparkles, 
  ArrowRight,
  Maximize2,
  Download,
  Search,
  ZoomIn,
  Map
} from 'lucide-react';

// Comprehensive Database of Menu Items matching the user's uploaded menu boards exactly
const MENU_ITEMS = [
  // ==================== SAUCE TOMATE PIZZAS (Image 3 & Image 2 top row) ====================
  {
    id: 'tom-margherita',
    name: 'Margherita Classique',
    ingredients: 'Sauce Tomate, Fromage, Olive.',
    price: 200,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-royale',
    name: 'Royale',
    ingredients: 'Sauce Tomate, Fromage, Olive, Viande hachée.',
    price: 250,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-napolitaine',
    name: 'Napolitaine',
    ingredients: 'Sauce Tomate, Fromage, Olive, Viande hachée, Maïs.',
    price: 300,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-chef',
    name: 'Chef',
    ingredients: 'Sauce Tomate, Fromage, Olive, Poulet, Viande hachée.',
    price: 350,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-vegetarienne-c',
    name: 'Végétarienne Classique',
    ingredients: 'Sauce Tomate, Fromage, Olive, Tomate, Oignon, Maïs, Poivron.',
    price: 350,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-viande-hachee',
    name: 'Viande Hachée',
    ingredients: 'Sauce Tomate, Fromage, Olive, Viande hachée.',
    price: 400,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-au-thon',
    name: 'Au Thon',
    ingredients: 'Sauce Tomate, Fromage, Olive, Thon.',
    price: 400,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-poulet-c',
    name: 'Poulet Classique',
    ingredients: 'Sauce Tomate, Fromage, Olive, Poulet.',
    price: 400,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-kebab-c',
    name: 'Kebab Classique',
    ingredients: 'Sauce Tomate, Fromage, Olive, Kebab.',
    price: 400,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-merguez-c',
    name: 'Merguez Classique',
    ingredients: 'Sauce Tomate, Fromage, Olive, Merguez.',
    price: 400,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-speciale-c',
    name: 'Spéciale Classique',
    ingredients: 'Sauce Tomate, Fromage, Olive, Poulet, Viande Hachée, Maïs.',
    price: 400,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-4saisons',
    name: '4 Saisons',
    ingredients: 'Sauce Tomate, Fromage, Olive, Merguez, Viande Hachée, Œuf.',
    price: 400,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-mexicaine',
    name: 'Mexicaine',
    ingredients: 'Sauce Tomate, Fromage, Olive, Poulet, Viande Hachée, Thon, Maïs.',
    price: 450,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-maison',
    name: 'Maison Sauce Tomate',
    ingredients: 'Sauce Tomate, Fromage, Olive, Viande hachée, Poulet, Kebab, Thon, Maïs, Fromage blanc.',
    price: 500,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  {
    id: 'tom-4fromages-c',
    name: '4 Fromages Classique',
    ingredients: 'Sauce Tomate, Fromage Rouge, Gouda, Gruyère, Canserbort, Olive.',
    price: 550,
    category: 'sauce-tomate',
    image: '/m2_orange.png'
  },
  // Added from Image 2 top row (also tomato bases)
  {
    id: 'tom-fermier',
    name: 'Le Fermier',
    ingredients: 'Sauce Tomate, Fromage, Olive, Poulet fumé, Camembert, Bœuf fumé, Champignon.',
    price: 550,
    category: 'sauce-tomate',
    badge: 'Spécial',
    image: '/m1_orange.png'
  },
  {
    id: 'tom-souffle',
    name: 'Soufflé',
    ingredients: 'Sauce Tomate, Fromage, Olive, Kebab, Viande hachée, Fromage Blanc, Mozzarella.',
    price: 700,
    category: 'sauce-tomate',
    badge: 'Chaud',
    image: '/m1_orange.png'
  },
  {
    id: 'tom-reine',
    name: 'Reine',
    ingredients: 'Sauce tomate, Fromage, Poulet, Kebab, Viande Hachée, Camembert, Mozzarella.',
    price: 750,
    category: 'sauce-tomate',
    image: '/m1_orange.png'
  },
  {
    id: 'tom-super',
    name: 'Super',
    ingredients: 'Sauce Tomate, Fromage, Olive, Poulet, Viande hachée, Thon, Maïs, Bordure fromage blanc, Mozzarella.',
    price: 750,
    category: 'sauce-tomate',
    image: '/m1_orange.png'
  },
  {
    id: 'tom-extra-fromage',
    name: 'Extra Fromage',
    ingredients: 'Sauce Tomate, Fromage, Olive, Poulet, Merguez, Viande hachée, Kebab, Fromage blanc, Gruyère, Fromage rouge, Camembert, Mozzarella.',
    price: 800,
    category: 'sauce-tomate',
    badge: 'Maxi Fromage',
    image: '/m1_orange.png'
  },
  {
    id: 'tom-istanbul',
    name: 'Istanbul',
    ingredients: 'Sauce Tomate, Fromage, Olive, Poulet, Viande hachée, Poivron, Merguez, Kebab, Mozzarella.',
    price: 800,
    category: 'sauce-tomate',
    image: '/m1_orange.png'
  },
  {
    id: 'tom-gruyere',
    name: 'Gruyère',
    ingredients: 'Sauce Tomate, Fromage, Olive, Viande hachée, Merguez, Kebab, Gruyère, Mozzarella.',
    price: 800,
    category: 'sauce-tomate',
    image: '/m1_orange.png'
  },

  // ==================== CRÈME FRAÎCHE PIZZAS (Image 2 middle row) ====================
  {
    id: 'crm-poulet',
    name: 'Poulet Crème',
    ingredients: 'Crème Fraîche, Fromage, Olive, Poulet.',
    price: 500,
    category: 'creme-fraiche',
    image: '/m1_orange.png'
  },
  {
    id: 'crm-kebab',
    name: 'Kebab Crème',
    ingredients: 'Crème Fraîche, Fromage, Olive, Kebab.',
    price: 500,
    category: 'creme-fraiche',
    image: '/m1_orange.png'
  },
  {
    id: 'crm-maison',
    name: 'Maison Crème',
    ingredients: 'Crème Fraîche, Fromage, Olive, Viande hachée, Poulet, Kebab, Thon, Maïs, Fromage Blanc.',
    price: 600,
    category: 'creme-fraiche',
    badge: 'Spécial Maison',
    image: '/m1_orange.png'
  },
  {
    id: 'crm-6fromages',
    name: '6 Fromages',
    ingredients: 'Crème Fraîche, Olive, Cheddar, Fromage blanc, Fromage Rouge, Mozzarella, Gouda, Gruyère.',
    price: 750,
    category: 'creme-fraiche',
    badge: 'Crémeux',
    image: '/m1_orange.png'
  },

  // ==================== SANDWICHES, CHEESE & LIBANAIS (Image 4) ====================
  {
    id: 'snd-kebab',
    name: 'Sandwich Kebab',
    ingredients: 'Pain maison chaud, viande kebab grillée, frites, salade, sauces.',
    price: 300,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'snd-poulet',
    name: 'Sandwich Poulet',
    ingredients: 'Pain maison, émincé de poulet mariné, frites, salade, sauces.',
    price: 300,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'snd-kebda',
    name: 'Sandwich Kebda',
    ingredients: 'Pain maison, foie épicé sauté, frites, salade, sauces.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'snd-crispy',
    name: 'Sandwich Crispy',
    ingredients: 'Pain maison, filet de poulet croustillant pané, frites, salade, sauces.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'snd-merguez',
    name: 'Sandwich Merguez',
    ingredients: 'Pain maison, merguez grillées, frites, salade, sauces.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'snd-viande-hachee',
    name: 'Sandwich Viande Hachée',
    ingredients: 'Pain maison, viande hachée assaisonnée, frites, salade, sauces.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'snd-mixte',
    name: 'Sandwich Mixte',
    ingredients: 'Pain maison, mélange généreux de viandes au choix, frites, salade, sauces.',
    price: 450,
    category: 'sandwiches',
    badge: 'Gros Appétit',
    image: '/m3_orange.png'
  },
  {
    id: 'chs-poulet',
    name: 'Cheese Poulet',
    ingredients: 'Pain de mie toasté grillé, fromage fondant, poulet mariné, frites.',
    price: 300,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'chs-kebab',
    name: 'Cheese Kebab',
    ingredients: 'Pain de mie toasté, fromage fondant, viande kebab grillée, frites.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'chs-kebda',
    name: 'Cheese Kebda',
    ingredients: 'Pain de mie toasté, fromage fondant, foie épicé sauté, frites.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'chs-crispy',
    name: 'Cheese Crispy',
    ingredients: 'Pain de mie toasté, fromage fondant, poulet croustillant pané, frites.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'chs-merguez',
    name: 'Cheese Merguez',
    ingredients: 'Pain de mie toasté, fromage fondant, merguez grillées, frites.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'chs-viande-hachee',
    name: 'Cheese Viande Hachée',
    ingredients: 'Pain de mie toasté, fromage fondant, viande hachée, frites.',
    price: 350,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'chs-mixte',
    name: 'Cheese Mixte',
    ingredients: 'Pain de mie toasté, fromage fondant, mélange de viandes, frites.',
    price: 450,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'lib-poulet',
    name: 'Libanais Poulet',
    ingredients: 'Pain libanais enroulé, poulet émincé, frites, salade, crème d\'ail.',
    price: 400,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'lib-kebab',
    name: 'Libanais Kebab',
    ingredients: 'Pain libanais enroulé, viande kebab grillée, frites, salade, sauces.',
    price: 400,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'lib-crispy',
    name: 'Libanais Crispy',
    ingredients: 'Pain libanais, poulet croustillant pané, frites, salade, sauces.',
    price: 450,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'lib-viande-hachee',
    name: 'Libanais Viande Hachée',
    ingredients: 'Pain libanais, viande hachée assaisonnée, frites, salade, sauces.',
    price: 450,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'lib-merguez',
    name: 'Libanais Merguez',
    ingredients: 'Pain libanais, merguez dorées, frites, salade, sauces.',
    price: 450,
    category: 'sandwiches',
    image: '/m3_orange.png'
  },
  {
    id: 'lib-mixte',
    name: 'Libanais Mixte',
    ingredients: 'Pain libanais, mélange de viandes grillées, frites, salade, sauces.',
    price: 500,
    category: 'sandwiches',
    badge: 'Populaire',
    image: '/m3_orange.png'
  },

  // ==================== PLATS, TACOS & BURGERS (Image 5) ====================
  {
    id: 'plt-escalope',
    name: 'Plat Escalope',
    ingredients: 'Assiette d\'escalope de poulet tendre grillée, frites, salade, sauces.',
    price: 550,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'plt-steak',
    name: 'Plat Steak Haché',
    ingredients: 'Assiette de steak haché de bœuf grillé, frites dorées, salade, sauces.',
    price: 550,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'plt-merguez',
    name: 'Plat Merguez',
    ingredients: 'Assiette de merguez grillées au four traditionnel, frites dorées, salade, sauces.',
    price: 550,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'plt-kebab',
    name: 'Plat Kebab',
    ingredients: 'Assiette de viande kebab marinée et grillée, frites dorées, salade, sauces.',
    price: 600,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'plt-crispy',
    name: 'Plat Crispy',
    ingredients: 'Assiette de filets de poulet croustillants panés, frites dorées, salade, sauces.',
    price: 650,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'plt-kebda',
    name: 'Plat Kebda',
    ingredients: 'Assiette de foie épicé sauté aux oignons, frites dorées, salade, sauces.',
    price: 650,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'plt-mixte',
    name: 'Plat Mixte',
    ingredients: 'Assiette royale avec un assortiment de viandes au choix, frites, salade, sauces.',
    price: 700,
    category: 'tacos-plats',
    badge: 'Complet',
    image: '/m4_orange.png'
  },
  {
    id: 'tco-kebab',
    name: 'Tacos Kebab',
    ingredients: 'Galette de blé grillée, viande kebab, frites dorées, sauce fromagère onctueuse.',
    price: 450,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'tco-viande-hachee',
    name: 'Tacos Viande Hachée',
    ingredients: 'Galette de blé, viande hachée grillée, frites, sauce fromagère maison.',
    price: 450,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'tco-poulet',
    name: 'Tacos Poulet',
    ingredients: 'Galette de blé, émincé de poulet grillé, frites, sauce fromagère.',
    price: 450,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'tco-merguez',
    name: 'Tacos Merguez',
    ingredients: 'Galette de blé, merguez grillées, frites, sauce fromagère maison.',
    price: 450,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'tco-crispy',
    name: 'Tacos Crispy',
    ingredients: 'Galette de blé, poulet pané extra-croustillant, frites, sauce fromagère.',
    price: 500,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'tco-mixte',
    name: 'Tacos Mixte',
    ingredients: 'Galette de blé, mélange de viandes au choix, frites, sauce fromagère maison.',
    price: 550,
    category: 'tacos-plats',
    badge: 'Succès',
    image: '/m4_orange.png'
  },
  {
    id: 'tco-gratine',
    name: 'Tacos Gratiné',
    ingredients: 'Tacos mixte garni de fromage fondant et gratiné au four.',
    price: 650,
    category: 'tacos-plats',
    badge: 'Gratiné',
    image: '/m4_orange.png'
  },
  {
    id: 'tco-4fromages',
    name: 'Tacos 4 Fromages',
    ingredients: 'Tacos généreux avec mozzarella, cheddar, gruyère et fromage rouge fondu.',
    price: 700,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'bgr-simple',
    name: 'Burger Simple',
    ingredients: 'Pain burger moelleux, steak haché grillé, salade, tomate, oignons, sauce maison.',
    price: 200,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'bgr-cheese',
    name: 'Cheese Burger',
    ingredients: 'Pain burger, steak haché grillé, tranche de cheddar fondant, salade, sauce.',
    price: 250,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'bgr-double',
    name: 'Double Burger',
    ingredients: 'Pain burger, double steak de bœuf grillé, double cheddar fondant, salade, sauce.',
    price: 350,
    category: 'tacos-plats',
    badge: 'XXL',
    image: '/m4_orange.png'
  },
  {
    id: 'bgr-poulet',
    name: 'Burger Poulet',
    ingredients: 'Pain burger, filet de poulet grillé, cheddar fondant, salade, sauce.',
    price: 250,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  },
  {
    id: 'bgr-krispy',
    name: 'Burger Krispy',
    ingredients: 'Pain burger, filet de poulet pané croustillant, cheddar fondant, salade, sauce.',
    price: 350,
    category: 'tacos-plats',
    image: '/m4_orange.png'
  }
];

// Mapping Category key to the uploaded menu board image path
const MENU_BOARD_IMAGES = {
  'sauce-tomate': '/m2_orange.png',
  'creme-fraiche': '/m1_orange.png',
  'sandwiches': '/m3_orange.png',
  'tacos-plats': '/m4_orange.png',
  'pizzamenu': '/pizzamenu.jpg'
};

function App() {
  const [activeTab, setActiveTab] = useState('sauce-tomate');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [orderModalItem, setOrderModalItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [menuViewMode, setMenuViewMode] = useState('image'); // 'image' or 'list'

  // Scroll detection to highlight headers and change navbar states
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'menu', 'location'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter items in text view according to tab and search query
  const filteredMenu = MENU_ITEMS.filter(item => {
    const matchesCategory = item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getMenuTitle = (tab) => {
    switch(tab) {
      case 'sauce-tomate': return 'Pizzas Sauce Tomate';
      case 'creme-fraiche': return 'Pizzas Crème Fraîche & Méga';
      case 'sandwiches': return 'Sandwiches & Cheese & Libanais';
      case 'tacos-plats': return 'Plats, Tacos & Burgers';
      default: return 'Notre Menu';
    }
  };

  return (
    <>
      {/* Sticky Header */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <img src="/logo.jpg" alt="Pizza Mazouni Logo" className="logo-img" />
            <div className="logo-text">
              Pizza Mazouni
              <span>Pizzeria</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                Accueil
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                À Propos
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className={activeSection === 'menu' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('menu'); }}
              >
                Le Menu
              </a>
            </li>
            <li>
              <a 
                href="#location" 
                className={activeSection === 'location' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('location'); }}
              >
                Localisation
              </a>
            </li>
          </ul>

          {/* Call CTA Button */}
          <div className="nav-cta">
            <a href="tel:0773053626" className="btn btn-primary btn-call-nav">
              <Phone size={16} />
              0773053626
            </a>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <MenuIcon size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="logo-text">
            Pizza Mazouni
            <span style={{ color: 'var(--accent-gold)' }}>Pizzeria</span>
          </div>
          <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }} onClick={() => setMobileMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              À Propos
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              className={activeSection === 'menu' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('menu'); }}
            >
              Le Menu
            </a>
          </li>
          <li>
            <a 
              href="#location" 
              className={activeSection === 'location' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('location'); }}
            >
              Localisation
            </a>
          </li>
        </ul>
        <a href="tel:0773053626" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%' }}>
          <Phone size={18} />
          Appeler pour commander
        </a>
      </div>

      {/* Hero Section */}
      <header id="home" className="hero-split">
        <div className="hero-split-container">
          {/* Left Column: Text & Content */}
          <div className="hero-split-content">
            <div className="hero-badge">
              <Flame size={16} style={{ color: 'var(--accent)', filter: 'drop-shadow(0 0 5px var(--accent))' }} />
              Pizzeria Artisanale Algérienne
            </div>
            <h1>
              L'Authenticité de la
              <span>Pizza Traditionnelle</span>
            </h1>
            <p className="hero-description">
              Savourez nos pizzas, sandwiches, libanais et burgers préparés avec passion à Tiaret. Une pâte légère, des ingrédients généreux et des saveurs inimitables.
            </p>
            <div className="hero-actions">
              <button onClick={() => handleNavClick('menu')} className="btn btn-primary">
                Consulter la Carte
                <ArrowRight size={18} />
              </button>
              <a href="tel:0773053626" className="btn btn-secondary">
                <Phone size={18} />
                Appeler maintenant
              </a>
            </div>
          </div>

          {/* Right Column: Clear Storefront Image */}
          <div className="hero-split-image-container">
            <img 
              src="/storefront.png" 
              alt="Entrée de la pizzeria Pizza Mazouni" 
              className="hero-split-image"
            />
            <div className="hero-image-badge">
              <span>Le goût du fait maison, le secret de notre tradition ✨</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-container">
              <div className="about-img-frame">
                <img src="/about_pizza.png" alt="Préparation de pizza artisanale" className="about-img" />
              </div>
              <div className="about-badge-card">
                <h4>100%</h4>
                <p>Artisanale</p>
              </div>
            </div>
            <div className="about-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '12px' }}>
                <Award size={18} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Savoir-faire de Qualité</span>
              </div>
              <h3>Le Goût de la <span>Tradition</span></h3>
              <p>
                Chez <strong>Pizza Mazouni</strong>, nous croyons qu'une excellente cuisine commence par le respect du temps et des ingrédients. Notre pâte signature fermente lentement pendant 48 heures pour développer une légèreté et un croustillant sans pareils.
              </p>
              <p>
                Qu'il s'agisse de nos pizzas à base de sauce tomate mijotée, de nos bases crème fraîche crémeuses, ou de notre large sélection de burgers, de tacos gratinés et de délicieux sandwiches Libanais, nous préparons chaque commande sur commande avec des ingrédients frais.
              </p>
              
              <div className="about-features">
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <Flame size={20} />
                  </div>
                  <div className="about-feature-text">
                    <h5>Four Traditionnel</h5>
                    <p>Cuisson impeccable sur plaque réfractaire.</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <Sparkles size={20} />
                  </div>
                  <div className="about-feature-text">
                    <h5>Pâte Légère 48h</h5>
                    <p>Digeste, croustillante et incroyablement dorée.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <div className="section-header">
            <h2>La Carte Complète</h2>
            <p>Consultez nos menus directement en image ou parcourez la liste détaillée de nos produits par catégorie.</p>
            
            {/* View Mode Toggle: Image Menu vs Text List Menu */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '24px'
            }}>
              <button 
                onClick={() => setMenuViewMode('image')} 
                className={`tab-btn ${menuViewMode === 'image' ? 'active' : ''}`}
                style={{ borderRadius: '4px', fontSize: '0.85rem', padding: '8px 16px' }}
              >
                Vue Menu Original (Image)
              </button>
              <button 
                onClick={() => setMenuViewMode('list')} 
                className={`tab-btn ${menuViewMode === 'list' ? 'active' : ''}`}
                style={{ borderRadius: '4px', fontSize: '0.85rem', padding: '8px 16px' }}
              >
                Vue Recherche & Liste (Texte)
              </button>
            </div>
          </div>

          {/* Category Tabs Filter */}
          <div className="menu-tabs">
            <button 
              className={`tab-btn ${activeTab === 'sauce-tomate' ? 'active' : ''}`}
              onClick={() => setActiveTab('sauce-tomate')}
            >
              Pizzas Sauce Tomate
            </button>
            <button 
              className={`tab-btn ${activeTab === 'creme-fraiche' ? 'active' : ''}`}
              onClick={() => setActiveTab('creme-fraiche')}
            >
              Pizzas Crème Fraîche
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tacos-plats' ? 'active' : ''}`}
              onClick={() => setActiveTab('tacos-plats')}
            >
              Plats, Tacos & Burgers
            </button>
            <button 
              className={`tab-btn ${activeTab === 'sandwiches' ? 'active' : ''}`}
              onClick={() => setActiveTab('sandwiches')}
            >
              Sandwiches & Libanais
            </button>
          </div>

          {/* ==================== VUE IMAGE MENU BOARD (Default & 100% Authentic) ==================== */}
          {menuViewMode === 'image' && (
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border)', 
                borderRadius: '8px', 
                padding: '16px',
                boxShadow: 'var(--shadow)',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <h4 style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                    Menu : {getMenuTitle(activeTab)}
                  </h4>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={() => setLightboxOpen(true)}
                      className="btn btn-outline-gold" 
                      style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                    >
                      <ZoomIn size={14} />
                      Agrandir en Grand Écran
                    </button>
                    <a 
                      href={MENU_BOARD_IMAGES[activeTab]} 
                      download={`${activeTab}-menu.jpg`}
                      className="btn btn-secondary" 
                      style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                    >
                      <Download size={14} />
                      Télécharger
                    </a>
                  </div>
                </div>

                {/* Main Menu Board Image Display with interactive zoom hover indicator */}
                <div 
                  onClick={() => setLightboxOpen(true)}
                  style={{
                    position: 'relative',
                    cursor: 'zoom-in',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg-secondary)'
                  }}
                >
                  <img 
                    src={MENU_BOARD_IMAGES[activeTab]} 
                    alt={`Carte Pizza Mazouni - ${activeTab}`} 
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '650px',
                      objectFit: 'contain',
                      display: 'block',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Maximize2 size={12} />
                    Cliquez pour zoomer
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '12px' }}>
                  * Les images et les tarifs affichés ci-dessus sont les originaux imprimés de notre pizzeria.
                </p>
              </div>
            </div>
          )}

          {/* ==================== VUE TEXT LIST MENU BOARD WITH SEARCH ==================== */}
          {menuViewMode === 'list' && (
            <>
              {/* Search input */}
              <div style={{
                maxWidth: '480px',
                margin: '0 auto 40px',
                position: 'relative'
              }}>
                <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
                <input 
                  type="text"
                  placeholder="Rechercher un plat (ex: Margherita, Tacos...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 48px',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'var(--transition)'
                  }}
                />
              </div>

              {/* Grid of Cards */}
              <div className="menu-grid">
                {filteredMenu.map((item) => (
                  <article className="menu-card" key={item.id}>
                    <div className="menu-card-content" style={{ paddingTop: '24px' }}>
                      <div className="menu-card-header">
                        <h4 className="menu-card-title">{item.name}</h4>
                        <span className="menu-card-price">{item.price} DA</span>
                      </div>
                      <p className="menu-card-ingredients">{item.ingredients}</p>
                      <div className="menu-card-footer" style={{ marginTop: 'auto' }}>
                        <span className="menu-card-category">
                          {item.category === 'sauce-tomate' && 'Base Tomate'}
                          {item.category === 'creme-fraiche' && 'Base Crème'}
                          {item.category === 'sandwiches' && 'Sandwich & Wrap'}
                          {item.category === 'tacos-plats' && 'Plat & Fast-Food'}
                        </span>
                        <button onClick={() => setOrderModalItem(item)} className="menu-card-order-btn">
                          Commander
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredMenu.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
                  Aucun élément trouvé pour votre recherche.
                </div>
              )}
            </>
          )}

          {/* Dynamic Extra Detail Layout for Mega Pizza and Extras matching parent images */}
          {(activeTab === 'sauce-tomate' || activeTab === 'creme-fraiche') && (
            <div className="extra-options-box">
              <h4 className="extra-options-title">Options Méga & Suppléments</h4>
              <div className="extra-grid">
                <div className="extra-card">
                  <h5>Méga Pizza</h5>
                  <span className="price">1200 DA</span>
                </div>
                <div className="extra-card">
                  <h5>Méga Au Choix</h5>
                  <span className="price">1500 DA</span>
                </div>
                <div className="extra-card">
                  <h5>Bordure Fromage</h5>
                  <span className="price">1800 DA</span>
                </div>
                <div className="extra-card">
                  <h5>Au Choix Bordure</h5>
                  <span className="price">2000 DA</span>
                </div>
                <div className="extra-card">
                  <h5>Extra Fromage</h5>
                  <span className="price">2500 DA</span>
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <strong>Suppléments :</strong> Fromage Blanc (+50 DA) | Camembert (+100 DA) | Œuf (+50 DA)
              </div>
            </div>
          )}

          {activeTab === 'sandwiches' && (
            <div className="extra-options-box" style={{ textAlign: 'center' }}>
              <h4 className="extra-options-title" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Suppléments pour vos Sandwiches</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Fromage Blanc : <strong>50 DA</strong> &nbsp;|&nbsp; Camembert : <strong>100 DA</strong> &nbsp;|&nbsp; Œuf : <strong>50 DA</strong>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Localisation & Contact Section */}
      <section id="location" className="location">
        <div className="container">
          <div className="location-grid">
            <div className="contact-card">
              <h3>Venez nous voir !</h3>
              <p className="contact-subtitle">Retrouvez-nous pour déguster nos spécialités ou passez votre commande par téléphone.</p>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-info-text">
                    <h6>Adresse</h6>
                    <p>À côté de la mosquée Ibn Badis EPLF<br />Coordonnées GPS: 35.3502301, 1.3378714<br />Tiaret, Algérie</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={22} />
                  </div>
                  <div className="contact-info-text">
                    <h6>Téléphone (Commande / Info)</h6>
                    <a href="tel:0773053626" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                      0773053626
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock size={22} />
                  </div>
                  <div className="contact-info-text">
                    <h6>Horaires d'Ouverture</h6>
                    <p>Tous les jours : 11:30 – 23:30</p>
                  </div>
                </div>
              </div>

              <a href="tel:0773053626" className="btn btn-primary" style={{ width: '100%' }}>
                <Phone size={18} />
                Appeler pour commander
              </a>
              <a 
                href="https://www.google.com/maps?q=35.3502301,1.3378714" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '12px' }}
              >
                <Map size={18} />
                Itinéraire sur Google Maps
              </a>
            </div>

            {/* Google Maps embed code */}
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps?q=35.3502301,1.3378714&z=16&output=embed" 
                className="map-iframe"
                title="Google Maps Location of Pizza Mazouni"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            Pizza <span>Mazouni</span>
          </div>
          <p className="footer-tagline">
            L'authenticité et le goût inimitable de la pizza traditionnelle préparée avec soin à Tiaret.
          </p>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Accueil</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>À Propos</a></li>
            <li><a href="#menu" onClick={(e) => { e.preventDefault(); handleNavClick('menu'); }}>Menu</a></li>
            <li><a href="#location" onClick={(e) => { e.preventDefault(); handleNavClick('location'); }}>Localisation</a></li>
          </ul>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Pizza Mazouni. Tous droits réservés.</p>
            <div className="footer-bottom-links">
              <span style={{ marginRight: '10px' }}>Tél : <a href="tel:0773053626" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>0773053626</a></span>
              <span>Conçu avec passion</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal (For viewing original menu board images in large zoom format) */}
      {lightboxOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(239, 230, 216, 0.98)',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }} onClick={() => setLightboxOpen(false)}>
          <button 
            style={{ 
              position: 'absolute', 
              top: '24px', 
              right: '24px', 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid var(--border)', 
              color: 'var(--text-primary)', 
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow)'
            }}
            onClick={() => setLightboxOpen(false)}
          >
            <X size={24} />
          </button>
          
          <h4 style={{ 
            color: 'var(--accent)', 
            marginBottom: '20px', 
            textTransform: 'uppercase', 
            fontSize: '1.4rem', 
            letterSpacing: '0.05em' 
          }}>
            {getMenuTitle(activeTab)}
          </h4>
          
          <div 
            style={{
              maxWidth: '95vw',
              maxHeight: '80vh',
              overflow: 'auto',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow)',
              cursor: 'zoom-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={MENU_BOARD_IMAGES[activeTab]} 
              alt={`Menu Agrandi - ${activeTab}`} 
              style={{
                display: 'block',
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '80vh',
                margin: '0 auto'
              }}
              onClick={() => setLightboxOpen(false)}
            />
          </div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '20px', textAlign: 'center' }}>
            Pincez l'écran ou double-cliquez pour zoomer dans l'image sur mobile. &nbsp;|&nbsp;
            <a 
              href={MENU_BOARD_IMAGES[activeTab]} 
              download={`${activeTab}-menu.jpg`}
              style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: 600 }}
            >
              Télécharger l'image en pleine résolution
            </a>
          </p>
        </div>
      )}

      {/* Order Modal (Simulated Order Experience) */}
      {orderModalItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(58, 36, 24, 0.6)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setOrderModalItem(null)}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '30px',
            borderRadius: '8px',
            maxWidth: '480px',
            width: '100%',
            position: 'relative',
            boxShadow: 'var(--shadow)'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
              onClick={() => setOrderModalItem(null)}
            >
              <X size={20} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent)', marginBottom: '16px' }}>
              <Flame size={24} />
              <h4 style={{ fontSize: '1.4rem', textTransform: 'uppercase', margin: 0 }}>Commander par Téléphone</h4>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>
              Pour commander votre <strong>{orderModalItem.name}</strong> ({orderModalItem.price} DA) ou composer votre menu, appelez-nous directement. Nous préparons votre commande immédiatement pour une dégustation sur place ou à emporter !
            </p>
            
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              padding: '16px',
              borderRadius: '6px',
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>Numéro d'appel Direct</span>
              <a href="tel:0773053626" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <Phone size={24} />
                0773053626
              </a>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="tel:0773053626" className="btn btn-primary" style={{ flexGrow: 1 }}>
                Appeler
              </a>
              <button className="btn btn-secondary" onClick={() => setOrderModalItem(null)} style={{ flexGrow: 1 }}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
