import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinkVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  const mobileNavLinkVariants = {
    initial: { scale: 1, x: 0 },
    hover: { 
      scale: 1.1,
      x: 10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      {/* Gradient Border Bottom */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-50 group"
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="h-16 w-auto"
              src="/src/assets/images/logo/Logo.png"
              alt="Punjabi Tadka Malta"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <motion.div
                key={item.name}
                variants={navLinkVariants}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  to={item.path}
                  className={`relative text-sm tracking-wider uppercase ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  } transition-colors duration-300`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-px w-full bg-primary"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-white hover:text-primary transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-8 h-8 flex flex-col items-center justify-center space-y-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-current transform transition-transform duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-current transition-opacity duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-current transform transition-transform duration-300"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
              {NAVIGATION.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={mobileNavLinkVariants}
                  initial="initial"
                  whileHover="hover"
                  custom={index}
                  className="my-4"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-light tracking-wider uppercase ${
                      location.pathname === item.path
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                    } transition-colors duration-300 flex items-center gap-2`}
                  >
                    {location.pathname === item.path && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="block w-2 h-2 rounded-full bg-primary"
                      />
                    )}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;