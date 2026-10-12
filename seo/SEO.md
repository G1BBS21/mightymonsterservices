# SEO rules

The intended title and description for every page live in `site/pages.json`. Run
`node scripts/check-seo.mjs` after editing it.

## Titles

- 60 characters or fewer.
- Pattern: `<What we do / page topic> | Mighty Monster Services` (or `| Mighty Monster` when
  the full name would push the title over 60).
- Name the service and "Central Texas" on the Home and Services pages.

## Meta descriptions

- 120–160 characters.
- Include the service area and end with a call to action ("Get a free quote").

## Site-wide

- The canonical domain is the Wix URL in `site/site.json` until a custom domain is
  connected. When one is, update `liveUrl` there.
- The Facebook admin meta tag (`MightyMonsterHaulingLLC`) is set at the site level in Wix.
  Leave it in place.
