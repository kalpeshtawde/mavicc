// Holiday theme toggle.
// Set VITE_HOLIDAY_MODE=true in your .env (or as a build arg in production)
// to enable the seasonal theme; flip it back to false (or remove it) after the holidays.
export const isHolidayMode = import.meta.env.VITE_HOLIDAY_MODE === 'true';