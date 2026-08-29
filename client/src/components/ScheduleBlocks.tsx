import { divisionSchedules } from '@/lib/site';

export default function ScheduleBlocks() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
            Division Schedules & Standings
          </h2>
          <p className="text-gray-600">Choose your division to view schedule, standings, scores, and results.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisionSchedules.map((division) => (
            <a
              key={division.name}
              href={division.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-50 to-yellow-50 p-6 rounded-2xl shadow hover-lift block text-center"
              data-testid={`link-schedule-block-${division.shortName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{division.shortName}</h3>
              <p className="text-gray-600">{division.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
