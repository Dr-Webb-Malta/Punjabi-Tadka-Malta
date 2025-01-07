import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';
import SEO from '../components/SEO';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const renderMenuItem = (item) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group cursor-pointer bg-white hover:bg-secondary rounded-xl p-6 
                transition-all duration-300 shadow-sm hover:shadow-lg"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium text-text group-hover:text-white 
                     transition-colors duration-300">
          {item.name}
        </h4>
        <div className="px-4 py-2 rounded-lg bg-primary/5 group-hover:bg-white/10 
                     transition-colors duration-300">
          <span className="text-lg font-semibold text-primary group-hover:text-white">
            {item.price}
          </span>
        </div>
      </div>
    </motion.div>
  );

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'starters', name: 'Starters', icon: '🥘' },
    { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
    { id: 'nonVegetarian', name: 'Non Vegetarian', icon: '🍗' },
    { id: 'tandoori', name: 'Tandoori', icon: '🔥' },
    { id: 'breads', name: 'Breads', icon: '🫓' },
    { id: 'pastaAndRolls', name: 'Pasta & Rolls', icon: '🍝' },
    { id: 'riceAndBiryani', name: 'Rice & Biryani', icon: '🍚' },
    { id: 'sides', name: 'Sides', icon: '🥗' },
    { id: 'dessert', name: 'Dessert', icon: '🍨' },
    { id: 'lassi', name: 'Lassi', icon: '🥛' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
    { id: 'beer', name: 'Beer', icon: '🍺' },
    { id: 'spirits', name: 'Spirits', icon: '🥃' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO page="menu" />
      {/* Menu Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-primary/90 to-primary/10">
        <div className="absolute inset-0">
          <div className="pattern-dots" />
        </div>

        <div className="container-large relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animated-text">
              Our Menu
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Discover our extensive selection of authentic Punjabi dishes, 
              each crafted with traditional recipes and premium ingredients.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-lg font-medium 
                          transition-all duration-300 hover-float card-hover
                          ${selectedCategory === category.id 
                            ? 'bg-secondary text-white shadow-green btn-pulse' 
                            : 'bg-white/90 text-text hover:bg-secondary hover:text-white'
                          }`}
              >
                <span className="sparkle">{category.icon} {category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {selectedCategory === 'all' ? (
                <div className="space-y-16">
                  {Object.entries(menuData).map(([category, items]) => (
                    items && items.length > 0 && (
                      <motion.div 
                        key={category} 
                        className="mb-16 last:mb-0 grid-item-appear"
                      >
                        <h2 className="text-2xl font-bold text-text mb-8 capitalize animated-text">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {items.map((item) => renderMenuItem(item))}
                        </div>
                      </motion.div>
                    )
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuData[selectedCategory]?.map((item) => renderMenuItem(item))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-surface-tint py-12">
        <div className="container-small text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-light text-sm"
          >
            All prices are inclusive of VAT. Menu items may contain or come into 
            contact with allergens. Please inform our staff of any allergies.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Menu;