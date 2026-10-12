# Brand voice & messaging

Drawn from the copy already live on the site. Treat these as rules for any new copy.

## Who we are

- **Mighty Monster Services** (legal name: Mighty Monster Hauling LLC).
- **Family-owned and locally operated.**
- Serving **Central Texas**: specifically McLennan, Hill and Bell counties. Only name
  towns or counties in that confirmed area.

## Core messages (use these phrases; don't paraphrase them away)

- "No job too big or too small."
- "Family-owned, locally operated."
- "Get a free quote" is the primary call to action on every page.
- "Straight quote before we start" / "a straight quote, no surprises."
- Phone: **254-339-2243**. Format it exactly like that, with dashes. Invite people to
  "call or text".
- Email: mightymonsterhauling@gmail.com

## Tone

Examples of the house style are in the live copy: `content/services.json` and `content/faqs.json`.

- Plain, direct, friendly. Write the way a local crew talks to a neighbor.
- Short sentences. Lead with what we do and where.
- Confident, not hypey: no "best in the world" or "#1" claims we can't back up.
- Name the location (Central Texas or a specific town) in headlines and SEO copy when it fits.

## Calls to action

| Context | Label | Goes to |
|---------|-------|---------|
| Primary button | Get a Free Quote (the FAQ says "Get FREE Quote"; label not yet settled, see `OPEN_ITEMS.md`) | `/contact` |
| Phone link | Call 254-339-2243 | `tel:+12543392243` |

## Naming

- First mention on a page: "Mighty Monster Services". After that, "Mighty Monster" is fine.
- In SEO titles, the suffix is either `| Mighty Monster Services` or `| Mighty Monster`.
  Use the short form when the full form would push the title past 60 characters.

## Never state

Hours, licensing, insurance, prices, years in business, review counts or ratings: none of these
are confirmed. Leave them out until Chase confirms them (`site/site.json` → `unknown`).
