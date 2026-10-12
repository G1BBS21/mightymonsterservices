# Design system

The Wix Studio editor is where design is *built*; this file is where it is *decided*.
When the two disagree, ask which one is right (see the golden rules in `CLAUDE.md`).

Token values live in `design/tokens.json`. Fill in any `null` value from Wix Studio's
**Site Styles** panel (Colors, Text themes) and commit it.

## Color

- Brand colors: navy `#0E1023`, yellow `#FFD300`, red `#E21B4D` (full palette in `tokens.json`).
- Use only theme colors. No one-off hex values on individual elements.
- All text must meet WCAG AA contrast (4.5:1 for body text). White on slate works for captions.
  Avoid light grey text on light backgrounds; the home service-card subtitles currently break
  this rule.

## Typography

- Headings: **Bitter**. Body: **Open Sans**. **Azeret Mono** is also in the theme (where it
  is used isn't recorded yet).
- Use the Wix text themes (Heading 1–6, Paragraph 1–3) in `tokens.json`. Don't restyle text inline.
- One H1 per page. It states the service and the location when possible.
- Headings go in order (H1 → H2 → H3) with no skipped levels.

## Layout

- Check **desktop, tablet and mobile** after every layout change. Tablet has been the weakest
  breakpoint.
- Every page ends with a quote CTA section (button to `/contact` plus the phone number).
- The header should hold the logo, main nav (Home, Services, Projects, About Us, Contact) and a
  "Get a Free Quote" button. The footer should hold the phone number, service area, Facebook link,
  and links to the Privacy Policy, Terms & Conditions and Accessibility Statement.

## Images

See `IMAGES.md` for the asset map, the style rules for new imagery, and alt-text rules.
Default social share image: `site/site.json` → `defaultShareImage`.

## Accessibility

- Keep the Accessibility Statement page current.
- Buttons and links need meaningful labels ("Get a Free Quote", not "Click here").
- Don't write the Accessibility Statement or other legal pages. They need client-approved text.
