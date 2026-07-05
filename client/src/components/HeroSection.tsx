import { links, season } from '@/lib/site';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <img
            src="/season-5-banner.png"
            alt="Oʻahu Pride Volleyball Season 5 banner"
            className="w-full max-w-6xl h-auto rounded-[2rem] object-contain shadow-2xl"
            loading="eager"
            decoding="async"
            data-testid="img-hero-logo"
          />
        </div>

        <div className="mt-10 text-center">
          <h1 className="mt-6 text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight" data-testid="text-hero-title">
            {season.name} starts August 29, 2026
          </h1>
          <p className="text-base md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Join OPV for a new season of community-led grass volleyball in Honolulu across Competitive 4v4, Intermediate 6v6, and Social 6v6 divisions.
          </p>
          <div className="grid gap-4 md:grid-cols-4 mt-8">
            <div className="bg-white/80 rounded-2xl p-5 border border-white/70 shadow-sm" data-testid="card-hero-reg-deadline">
              <div className="text-xs uppercase tracking-wide text-gray-500">Early Registration</div>
              <div className="text-base font-semibold text-gray-800 mt-1">Closes July 31</div>
              <div className="text-sm text-gray-600 mt-1">Secure your spot before the regular pricing window begins.</div>
            </div>
            <div className="bg-white/80 rounded-2xl p-5 border border-white/70 shadow-sm" data-testid="card-hero-first-game">
              <div className="text-xs uppercase tracking-wide text-gray-500">First Game</div>
              <div className="text-base font-semibold text-gray-800 mt-1">August 29</div>
              <div className="text-sm text-gray-600 mt-1">Season play kicks off to open the fall schedule.</div>
            </div>
            <div className="bg-white/80 rounded-2xl p-5 border border-white/70 shadow-sm" data-testid="card-hero-regular-price">
              <div className="text-xs uppercase tracking-wide text-gray-500">Regular Price</div>
              <div className="text-base font-semibold text-gray-800 mt-1">{season.regularRegistrationPrice}</div>
              <div className="text-sm text-gray-600 mt-1">Standard registration pricing after July 31.</div>
            </div>
            <div className="bg-white/80 rounded-2xl p-5 border border-white/70 shadow-sm" data-testid="card-hero-late-price">
              <div className="text-xs uppercase tracking-wide text-gray-500">Late Price</div>
              <div className="text-base font-semibold text-gray-800 mt-1">{season.lateRegistrationPrice}</div>
              <div className="text-sm text-gray-600 mt-1">Late registration remains available for final sign-ups.</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={links.teamSideline}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-900 transition-colors duration-300"
              data-testid="button-hero-register"
            >
              Captain Team Registration
            </a>
            <a
              href={links.freeAgent}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 px-8 py-4 rounded-full text-base font-semibold border border-gray-300 hover:border-gray-500 transition-colors duration-300"
              data-testid="button-hero-free-agent"
            >
              Free Agent Registration
            </a>
            <a
              href={links.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-gray-800 px-8 py-4 rounded-full text-base font-semibold border border-gray-400 hover:border-gray-700 transition-colors duration-300"
              data-testid="button-hero-sponsor"
            >
              Support Season 5
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
