# Oahu Pride Volleyball (OPV) Website

## Overview

This is a single-page website for Oahu Pride Volleyball (OPV) - an inclusive, all-gender grass volleyball league in Honolulu, Hawaii. The site serves as the digital presence for Season 4 (Fall 2025) of the league, which is affiliated with Aikāne ʻOhana, a 501(c)(3) organization.

The application is built as a full-stack React application with Express backend, featuring a vibrant Pride-themed design with an optional "Pride Mode" that transforms the site with rainbow gradients and animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- React Query (@tanstack/react-query) for data fetching and state management

**UI Component System:**
- Shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Components follow the "New York" style variant from Shadcn
- Custom Pride Mode theme system using React Context API

**Styling Approach:**
- Tailwind CSS with extensive customization via `tailwind.config.ts`
- CSS variables for theming (light mode base with Pride Mode overlay)
- **Trade Winds Sunset Color Palette:**
  - Pacific Navy #0B1F2A (193, 58%, 10%) - Primary text and headers
  - Lagoon #00A7C7 (190, 100%, 39%) - Secondary buttons and CTAs
  - Hibiscus #FF3E81 (339, 100%, 62%) - Primary buttons and highlights
  - Plumeria #FFD166 (42, 100%, 70%) - Accent color and badges
  - Sand #F7EFEA (23, 48%, 94%) - Background color
  - Signature gradient: `linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)`
- **Typography System:**
  - Headings (h1, h2, h3): Barlow Condensed (font-display font-bold text-gray-800)
  - Body text: Inter (text-gray-700 for main content, text-gray-800 for emphasis)
  - Buttons/labels: font-semibold
  - Consistent font weights across all sections
- Responsive design with mobile-first approach

**Key Design Patterns:**
- Context-based Pride Mode toggle (`PrideModeContext`) that applies body class and rainbow gradients
- Component-based architecture with separate files for each section (Hero, About, Features, Sponsors, etc.)
- Reusable UI components in `client/src/components/ui/`
- Page-level components in `client/src/pages/`

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- Node.js runtime
- Development mode uses tsx for hot reloading
- Production build uses esbuild for bundling

**API Structure:**
- Routes registered in `server/routes.ts` with `/api` prefix
- Currently minimal backend implementation (starter template)
- Session-based architecture prepared (connect-pg-simple for sessions)

**Development Setup:**
- Vite dev server proxy for API requests
- Hot module replacement in development
- Replit-specific plugins for error handling and debugging

### Data Storage

**Database:**
- PostgreSQL via Neon serverless driver (@neondatabase/serverless)
- Drizzle ORM for type-safe database queries
- Schema defined in `shared/schema.ts`
- Migrations managed with drizzle-kit in `migrations/` directory

**Current Schema:**
- Users table with id, username, password fields
- Prepared for authentication but not yet implemented
- Uses Zod for runtime validation via drizzle-zod

**Storage Pattern:**
- IStorage interface defines CRUD operations
- MemStorage implementation for in-memory fallback
- Database connection configured via DATABASE_URL environment variable

### External Dependencies

