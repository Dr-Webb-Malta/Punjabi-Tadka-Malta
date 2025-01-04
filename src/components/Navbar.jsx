import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION, RESTAURANT_NAME } from '../constants';

const NavLink = ({ item, isActive, scrolled }) => {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={item.path}
        className={`px-4 py-2 relative text-lg transition-colors duration-300 ${
          isActive 
            ? 'text-secondary' 
            : scrolled 
              ? 'text-primary hover:text-secondary'
              : 'text-white hover:text-secondary'
        }`}
      >
        <span className="relative z-10">{item.name}</span>
        <motion.span
          className="absolute inset-0 rounded-lg -z-0"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
};

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-card' : 'bg-transparent'
    }`}>
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
              src="/assets/images/logo/Logo.png"
              alt={RESTAURANT_NAME}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION.map((item) => (
              <NavLink 
                key={item.name}
                item={item}
                isActive={location.pathname === item.path}
                scrolled={scrolled}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-50 p-2 rounded-lg
                       ${isOpen 
                         ? 'bg-white text-primary' 
                         : scrolled 
                           ? 'text-primary' 
                           : 'text-white'
                       }`}
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
            className="fixed inset-0 z-40 md:hidden bg-white"
          >
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
              {NAVIGATION.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="my-4"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-light tracking-wider ${
                      location.pathname === item.path
                        ? 'text-secondary'
                        : 'text-primary hover:text-secondary'
                    }`}
                  >
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