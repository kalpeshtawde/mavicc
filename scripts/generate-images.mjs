import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public');

// OG image: 1200x630 (Facebook/Twitter/LinkedIn recommended) from the hero background
await sharp(path.join(publicDir, 'images/hero-background.webp'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 85 })
  .toFile(path.join(publicDir, 'og-image.jpg'));

// Large hero background: 1920px wide for big monitors
await sharp(path.join(publicDir, 'images/hero-background.webp'))
  .resize(1920, null, { fit: 'inside' })
  .webp({ quality: 85 })
  .toFile(path.join(publicDir, 'images/hero-background-lg.webp'));

console.log('Generated og-image.jpg and hero-background-lg.webp');