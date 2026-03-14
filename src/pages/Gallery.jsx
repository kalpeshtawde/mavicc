import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetch('/images/gallery-manifest.json')
      .then(response => response.json())
      .then(data => setImages(data.images))
      .catch(error => console.error('Error loading gallery:', error));
  }, []);

  const categories = ['all', 'collision', 'paint', 'frame'];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const nextIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(filteredImages[nextIndex]);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(filteredImages[prevIndex]);
  };

  return (
    <div className="bg-navy min-h-screen">
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('gallery.hero.title')}</h1>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            {t('gallery.hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-200 capitalize ${
                  selectedCategory === category
                    ? 'bg-accent text-navy'
                    : 'bg-steel text-white hover:bg-slate'
                }`}
              >
                {t(`gallery.filters.${category}`)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-steel aspect-video"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-20">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-silver capitalize">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center text-silver py-12">
              <p className="text-xl">{t('gallery.noImages')}</p>
            </div>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-steel bg-opacity-80 hover:bg-opacity-100 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-steel bg-opacity-80 hover:bg-opacity-100 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="bg-midnight rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-steel text-white">
                <h3 className="text-2xl font-semibold mb-2">{lightboxImage.title}</h3>
                <p className="text-silver capitalize">{lightboxImage.category}</p>
                <p className="text-sm text-slate mt-2">
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
