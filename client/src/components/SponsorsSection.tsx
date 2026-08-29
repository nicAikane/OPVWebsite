import { sponsorTiers, sponsors, links } from '@/lib/site';

const slugify = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

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

        <div className="space-y-12 max-w-6xl mx-auto mb-12">
          {sponsorTiers.map((tier) => {
            const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);

            return (
              <div key={tier} data-testid={`sponsor-tier-${slugify(tier)}`}>
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 text-center mb-6">
                  {tier}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierSponsors.map((sponsor) => {
                    const card = (
                      <div className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-gray-300 transition-all duration-300 min-h-[230px] animate-fade-in-up">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-[130px] object-contain mb-4"
                          loading="lazy"
                        />
                        <div className="text-base text-gray-800 font-semibold mt-auto">
                          {sponsor.name}
                        </div>
                        {sponsor.divisionName ? (
                          <div className="mt-2 text-sm text-gray-600 leading-snug">
                            {sponsor.divisionName}
                          </div>
                        ) : null}
                      </div>
                    );

                    return sponsor.website ? (
                      <a
                        key={sponsor.name}
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        data-testid={`sponsor-card-${slugify(sponsor.name)}`}
                      >
                        {card}
                      </a>
                    ) : (
                      <div
                        key={sponsor.name}
                        data-testid={`sponsor-card-${slugify(sponsor.name)}`}
                      >
                        {card}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

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
