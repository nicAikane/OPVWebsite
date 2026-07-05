import { links } from '@/lib/site';

export default function FeatureCards() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-stay-connected">
            Stay Connected
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-card-border rounded-2xl p-8 shadow-sm hover-lift text-center" data-testid="card-schedules">
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">Schedules & Standings</h3>
            <p className="text-gray-700 mb-6">Visit TeamSideline for registration, schedules, and season updates.</p>
            <a 
              href={links.teamSideline}
              target="_blank" 
              rel="noopener noreferrer"
              className="rainbow-button text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300 inline-block"
              data-testid="button-view-schedule"
            >
              Visit TeamSideline
            </a>
          </div>

          <div className="bg-card border border-card-border rounded-2xl p-8 shadow-sm hover-lift text-center" data-testid="card-photos">
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">Game Day Photos</h3>
            <p className="text-gray-700 mb-6">Relive the action with our media partner Eric Z Martin Photography.</p>
            <a 
              href={links.photos}
              target="_blank" 
              rel="noopener noreferrer"
              className="rainbow-button text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300 inline-block"
              data-testid="button-visit-photos"
            >
              Visit Photo Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
