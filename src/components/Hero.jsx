import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/images/dishes/dish1.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Authentic Punjabi Cuisine
            <span className="block text-primary mt-2">in Malta</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            A Flavorful Journey Awaits - Discover the authentic taste of Punjab with dishes 
            crafted from family recipes, fresh ingredients, and a passion for perfection.
          </p>

          {/* Order Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={SOCIAL_LINKS.BOLT}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[280px] h-[72px] transition-transform hover:scale-105 duration-300"
            >
              <img 
                src="/assets/Button1.png" 
                alt="Order from Bolt Food"
                className="w-full h-full object-contain"
              />
            </a>
            <a 
              href={SOCIAL_LINKS.WOLT}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[280px] h-[72px] transition-transform hover:scale-105 duration-300"
            >
              <img 
                src="/assets/Button2.png" 
                alt="Order from Wolt"
                className="w-full h-full object-contain"
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
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;