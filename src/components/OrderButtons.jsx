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
      className="order-button order-button-primary group"
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-yellow opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src="/assets/Button1.png" 
          alt="Order from Bolt Food" 
          className="relative z-10 h-12 w-auto transform 
                   transition-transform duration-300 
                   group-hover:scale-105"
        />
      </div>
    </a>

    <a 
      href={SOCIAL_LINKS.WOLT} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="order-button order-button-secondary group"
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-purple opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src="/assets/Button2.png" 
          alt="Order from Wolt" 
          className="relative z-10 h-12 w-auto transform 
                   transition-transform duration-300 
                   group-hover:scale-105"
        />
      </div>
    </a>
  </motion.div>
);

export default OrderButtons;