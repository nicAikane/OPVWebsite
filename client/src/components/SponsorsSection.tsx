import { sponsors, links } from '@/lib/site';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-sponsors">
            Sponsors
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
          <p className="text-base md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed" data-testid="text-sponsors-subtitle">
            Mahalo to the businesses and community partners who support OPV. Interested in helping power Season 5?
          </p>
        </div>

        {sponsors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {sponsors.map((sponsor, index) => (
              sponsor.website ? (
                <a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-gray-300 transition-all duration-300 min-h-[220px] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`sponsor-card-${index}`}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-[140px] object-contain mb-4"
                    loading="lazy"
                  />
                  <div className="text-base text-gray-700 font-medium mt-auto">
                    {sponsor.name}
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center min-h-[220px] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`sponsor-card-${index}`}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-[140px] object-contain mb-4"
                    loading="lazy"
                  />
                  <div className="text-base text-gray-700 font-medium mt-auto">
                    {sponsor.name}
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="text-center text-sm text-gray-600 mb-12" data-testid="text-sponsors-empty">
            No sponsors announced yet.
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href={links.sponsorsBecome}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors duration-300"
            data-testid="button-become-sponsor"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
