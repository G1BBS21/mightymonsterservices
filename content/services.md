# Services

Full copy for each service (tagline, intro, benefits, what we take and can't take, hero
image) is in `services.json`, mirrored from the Wix CMS collection `Services`. It is the
copy currently on the site; nobody has marked it approved.

## The naming problem (open: needs Chase)

The same services go by different names in three places on the site:

| # | CMS / Services page | Quote form dropdown | Home page cards |
|---|---------------------|---------------------|-----------------|
| 1 | Hauling & Junk Removal | Hauling & Junk Removal | Hauling & Junk Removal |
| 2 | **Job Site Cleanup** | **Construction & Demolition Cleanup** | **Construction & Demo Cleanup** |
| 3 | Property & Yard Cleanup | Property & Yard Cleanup | Property & Yard Cleanup |
| 4 | Tree & Brush Removal | Tree & Brush Removal | — |
| 5 | Roofing Services | Roofing Services | — |
| 6 | **Trash Can Sanitation** | **Trash Can Cleaning & Disinfecting** | — |
| 7 | Dump Trailer Rentals | Dump Trailer Rentals | — |
| 8 | **Other Services** | **Other** | — |

The home page cards also use taglines that differ from the CMS taglines. Once Chase picks
one name per service, make all three places match and record the names here.

## Adding or renaming a service

1. Edit `services.json`, then this file's table.
2. Update the `service_needed` options in `forms.json`.
3. Update the CMS item, the quote form dropdown in Wix Forms, and the Home page cards if the
   service is featured.
4. If the Services page SEO description in `site/pages.json` names the service, update it.
5. Add or replace the service's hero image and update `design/IMAGES.md`.
