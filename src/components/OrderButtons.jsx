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
      className="group bg-primary hover:bg-primary-dark rounded-xl p-2 
                 transition-all duration-300 hover:-translate-y-1
                 shadow-orange hover:shadow-orange-hover"
    >
      <img 
        src="/assets/Button1.png" 
        alt="Order from Bolt Food" 
        className="h-12 w-auto transform transition-transform duration-300 
                   group-hover:scale-105"
      />
    </a>

    <a 
      href={SOCIAL_LINKS.WOLT} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group bg-secondary hover:bg-secondary-dark rounded-xl p-2 
                 transition-all duration-300 hover:-translate-y-1
                 shadow-green hover:shadow-green-hover"
    >
      <img 
        src="/assets/Button2.png" 
        alt="Order from Wolt" 
        className="h-12 w-auto transform transition-transform duration-300 
                   group-hover:scale-105"
      />
    </a>
  </motion.div>
);

export default OrderButtons;