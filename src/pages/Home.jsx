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
          <h2 className="text-4xl font-bold text-center text-navy mb-12">{t('home.servicesPreview.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-3">{t('home.servicesPreview.collision.title')}</h3>
              <p className="text-slate mb-4">
                {t('home.servicesPreview.collision.description')}
              </p>
              <Link to="/services" className="text-primary font-semibold hover:underline">
                {t('home.servicesPreview.learnMore')} →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-3">{t('home.servicesPreview.paint.title')}</h3>
              <p className="text-slate mb-4">
                {t('home.servicesPreview.paint.description')}
              </p>
              <Link to="/services" className="text-primary font-semibold hover:underline">
                {t('home.servicesPreview.learnMore')} →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-3">{t('home.servicesPreview.insurance.title')}</h3>
              <p className="text-slate mb-4">
                {t('home.servicesPreview.insurance.description')}
              </p>
              <Link to="/services" className="text-primary font-semibold hover:underline">
                {t('home.servicesPreview.learnMore')} →
              </Link>
            </div>
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
