# Services

Full copy for each service (tagline, intro, benefits, what we take and can't take, hero
image) is in `services.json`, mirrored from the Wix CMS collection `Services`. It is the
copy currently on the site; nobody has marked it approved.

## Service names

Decided by Chase 2026-10-12. All three places now use the same names. Service 2 takes the
home-card name; services 6 and 8 take the CMS names.

| # | CMS / Services page | Quote form dropdown | Home page cards |
|---|---------------------|---------------------|-----------------|
| 1 | Hauling & Junk Removal | Hauling & Junk Removal | Hauling & Junk Removal |
| 2 | Construction & Demo Cleanup | Construction & Demo Cleanup | Construction & Demo Cleanup |
| 3 | Property & Yard Cleanup | Property & Yard Cleanup | Property & Yard Cleanup |
| 4 | Tree & Brush Removal | Tree & Brush Removal | — |
| 5 | Roofing Services | Roofing Services | — |
| 6 | Trash Can Sanitation | Trash Can Sanitation | — |
| 7 | Dump Trailer Rentals | Dump Trailer Rentals | — |
| 8 | Other Services | Other Services | — |

The home page cards also use taglines that differ from the CMS taglines. The CMS URL slug for
service 2 stays `construction-demolition-cleanup` so existing links keep working.

## Adding or renaming a service

1. Edit `services.json`, then this file's table.
2. Update the `service_needed` options in `forms.json`.
3. Update the CMS item, the quote form dropdown in Wix Forms, and the Home page cards if the
   service is featured.
4. If the Services page SEO description in `site/pages.json` names the service, update it.
5. Add or replace the service's hero image and update `design/IMAGES.md`.
