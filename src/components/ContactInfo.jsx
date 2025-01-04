import { motion } from 'framer-motion';
import { RESTAURANT_ADDRESS, PHONE_NUMBER, OPENING_HOURS } from '../constants';

const ContactInfo = () => {
  return (
    <section className="py-24 bg-surface-tint relative">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots"></div>
      </div>

      {/* Content */}
      <div className="container-large relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Opening Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-white via-white to-primary/5 p-8 rounded-xl relative
                     border border-secondary/10 hover:border-primary/30
                     shadow-sm hover:shadow-lg
                     transition-all duration-300"
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/20 
                          group-hover:border-primary transition-colors duration-300" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/20 
                          group-hover:border-primary transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/20 
                          group-hover:border-primary transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/20 
                          group-hover:border-primary transition-colors duration-300" />

            <h3 className="text-2xl font-display text-secondary mb-6 text-center">Opening Hours</h3>
            <div className="space-y-4">
              {Object.entries(OPENING_HOURS).map(([day, hours], index) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center group/time cursor-default
                           hover:bg-white rounded-lg p-2 transition-all duration-300"
                >
                  <span className="text-text font-medium 
                                 group-hover/time:text-primary transition-colors">
                    {day}
                  </span>
                  <div className="flex items-center">
                    <span className="w-12 h-px bg-primary/30 mx-4 
                                   group-hover/time:bg-primary transition-colors"></span>
                    <span className="text-primary">{hours}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-gradient-to-br from-white via-white to-primary/5 p-8 rounded-xl relative
                     border border-secondary/10 hover:border-primary/30
                     shadow-sm hover:shadow-lg
                     transition-all duration-300
                     flex flex-col justify-center"
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/20 
                          group-hover:border-primary transition-colors duration-300" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/20 
                          group-hover:border-primary transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/20 
                          group-hover:border-primary transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/20 
                          group-hover:border-primary transition-colors duration-300" />

            <h3 className="text-2xl font-display text-secondary mb-8 text-center">Contact Us</h3>
            
            <div className="space-y-8">
              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center hover:bg-white rounded-lg p-4 transition-all duration-300"
              >
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-2xl text-text hover:text-primary 
                           transition-colors inline-flex items-center 
                           gap-3 justify-center group"
                >
                  <svg 
                    className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  {PHONE_NUMBER}
                </a>
                <p className="text-text-light mt-2">For Reservations & Inquiries</p>
              </motion.div>

              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center hover:bg-white rounded-lg p-4 transition-all duration-300"
              >
                <a 
                  href="https://www.google.com/maps?q=Punjabi+Tadka+Malta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-primary transition-colors 
                           inline-flex flex-col items-center gap-2 group"
                >
                  <svg 
                    className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  <span className="text-lg">{RESTAURANT_ADDRESS}</span>
                </a>

                {/* Decorative Line */}
                <motion.div 
                  className="w-full h-px bg-primary/10 mt-6 group-hover:bg-primary/30
                            transition-colors duration-300"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;