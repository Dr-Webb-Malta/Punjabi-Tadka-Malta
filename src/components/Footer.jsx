import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RESTAURANT_NAME, OPENING_HOURS, PHONE_NUMBER, COMPANY_NAME } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-black relative">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)',
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Section - Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <Link to="/" className="group mb-6 block">
              <img
                src="/public/assets/images/logo/Logo.png"
                alt={RESTAURANT_NAME}
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <h3 className="font-display text-2xl text-primary mb-4">{RESTAURANT_NAME}</h3>
            <p className="font-body text-gray-400 text-center md:text-left">
              Experience authentic Punjabi flavors in the heart of Malta
            </p>
          </motion.div>

          {/* Middle Section - Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h4 className="font-display text-xl text-primary mb-8">Opening Hours</h4>
            <ul className="space-y-4 font-body text-center">
              {Object.entries(OPENING_HOURS).map(([day, hours], index) => (
                <motion.li 
                  key={day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-400"
                >
                  <span className="text-white font-medium mr-3">{day}</span>
                  <span className="text-primary mx-2">•</span>
                  <span>{hours}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Section - Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="font-display text-xl text-primary mb-8">Get in Touch</h4>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="font-body text-2xl text-white hover:text-primary transition-colors duration-300 mb-6"
            >
              {PHONE_NUMBER}
            </a>
            <div className="font-body flex flex-col items-center md:items-end space-y-2">
              <p className="text-gray-400 text-center md:text-right">
                43 Triq J. Borg,
              </p>
              <p className="text-gray-400 text-center md:text-right">
                L MSD 1214
              </p>
              <p className="text-gray-400 text-center md:text-right">
                Malta
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="font-body text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {RESTAURANT_NAME}. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-2 font-body text-sm text-gray-500">
              <span>Designed by</span>
              <a 
                href="https://www.umanavapti.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors duration-300"
              >
                {COMPANY_NAME}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;