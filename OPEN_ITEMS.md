# Open items

Anything still showing Wix default text or placeholder profiles stays on this list until fixed.
Check items off here in the same commit that resolves them.

## Needs Chase

- [ ] **Published or draft?** The Cowork notes (Oct 1) say the site is an unpublished draft.
      Wix's API (Oct 12) reports it as **published** on the free `cedarsphere.wixstudio.com`
      URL. Confirm which is intended. Either way, don't publish or unpublish without Chase.
- [ ] **Service names:** pick one name per service; the CMS, quote form and home cards
      disagree (see `content/services.md`).
- [ ] **Service copy approval:** `content/services.json` is current site copy, not marked
      approved. Send an approved copy deck if one exists.
- [ ] **Service area wording:** the confirmed area is McLennan, Hill and Bell counties. The
      site says "Central Texas" (SEO, FAQ, Services copy). Decide whether to name the counties.
- [ ] **CTA label:** the FAQ says "Get FREE Quote"; `brand/VOICE.md` says "Get a Free Quote".
      Pick one.
- [ ] Hours, licensing and insurance are unknown. Leave them off the site until confirmed.
- [ ] Terms, Privacy and Accessibility pages are Wix placeholder text. They need
      client-approved policy text.
- [ ] Instagram and LinkedIn footer links point to Wix placeholder profiles. Need real URLs,
      or remove them.
- [ ] Confirm AI imagery is acceptable at launch. (Chase approved the 12 images as a stopgap;
      launch use is a separate call.)
- [ ] Favicon, Premium plan and domain connection (Chase handles these).

## Claude can do

- [ ] Home service-card subtitles are low-contrast grey. Fix for accessibility. Theme grey
      `#717171` fails AA for body text on every theme background; switch the subtitles to
      Color 10 `#414141` (9.4:1 on `#F7F5F2`). See `design/DESIGN.md`.
- [ ] Tablet layouts not fully checked on Services, About and Home.
- [ ] Confirm in Site Styles that headings use Bitter and body text uses Open Sans (recorded
      from how the pages render, not from a setting).
- [ ] Swap in real job photos when available.
