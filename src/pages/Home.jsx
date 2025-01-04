import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Home = () => {
  // Featured dishes data
  const featured = [
    { name: "Butter Chicken", price: "€15.95" },
    { name: "Palak Paneer", price: "€12.95" },
    { name: "Chicken Biryani", price: "€14.95" },
    { name: "Dal Makhani", price: "€11.95" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO page="home" />
      <Hero />
      <AboutSection />
      
      {/* Featured Dishes Section */}
      <section className="py-16 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-secondary mb-12"
          >
            Our Signature Dishes
          </motion.h2>
          <MenuSection items={featured} title="" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
                 backgroundSize: '40px 40px' 
               }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-text mb-16"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Authentic Flavors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-lg bg-white/50 backdrop-blur-sm 
                       border border-primary/10 hover:border-primary/30 
                       shadow-card hover:shadow-orange-hover 
                       transition-all duration-500"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/assets/images/dishes/dish2.png" 
                  alt="Authentic Flavors"
                  className="w-full h-full object-cover transition-transform 
                           duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Authentic Flavors
              </h3>
              <p className="text-text-light text-center leading-relaxed">
                Traditional Punjabi recipes passed down through generations, preserving the authentic 
                taste of North India in every dish.
              </p>
            </motion.div>

            {/* Fresh Ingredients */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-lg bg-white/50 backdrop-blur-sm 
                       border border-primary/10 hover:border-primary/30 
                       shadow-card hover:shadow-orange-hover 
                       transition-all duration-500"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/assets/images/dishes/dish3.png" 
                  alt="Fresh Ingredients"
                  className="w-full h-full object-cover transition-transform 
                           duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Fresh Ingredients
              </h3>
              <p className="text-text-light text-center leading-relaxed">
                Quality ingredients sourced daily, ensuring the finest taste and freshness 
                in every dish we serve to our valued guests.
              </p>
            </motion.div>

            {/* Expert Chefs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group p-8 rounded-lg bg-white/50 backdrop-blur-sm 
                       border border-primary/10 hover:border-primary/30 
                       shadow-card hover:shadow-orange-hover 
                       transition-all duration-500"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/assets/images/dishes/dish4.png" 
                  alt="Expert Chefs"
                  className="w-full h-full object-cover transition-transform 
                           duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Expert Chefs
              </h3>
              <p className="text-text-light text-center leading-relaxed">
                Skilled chefs with years of experience in Indian cuisine, crafting each dish 
                with expertise and passion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Gallery />
    </div>
  );
};

export default Home;