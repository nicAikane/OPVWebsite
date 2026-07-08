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
            Registration details and division information for the upcoming season.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6" data-testid="card-tournament-details">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Season Snapshot</h3>
              <ul className="text-sm md:text-base text-gray-700 space-y-2">
                <li>First game: {season.firstGame}</li>
                <li>Labor Day weekend bye week: {season.laborDayByeWeek}</li>
                <li>Honolulu Pride bye week: {season.byeWeek}</li>
                <li>Playoffs: {season.playoffs}</li>
                <li>Early registration closes: {season.earlyRegistrationCloses}</li>
                <li>Clinics: {season.clinics}</li>
                <li>Parties: {season.parties}</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6" data-testid="card-tournament-windows">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Registration Pricing</h3>
              <ul className="text-sm md:text-base text-gray-700 space-y-2">
                <li>Early registration available through {season.earlyRegistrationCloses}</li>
                <li>Regular registration: {season.regularRegistrationPrice}</li>
                <li>Late registration: {season.lateRegistrationPrice}</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6" data-testid="card-tournament-divisions">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Divisions</h3>
              <ul className="text-sm md:text-base text-gray-700 space-y-2">
                {season.divisions.map((division) => (
                  <li key={division}>{division}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6" data-testid="card-tournament-notes">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Season Notes</h3>
              <ul className="text-sm md:text-base text-gray-700 space-y-2">
                <li>No new teams can be created after {season.newTeamDeadline}.</li>
                <li>A small number of slots for financial assistance may be available on a limited basis.</li>
                <li>Interested players should have their captains reach out to the board for more information.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6" data-testid="card-tournament-registration">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Registration</h3>
              <ol className="text-sm md:text-base text-gray-700 space-y-2 list-decimal list-inside">
                <li>Captains register their team in Team Sideline.</li>
                <li>Captains invite players to register.</li>
                <li>Players register, pay, and sign the waiver in Team Sideline.</li>
              </ol>
              <p className="text-xs text-gray-600 mt-3">Players should use the invite link from their captain.</p>
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                Early registration closes on {season.earlyRegistrationCloses}. Players should not create a team themselves; they should use the invite from their captain.
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={links.teamSideline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gray-800 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-900 transition-colors duration-300"
                  data-testid="button-team-registration"
                >
                  Captain Team Registration
                </a>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6" data-testid="card-tournament-free-agent">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Free Agent Registration</h3>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Don't have a team? No problem — we'll find you one. Submit the form below and the OPV board will do their best to place you on a team that fits your skill level.
              </p>
              <ol className="text-sm md:text-base text-gray-700 space-y-2 list-decimal list-inside mb-4">
                <li>Fill out the Free Agent Registration form.</li>
                <li>The OPV board reviews submissions and matches players to teams based on skill level.</li>
                <li>You'll be contacted directly once a placement is found.</li>
              </ol>
              <p className="text-xs text-gray-500 mb-4">Placement is not guaranteed, but we do our best to find everyone a spot. The sooner you register, the better your chances!</p>
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 mb-4">
                Free agents should use the form below — do <strong>not</strong> register through Team Sideline until you receive a personal email directly from Team Sideline.
              </div>
              <a
                href={links.freeAgent}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gray-800 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-900 transition-colors duration-300"
                data-testid="button-free-agent-registration"
              >
                Register as a Free Agent
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
