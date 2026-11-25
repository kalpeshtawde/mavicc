import { useTranslation } from 'react-i18next';
import { isHolidayMode } from '../holidayMode';

const HolidayBanner = () => {
  const { t } = useTranslation();

  if (!isHolidayMode) return null;

  return (
    <div className="bg-gradient-to-r from-holiday-red via-holiday-green to-holiday-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 text-center text-sm md:text-base font-semibold flex items-center justify-center gap-2">
        <svg
          className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 0l2.4 7.2L21.6 9l-5.4 4.2 1.8 7.8-6-3.6-6 3.6 1.8-7.8L2.4 9l7.2-1.8L12 0z" />
        </svg>
        <span>{t('holiday.banner')}</span>
      </div>
    </div>
  );
};

export default HolidayBanner;