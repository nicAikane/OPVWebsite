# OPV Website Design Guidelines

## Design Approach
**Reference-Based + Custom Brand Identity**: Drawing from LGBTQIA+ community aesthetics with vibrant, inclusive design patterns. The site celebrates Pride with optional rainbow theming while maintaining professional accessibility standards.

## Core Design Elements

### A. Color Palette

**Light Mode (Default):**
- Background: Cream `#fef9ed` (warm, welcoming base)
- Primary Pink: `335 85% 49%` (OPV signature color)
- Accent Yellow: `48 100% 62%` (energy, optimism)
- Blue/Teal: `174 78% 41%` (focus states, trust)
- Text: Gray-700 to Gray-900 (readability)

**Pride Mode (Toggle-activated):**
- Animated gradient background cycling through: Pink `#e40e78` → Orange `#ff6b35` → Gold `#f7931d` → Yellow `#ffd23f` → Green `#72c837` → Blue `#2e86ab` → Purple `#8e44ad`
- Navigation: Semi-transparent rainbow gradient overlay
- Headings: Animated rainbow text gradient
- Buttons: Rainbow gradient with white borders

### B. Typography
- **Body**: Inter (400, 500, 700) - Clean, modern readability
- **Headings**: Poppins (700) - Bold, impactful display text
- **Scale**: Responsive (sm to 3xl+ for headlines)
- **Pride Mode**: Headings use animated rainbow gradient text effect

### C. Layout System
- **Container**: `max-w-screen-xl` with `px-4 sm:px-6 lg:px-8`
- **Spacing**: Tailwind scale of 4, 6, 8, 12, 16, 20, 24, 32 for consistency
- **Sections**: Generous `py-12` to `py-20` vertical rhythm
- **Grid**: 2-3 column feature cards on desktop, stack on mobile

### D. Component Library

**Navigation:**
- Sticky top navigation with cream background
- Logo (Season 4 poster) at 64px-80px height
- Horizontal link stack on desktop, condensed mobile view
- Pride Mode toggle switch (52px × 28px) with rainbow track animation
- Free Agent CTA button with blue gradient (transforms to rainbow in Pride Mode)
- Social media icon (Instagram/Linktree) with pink accent

**Buttons:**
- Primary: Blue gradient (`#1e3a8a` → `#3b82f6` → `#06b6d4`) with lift-on-hover
- Pride Mode: Rainbow gradient with 2px white border, text shadow
- Rounded-full shape for CTAs
- Hover: `translateY(-2px)` lift + enhanced shadow

**Cards:**
- White background with subtle shadow
- Rounded corners (lg/xl)
- `.hover-lift` effect: 4px upward translation + deeper shadow
- Icon/image top, content below

**Forms/Links:**
- Underline on hover for text links
- Focus-visible: 2px teal outline with offset
- All external links: `target="_blank" rel="noopener noreferrer"`

### E. Animations

**Pride Mode Transitions:**
- Background gradient: 8s linear infinite shift
- Text gradients: 2-3s ease infinite wave
- Toggle switch: Rainbow gradient animation on track
- All respect `prefers-reduced-motion: reduce`

**Micro-interactions:**
- Hover lifts: 0.3s ease with cubic-bezier easing
- Button transforms: 0.3s for smooth state changes
- Navigation transitions: 0.3-0.5s for mode switching

**Key Principle**: Animations celebrate Pride identity but remain optional and accessible

## Images

**Hero Section:**
- Large Season 4 poster image (currently: `952afa_season4poster.png`)
- Also used as navigation logo at reduced size
- Placement: Prominent in hero, supporting CTA buttons

**Sponsor Logos:**
- Grid layout in sponsors section (currently placeholders)
- Replace with actual sponsor logos in `assets/sponsors/`

**Photography:**
- Eric Z Martin credited for league photography
- Gallery images to be added in feature cards

## Accessibility Features
- Semantic HTML structure
- Alt text for all images
- Focus-visible states with teal outlines
- Reduced motion support for all animations
- ARIA labels on icon-only links
- Color contrast maintained in both light and Pride modes

## Unique Features
- **Pride Mode Toggle**: Central brand feature - animated rainbow theme celebrating LGBTQIA+ identity
- **Cream Background**: Warm, inviting alternative to stark white
- **Blue Gradient CTAs**: Professional trust signals that transform to rainbow in Pride Mode
- **Sticky Navigation**: Always accessible with smooth mode transitions
- **Mobile-First**: Condensed nav, stacked sections, touch-friendly targets