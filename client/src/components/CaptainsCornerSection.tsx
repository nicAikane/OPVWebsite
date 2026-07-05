import { Users, Shirt, BookOpen } from 'lucide-react';

const resources = [
  {
    title: "Adding Players to Your Roster",
    Icon: Users,
    link: "https://app.tango.us/app/workflow/Adding-players-to-your-roster-using-Team-Sideline-e01439d51c44483693cf7826aae63dd3",
    color: "blue",
  },
  {
    title: "Customizing Your Team Jersey",
    Icon: Shirt,
    link: "https://app.tango.us/app/workflow/How-to-customize-your-jerseys-4c7e1617417d4e9495535b383d7afc28",
    color: "red",
  },
  {
    title: "OPV Rule Book",
    Icon: BookOpen,
    link: "https://952afa62-c5c6-46d2-99a2-68410ce0e296.usrfiles.com/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf",
    color: "green",
  },
];

const colorMap = {
  blue: 'border-blue-500',
  red: 'border-red-500',
  green: 'border-green-500',
};

export default function CaptainsCornerSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-captains-corner">
            Captain's Corner
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            OPV Team Captains, check out these links for tips and handy information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.Icon;
            return (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 p-8 flex flex-col items-center justify-between min-h-[200px] hover:shadow-lg hover:border-gray-300 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`resource-card-${index}`}
              >
                <Icon className="w-16 h-16 text-gray-700 mb-4" />
                <div className="text-lg text-gray-700 font-semibold underline">
                  {resource.title}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
