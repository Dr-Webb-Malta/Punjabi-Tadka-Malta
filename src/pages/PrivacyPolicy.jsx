import { motion } from 'framer-motion';
import { RESTAURANT_NAME, PHONE_NUMBER } from '../constants';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose max-w-none"
          >
            <div className="space-y-8 text-text-light">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary">
                  Privacy Policy for {RESTAURANT_NAME}
                </h2>
                
                <p className="text-sm text-text-light/80">
                  Effective Date: 01/01/2024
                </p>

                <p>
                  Punjabi Tadka Malta is committed to protecting the privacy of our website visitors. 
                  This privacy policy outlines how we handle any information collected through our website.
                </p>

                <p>
                  Punjabi Tadka Malta, is a company registered under the Laws of Malta, having its registered 
                  address at 43 Triq J. Borg, L MSD 1214 Malta, hereinafter referred to as the "Company".
                </p>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Information Collection</h3>
                  <p>
                    Our website is purely informational and does not collect any personal data from visitors. 
                    We do not use cookies or any other tracking technologies to gather information about your 
                    browsing behavior or preferences.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Third-Party Links</h3>
                  <p>
                    Our website contains links to third-party websites, such as Bolt and Wolt, for food delivery 
                    services. Please note that we are not responsible for the privacy practices or content of 
                    these third-party websites. We encourage you to review the privacy policies of these websites 
                    before providing any personal information.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Changes to Policy</h3>
                  <p>
                    We may update our privacy policy periodically without notice. Any changes will be posted on 
                    this page with a new effective date.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Contact Us</h3>
                  <p>
                    If you have any questions or concerns about our privacy policy, please contact us at:
                  </p>
                  <div className="ml-4">
                    <p className="font-medium">{RESTAURANT_NAME}</p>
                    <p>43 Triq J. Borg, L MSD 1214 Malta</p>
                    <p>Phone: {PHONE_NUMBER}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;