export const siteMeta = {
  title: "Oʻahu Pride Volleyball — Season 5",
  description:
    "Season 5 begins August 29, 2026. Early registration closes July 31, 2026, with Competitive 4v4, Intermediate 6v6, and Social 6v6 divisions.",
  canonicalUrl: "https://oahupridevolleyball.com/",
  ogImage: "https://oahupridevolleyball.com/season-5-banner.png",
};

export const season = {
  name: "Season 5",
  year: "2026",
  startISO: "2026-08-29",
  endISO: "2026-11-21",
  rangeShort: "Aug 29–Nov 21, 2026",
  firstGame: "August 29, 2026",
  byeWeek: "October 17, 2026",
  playoffs: "November 21, 2026",
  earlyRegistrationCloses: "July 31, 2026",
  regularRegistrationPrice: "$60.00",
  lateRegistrationPrice: "$75.00",
  divisions: ["Competitive 4v4", "Intermediate 6v6", "Social 6v6"],
  clinics: "TBD",
  parties: "TBD",
};

export const links = {
  home: "https://oahupridevolleyball.com",
  donate:
    "https://www.zeffy.com/fundraising/support-season-4-oahu-pride-volleyball-league",
  rules:
    "https://www.aikaneohana.com/_files/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf",
  photos: "https://ericzmartin.com/",
  teamSideline: "https://teamsideline.com/sites/aikaneohana/schedules",
  freeAgent: "https://docs.google.com/forms/d/e/1FAIpQLSdx7Q-7YNEY38GcMcGcIPO7qaFs0dGv8P-cIBTigGxFXY0QRA/viewform?usp=publish-editor",
  // Tournament site temporarily offline
  tournament: "",
  store: "https://www.bonfire.com/store/oahu-pride-volleyball/?utm_source=copy_link&utm_medium=store_page_share&utm_campaign=oahu-pride-volleyball&utm_content=default",
  aikaneOhana: "https://www.aikaneohana.com/",
  social: "https://linktr.ee/oahupridevolleyball",
  facebook: "https://www.facebook.com/groups/577119141300496",
  instagram: "https://www.instagram.com/oahupridevolleyball/",
  sponsorsBecome:
    "https://www.zeffy.com/en-US/fundraising/191a11d3-841f-420d-912a-990a33cace29",
};

export type Sponsor = {
  name: string;
  logo: string; // path under /public
  website: string | null;
};

export const sponsors: Sponsor[] = [
  {
    name: "Eric Martin Photography",
    logo: "/eric-z-martin.png",
    website: "https://ericzmartin.com",
  },
  {
    name: "Hula's Waikiki",
    logo: "/hulas-waikiki.png",
    website: "https://hulas.com",
  },
  {
    name: "Wang Chungs",
    logo: "/wang-chungs.webp",
    website: "https://www.wangchungs.com",
  },
  {
    name: "Team Mimosa",
    logo: "/team-mimosa.png",
    website: null,
  },
  {
    name: "Halau Hula O Ikemanu",
    logo: "/halau-hula.jpg",
    website:
      "https://www.instagram.com/halau_hula_o_ikemanu_?igsh=ZnM3c2hmY2hnZ255",
  },
  {
    name: "Tapas Waikiki",
    logo: "/tapas-waikiki.png",
    website: "https://www.hawaiigaybar.com/",
  },
];
