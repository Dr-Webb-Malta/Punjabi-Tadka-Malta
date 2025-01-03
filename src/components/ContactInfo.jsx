import { motion } from 'framer-motion';
import { RESTAURANT_ADDRESS, PHONE_NUMBER, OPENING_HOURS } from '../constants';

const ContactInfo = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left border-animated p-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Visit Us</h3>
            <p className="text-gray-300 text-lg">{RESTAURANT_ADDRESS}</p>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center border-animated p-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Opening Hours</h3>
            <div className="space-y-3">
              {Object.entries(OPENING_HOURS).map(([day, hours]) => (
                <p key={day} className="text-gray-300">
                  <span className="font-medium text-primary">{day}:</span>
                  <span className="ml-2">{hours}</span>
                </p>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right border-animated p-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Contact</h3>
            <p className="text-gray-300 text-lg">{PHONE_NUMBER}</p>
            <p className="text-gray-400 mt-2">For Reservations & Inquiries</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;