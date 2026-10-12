# Design system

The Wix Studio editor is where design is *built*; this file is where it is *decided*.
When the two disagree, update Wix to match this file, or update this file first and then Wix.

Token values live in `design/tokens.json`. Fill in any `null` value from Wix Studio's
**Site Styles** panel (Colors, Text themes) and commit it.

## Color

- Use only the theme colors in `tokens.json`. No one-off hex values on individual elements.
- Primary CTA buttons use `color.primary` with `color.onPrimary` text.
- Body text on light backgrounds must meet WCAG AA contrast (4.5:1).

## Typography

- Use the Wix text themes (Heading 1–6, Paragraph 1–3) mapped in `tokens.json`. Don't
  restyle text inline.
- One H1 per page. It states the service and the location when possible.
- Headings go in order (H1 → H2 → H3) with no skipped levels.

## Layout

- Design desktop, tablet and mobile breakpoints in Studio. Check every new section on mobile
  before publishing.
- Every page ends with a quote CTA section (button to `/contact` plus the phone number).
- The header should hold the logo, main nav (Home, Services, Projects, About Us, Contact) and a
  "Get a Free Quote" button. The footer should hold the phone number, service area, Facebook link,
  and links to the Privacy Policy, Terms & Conditions and Accessibility Statement.

## Images

- Use real job photos (before/after) over stock wherever possible.
- Every image needs descriptive alt text that names what's shown, e.g.
  "Trailer loaded with yard debris after a cleanup in Temple, TX".
- Default social share image: see `site/site.json` → `defaultShareImage`.

## Accessibility

- Keep the Accessibility Statement page current.
- Buttons and links need meaningful labels ("Get a Free Quote", not "Click here").
