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
      className="relative p-6 bg-black/40 backdrop-blur-sm border border-primary/10 
                 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="text-lg font-medium text-white group-hover:text-primary transition-colors">
            {item.name}
          </h4>
          <p className="mt-1 text-sm text-gray-400">Traditional Punjabi Style</p>
        </div>
        <div className="text-lg font-semibold text-primary">{item.price}</div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Menu Hero Section */}
      <div className="relative py-24">
        {/* Background with darker overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/public/assets/images/background/Menuoverlay.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Our Menu
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our extensive selection of authentic Punjabi dishes, 
              each crafted with traditional recipes and premium ingredients.
            </p>
          </motion.div>

          {/* Desktop Category Navigation */}
          <div className="hidden md:block mb-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                             ${selectedCategory === 'all'
                               ? 'bg-primary/90 text-black'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  🍽️ All Items
                </button>
                <button
                  onClick={() => setSelectedCategory('starters')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                             ${selectedCategory === 'starters'
                               ? 'bg-primary/90 text-black'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  🥘 Starters
                </button>
                <button
                  onClick={() => setSelectedCategory('vegetarian')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                             ${selectedCategory === 'vegetarian'
                               ? 'bg-primary/90 text-black'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  🥬 Vegetarian
                </button>
                <button
                  onClick={() => setSelectedCategory('nonVegetarian')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                             ${selectedCategory === 'nonVegetarian'
                               ? 'bg-primary/90 text-black'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  🍗 Non Vegetarian
                </button>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedCategory('tandoori')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                             ${selectedCategory === 'tandoori'
                               ? 'bg-primary/90 text-black'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  🔥 Tandoori
                </button>
                <button
                  onClick={() => setSelectedCategory('breads')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                             ${selectedCategory === 'breads'
                               ? 'bg-primary/90 text-black'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  🫓 Breads
                </button>
                <button
                  onClick={() => setSelectedCategory('riceAndBiryani')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                             ${selectedCategory === 'riceAndBiryani'
                               ? 'bg-primary/90 text-black'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  🍚 Rice & Biryani
                </button>
                <button
                  onClick={() => setSelectedCategory('softDrinks')}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                             ${selectedCategory === 'softDrinks'
                               ? 'bg-primary/90 text-black'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  🥤 Beverages
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Category Navigation */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 mb-8">
            <div className="flex space-x-3 min-w-max pb-4">
              {[
                { id: 'all', name: 'All Items', icon: '🍽️' },
                { id: 'starters', name: 'Starters', icon: '🥘' },
                { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
                { id: 'nonVegetarian', name: 'Non Vegetarian', icon: '🍗' },
                { id: 'tandoori', name: 'Tandoori', icon: '🔥' },
                { id: 'breads', name: 'Breads', icon: '🫓' },
                { id: 'riceAndBiryani', name: 'Rice & Biryani', icon: '🍚' },
                { id: 'softDrinks', name: 'Beverages', icon: '🥤' }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 whitespace-nowrap
                             border border-primary/20
                             ${selectedCategory === category.id
                               ? 'bg-primary/90 text-black border-primary'
                               : 'bg-black/30 text-white hover:bg-primary/10'}`}
                >
                  <span>{category.icon} {category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Sections */}
          <div className="space-y-16">
            <AnimatePresence mode="wait">
              {selectedCategory === 'all' ? (
                // All categories
                <motion.div
                  key="all-categories"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {['starters', 'vegetarian', 'nonVegetarian', 'tandoori', 'breads', 'riceAndBiryani', 'softDrinks'].map((category) => (
                    menuData[category] && (
                      <div key={category} className="mb-16 last:mb-0">
                        <h2 className="text-2xl font-bold text-primary mb-8 capitalize">
                          {category === 'softDrinks' ? 'Beverages' : 
                           category === 'nonVegetarian' ? 'Non Vegetarian' :
                           category === 'riceAndBiryani' ? 'Rice & Biryani' :
                           category}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {menuData[category].map((item) => renderMenuItem(item))}
                        </div>
                      </div>
                    )
                  ))}
                </motion.div>
              ) : (
                // Single category
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuData[selectedCategory]?.map((item) => renderMenuItem(item))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-black/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            All prices are inclusive of VAT. Menu items may contain or come into 
            contact with allergens. Please inform our staff of any allergies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;