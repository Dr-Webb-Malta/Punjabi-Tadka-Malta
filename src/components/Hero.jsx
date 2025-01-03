import { motion } from 'framer-motion';
import OrderButtons from './OrderButtons';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/src/assets/images/dishes/dish1.png")',
          transform: 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Authentic Punjabi
            <span className="block text-primary mt-2">Cuisine</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Experience the rich flavors of Punjab with our carefully crafted dishes, 
            passed down through generations of culinary excellence.
          </p>

          <OrderButtons />
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