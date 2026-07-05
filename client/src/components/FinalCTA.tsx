import { links, season } from '@/lib/site';

export default function FinalCTA() {
  return (
    <section className="w-full py-16 text-white" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-6" data-testid="heading-final-cta">
          Support {season.name}
        </h2>
        <p className="text-base md:text-xl opacity-90 mb-8" data-testid="text-final-cta">
          Early registration closes {season.earlyRegistrationCloses}. Your support helps OPV grow the league, welcome new players, and keep the season moving.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={links.donate}
            target="_blank" 
            rel="noopener noreferrer"
            className="rainbow-button text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300"
            data-testid="button-final-donate"
          >
            Donate to OPV
          </a>
          <a 
            href={links.teamSideline}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            data-testid="button-final-photos"
          >
            Register or View Updates
          </a>
        </div>
      </div>
    </section>
  );
}
