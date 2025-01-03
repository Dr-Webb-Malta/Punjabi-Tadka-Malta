import { menuData } from '../data/menuData';
import { useState } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    all: 'All Items',
    starters: 'Starters',
    mainCourseVeg: 'Main Course (Veg)',
    mainCourseNonVeg: 'Main Course (Non-Veg)',
    tandoori: 'Tandoori Specialties',
    breads: 'Breads',
    riceAndBiryani: 'Rice & Biryani',
    sides: 'Sides',
    drinks: 'Drinks'
  };

  const renderMenuItem = (item, index) => (
    <div 
      key={index}
      className="flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-primary transition-all duration-300"
    >
      <span className="text-white text-lg">{item.name}</span>
      <span className="text-primary font-semibold text-lg">{item.price}</span>
    </div>
  );

  const renderSection = (title, items) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-primary mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => renderMenuItem(item, index))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Menu Hero Section with Background */}
      <div className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/src/assets/images/background/Menuoverlay.png")'
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Our Menu
          </h1>

          {/* Category Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(categories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-primary text-white'
                    : 'bg-black/50 text-white hover:bg-primary/20'
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Menu Sections */}
          {selectedCategory === 'all' ? (
            <>
              {renderSection('Starters', menuData.starters)}
              {renderSection('Main Course - Vegetarian', menuData.mainCourseVeg)}
              {renderSection('Main Course - Non-Vegetarian', menuData.mainCourseNonVeg)}
              {renderSection('Tandoori Specialties', menuData.tandoori)}
              {renderSection('Breads', menuData.breads)}
              {renderSection('Rice & Biryani', menuData.riceAndBiryani)}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {renderSection('Sides', menuData.sides)}
                {renderSection('Drinks', menuData.softDrinks)}
              </div>
            </>
          ) : (
            renderSection(
              categories[selectedCategory],
              selectedCategory === 'drinks' ? menuData.softDrinks : menuData[selectedCategory]
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;