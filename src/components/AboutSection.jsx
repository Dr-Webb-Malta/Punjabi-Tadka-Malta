import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
              A Legacy of
              <span className="block text-white mt-2">Punjabi Flavors</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Punjabi Tadka Malta isn't just a restaurant; it's a celebration of culture
              and cuisine. Our story began with a dream to introduce Malta to the authentic 
              flavors of North India.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Each dish tells a story of tradition, handcrafted with time-honored recipes 
              passed through generations. Step into our world and let us take you on a 
              culinary journey that brings Punjab closer to your heart.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src="/assets/images/dishes/dish6.png"
                alt="Restaurant Ambiance"
                className="object-cover w-full h-full transform scale-110 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-primary/20 scale-90 hover:scale-95 transition-transform duration-700"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;