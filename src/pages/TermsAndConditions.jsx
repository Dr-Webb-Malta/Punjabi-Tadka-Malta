import { motion } from 'framer-motion';
import { RESTAURANT_NAME, PHONE_NUMBER } from '../constants';

const TermsAndConditions = () => {
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
              Terms & Conditions
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
                  Terms & Conditions for {RESTAURANT_NAME}
                </h2>

                <p>
                  These Terms & Conditions ("Terms") govern your use of the website [Your Website URL] 
                  (the "Service") operated by Punjabi Tadka Malta ("Punjabi Tadka," "we," "us," or "our").
                </p>

                <p>
                  Please read these Terms carefully before accessing or using the Service. By accessing 
                  or using the Service, you agree to be bound by these Terms. If you disagree with any 
                  part of the Terms, then you may not access the Service.
                </p>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Intellectual Property</h3>
                  <p>
                    The Service and its original content, features, and functionality are and will remain 
                    the exclusive property of Punjabi Tadka Malta and its licensors. The Service is protected 
                    by copyright, trademark, and other laws of both Malta and foreign countries. Our trademarks 
                    and trade dress may not be used in connection with any product or service without the prior 
                    written consent of Punjabi Tadka Malta.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Links to Other Websites</h3>
                  <p>
                    Our Service may contain links to third-party websites or services, such as Bolt and Wolt, 
                    that are not owned or controlled by Punjabi Tadka Malta. Punjabi Tadka Malta has no control 
                    over, and assumes no responsibility for, the content, privacy policies, or practices of any 
                    third-party websites or services. You further acknowledge and agree that Punjabi Tadka Malta 
                    shall not be responsible or liable, directly or indirectly, for any damage or loss caused or 
                    alleged to be caused by or in connection with the use of or reliance on any such content, 
                    goods, or services available on or through any such websites or services.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Limitation of Liability</h3>
                  <p>
                    In no event shall Punjabi Tadka Malta, its affiliates, or their licensors, service providers, 
                    employees, agents, officers, or directors be liable for damages of any kind, under any legal 
                    theory, arising out of or in connection with your use, or inability to use, the Service, any 
                    websites linked to it, any content on the Service or such other websites, including any direct, 
                    indirect, special, incidental, consequential, or punitive damages.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Governing Law</h3>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of Malta, 
                    without regard to its conflict of law provisions.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Changes</h3>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    If a revision is material, we will try to provide at least 30 days' notice prior to any new 
                    terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-semibold text-secondary">Contact Us</h3>
                  <p>
                    If you have any questions about these Terms, please contact us at:
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

export default TermsAndConditions;