import { links, season } from '@/lib/site';

export default function TournamentSection() {
  return (
    <section id="season" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-tournament">
            Season 5 Details
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto" data-testid="text-tournament-description">
            Season links, dates, and division information for players and captains.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full" data-testid="card-tournament-details">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Season Snapshot</h3>
            <ul className="text-sm md:text-base text-gray-700 space-y-2">
              <li>First game: {season.firstGame}</li>
              <li>Labor Day weekend bye week: {season.laborDayByeWeek}</li>
              <li>Honolulu Pride bye week: {season.byeWeek}</li>
              <li>Playoffs: {season.playoffs}</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full" data-testid="card-tournament-links">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Division Schedules & Standings</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Each division has its own public TeamSideline page for the schedule, standings, scores, and results.
            </p>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center rounded-full bg-gray-800 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-900 transition-colors duration-300"
              data-testid="button-season-division-schedules"
            >
              Choose Division
            </a>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full" data-testid="card-tournament-rules">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Rules</h3>
            <ul className="text-sm md:text-base text-gray-700 space-y-2">
              <li>Competitive teams should review the 4v4 rules.</li>
              <li>Intermediate and Social teams should review the 6v6 rules.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={links.rules4v4}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gray-800 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-900 transition-colors duration-300"
                data-testid="button-season-rules-4v4"
              >
                4v4 Rules
              </a>
              <a
                href={links.rules6v6}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-800 hover:border-gray-500 transition-colors duration-300"
                data-testid="button-season-rules-6v6"
              >
                6v6 Rules
              </a>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full" data-testid="card-tournament-divisions">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Divisions</h3>
            <ul className="text-sm md:text-base text-gray-700 space-y-2">
              {season.divisions.map((division) => (
                <li key={division}>{division}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full" data-testid="card-tournament-notes">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Season Notes</h3>
            <ul className="text-sm md:text-base text-gray-700 space-y-2">
              <li>No new teams can be created after {season.newTeamDeadline}.</li>
              <li>A small number of slots for financial assistance may be available on a limited basis.</li>
              <li>Interested players should have their captains reach out to the board for more information.</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full" data-testid="card-tournament-team-sideline">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">TeamSideline</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Captains and players should use TeamSideline for team information and season communications.
            </p>
            <a
              href={links.teamSideline}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gray-800 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-900 transition-colors duration-300"
              data-testid="button-team-sideline"
            >
              Visit TeamSideline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
