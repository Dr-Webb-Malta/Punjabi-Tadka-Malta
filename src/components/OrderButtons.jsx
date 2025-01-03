import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const OrderButtons = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="flex flex-col sm:flex-row gap-6 justify-center"
  >
    <a 
      href={SOCIAL_LINKS.BOLT} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn-primary"
    >
      Order from Bolt
    </a>
    <a 
      href={SOCIAL_LINKS.WOLT} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn-secondary"
    >
      Order from Wolt
    </a>
  </motion.div>
);

export default OrderButtons;