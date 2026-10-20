---
version: alpha
name: Lingaasys
description: Visual specification for the Lingaasys light, editorial B2B technology theme with orange accents and dark contrast sections.
colors:
  background-base: "#FFFFFF"
  background-soft: "#FAF7F5"
  background-tint: "#FDEEE8"
  background-dark: "#050708"
  background-dark-raised: "#111519"
  border-default: "#E6E2DF"
  border-strong: "#CFC9C5"
  border-dark: "#293036"
  accent-primary: "#E7430B"
  accent-bright: "#F4511E"
  accent-coral: "#F05B36"
  accent-soft: "rgba(240, 91, 54, 0.12)"
  accent-gradient-start: "#F4511E"
  accent-gradient-end: "#FF8A5C"
  text-primary: "#111315"
  text-secondary: "#4A5157"
  text-muted: "#6B737A"
  text-on-dark: "#F7F8F8"
  text-on-accent: "#FFFFFF"
  rating-star: "#F5B301"
typography:
  display-hero:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 3.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  display-ghost:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 12rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  h1:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 2.25rem
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 1.5rem
    fontWeight: 500
    lineHeight: 1.3
  h4:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.35
  body-lg:
    fontFamily: "Sora, sans-serif"
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.54
  body-md:
    fontFamily: "Sora, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Sora, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.7
  eyebrow:
    fontFamily: "Sora, sans-serif"
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.12em"
    textTransform: uppercase
  utility:
    fontFamily: "Roboto Mono, monospace"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.45
rounded:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  micro: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  3xl: 80px
  section: 120px
layout:
  desktop-width: 1920px
  container-width: 1320px
  columns: 12
  gutter: 24px
  desktop-margin: 300px
components:
  button-primary:
    backgroundColor: "{colors.accent-primary}"
    textColor: "{colors.text-on-accent}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    minHeight: 44px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-strong}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    minHeight: 44px
  button-dark:
    backgroundColor: "{colors.background-dark}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    minHeight: 44px
  card-tint:
    backgroundColor: "{colors.background-tint}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-accent:
    backgroundColor: "{colors.accent-coral}"
    textColor: "{colors.text-on-accent}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-value:
    backgroundColor: "{colors.background-soft}"
    borderColor: "{colors.border-default}"
    rounded: "{rounded.md}"
    padding: 24px
  card-job:
    backgroundColor: "{colors.background-base}"
    borderColor: "{colors.border-default}"
    rounded: "{rounded.lg}"
    padding: 32px
  value-item:
    backgroundColor: "{colors.background-soft}"
    borderColor: "{colors.border-default}"
    rounded: "{rounded.md}"
    padding: 24px
  card-testimonial:
    backgroundColor: "{colors.background-base}"
    borderColor: "{colors.border-default}"
    rounded: "{rounded.md}"
    padding: 24px
  badge-tag:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-primary}"
    borderColor: "{colors.accent-coral}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Overview

Lingaasys Light is a bright, editorial B2B technology theme. White canvases and soft peach tints carry large centered headlines, while a single orange accent drives actions and emphasis. Two near-black sections (Industries and the closing CTA/footer) add contrast and rhythm. The tone is human and practical: real people, tactile product and packaging photography, and warm light.

Values to express: precision, warmth, approachability, practical innovation.

This file documents a static visual theme estimated from a full-page reference image. Hex values are approximations; validate against brand assets. Responsive, motion, carousel and tab behavior must be validated before production.

---

# Colors

Light surfaces dominate. Orange is reserved for actions, active states, key cards and brand marks.

