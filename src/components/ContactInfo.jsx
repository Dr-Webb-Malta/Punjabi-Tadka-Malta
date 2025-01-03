import { motion } from 'framer-motion';
import { RESTAURANT_ADDRESS, PHONE_NUMBER, OPENING_HOURS } from '../constants';

const ContactInfo = () => {
  return (
    <section className="relative py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
               backgroundSize: '30px 30px' 
             }} />
      </div>

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Opening Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-primary/10 
                   hover:border-primary/30 transition-all duration-500"
        >
          <h3 className="text-2xl font-display text-primary mb-6 text-center">Opening Hours</h3>
          <div className="space-y-4">
            {Object.entries(OPENING_HOURS).map(([day, hours], index) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-between items-center group"
              >
                <span className="text-gray-300 font-medium group-hover:text-primary transition-colors">
                  {day}
                </span>
                <div className="flex items-center">
                  <span className="w-12 h-px bg-primary/30 mx-4 group-hover:bg-primary/50 transition-colors"></span>
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
          className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-primary/10 
                   hover:border-primary/30 transition-all duration-500 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-display text-primary mb-8 text-center">Contact Us</h3>
          
          <div className="space-y-6">
            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="text-2xl text-gray-300 hover:text-primary transition-colors inline-flex items-center gap-3 justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_NUMBER}
              </a>
              <p className="text-gray-400 mt-2">For Reservations & Inquiries</p>
            </motion.div>

            {/* Address */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <a 
                href="https://www.google.com/maps?q=Punjabi+Tadka+Malta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors inline-flex flex-col items-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">{RESTAURANT_ADDRESS}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;