**Third-Party Services:**
- **Neon Database**: Serverless PostgreSQL hosting
- **TeamSideline**: Schedules and standings (https://teamsideline.com/sites/aikaneohana)
- **Eric Z Martin Photography**: Official game photos (https://ericzmartin.com/)
- **Zeffy**: Donation platform (https://www.zeffy.com/fundraising/support-season-4-oahu-pride-volleyball-league)
- **Aikāne ʻOhana**: Parent organization website (https://www.aikaneohana.com/)

**External Assets:**
- Season 4 poster image hosted on Aikāne ʻOhana CDN
- Sponsor logos (local and external)
- Google Fonts: Inter and Poppins
- Tailwind CSS via CDN in static version

**APIs & Integrations:**
- Linktree for social media aggregation (https://linktr.ee/oahupridevolleyball)
- No payment processing on site (redirects to Zeffy)
- No authentication system currently active

**Development Tools:**
- Replit-specific plugins for development environment
- ESBuild for production bundling
- PostCSS with Autoprefixer for CSS processing

**Key Features:**
- Pride Mode toggle with animated rainbow gradients
- Responsive navigation with mobile menu
- Comprehensive homepage sections with alternating backgrounds:
  - Hero section with Season 4 poster and CTAs (gradient background)
  - About OPV with league information (Sand background)
  - Stay Connected feature cards with elevated card design (white background with bg-card borders)
  - Season 4 Schedule with division cards (Sand background)
  - Captain's Corner with resource links for team captains (white background, using Lucide icons)
  - Sponsors showcase with 6 sponsor logos and "Become a Sponsor" CTA (Sand background)
  - Tournament registration section (white background)
  - Board of Directors with member photos and titles (Sand background)
  - Final CTA with gradient background
  - Footer with gradient background
- **Visual Separation Pattern:**
  - Alternating Sand (#F7EFEA) and white backgrounds for clear section boundaries
  - Gradient bookends (Hero, Final CTA, Footer) for visual cohesion
  - Elevated card components on white sections using bg-card with subtle borders
  - Rainbow gradient underline (96px × 4px, Hibiscus → Plumeria → Lagoon) under all section headers for visual consistency
- Links to external tournament registration and photo galleries
- Accessibility features (focus states, alt text, semantic HTML, data-testid attributes)
- Design compliance: No emoji icons in UI (uses Lucide React icons instead), no single-side borders on rounded elements

**Recent Updates (October 2025):**
- Updated to new transparent OPV logo featuring rainbow arc, volleyball, Diamond Head mountain, and hibiscus flower
- Standardized typography across all sections using Barlow Condensed for headings and Inter for body text
- Improved text contrast with text-gray-700/800 color scheme
- Removed all emoji characters from UI elements per design guidelines
- Implemented ScheduleSection with division-specific schedules and PDF downloads
- Added CaptainsCornerSection with resource cards for team captains
- Updated SponsorsSection with grid layout and sponsor names
- Created BoardSection showing all board members with photos and titles
- Implemented alternating background pattern (Sand/White) with gradient bookends for professional visual separation
- Updated FeatureCards to use elevated card design (bg-card with borders) on white background
- Ensured consistent text-gray-700 color usage across all body text
- **Text Rendering Fixes:**
  - Scoped emoji font rules to `.emoji-text` utility class to prevent numeral spacing issues
  - Added `font-variant-numeric: lining-nums proportional-nums` for consistent numeral rendering
  - Created `.nowrap` utility class to prevent date/time tokens from breaking across lines
  - Implemented non-breaking spaces (`\u00A0`) in season dates/times while maintaining dynamic data from `site.ts`
  - Fixed stray meta/link tags in index.html by moving them inside `<head>` element
  - All schedule text now uses dynamic `season` object with proper formatting to prevent numeral gaps
- **Social Media Integration:**
  - Added Facebook and Instagram icons alongside Linktree in navigation and footer
  - Facebook: https://www.facebook.com/groups/577119141300496
  - Instagram: https://www.instagram.com/oahupridevolleyball/
  - Icons use react-icons/fa (FaFacebook, FaInstagram) for consistent styling
  - Desktop navigation displays all 3 social icons horizontally, mobile menu shows them vertically with labels
  - All social links centralized in `site.ts` for maintainability
- **Board of Directors Updates:**
  - Updated all board member photos to use the official OPV logo (`/opv-logo.png`)
  - Replaced external Wix placeholder images with local logo asset
  - All 8 board members now display consistent OPV branding
  - VACANT position continues to show "?" placeholder
- **Banner and Logo Updates:**
  - Replaced Season 4 poster with new 1920x1080 design featuring OPV logo, season dates, and Kapi'olani Park location
  - Fixed banner aspect ratio to maintain locked 16:9 proportions across all screen sizes
  - Changed from fixed heights to width-based sizing with `aspectRatio: '16/9'` style
  - Banner height reduced on mobile for better UX (max-w-sm on mobile, max-w-2xl on tablet, max-w-4xl on desktop)
  - Fixed Linktree logo aspect ratio issue across all sections (desktop nav, mobile menu, footer)
  - Changed Linktree logo from fixed width/height to `w-auto` to prevent squishing on window resize
  - All social icons now maintain proper proportions at all screen sizes
  - Made Facebook and Instagram icons darker in footer (text-gray-800) for better visibility against gradient background
- **Navigation Layout Improvements:**
  - Added explicit right margin to logo wrapper (`mr-6 xl:mr-10`) to prevent Pride Mode from crowding the logo (24px at lg, 32-40px at xl+)
  - Restructured desktop navigation with `flex-nowrap` to ensure single-row layout at all viewport widths
  - Nav links use `shrink-0` and responsive padding (`px-2 lg:px-3 xl:px-4`) to prevent compression
  - Added `overflow-x-auto` to nav links container - if space is tight, horizontal scroll appears instead of wrapping
  - Added explicit width/height attributes and `object-contain shrink-0` to Linktree images (desktop and mobile)
  - Linktree logo maintains perfect 1:1 aspect ratio at all viewport widths
  - All spacing is responsive with larger gaps at wider viewports (lg/xl/2xl)