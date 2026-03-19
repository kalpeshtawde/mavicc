import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
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
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Mavi Collision Center" className="h-20 w-auto" />
            </Link>
            
            {/* Call Now Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="tel:+17627262000"
                className="flex items-center space-x-2 bg-primary hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-lg text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(762) 726-2000</span>
              </a>
              <a
                href="tel:+16786915109"
                className="flex items-center space-x-2 bg-accent hover:bg-yellow-400 text-navy px-3 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-lg text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(678) 691-5109</span>
              </a>
            </div>
          </div>

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
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`text-lg font-medium transition-colors duration-200 flex items-center ${
                  isActive('/services')
                    ? 'text-primary border-b-2 border-primary'
                    : 'hover:text-primary'
                }`}
              >
                {t('nav.services')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white text-navy rounded-lg shadow-xl py-2">
                    <Link
                      to="/services/body-repair"
                      className="block px-4 py-3 hover:bg-ice transition-colors duration-200"
                    >
                      <div className="font-semibold">Body Repair Services</div>
                      <div className="text-sm text-slate">Collision, Paint, Dent Repair</div>
                    </Link>
                    <Link
                      to="/services/mechanical"
                      className="block px-4 py-3 hover:bg-ice transition-colors duration-200"
                    >
                      <div className="font-semibold">Mechanical Services</div>
                      <div className="text-sm text-slate">Engine, Transmission, Brakes</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
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
          {/* Call Now Buttons - Mobile */}
          <a
            href="tel:+17627262000"
            className="flex items-center justify-center space-x-2 bg-primary hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call: (762) 726-2000</span>
          </a>
          <a
            href="tel:+16786915109"
            className="flex items-center justify-center space-x-2 bg-accent hover:bg-yellow-400 text-navy px-4 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call: (678) 691-5109</span>
          </a>
          
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
          
          {/* Services Links - Mobile */}
          <Link
            to="/services/body-repair"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg hover:bg-steel transition-colors duration-200"
          >
            <div className="font-semibold">Body Repair Services</div>
            <div className="text-sm text-silver">Collision, Paint, Dent Repair</div>
          </Link>
          <Link
            to="/services/mechanical"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg hover:bg-steel transition-colors duration-200"
          >
            <div className="font-semibold">Mechanical Services</div>
            <div className="text-sm text-silver">Engine, Transmission, Brakes</div>
          </Link>
          
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
