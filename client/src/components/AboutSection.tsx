import { links, season } from '@/lib/site';

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-about">
            About OPV
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed" data-testid="text-about-1">
              As a proud partner of{' '}
              <a 
                href={links.aikaneOhana} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:opacity-80 font-semibold underline"
                data-testid="link-aikane-ohana"
              >
                Aikāne ʻOhana
              </a>{' '}
              (501(c)(3)), we bring together players of all skill levels to enjoy exciting, competitive grass volleyball in a supportive and fun environment.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed" data-testid="text-about-2">
              Our community celebrates diversity, fosters friendship, and creates lasting memories on and off the court. From beginners to all-stars, everyone has a place in our ʻohana!
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold" data-testid="text-season-info">
              {season.name} begins on {season.firstGame}. Early registration closes {season.earlyRegistrationCloses}, and clinics and parties will be announced soon.
            </p>
            <div className="flex flex-wrap gap-4 text-sm justify-center sm:justify-start">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full" data-testid="badge-inclusive">Inclusive</span>
              <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full" data-testid="badge-skill">All Skill Levels</span>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full" data-testid="badge-grass">Grass Volleyball</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full" data-testid="badge-community">Community-Led</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/players-action.jpg"
              alt="OPV Players in Action"
              className="rounded-xl shadow-lg hover-lift w-full"
              decoding="async"
              loading="lazy"
              data-testid="img-players-action"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
