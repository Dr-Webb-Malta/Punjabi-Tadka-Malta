import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MenuSection = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-surface-light py-16">
      <div className="container-large">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-text mb-12 text-center"
        >
          {title}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="menu-item group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-medium text-text mb-2 
                               transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                  </h4>
                  <p className="text-text-light text-sm">Traditional Punjabi Style</p>
                </div>
                <span className="price-tag transform transition-transform duration-300 
                                group-hover:scale-110">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MenuSection;