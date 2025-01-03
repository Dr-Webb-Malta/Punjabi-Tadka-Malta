import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MenuSection = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-primary mb-12 text-center"
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
            className="menu-item"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xl font-medium text-white mb-2 transition-colors duration-300 hover:text-primary">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-sm">Traditional Punjabi Style</p>
              </div>
              <span className="text-primary text-xl font-semibold">{item.price}</span>
            </div>
          </motion.div>
        ))}
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