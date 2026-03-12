/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#1CA0F1',
        accent: '#FCD116',
        navy: '#0A1628',
        midnight: '#020817',
        steel: '#334155',
        slate: '#64748B',
        silver: '#CBD5E1',
        ice: '#E0F2FE',
        softwhite: '#F8FAFC',
        warmwhite: '#FFFBEB',
        success: '#22C55E',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
}
