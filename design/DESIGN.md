# Design system

The Wix Studio editor is where design is *built*; this file is where it is *decided*.
When the two disagree, ask which one is right (see the golden rules in `CLAUDE.md`).

Token values live in `design/tokens.json`. Fill in any `null` value from Wix Studio's
**Site Styles** panel (Colors, Text themes) and commit it.

## Color

- Brand colors: navy `#0E1023` (Color 1, backgrounds), yellow `#FFD300` (Color 7, CTAs and
  service cards), red `#E21B4D` (Color 6, "MONSTER" in the logo). Full palette in `tokens.json`.
- Use only theme colors. No one-off hex values on individual elements.
- All text must meet WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text
  (24px+, or 18.5px+ bold). White on slate works for captions.

Contrast of the theme's own pairings (computed from `tokens.json`):

| Text | Background | Ratio | Use for |
|------|------------|-------|---------|
| Navy `#0E1023` | Yellow `#FFD300` | 13.0 | Any text (CTA buttons) |
| Off-white `#F7F5F2` | Navy `#0E1023` | 17.3 | Any text |
| Dark grey `#414141` (Color 10) | Off-white `#F7F5F2` | 9.4 | Any text |
| White `#FFFFFF` | Red `#E21B4D` | 4.7 | Any text, barely; prefer large |
| Navy `#0E1023` | Red `#E21B4D` | 4.0 | Large text only |
| Grey `#717171` (Color 4) | Off-white `#F7F5F2` | 4.49 | **Large text only**; fails for body |
| Grey `#717171` (Color 4) | `#F1EEEA` (Color 9) | 4.2 | **Large text only** |
| Grey `#717171` (Color 4) | `#D9D4CE` (Color 3) | 3.3 | **Large text only** |
| Grey `#717171` (Color 4) | Navy `#0E1023` | 3.9 | **Large text only** |

**Don't use Color 4 grey for body-size text on any background.** Use Color 10 `#414141` on
light backgrounds instead.

## Typography

- Headings: **Bitter** (slab serif). Body: **Open Sans**. **Azeret Mono** is in Site Styles but
  isn't used on any page; don't introduce it without a reason.
- Sizes: H1 86 · H2 64 · H3 50 · H4 36 · H5 22 · H6 16 · P1 22 · P2 16 · P3 14 (px, desktop).
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
