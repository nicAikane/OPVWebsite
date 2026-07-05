export default function LeadershipSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-display font-bold text-gray-800 mb-4">
            Leadership & Board
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Meet the Aikāne ʻOhana Board and league leadership.
          </p>
          <a
            href="https://www.aikaneohana.com/bod"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:opacity-95"
            data-testid="button-view-board"
          >
            View Board Members
          </a>
        </div>
      </div>
    </section>
  );
}
