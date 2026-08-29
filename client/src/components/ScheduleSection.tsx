import { divisionSchedules, links, season } from '@/lib/site';

export default function ScheduleSection() {
  return (
    <section id="schedule" className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-schedule">
            Division Schedules & Standings
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
          <div className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-4">
              Schedule, standings, scores, and results live together on each division's public TeamSideline page.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5" data-testid="card-date-first-game">
            <div className="text-xs uppercase tracking-wide text-gray-500">First game</div>
            <div className="mt-2 text-xl font-semibold text-gray-800">{season.firstGame}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5" data-testid="card-date-labor-day-bye-week">
            <div className="text-xs uppercase tracking-wide text-gray-500">Labor Day weekend bye week</div>
            <div className="mt-2 text-xl font-semibold text-gray-800">{season.laborDayByeWeek}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5" data-testid="card-date-bye-week">
            <div className="text-xs uppercase tracking-wide text-gray-500">Honolulu Pride bye week</div>
            <div className="mt-2 text-xl font-semibold text-gray-800">{season.byeWeek}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5" data-testid="card-date-playoffs">
            <div className="text-xs uppercase tracking-wide text-gray-500">Playoffs</div>
            <div className="mt-2 text-xl font-semibold text-gray-800">{season.playoffs}</div>
          </div>
        </div>

        <div className="mt-12" data-testid="division-schedules">
          <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800 text-center mb-6">
            Choose Your Division
          </h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {divisionSchedules.map((division) => (
              <a
                key={division.name}
                href={division.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-2xl px-5 py-5 text-left hover:shadow-md hover:border-gray-300 transition-all duration-300"
                data-testid={`link-division-schedule-${division.shortName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              >
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {division.level} · {division.format}
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-800 leading-tight">
                  {division.shortName}
                </div>
                <div className="mt-2 text-sm text-gray-600 leading-snug">
                  {division.name}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div id="rules" className="mt-10 bg-white border border-gray-200 rounded-2xl px-6 py-6 text-center" data-testid="card-season-rules">
          <h3 className="text-xl font-display font-bold text-gray-800">Season 5 Rules</h3>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            Review the division-specific rules before match day.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={links.rules4v4}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900 transition-colors duration-300"
              data-testid="button-rules-4v4"
            >
              4v4 Rules
            </a>
            <a
              href={links.rules6v6}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:border-gray-500 transition-colors duration-300"
              data-testid="button-rules-6v6"
            >
              6v6 Rules
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
