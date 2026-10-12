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
- [ ] Confirm AI imagery is acceptable at launch.
- [ ] Favicon, Premium plan and domain connection (Chase handles these).

## Claude can do

- [ ] Home service-card subtitles are low-contrast grey. Fix for accessibility.
- [ ] Tablet layouts not fully checked on Services, About and Home.
- [ ] Fill the remaining 7 colors, the color roles and the 9 text sizes in
      `design/tokens.json` from Site Styles.
- [ ] Add `claude/higgsfield-shot-list.md` (the shot list the Cowork notes call the
      source of truth for imagery), or merge it into `design/IMAGES.md`. It isn't in this repo yet.
- [ ] Swap in real job photos when available.