- Background Base (#FFFFFF): Main page canvas (hero, services, insights, testimonials).
- Background Soft (#FAF7F5): Value cards and subtle panels.
- Background Tint (#FDEEE8): Peach cards such as "Built around people" and the stats card.
- Background Dark (#050708): Industries section, CTA and footer.
- Background Dark Raised (#111519): Cards on dark sections.
- Accent Primary (#E7430B): Primary buttons, active tab underline, links, icon fills.
- Accent Bright (#F4511E): Hover states, arrows, gradient start.
- Accent Coral (#F05B36): Featured orange card ("From ideas to impact"), headline highlight words on dark.
- Accent Soft (rgba(240, 91, 54, 0.12)): Tag fills.
- Text Primary (#111315): Headings on light.
- Text Secondary (#4A5157): Body copy on light.
- Text Muted (#6B737A): Metadata, dates, captions. Must still meet 4.5:1.
- Text On Dark (#F7F8F8): Headings and copy on dark sections.
- Border Default (#E6E2DF): Card borders and dividers on light.
- Border Dark (#293036): Borders on dark sections.
- Rating Star (#F5B301): Testimonial stars only.

Gradients: a top announcement bar uses a horizontal orange gradient (accent-gradient-start to accent-gradient-end). The CTA background uses a photographic dark-to-orange silk/wave image with a dark overlay.

Third-party partner logos (Panaya, Verizon, Reddit) may keep original brand colors or be shown monochrome; do not recolor to orange.

---

# Typography

Space Grotesk for headings, Sora for body and interface copy, Roboto Mono for small utility text.

- Display Hero: Space Grotesk Regular, 56px, centered, tight tracking.
- Display Ghost: Space Grotesk Bold, oversized (about 192px), very light gray/white fill with fade, used only for the decorative "PEOPLE" word behind the photo collage. Decorative, aria-hidden.
- Heading 1: Space Grotesk Regular, 36px, used for section titles (centered or left-aligned two-line titles).
- Heading 2: Space Grotesk Medium, 28px.
- Heading 3: Space Grotesk Medium, 24px.
- Heading 4: Space Grotesk SemiBold, 20px, card titles.
- Body Large: Sora Regular, 20px.
- Body Medium: Sora Regular, 16px.
- Body Small: Sora Regular, 14px.
- Eyebrow: Sora Bold, 12px, uppercase, 0.12em tracking.
- Utility: Roboto Mono, 12px, meta rows such as "Full Time · Hybrid · Chennai".

Pattern: section titles are two lines with a deliberate line break (for example "Where Software / Connects"). A short right-aligned supporting paragraph sits opposite the title on left-aligned section headers.

Highlight words in a headline on dark sections may use Accent Coral (for example "Together", "Every Industry").

---

# Layout

- Reference desktop width: 1920px; centered container 1320px; 12 columns, 24px gutters.
- Standard section padding: 120px vertical, 300px horizontal on the reference width.
- Sections stack with generous whitespace on light areas; dark sections separate by background.
- Spacing scale: 4, 8, 16, 24, 32, 48, 64, 80, 120.
- Mobile: stack media above copy, collapse grids to one column, 20px margins and 16px gutters, simplify image overlap.

Section order:
1. Announcement bar
2. Header
3. Hero
4. Partner logo row
5. About ("Who is Lingaasys, What we build")
6. Services (tabs)
7. Industries (dark)
8. People
9. Careers and Values
10. Insights
11. Testimonials
12. CTA
13. Footer

---

# Elevation and Depth

- Prefer 1px borders and tinted fills over shadows on light surfaces.
- Hero image sits in a rounded container with a soft white-to-peach glow at the edges.
- Card shadow (rarely): 0 12px 32px rgba(17, 19, 21, 0.08).
- Accent glow: 0 0 32px rgba(231, 67, 11, 0.24), only for the primary hero CTA or focal elements.
- Use a dark overlay whenever text sits on photography (CTA, industry tiles).

---

# Shapes

- 4px: micro details.
- 8px: inputs, small controls, filter selects.
- 16px: standard cards (values, testimonials, article images).
- 24px: featured cards, hero image container, about image crop.
- Full pill: all buttons, tags, tab underline chips, "View All Blogs".
- Circle: orange icon badges on value cards, carousel arrows, avatars.

---

# Components

## Announcement Bar

- Slim full-width bar with orange gradient and small centered white text (for example "Enterprise Software · Digital Transformation · Business Solutions").
- Text must be white on orange at 14px minimum with 4.5:1 contrast; verify the gradient end.

## Header

- Left: Lingaasys logo (white-on-dark wordmark with orange accent mark, shown on light background in orange/black).
- Center: nav links (Services, Industries, Careers, Resources, etc.) at 14px, Text Primary; active link underlined or bolder.
- Right: dark pill button "Talk To Us".
- Use semantic nav landmark and visible focus states. Sticky behavior undefined.

## Hero

- Centered two-line Display Hero headline, one supporting paragraph (Body Medium, Text Secondary, max about 640px).
- Two CTAs side by side: primary orange pill ("See AI Details") and secondary outline pill ("Contact Us").
- Below: wide rounded image (human hand reaching toward robotic hand, orange/peach glow on white), 24px radius, full container width.
- Partner row: small caption "We Partnered with" above a repeating row of partner logos (marquee). Provide a pause control or respect prefers-reduced-motion.

## About

- Section header: left title "Who is Lingaasys / What we build", right short paragraph.
- Left: large rounded photograph (notebook, material swatches, hand).
- Right grid:
  - Peach card-tint "Built around people" with Body Small copy.
  - Peach stats card with two stats: "12+ Years" and "240 Clients", each with a caption.
  - Full-width card-accent (coral) "From ideas to impact", white text, description, and an inline text link with arrow ("Discover Lingaasys").

## Services

- Centered title "Services that turn / Ideas into impact".
- Horizontal tabs: AI & ML, Web Apps, Mobile Apps, Cloud, Data, Automation, UX/UI. Active tab: Accent Primary text with 2px underline; inactive: Text Muted.
- Panel: wide rounded image, then left heading (H3, for example "AI & Machine Learning"), right description paragraph, and badge-tag chips (for example AI Strategy, Generative AI, Automation).
- Use tablist, tab, tabpanel semantics with arrow-key navigation and aria-selected.

## Industries (Dark)

- Background Dark. Left column: H1 "Technology Built For Every Industry" with "Every Industry" in Accent Coral, paragraph in Text On Dark, and two buttons: primary orange pill ("Explore Industries") and dark outline pill ("Talk to Us").
- Right: 3 by 2 grid of tall rounded photo tiles with bottom-left labels: Education, Manufacturing, Healthcare, Logistics, Retail, Fintech. Dark gradient overlay for legibility, optional small arrow in the corner.
- Use one reusable industry-card component.

## People

- Left-aligned title "People who connect. Ideas that move" with right paragraph.
- Decorative oversized "PEOPLE" word fading into a collage of overlapping, slightly tilted team photos.
- Centered quote in italic H4: "We believe great work happens when people feel valued and respected."

## Careers and Values

Uses structured content: two job opportunity cards and four values, built from reusable job-card and value-item components.

- Section sits on Background Base, directly after People, with a left-aligned section header (H1 "Careers and Values" or approved copy) and a short right-aligned paragraph in Text Secondary.

### Job Opportunity Cards

- Two equal cards side by side (card-job): white fill, 1px Border Default, 24px radius, 32px padding.
- Content order per card: Eyebrow label (for example department) in Accent Primary, job title in H3, short description in Body Small Text Secondary, a meta row of badge-tags (employment type, work mode, location) in Utility size, then an action row.
- Action row: primary orange pill "Apply Now" with arrow. Optional text link "View Role Details".
- Hover: border shifts to Accent Coral and a subtle card shadow appears. No heavy glow.
- A closing row below the cards has a secondary outline pill "View Open Positions" and a contact email link in Accent Primary.
- Job card model: eyebrow, title, description, tags, URL. Build as one reusable job-card component. Make the whole card or the Apply Now button a minimum 44px target.
- Salary or compensation display is optional; remove if not approved for publication.

### Values

- Four value items (value-item) in a 4-column row: Curious, Committed, Human, Forward.
- Each item has an orange circular icon badge (Accent Primary fill, white icon), title in H4, and a short paragraph in Body Small Text Secondary.
- Fill Background Soft, 1px Border Default, 16px radius, 24px padding.
- Build as one reusable value-item component.
- Reflow to 2 columns on tablet and 1 column on mobile; job cards stack to one column on mobile.

## Insights

- Left-aligned title "Technology that turns / Possibilities into Progress" with a small outline pill "View All Blogs" at the right.
- Four equal article cards in a row: tall rounded image (16px), date in Utility, bold title (Body Small Semibold), two-line summary in Text Muted.
- Article model: image, date, title, summary, URL. Reflow to one column on mobile.

## Testimonials

- Centered title "Built with people. / Connected by technology." with one-line subhead.
- Horizontal carousel of five cards: avatar, five gold stars, quote, name in Accent Primary, role and organization in Text Muted.
- Circular prev/next controls on both sides, 44px hit area, accessible names, disabled state at ends.
- Display controls only when multiple approved testimonials exist.

## CTA

- Full-width dark photographic background (orange silk or wave texture) with dark overlay.
- Centered H1 "Let's Build What's Together" with "Together" in Accent Coral, one line of supporting copy, and an orange pill "Send Message".

## Footer

- Dark background continuing from CTA.
- Left: logo, tagline "Creating Systems for Humanity" in Text Muted, circular social icons (LinkedIn, Facebook, X, Instagram or similar).
- Right: four link columns: Company, Solutions, Industries, Resources, with a bold column heading and Body Small links in Text On Dark at reduced opacity.
- Bottom bar: copyright left, Terms, Privacy Policy, Cookies right, in Utility size.

---

# Accessibility

- Meet WCAG 2.2 AA.
- Normal text at least 4.5:1; large text at least 3:1.
- White text on Accent Primary (#E7430B) is about 4.1:1: use only for large or bold text, or darken to #C93A09 for small text.
- Interactive targets at least 44 by 44px.
- Visible focus ring on all controls (2px Accent Primary offset by 2px on light; white offset on dark).
- Do not use color as the only state indicator (tabs also use underline, stars have text alternative such as "5 out of 5").
- Decorative elements (ghost "PEOPLE" text, glows, partner marquee duplicates) are aria-hidden.
- Images need meaningful alt text unless decorative.
- Respect prefers-reduced-motion for marquee, carousel and tab transitions.
- Do not rely on muted gray text smaller than 14px for essential information.

---

# Do's and Don'ts

## Do

- Use white and peach tints as the primary canvas; reserve black for the Industries section, CTA and footer.
- Use orange only for actions, active states, key highlights and the featured coral card.
- Keep headings centered or two-line left-aligned with a right-hand support paragraph.
- Use real people and tactile, practical product photography with warm lighting.
- Keep card styling restrained: clean borders, tint fills, minimal shadow.
- Build repeated patterns as reusable components (cards, tabs, buttons, tags, job rows).

## Don't

- Do not recolor third-party logos to orange.
- Do not introduce additional oranges, grays or surface colors beyond this palette.
- Do not use neon AI imagery, holograms, or impossible interfaces.
- Do not place text over photography without an overlay.
- Do not use unsupported font sizes, spacing values or radii.
- Do not use gradients other than the announcement bar and CTA imagery.

---

# Content QA

Fix before implementation:

- "Lets Build What's Together" to "Let's Build What We Create Together" (or approved copy); fix "Lets" to "Let's".
- Remove spaces before commas and stray spaces in paragraphs (for example "Have a question , a project idea or just want to say hello?").
- Replace repeated placeholder paragraphs (the same "At our company, we foster a vibrant work culture..." text appears in multiple places).
- Replace duplicate article titles and dates ("The Future of Biotechnology Taking Shape and Beyond" is repeated) with real articles.
- Replace repeated partner logos with the approved partner set.
- Verify stat claims (12+ Years, 240 Clients) and testimonial attributions.
- Confirm copy for the About card "Built around people" and heading "Technology Built For Every Industry".
- Use the values Curious, Committed, Human and Forward consistently (the image shows "Connected" in place of "Committed"; replace it).
- Replace placeholder job titles and the repeated value paragraphs with approved careers copy.
- Review duplicate navigation and article placeholder content.
- Make sure the Learn More, Explore More, Apply Now, Read More and View Open Positions links have larger clickable areas.
