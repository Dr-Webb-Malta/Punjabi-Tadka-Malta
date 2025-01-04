import { useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-bold text-secondary mb-4">Oops!</h1>
        <p className="text-text-light mb-8">
          {error.statusText || error.message}
        </p>
        <a 
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg 
                   hover:bg-primary-dark transition-colors duration-300"
        >
          Return Home
        </a>
      </motion.div>
    </div>
  );
};

export default ErrorBoundary;