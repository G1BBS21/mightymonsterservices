# CLAUDE.md — Mighty Monster Services website

This repo is the **source of truth** for the Mighty Monster Services website, which is built
in **Wix Studio**. The Wix site is the rendered output, and this repo holds the decisions
behind it: brand, design rules, page inventory, SEO, services and forms.

## Golden rules

1. **Repo first, then Wix.** Make a change here, commit it, then apply it to Wix (through the
   Wix MCP tools or by hand in the Studio editor). Never change the live site in a way that
   leaves this repo out of date.
2. **If Wix and the repo disagree,** ask the user which one is right. Then update the other
   to match.
3. **Never invent business facts** (prices, service areas, licenses, reviews, years in business,
   staff names). If something isn't in this repo, ask.
4. Follow `brand/VOICE.md` for all copy and `design/DESIGN.md` for all layout and styling.

## Key facts

- Wix site ID: `e28aadaa-fdee-42b6-92f9-32209c6a679e` (see `site/site.json`)
- Editor: Wix Studio. Velo (site code) is **off**.
- Phone: 254-339-2243 · Service area: Central Texas · Primary CTA: "Get a Free Quote" → `/contact`

## Where things live

| File | What it holds |
|------|---------------|
| `site/site.json` | Wix IDs, URLs, installed apps, regional settings, contact info |
| `site/pages.json` | Every page: Wix page ID, path, SEO title and description |
| `content/services.md` | The canonical service list (must match the quote form) |
| `content/forms.json` | Wix Forms schemas and field keys |
| `brand/VOICE.md` | Voice, tone, required phrases, CTAs |
| `design/DESIGN.md` | Layout, typography, color and image rules |
| `design/tokens.json` | Theme color and font values (from Studio Site Styles) |
| `seo/SEO.md` | Title and description rules |

## Common tasks

- **Change a page's SEO title or description:** edit `site/pages.json`, run
  `node scripts/check-seo.mjs`, commit, then write it to Wix with the SEO Tags API
  (`item-seo-tags/STATIC_PAGE/{pageId}`), reading the current tags first.
- **Add or rename a service:** follow the checklist in `content/services.md`.
- **Add a page:** create it in Studio, then add it to `site/pages.json` with its Wix page ID
  (list the IDs with the SEO Tags API `GET .../item-seo-tags/STATIC_PAGE`).
- **Restyle something:** check `design/DESIGN.md` and `design/tokens.json` first. If the change
  introduces a new color or font, add it to `tokens.json` in the same commit.

## Before you commit

- `node scripts/check-seo.mjs` passes (CI runs it too).
- Copy follows `brand/VOICE.md`. Phone number is formatted `254-339-2243`.
