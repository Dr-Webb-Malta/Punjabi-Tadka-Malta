import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const renderMenuItem = (item) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="menu-item"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="text-lg font-medium text-text group-hover:text-primary 
                      transition-colors">
            {item.name}
          </h4>
          <p className="mt-1 text-sm text-text-light">Traditional Punjabi Style</p>
        </div>
        <div className="text-lg font-semibold price-tag">{item.price}</div>
      </div>
    </motion.div>
  );

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'starters', name: 'Starters', icon: '🥘' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
    { id: 'nonVegetarian', name: 'Non Vegetarian', icon: '🍗' },
    { id: 'tandoori', name: 'Tandoori', icon: '🔥' },
    { id: 'breads', name: 'Breads', icon: '🫓' },
    { id: 'riceAndBiryani', name: 'Rice & Biryani', icon: '🍚' },
    { id: 'softDrinks', name: 'Beverages', icon: '🥤' }
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Menu Hero Section */}
      <div className="relative py-24 bg-gradient-yellow">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
              Our Menu
            </h1>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Discover our extensive selection of authentic Punjabi dishes, 
              each crafted with traditional recipes and premium ingredients.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`menu-category-tab ${
                  selectedCategory === category.id ? 'active' : ''
                }`}
              >
                <span>{category.icon} {category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            {selectedCategory === 'all' ? (
              // All categories
              <div className="space-y-16">
                {Object.entries(menuData).map(([category, items]) => (
                  items && (
                    <div key={category} className="mb-16 last:mb-0">
                      <h2 className="text-2xl font-bold text-text mb-8 capitalize">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h2>
                      <div className="grid-menu">
                        {items.map((item) => renderMenuItem(item))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            ) : (
              // Single category
              <div className="grid-menu">
                {menuData[selectedCategory]?.map((item) => renderMenuItem(item))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-surface-light py-12">
        <div className="container-small text-center">
          <p className="text-text-light text-sm">
            All prices are inclusive of VAT. Menu items may contain or come into 
            contact with allergens. Please inform our staff of any allergies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;