import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const dishes = [
    { 
      id: 1, 
      src: '/assets/images/dishes/dish2.png', 
      alt: 'Chicken Vindaloo', 
      category: 'Main Course',
      description: 'Boneless tandoori chicken cooked in vindaloo spicy sauce'
    },
    { 
      id: 2, 
      src: '/assets/images/dishes/dish3.png', 
      alt: 'Mixed Vegetable', 
      category: 'Main Veg',
      description: 'All mixed vegetables cooked in Indian spices'
    },
    { 
      id: 3, 
      src: '/assets/images/dishes/dish4.png', 
      alt: 'Dal Tadka', 
      category: 'Lentils',
      description: 'Yellow lentils cooked in all purpose gravy'
    },
    { 
      id: 4, 
      src: '/assets/images/dishes/dish5.png', 
      alt: 'Tawa Chicken', 
      category: 'Non-Veg',
      description: 'Marinated chicken sauteed with cubed onion and capsicum with mild gravy'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots" />
      </div>

      <div className="container-large relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Culinary Masterpieces
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            A visual journey through our signature dishes, each crafted with passion 
            and expertise to bring you authentic Punjabi flavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedImage(dish)}
              className="group cursor-pointer relative aspect-square 
                       overflow-hidden rounded-2xl bg-white shadow-card
                       hover:shadow-orange-hover transition-all duration-300"
            >
              {/* Image */}
              <img
                src={dish.src}
                alt={dish.alt}
                className="w-full h-full object-cover transform 
                         transition-transform duration-700 
                         group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t 
                            from-primary/90 via-primary/40 to-transparent 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 
                              transform translate-y-4 
                              group-hover:translate-y-0 
                              transition-transform duration-500">
                  <span className="block text-white text-sm font-medium mb-2">
                    {dish.category}
                  </span>
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {dish.alt}
                  </h3>
                  <p className="text-white/90 text-sm opacity-0 
                              group-hover:opacity-100 
                              transition-opacity duration-500 delay-100">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center 
                     p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl 
                       overflow-hidden shadow-card"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-text 
                         hover:text-primary transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-6">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-primary text-xl font-semibold mb-2">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-text-light">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;