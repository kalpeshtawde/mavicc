# Internationalization (i18n) Guide

## Overview
The Mavi Collision Center website now supports both English and Spanish languages using react-i18next.

## Features Implemented

### ✅ Language Switcher
- **Desktop**: EN/ES buttons in the navbar (top right)
- **Mobile**: English/Español buttons in the mobile menu
- Active language is highlighted with the primary blue color

### ✅ Translated Components
- **Navbar**: All navigation links and contact button
- **Footer**: Tagline, quick links, and copyright text
- **Home Page**: All sections including hero, stats, services preview, reviews, and CTA

### 📝 Translation Files Location
- English: `/src/locales/en.json`
- Spanish: `/src/locales/es.json`

## How to Add Translations to Other Pages

### Step 1: Import useTranslation hook
```javascript
import { useTranslation } from 'react-i18next';
```

### Step 2: Use the hook in your component
```javascript
const YourComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('your.translation.key')}</h1>
    </div>
  );
};
```

### Step 3: Add translation keys to both language files

**en.json:**
```json
{
  "your": {
    "translation": {
      "key": "Your English Text"
    }
  }
}
```

**es.json:**
```json
{
  "your": {
    "translation": {
      "key": "Tu Texto en Español"
    }
  }
}
```

## Remaining Pages to Translate

The following pages still need translation implementation:
- **Services Page** (`/src/pages/Services.jsx`)
- **Gallery Page** (`/src/pages/Gallery.jsx`)
- **Contact Page** (`/src/pages/Contact.jsx`)
- **About Page** (`/src/pages/About.jsx`)

All translation keys for these pages are already prepared in the JSON files. You just need to:
1. Import `useTranslation` hook
2. Replace hardcoded text with `t('translation.key')`

## Example: Translating Services Page

```javascript
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('services.hero.title')}</h1>
      <p>{t('services.hero.subtitle')}</p>
      {/* ... rest of component */}
    </div>
  );
};
```

## Language Detection
The website automatically detects the user's browser language on first visit. Users can manually switch languages using the navbar buttons, and their preference is saved in localStorage.

## Testing
1. Open the website in your browser
2. Click EN/ES buttons in the navbar
3. Navigate through different pages to see translations
4. Test on mobile to see the mobile language switcher

## Adding a New Language

To add another language (e.g., French):

1. Create `/src/locales/fr.json` with French translations
2. Update `/src/i18n.js`:
```javascript
import fr from './locales/fr.json';

i18n.init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr }  // Add this
  },
  // ...
});
```
3. Add FR button to Navbar component

## Notes
- Translation keys use dot notation: `home.hero.title`
- Keep translation keys organized by page/section
- Always add translations to both language files
- Test all pages after adding new translations
