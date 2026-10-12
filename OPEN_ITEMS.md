# Open items

Anything still showing Wix default text or placeholder profiles stays on this list until fixed.
Check items off here in the same commit that resolves them.

## Needs Chase

- [ ] **Unpublish?** Chase confirmed the site is a **draft**, but Wix shows it as published on
      the free `cedarsphere.wixstudio.com` URL. Chase to unpublish it in Wix, or tell Claude to.
- [ ] **Service names 6 and 8:** CMS says "Trash Can Sanitation" / "Other Services"; the quote
      form says "Trash Can Cleaning & Disinfecting" / "Other". Pick one name for each.
      (Service 2 decided: "Construction & Demo Cleanup".)
- [ ] **Service copy approval:** `content/services.json` is current site copy, not marked
      approved. Send an approved copy deck if one exists.
- [ ] Hours, licensing and insurance are unknown. Leave them off the site until confirmed.
- [ ] Terms, Privacy and Accessibility pages are Wix placeholder text. They need
      client-approved policy text.
- [ ] Instagram and LinkedIn footer links point to Wix placeholder profiles. Need real URLs,
      or remove them.
- [ ] Confirm AI imagery is acceptable at launch. (Chase approved the 12 images as a stopgap;
      launch use is a separate call.)
- [ ] Favicon, Premium plan and domain connection (Chase handles these).

## Claude can do

- [ ] Check every **Get FREE Quote** button label in Studio matches that exact casing.
- [ ] Check the Contact page and footer name McLennan, Hill and Bell counties (Studio text,
      not reachable through the API).
- [ ] The Projects page SEO says "recent projects", but the gallery shows AI images. Revisit
      the wording once real job photos replace them.

- [ ] Home service-card subtitles are low-contrast grey. Fix for accessibility. Theme grey
      `#717171` fails AA for body text on every theme background; switch the subtitles to
      Color 10 `#414141` (9.4:1 on `#F7F5F2`). See `design/DESIGN.md`.
- [ ] Tablet layouts not fully checked on Services, About and Home.
- [ ] Confirm in Site Styles that headings use Bitter and body text uses Open Sans (recorded
      from how the pages render, not from a setting).
- [ ] Swap in real job photos when available.
