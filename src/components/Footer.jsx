import { Link } from 'react-router-dom';
import { RESTAURANT_NAME, OPENING_HOURS, PHONE_NUMBER, COMPANY_NAME } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center">
              <img
                src="/src/assets/images/logo/Logo.png"
                alt="Punjabi Tadka Malta"
                className="h-16 w-auto"
              />
            </Link>
            <h3 className="mt-4 text-xl font-semibold">{RESTAURANT_NAME}</h3>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {Object.entries(OPENING_HOURS).map(([day, hours]) => (
                <li key={day} className="text-sm">
                  {day}: {hours}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">{PHONE_NUMBER}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; {RESTAURANT_NAME} {new Date().getFullYear()}, 
            Designed by {COMPANY_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;