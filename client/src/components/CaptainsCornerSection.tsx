import { Users, Shirt, BookOpen } from 'lucide-react';

const resources = [
  {
    title: "Adding Players to Your Roster",
    Icon: Users,
    link: "https://app.tango.us/app/workflow/Adding-players-to-your-roster-using-Team-Sideline-e01439d51c44483693cf7826aae63dd3",
    color: "blue",
  },
  {
    title: "OPV Rule Book",
    Icon: BookOpen,
    link: "https://952afa62-c5c6-46d2-99a2-68410ce0e296.usrfiles.com/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf",
    color: "green",
  },
];

const designDetails = [
  "Your name",
  "You are a captain from Oahu Pride Volleyball",
  "Your Division/Team Name",
  "Design colors, style, logos, any other ideas.",
];

const orderDetails = [
  "Player name",
  "Jersey style",
  "Size",
  "Jersey name",
  "Player number",
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
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

        <div className="border border-gray-100 bg-white p-6 md:p-8 text-left shadow-sm animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shirt className="w-9 h-9 text-gray-700" />
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-800">
                Jersey Instructions
              </h3>
              <p className="text-gray-700 leading-relaxed mt-1">
                OPV will only order a jersey for players who have paid.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">Step 1 - Jersey Design</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Contact Josh ASAP to start on your jersey design. Josh will design your jersey according to the instructions you provide.
              </p>
              <div className="space-y-2 text-gray-700 mb-4">
                <p>
                  <span className="font-semibold">Preferred - Facebook Messenger: </span>
                  <a
                    href="https://www.facebook.com/SkittlesFam40"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    Josh Cherry
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Alternate - Email: </span>
                  <a href="mailto:jgout20@gmail.com" className="font-semibold underline">
                    jgout20@gmail.com
                  </a>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                There are 3 styles available - Sleeveless, Shortsleeved, and Womens+ Racerback. You can mix and match your order - the whole team doesn't need to order the same style.
              </p>
              <p className="font-semibold text-gray-800 mb-2">When you reach out to Josh, please include:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                {designDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold">Note:</span> jerseys must have name and player number on the back.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you don't have any prior designs or logos in mind, Josh can create from scratch. Just let him know what you're thinking.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Once you approve the design, Josh will send it to the board for final review.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">Step 2 - Jersey Order</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold">OPV will only order a jersey for players who have paid at the time of order.</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Download a copy of the{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1e_6bzRqeQPc7UXtGM0tPDWcMqArDPhpY/edit?usp=sharing&ouid=107917251756067960682&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  Captain Order Form
                </a>
                . Captains must use this order form to gather:
              </p>
              <p className="font-semibold text-gray-800 mb-2">
                Order details:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                {orderDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Send your completed order to{" "}
                <a
                  href="mailto:Jerseys@oahupridevolleyball.com"
                  className="font-semibold underline"
                >
                  Jerseys@oahupridevolleyball.com
                </a>
                . OPV will confirm the order and coordinate with the vendor.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-bold text-gray-800">Early Order Deadline: August 2</p>
                  <p className="text-gray-700 leading-relaxed">
                    You must place your order by August 2 to receive your team jerseys by opening day.
                  </p>
                </div>
                <div className="border-l-4 border-gray-700 pl-4">
                  <p className="font-bold text-gray-800">Final Order Deadline: August 29</p>
                  <p className="text-gray-700 leading-relaxed">
                    All remaining orders will be placed when registration closes. These jerseys may not be received by opening day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
