import { motion } from 'framer-motion';

const Gallery = () => {
  const dishes = [
    { id: 2, src: '/src/assets/images/dishes/dish2.png', alt: 'Butter Chicken', description: 'Rich and Creamy Classic' },
    { id: 3, src: '/src/assets/images/dishes/dish3.png', alt: 'Tandoori Platter', description: 'Grilled to Perfection' },
    { id: 4, src: '/src/assets/images/dishes/dish4.png', alt: 'Dal Makhani', description: 'Slow-cooked Delicacy' },
    { id: 5, src: '/src/assets/images/dishes/dish5.png', alt: 'Biryani Special', description: 'Aromatic Rice Dish' }
  ];

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">Culinary Masterpieces</h2>
          <p className="text-body max-w-2xl mx-auto">
            Experience the artistry of our chefs through these signature dishes,
            each telling a story of tradition and excellence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-square border-animated"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={dish.src}
                  alt={dish.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{dish.alt}</h3>
                    <p className="text-gray-300 text-sm">{dish.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;