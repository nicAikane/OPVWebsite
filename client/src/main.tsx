import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { siteMeta, links } from "@/lib/site";

// Update head metadata at runtime from site config
function ensureMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    const tag = selector.startsWith('meta[') ? 'meta' : selector.startsWith('link[') ? 'link' : 'meta';
    el = document.createElement(tag) as any;
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function applyHead() {
  document.title = siteMeta.title;
  ensureMeta('meta[name="description"]', { name: 'description', content: siteMeta.description });
  ensureMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#0B1F2A' });

  ensureMeta('meta[property="og:title"]', { property: 'og:title', content: siteMeta.title });
  ensureMeta('meta[property="og:description"]', { property: 'og:description', content: siteMeta.description });
  ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteMeta.siteName });
  ensureMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });
  ensureMeta('meta[property="og:image"]', { property: 'og:image', content: siteMeta.ogImage });
  ensureMeta('meta[property="og:url"]', { property: 'og:url', content: siteMeta.canonicalUrl });

  ensureMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow' });
  ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: siteMeta.title });
  ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: siteMeta.description });
  ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: siteMeta.ogImage });

  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', siteMeta.canonicalUrl);

  // JSON-LD Schema: Organization and Website
  const org = {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    '@id': `${siteMeta.canonicalUrl}#organization`,
    name: 'Oʻahu Pride Volleyball',
    url: siteMeta.canonicalUrl,
    logo: `${siteMeta.canonicalUrl}opv-logo.png`,
    image: siteMeta.ogImage,
    sameAs: [links.social, links.instagram, links.facebook, links.aikaneOhana],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteMeta.canonicalUrl}#website`,
    url: siteMeta.canonicalUrl,
    name: siteMeta.siteName,
    publisher: {
      '@id': `${siteMeta.canonicalUrl}#organization`,
    },
  };

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteMeta.canonicalUrl}#webpage`,
    url: siteMeta.canonicalUrl,
    name: siteMeta.title,
    description: siteMeta.description,
    isPartOf: {
      '@id': `${siteMeta.canonicalUrl}#website`,
    },
    about: {
      '@id': `${siteMeta.canonicalUrl}#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: siteMeta.ogImage,
    },
  };

  // Remove previous ld+json if present then add
  document.querySelectorAll('script[type="application/ld+json"]').forEach((n) => n.remove());
  const ld = document.createElement('script');
  ld.setAttribute('type', 'application/ld+json');
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [org, website, webpage],
  });
  document.head.appendChild(ld);
}

applyHead();

createRoot(document.getElementById("root")!).render(<App />);
