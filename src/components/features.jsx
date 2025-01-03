import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "Authentic Flavors",
      description: "Traditional Punjabi recipes passed down through generations, preserving the authentic taste of North India in every dish.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      title: "Fresh Ingredients",
      description: "Quality ingredients sourced daily, ensuring the finest taste and freshness in every dish we serve to our valued guests.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Expert Chefs",
      description: "Skilled chefs with years of experience in Indian cuisine, crafting each dish with expertise and passion.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-purple relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="pattern-dots" />
      </div>

      <div className="container-large relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-surface/95 backdrop-blur-sm p-8 rounded-2xl
                           shadow-card hover:shadow-card-hover
                           transform transition-all duration-500
                           hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl
                             flex items-center justify-center mb-6
                             text-primary group-hover:scale-110
                             transition-transform duration-300"
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;