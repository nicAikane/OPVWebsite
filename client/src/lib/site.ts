export const siteMeta = {
  title: "Oʻahu Pride Volleyball | Honolulu LGBTQ+ Grass Volleyball League",
  description:
    "Oʻahu Pride Volleyball is Honolulu's inclusive grass volleyball league. Season 5 starts August 29, 2026 with Competitive 4v4, Intermediate 6v6, and Social 6v6 divisions.",
  canonicalUrl: "https://oahupridevolleyball.com/",
  ogImage: "https://oahupridevolleyball.com/season-5-banner.png",
  siteName: "Oʻahu Pride Volleyball",
};

export const season = {
  name: "Season 5",
  year: "2026",
  startISO: "2026-08-29",
  endISO: "2026-11-21",
  rangeShort: "Aug 29–Nov 21, 2026",
  firstGame: "August 29, 2026",
  laborDayByeWeek: "September 5, 2026",
  byeWeek: "October 17, 2026",
  playoffs: "November 21, 2026",
  earlyRegistrationCloses: "July 31, 2026",
  regularRegistrationPrice: "$60.00",
  lateRegistrationPrice: "$75.00",
  newTeamDeadline: "August 22, 2026",
  divisions: ["Competitive 4v4", "Intermediate 6v6", "Social 6v6"],
};

export const links = {
  home: "https://oahupridevolleyball.com",
  donate:
    "https://www.zeffy.com/en-US/donation-form/season-5-oahu-pride-volleyball-league/",
  rules6v6:
    "https://drive.google.com/file/d/16Mp_SqQAV7-amruJKXFTEff4R0w_-luw/view?usp=drive_link",
  rules4v4:
    "https://docs.google.com/document/d/1GsagHqY8sy76g-_L9ZVfo8GG1F4BqN11AyyvoUw3X1o/edit",
  photos: "https://ericzmartin.smugmug.com/",
  teamSideline: "https://teamsideline.com/aikaneohana",
  // Tournament site temporarily offline
  tournament: "",
  store: "https://www.bonfire.com/store/oahu-pride-volleyball/?utm_source=copy_link&utm_medium=store_page_share&utm_campaign=oahu-pride-volleyball&utm_content=default",
  aikaneOhana: "https://www.aikaneohana.com/",
  social: "https://linktr.ee/oahupridevolleyball",
  facebook: "https://www.facebook.com/groups/577119141300496",
  instagram: "https://www.instagram.com/oahupridevolleyball/",
  sponsorsBecome:
    "https://www.zeffy.com/en-US/donation-form/season-5-oahu-pride-volleyball-league/",
};

export const divisionSchedules = [
  {
    name: "Tapa's Waikiki Social Division",
    shortName: "Social",
    level: "C",
    format: "6v6",
    url: "https://teamsideline.com/sites/aikaneohana/schedule/726481/0/1/C-Tapas-Waikiki-Social-Division",
  },
  {
    name: "Wang Chung's Lower Intermediate Division",
    shortName: "Lower Intermediate",
    level: "B",
    format: "6v6",
    url: "https://teamsideline.com/sites/aikaneohana/schedule/726480/0/1/B-Wang-Chungs-Lower-Intermediate-Division",
  },
  {
    name: "Wang Chung's Upper Intermediate Division",
    shortName: "Upper Intermediate",
    level: "B",
    format: "6v6",
    url: "https://teamsideline.com/sites/aikaneohana/schedule/740287/0/1/B-Wang-Chungs-Upper-Intermediate-Division",
  },
  {
    name: "Eric Z-Martin Photography Competitive Division",
    shortName: "Competitive",
    level: "BB",
    format: "4v4",
    url: "https://teamsideline.com/sites/aikaneohana/schedule/726479/0/1/BB-Eric-Z-Martin-Photography-Competitive-Division",
  },
];

export type Sponsor = {
  name: string;
  logo: string; // path under /public
  website: string | null;
  tier: "Maile Sponsors" | "Pikake Sponsors" | "Pua Melia Circle";
  divisionName?: string;
};

export const sponsorTiers = [
  "Maile Sponsors",
  "Pikake Sponsors",
  "Pua Melia Circle",
] as const;

export const sponsors: Sponsor[] = [
  {
    name: "Eric Z-Martin Photography",
    logo: "/eric-z-martin.jpg",
    website: links.photos,
    tier: "Maile Sponsors",
    divisionName: "Eric Z-Martin Photography Competitive Division",
  },
  {
    name: "Wang Chung's",
    logo: "/wang-chungs.png",
    website: null,
    tier: "Maile Sponsors",
    divisionName: "Wang Chung's Intermediate (Lower & Upper) Division",
  },
  {
    name: "Tapa's Waikiki",
    logo: "/tapas-waikiki.jpg",
    website: null,
    tier: "Maile Sponsors",
    divisionName: "Tapa's Waikiki Social Division",
  },
  {
    name: "Highgate Hotels",
    logo: "/highgate-hotels.png",
    website: null,
    tier: "Pikake Sponsors",
  },
  {
    name: "Scarlet Honolulu",
    logo: "/scarlet-honolulu.png",
    website: null,
    tier: "Pikake Sponsors",
  },
  {
    name: "Hula's Waikiki",
    logo: "/hulas-waikiki.png",
    website: null,
    tier: "Pikake Sponsors",
  },
  {
    name: "Team Mimosa",
    logo: "/team-mimosa.png",
    website: null,
    tier: "Pikake Sponsors",
  },
  {
    name: "Halau Hula O Ikemanu",
    logo: "/halau-hula-o-ikemanu.jpg",
    website: null,
    tier: "Pikake Sponsors",
  },
  {
    name: "NOA Botanicals",
    logo: "/noa-botanicals.jpg",
    website: null,
    tier: "Pikake Sponsors",
  },
  {
    name: "FlyGuy Travels",
    logo: "/flyguy-travels.jpg",
    website: null,
    tier: "Pua Melia Circle",
  },
  {
    name: "Chiko's Tavern",
    logo: "/chikos-tavern.jpeg",
    website: null,
    tier: "Pua Melia Circle",
  },
  {
    name: "Tanoa Events",
    logo: "/tanoa-events.jpeg",
    website: null,
    tier: "Pua Melia Circle",
  },
];
