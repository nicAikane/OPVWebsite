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
            Follow the Season 5 schedule, standings, and division updates for community-led grass volleyball in Honolulu.
          </p>
          <div className="grid gap-4 md:grid-cols-2 mt-8 max-w-4xl mx-auto">
            <a
              href="#schedule"
              className="bg-white/85 rounded-2xl p-6 border border-white/70 shadow-sm text-left hover:shadow-md hover:border-gray-300 transition-all duration-300"
              data-testid="card-hero-division-schedules"
            >
              <div className="text-xs uppercase tracking-wide text-gray-500">TeamSideline</div>
              <div className="text-xl font-semibold text-gray-800 mt-2">Division Schedules & Standings</div>
              <div className="text-sm text-gray-600 mt-2">Choose your division for match times, results, standings, and court assignments.</div>
            </a>
            <a
              href={links.teamSideline}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/85 rounded-2xl p-6 border border-white/70 shadow-sm text-left hover:shadow-md hover:border-gray-300 transition-all duration-300"
              data-testid="card-hero-team-sideline"
            >
              <div className="text-xs uppercase tracking-wide text-gray-500">League Home</div>
              <div className="text-xl font-semibold text-gray-800 mt-2">TeamSideline League Hub</div>
              <div className="text-sm text-gray-600 mt-2">Use the league hub for team information and Season 5 communications.</div>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#rules"
              className="bg-gray-800 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-900 transition-colors duration-300"
              data-testid="button-hero-rules"
            >
              View Rules
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
