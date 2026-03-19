import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <section className="bg-gradient-to-b from-navy to-midnight text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-accent text-3xl md:text-5xl font-extrabold mb-6 tracking-wider uppercase" style={{ letterSpacing: '0.15em' }}>
            MAVI COLLISION CENTER
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-silver mb-8 max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              {t('home.hero.cta1')}
            </Link>
            <Link
              to="/services"
              className="bg-accent text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              {t('home.hero.cta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Badges */}
      <section className="bg-white py-8 border-y-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Insurance Approved */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex items-center justify-center bg-accent rounded-full w-20 h-20 shadow-lg flex-shrink-0">
                <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-1">All Insurance Approved</h3>
                <p className="text-slate">We work with all major insurance companies</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex items-center justify-center bg-primary rounded-full w-20 h-20 shadow-lg flex-shrink-0">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-1">Payment Accepted</h3>
                <p className="text-slate mb-2">Venmo • PayPal • Cash App</p>
                <p className="text-slate">Visa • Mastercard • American Express</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-steel py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">25+</div>
              <div className="text-xl text-silver">{t('home.stats.years')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">10,000+</div>
              <div className="text-xl text-silver">{t('home.stats.cars')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-xl text-silver">{t('home.stats.customers')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-softwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-navy mb-4">Our Services</h2>
          <p className="text-center text-slate mb-12 text-lg">Comprehensive auto repair solutions for all your vehicle needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Body Repair Services */}
            <Link to="/services/body-repair" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-navy mb-3">Body Repair Services</h3>
              <p className="text-slate mb-4">
                Expert collision repair, painting, dent removal, frame repair, and complete body restoration services.
              </p>
              <ul className="text-slate space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Collision & Accident Repair</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Auto Painting & Refinishing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paintless Dent Repair (PDR)</span>
                </li>
              </ul>
              <span className="text-primary font-semibold group-hover:underline inline-flex items-center">
                View All Services →
              </span>
            </Link>

            {/* Mechanical Services */}
            <Link to="/services/mechanical" className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold text-navy mb-3">Mechanical Services</h3>
              <p className="text-slate mb-4">
                Complete mechanical repair and maintenance services to keep your vehicle running smoothly.
              </p>
              <ul className="text-slate space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Engine Repair & Rebuilding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transmission Service & Repair</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Brake Service & Repair</span>
                </li>
              </ul>
              <span className="text-accent font-semibold group-hover:underline inline-flex items-center">
                View All Services →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-navy mb-4">{t('home.gallery.title')}</h2>
          <p className="text-center text-slate mb-12">{t('home.gallery.subtitle')}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link to="/gallery" className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group">
              <img 
                src="/images/gallery/collision/1.webp" 
                alt="Collision Repair 1" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <Link to="/gallery" className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group">
              <img 
                src="/images/gallery/collision/2.webp" 
                alt="Collision Repair 2" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <Link to="/gallery" className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group">
              <img 
                src="/images/gallery/collision/3.webp" 
                alt="Collision Repair 3" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <Link to="/gallery" className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group">
              <img 
                src="/images/gallery/collision/4.webp" 
                alt="Collision Repair 4" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              {t('home.gallery.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ice py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-navy mb-4">{t('home.reviews.title')}</h2>
          <p className="text-center text-slate mb-8">{t('home.reviews.subtitle')}</p>
          <div className="elfsight-app-54a9eb4a-d033-41d1-8950-5cabd2af3cb9" data-elfsight-app-lazy></div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy mb-4">{t('home.cta.title')}</h2>
          <p className="text-xl text-navy mb-8">
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-navy text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
