import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonical }) => {
  const location = useLocation();
  const baseUrl = 'https://mavicollisioncenter.com';
  
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
      document.querySelector('meta[name="title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', title);
    }
    
    // Update description
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
    }
    
    // Update keywords
    if (keywords) {
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
    
    // Update Open Graph URL
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', canonicalUrl);
  }, [title, description, keywords, canonical, location.pathname]);
  
  return null;
};

export default SEO;
