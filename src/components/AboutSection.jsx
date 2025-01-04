import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots"></div>
      </div>
      
      <div className="container-large relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-8 leading-tight">
              A Legacy of
              <span className="block text-primary mt-2">Punjabi Flavors</span>
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Punjabi Tadka Malta isn&apos;t just a restaurant; it&apos;s a celebration of culture
              and cuisine. Our story began with a dream to introduce Malta to the authentic 
              flavors of North India.
            </p>
            <p className="text-text-light text-lg leading-relaxed">
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
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src="/assets/images/dishes/dish6.png"
                alt="Restaurant Ambiance"
                className="object-cover w-full h-full transform hover:scale-105 
                         transition-transform duration-700"
              />
              <div className="absolute inset-0 border-2 border-primary/20 
                            rounded-2xl scale-90 hover:scale-95 
                            transition-transform duration-700"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 
                          bg-primary rounded-full opacity-20 
                          blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 
                          bg-secondary rounded-full opacity-20 
                          blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;