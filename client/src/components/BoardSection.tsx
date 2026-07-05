const boardMembers = [
  {
    name: "Nick Saumweber",
    title: "Executive Director",
    photo: "/opv-logo.png",
  },
  {
    name: "Michael Covert",
    title: "Director of Finance",
    photo: "/opv-logo.png",
  },
  {
    name: "Win Ye",
    title: "Director of Community Outreach",
    photo: "/opv-logo.png",
  },
  {
    name: "Kanoa Keawe",
    title: "Director of Events",
    photo: "/opv-logo.png",
  },
  {
    name: "Brandon Childress",
    title: "Director of Rules & Referees",
    photo: "/opv-logo.png",
  },
  {
    name: "Arthur Saumy",
    title: "Director of Operations",
    photo: "/opv-logo.png",
  },
  {
    name: "Jacob Hurst",
    title: "Director at Large",
    photo: "/opv-logo.png",
  },
  {
    name: "Kumu Bradford Lum",
    title: "Director at Large",
    photo: "/opv-logo.png",
  },
  {
    name: "Mike Nguyen",
    title: "Director at Large",
    photo: "/opv-logo.png",
  },
  {
    name: "Nic Zappardino",
    title: "Director at Large",
    photo: "/opv-logo.png",
  },
  {
    name: "Alec Donnelly",
    title: "Director of Fields & Equipment",
    photo: "/opv-logo.png",
  },
];

export default function BoardSection() {
  const firstNameForSort = (name: string) => {
    const honorifics = new Set(["kumu", "mr", "mrs", "ms", "dr", "mx", "coach"]);
    const tokens = name.replace(/\./g, "").split(/\s+/).filter(Boolean);
    let index = 0;
    while (index < tokens.length && honorifics.has(tokens[index].toLowerCase())) {
      index += 1;
    }
    return (tokens[index] || tokens[0] || "").toLowerCase();
  };

  const regularNonAtLarge = boardMembers.filter(member => member.title !== "Director at Large");
  const executiveDirector = regularNonAtLarge.find(member => member.title === "Executive Director");
  const regularNonAtLargeSorted = regularNonAtLarge
    .filter(member => member.title !== "Executive Director")
    .sort((a, b) => firstNameForSort(a.name).localeCompare(firstNameForSort(b.name)));
  const regularAtLarge = boardMembers
    .filter(member => member.title === "Director at Large")
    .sort((a, b) => firstNameForSort(a.name).localeCompare(firstNameForSort(b.name)));
  const orderedRegularMembers = [
    ...(executiveDirector ? [executiveDirector] : []),
    ...regularNonAtLargeSorted,
    ...regularAtLarge,
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-board">
            Board of Directors
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {orderedRegularMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`board-member-${index}`}
            >
              <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden border-2 border-gray-100 bg-gray-50">
                <img
                  src={member.photo || ''}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg text-gray-800 font-semibold">{member.name}</div>
                <div className="text-sm text-gray-700">{member.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
