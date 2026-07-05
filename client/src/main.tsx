import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { siteMeta, links, season } from "@/lib/site";

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
  ensureMeta('meta[property="og:image"]', { property: 'og:image', content: siteMeta.ogImage });
  ensureMeta('meta[property="og:url"]', { property: 'og:url', content: siteMeta.canonicalUrl });

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

  // JSON-LD Schema: Organization and Event
  const org = {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: 'Oʻahu Pride Volleyball',
    url: siteMeta.canonicalUrl,
    sameAs: [links.social, links.aikaneOhana],
  };

  const event = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: season.name,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    startDate: season.startISO,
    endDate: season.endISO,
    image: [siteMeta.ogImage],
    description: siteMeta.description,
    location: {
      '@type': 'Place',
      name: 'Honolulu, Hawaii',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Honolulu',
        addressRegion: 'HI',
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'SportsOrganization',
      name: 'Oʻahu Pride Volleyball',
    },
  };

  // Remove previous ld+json if present then add
  document.querySelectorAll('script[type="application/ld+json"]').forEach((n) => n.remove());
  const ld = document.createElement('script');
  ld.setAttribute('type', 'application/ld+json');
  ld.textContent = JSON.stringify([org, event]);
  document.head.appendChild(ld);
}

applyHead();

createRoot(document.getElementById("root")!).render(<App />);
