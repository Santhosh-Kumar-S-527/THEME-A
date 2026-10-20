# Lingaasys — B2B Enterprise Technology Website

A production-grade **Astro + TypeScript + Tailwind CSS** project scaffold for **Lingaasys**, built strictly adhering to `DESIGN.md`.

## 🚀 Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with Lingaasys Design Tokens
- **Package Manager**: [pnpm 12](https://pnpm.io/)
- **Typography**: Google Fonts (*Space Grotesk*, *Sora*, *Roboto Mono*)

---

## 🎨 Design Tokens & Theme Specification

Based on `DESIGN.md`:
- **Light Primary Canvas**: `#FFFFFF` with warm peach tints (`#FAF7F5`, `#FDEEE8`)
- **Dark Contrast Sections**: `#050708` for Industries, Closing CTA, and Footer
- **Orange Accents**: `#E7430B` (Primary), `#F4511E` (Bright), `#F05B36` (Coral), `rgba(240, 91, 54, 0.12)` (Soft)
- **Typography**:
  - Headings: `Space Grotesk`
  - Body Copy: `Sora`
  - Utility/Metadata: `Roboto Mono`
- **Border Radii**: 9999px for buttons and tags, 24px for featured cards, 16px for standard cards.

---

## 🏗️ Folder Structure

```text
lingaasys-web/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── branding/
│       ├── partners/
│       ├── photography/
│       ├── industries/
│       └── technologies/
├── src/
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── partners.ts
│   │   ├── services.ts
│   │   ├── industries.ts
│   │   ├── values.ts
│   │   ├── jobs.ts
│   │   ├── articles.ts
│   │   └── testimonials.ts
│   ├── types/
│   │   ├── index.ts
│   │   └── forms.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.astro
│   │   │   ├── BadgeTag.astro
│   │   │   ├── SectionHeading.astro
│   │   │   ├── Container.astro
│   │   │   └── StarRating.astro
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.astro
│   │   │   ├── Navbar.astro
│   │   │   ├── MobileMenu.astro
│   │   │   ├── ChatbotTrigger.astro
│   │   │   ├── ContactForm.astro
│   │   │   └── Footer.astro
│   │   ├── cards/
│   │   │   ├── CardJob.astro
│   │   │   ├── CardValue.astro
│   │   │   ├── CardIndustry.astro
│   │   │   ├── CardArticle.astro
│   │   │   └── CardTestimonial.astro
│   │   └── sections/home/
│   │       ├── 01-Hero.astro
│   │       ├── 02-Partners.astro
│   │       ├── 03-About.astro
│   │       ├── 04-ServicesTabs.astro
│   │       ├── 05-IndustriesDark.astro
│   │       ├── 06-PeopleCollage.astro
│   │       ├── 07-CareersValues.astro
│   │       ├── 08-Insights.astro
│   │       ├── 09-Testimonials.astro
│   │       └── 10-CtaDark.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro       <-- Sequentially assembles all 01 to 10 sections
│       ├── about.astro
│       ├── industries.astro
│       ├── technologies.astro
│       ├── careers.astro
│       └── 404.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📦 Scripts

- `pnpm dev`: Start local development server at `http://localhost:4321`
- `pnpm build`: Build production static bundle to `dist/`
- `pnpm preview`: Preview production build locally
- `pnpm check`: Run Astro and TypeScript diagnostics

---

## 🌟 Landing Page Sequence (`src/pages/index.astro`)

1. **AnnouncementBar**: Top gradient banner (`#F4511E` to `#FF8A5C`)
2. **Navbar**: Wordmark with orange accent, navigation links, "Talk To Us" pill
3. **01-Hero**: *"Where Software Connects"*, dual CTAs, glowing rounded visual
4. **02-Partners**: *"We Have Partnered with"*, infinite smooth marquee
5. **03-About**: *"Who is Lingaasys / What we build"*, editorial card, stats (12+ Years, 240 Clients), coral CTA card
6. **04-ServicesTabs**: Interactive tabs (AI & ML, Web Apps, Mobile Apps, Cloud, Data, Automation, UI/UX)
7. **05-IndustriesDark**: Dark contrast section (`#050708`), 3x2 photo tiles (Healthcare, Fintech, Manufacturing, Logistics, Retail, Education)
8. **06-PeopleCollage**: *"People who connect. Ideas that move"*, ghost "PEOPLE" backdrop, tilted cards, quote
9. **07-CareersValues**: 4 core values (Curious, Committed, Human, Forward) + Open Engineering Roles
10. **08-Insights**: *"Technology that turns Possibilities into Progress"*, 4 research articles
11. **09-Testimonials**: *"Built with people. Connected by technology."*, 5-star ratings, interactive carousel
12. **10-CtaDark**: Full-width photographic dark section, *"Let's Build What We Create Together"*
13. **Footer**: Integrated lead contact form, column links, social profiles, copyright bar
