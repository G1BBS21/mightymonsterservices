# CLAUDE.md — Mighty Monster Services website

This repo is the **source of truth** for the Mighty Monster Services website, which is built
in **Wix Studio**. The Wix site is the rendered output, and this repo holds the decisions
behind it: brand, design rules, page inventory, SEO, services, CMS content and open items.

Read this file, then **`OPEN_ITEMS.md`**, before starting any task.

## The client

- **Mighty Monster Services** (Mighty Monster Hauling LLC): a family-owned hauling and
  cleanup business in Central Texas (McLennan, Hill and Bell counties).
- **Decision-maker: Chase.** Client details last confirmed Oct 1, 2026.
- Confirmed contact details are in `site/site.json`. **Hours, licensing and insurance are
  unknown.** Never invent them; ask Chase or leave them out.

## Golden rules

1. **Repo first, then Wix.** Make a change here, commit it, then apply it to Wix (through the
   Wix MCP tools or by hand in the Studio editor). Never change the site in a way that leaves
   this repo out of date.
2. **If Wix and the repo disagree,** ask which one is right. Then update the other to match.
3. **Never invent business facts** (prices, service areas, hours, licenses, insurance, reviews,
   years in business, staff names). If it isn't in this repo, ask.
4. **Don't write legal text.** Terms, Privacy and Accessibility copy must be client-approved.
5. **Don't publish or unpublish the site, connect a domain, or change billing.** Those are
   Chase's. Chase also handles the favicon and Premium plan.
6. Follow `brand/VOICE.md` for all copy, `design/DESIGN.md` for layout and styling, and
   `design/IMAGES.md` for imagery.

## Who handles what

- **Chase:** favicon, Premium plan payment, domain connection, publishing, approvals.
- **Claude:** content, layout, CMS, image placement, QA across breakpoints, keeping this repo
  current.

## Key facts

- Wix site ID: `e28aadaa-fdee-42b6-92f9-32209c6a679e` · Editor: Wix Studio · Velo: **off**
- Phone: 254-339-2243 (call or text) · Email: mightymonsterhauling@gmail.com
- Primary CTA: "Get a Free Quote" → `/contact`
- Brand colors: navy `#0E1023`, yellow `#FFD300`, red `#E21B4D` · Fonts: Bitter (headings),
  Open Sans (body), Azeret Mono

## Where things live

| File | What it holds |
|------|---------------|
| `OPEN_ITEMS.md` | Everything unresolved: questions for Chase, placeholders, QA to-dos |
| `site/site.json` | Wix IDs, URLs, apps, regional settings, confirmed contact info, unknowns |
| `site/pages.json` | Every page: Wix page ID, path, SEO title and description, placeholder status |
| `content/services.json` | Full copy for the 8 services (mirror of CMS `Services`) |
| `content/services.md` | Service naming table and the add/rename checklist |
| `content/faqs.json` | FAQ copy (mirror of CMS `FAQs`) |
| `content/CMS.md` | All CMS collections and the rules for each |
| `content/forms.json` | Wix Forms schemas and field keys |
| `brand/VOICE.md` | Voice, tone, required phrases, CTAs, things never to state |
| `design/DESIGN.md` | Color, typography, layout and accessibility rules |
| `design/tokens.json` | Theme colors and fonts from Studio Site Styles |
| `design/IMAGES.md` | Image asset map and style rules for new imagery |
| `seo/SEO.md` | Title and description rules |
| `docs/history/` | Earlier notes, kept for reference (superseded by this file) |

## Common tasks

- **Change a page's SEO title or description:** edit `site/pages.json`, run
  `node scripts/check-seo.mjs`, commit, then write it to Wix with the SEO Tags API
  (`item-seo-tags/STATIC_PAGE/{pageId}`), reading the current tags first.
- **Edit service or FAQ copy:** edit the JSON mirror in `content/`, commit, then update the
  matching CMS item (Wix Data Items API, collection `Services` or `FAQs`).
- **Add or rename a service:** follow the checklist in `content/services.md`.
- **Add a page:** create it in Studio, then add it to `site/pages.json` with its Wix page ID
  (list the IDs with the SEO Tags API `GET .../item-seo-tags/STATIC_PAGE`).
- **Restyle something:** check `design/DESIGN.md` and `design/tokens.json` first. A new color
  or font goes into `tokens.json` in the same commit.
- **Replace an image:** follow `design/IMAGES.md` and update its asset map.

## After any layout change

Check desktop, **tablet** (the weakest breakpoint so far) and mobile. Watch contrast.

## Before you commit

- `node scripts/check-seo.mjs` passes (CI runs it too).
- Copy follows `brand/VOICE.md`. Phone number is formatted `254-339-2243`.
- Anything still showing Wix placeholder text or profiles is listed in `OPEN_ITEMS.md`.
