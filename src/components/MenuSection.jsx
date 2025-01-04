import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MenuSection = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-surface-tint py-16">
      <div className="container-large">
        {title && (
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-secondary mb-12 text-center"
          >
            {title}
          </motion.h3>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl p-6 
                        border border-secondary/10 hover:border-primary/30
                        shadow-sm hover:shadow-lg
                        transition-all duration-300 relative"
            >
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/20 
                            group-hover:border-primary transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/20 
                            group-hover:border-primary transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/20 
                            group-hover:border-primary transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/20 
                            group-hover:border-primary transition-colors duration-300" />

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-medium text-text mb-2 
                              group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-text-light text-sm">Traditional Punjabi Style</p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-primary/5 group-hover:bg-primary/10
                             transition-all duration-300">
                  <span className="text-lg font-semibold text-primary">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Decorative Line */}
              <motion.div 
                className="w-full h-px bg-primary/10 mt-4 group-hover:bg-primary/30
                          transition-colors duration-300"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

MenuSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MenuSection;