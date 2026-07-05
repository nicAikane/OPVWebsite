export default function ScheduleBlocks() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
            Schedules & Standings
          </h2>
          <p className="text-gray-600">Quick links to TeamSideline</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="https://teamsideline.com/sites/aikaneohana/schedules"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-pink-50 to-yellow-50 p-6 rounded-2xl shadow hover-lift block text-center"
            data-testid="link-all-schedules"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">All Schedules</h3>
            <p className="text-gray-600">Full league schedule by date</p>
          </a>

          <a
            href="https://teamsideline.com/sites/aikaneohana/home"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow hover-lift block text-center"
            data-testid="link-standings"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Standings & Results</h3>
            <p className="text-gray-600">Track results on TeamSideline</p>
          </a>

          <a
            href="https://teamsideline.com/sites/aikaneohana/home#programs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow hover-lift block text-center"
            data-testid="link-programs"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Programs</h3>
            <p className="text-gray-600">Clinics, tournaments, and more</p>
          </a>
        </div>
      </div>
    </section>
  );
}

