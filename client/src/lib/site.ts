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
  clinics: "TBD",
  parties: "TBD",
};

export const links = {
  home: "https://oahupridevolleyball.com",
  donate:
    "https://www.zeffy.com/en-US/donation-form/season-5-oahu-pride-volleyball-league/",
  rules:
    "https://www.aikaneohana.com/_files/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf",
  photos: "https://ericzmartin.smugmug.com/",
  teamSideline: "https://teamsideline.com/aikaneohana",
  freeAgent:
    "https://docs.google.com/forms/d/e/1FAIpQLSfD0wuLOqmfYJ92MwLru6-G1JSyCyu0KAKq8ZSd12TybJxIMA/viewform?pli=1",
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

export type Sponsor = {
  name: string;
  logo: string; // path under /public
  website: string | null;
};

export const sponsors: Sponsor[] = [];
