import { motion, useScroll, useTransform } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background with blur and parallax effect */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat backdrop-blur-xl"
          style={{ 
            backgroundImage: 'url("/assets/images/dishes/dish1.png")',
            transform: 'scale(1.1)',
            filter: 'blur(3px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50"></div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ opacity }}
          className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Authentic Punjabi Cuisine
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="block text-accent-yellow mt-2"
            >
              in Malta
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            A Flavorful Journey Awaits - Discover the authentic taste of Punjab with dishes 
            crafted from family recipes, fresh ingredients, and a passion for perfection.
          </motion.p>

          {/* Order Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
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
        </motion.div>

        {/* Centered Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          style={{ opacity }}
          className="absolute bottom-10 w-full flex flex-col items-center"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="text-white/70 text-sm mt-2"
          >
            Scroll to Explore
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;