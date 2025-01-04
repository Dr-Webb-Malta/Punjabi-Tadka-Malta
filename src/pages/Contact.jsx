import { motion } from 'framer-motion';
import ContactInfo from '../components/ContactInfo';
import { SOCIAL_LINKS } from '../constants';
import SEO from '../components/SEO';

const Contact = () => {
  // Direct Google Maps link
  const mapsLink = "https://www.google.com/maps/place/Punjabi+Tadka/@35.8934938,14.4859565,17z/data=!3m1!4b1!4m6!3m5!1s0x130e5be4cb003895:0xc262eb0e32b761ce!8m2!3d35.8934895!4d14.4885314!16s%2Fg%2F11jzwr_zty";
  
  return (
    <div className="min-h-screen bg-white">
      <SEO page="contact" />
      {/* Contact Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-primary/90 to-primary/10">
        <div className="absolute inset-0">
          <div className="pattern-dots opacity-5" />
        </div>

        <div className="container-large relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Have questions or want to make a reservation? We're here to help!
            </p>
          </motion.div>

          {/* Contact Information */}
          <ContactInfo />

          {/* Order Buttons */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-white">
                Order Online
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
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
          </div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <div className="relative rounded-2xl overflow-hidden 
                         shadow-card hover:shadow-orange-hover transition-all duration-300
                         border border-primary/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.8842510543886!2d14.485956476954631!3d35.89349377941521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e5be4cb003895%3A0xc262eb0e32b761ce!2sPunjabi%20Tadka!5e0!3m2!1sen!2smt!4v1704303912248!5m2!1sen!2smt"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Punjabi Tadka Malta Location"
              />
            </div>

            {/* Get Directions Link */}
            <div className="mt-6 text-center">
              <a 
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text 
                         hover:text-primary transition-colors duration-300 text-lg
                         group"
              >
                <span>Get Directions</span>
                <svg 
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;