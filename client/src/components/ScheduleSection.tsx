import { season } from '@/lib/site';

export default function ScheduleSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-schedule">
            Season 5 Key Dates
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
          <div className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-4">
              These are the confirmed basics for {season.name}. Nick can layer in more specifics later, but the core calendar is ready to publish now.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5" data-testid="card-date-registration">
            <div className="text-xs uppercase tracking-wide text-gray-500">Early registration closes</div>
            <div className="mt-2 text-xl font-semibold text-gray-800">{season.earlyRegistrationCloses}</div>
          </div>
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
          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5" data-testid="card-date-clinics">
            <div className="text-xs uppercase tracking-wide text-gray-500">Clinics</div>
            <div className="mt-2 text-xl font-semibold text-gray-800">{season.clinics}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5" data-testid="card-date-parties">
            <div className="text-xs uppercase tracking-wide text-gray-500">Parties</div>
            <div className="mt-2 text-xl font-semibold text-gray-800">{season.parties}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
