import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.about'), path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Mavi Collision Center" className="h-20 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-navy px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              {t('nav.contact')}
            </Link>
            
            <div className="flex items-center space-x-2 border-l border-steel pl-4">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded transition-colors duration-200 ${
                  i18n.language === 'en' ? 'bg-primary text-white' : 'hover:bg-steel'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className={`px-3 py-1 rounded transition-colors duration-200 ${
                  i18n.language === 'es' ? 'bg-primary text-white' : 'hover:bg-steel'
                }`}
              >
                ES
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-navy-light transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-navy border-t border-steel">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive(link.path)
                  ? 'bg-primary text-white'
                  : 'hover:bg-steel'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 bg-accent text-navy rounded-lg font-semibold text-center hover:bg-yellow-400 transition-colors duration-200"
          >
            {t('nav.contact')}
          </Link>
          
          <div className="flex items-center justify-center space-x-2 pt-2">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-4 py-2 rounded transition-colors duration-200 ${
                i18n.language === 'en' ? 'bg-primary text-white' : 'bg-steel'
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className={`px-4 py-2 rounded transition-colors duration-200 ${
                i18n.language === 'es' ? 'bg-primary text-white' : 'bg-steel'
              }`}
            >
              Español
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
