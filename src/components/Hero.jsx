import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/images/dishes/dish1.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-surface"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text mb-6">
            Authentic Punjabi Cuisine
            <span className="block text-secondary mt-2">in Malta</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto mb-12">
            A Flavorful Journey Awaits - Discover the authentic taste of Punjab with dishes 
            crafted from family recipes, fresh ingredients, and a passion for perfection.
          </p>

          {/* Order Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={SOCIAL_LINKS.BOLT}
              target="_blank"
              rel="noopener noreferrer"
              className="order-button order-button-primary"
            >
              <img 
                src="/assets/Button1.png" 
                alt="Order from Bolt Food"
                className="h-12 w-auto"
              />
            </a>
            <a 
              href={SOCIAL_LINKS.WOLT}
              target="_blank"
              rel="noopener noreferrer"
              className="order-button order-button-secondary"
            >
              <img 
                src="/assets/Button2.png" 
                alt="Order from Wolt"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-text/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-text rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;