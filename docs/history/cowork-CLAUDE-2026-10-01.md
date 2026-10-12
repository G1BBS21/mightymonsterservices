# CLAUDE.md — Mighty Monster Services Website

Guidance for Claude when working on this project. Read this first, then check the open items before starting any task.

## Project Overview

Website build for **Mighty Monster Services** (Mighty Monster Hauling LLC), a hauling and cleanup business in Central Texas. The site is built on **Wix** and is currently a **draft, NOT published**.

- **Client contact / decision-maker:** Chase
- **Imagery:** 12 AI-generated images (Higgsfield) used as a stopgap until real job photos exist
- **Last client-confirmed details:** Oct 1, 2026

## Business Details (client-confirmed)

| Item | Value |
|------|-------|
| Phone | 254-339-2243 |
| Email | mightymonsterhauling@gmail.com |
| Facebook | https://www.facebook.com/MightyMonsterHaulingLLC |
| Service area | McLennan, Hill and Bell counties (TX) |

**Unknown / do not invent:** business hours, licensing, insurance. Never fabricate these. Ask Chase or leave them out.

## Who Handles What

- **Chase handles:** favicon, Premium plan payment, domain connection.
- **Claude handles:** content, layout, CMS, imagery placement, QA across breakpoints.
- Do not publish the site, connect a domain, or change billing. These need Chase.

## Services

Eight services appear in the contact form "Service needed" dropdown. Services live in a Wix CMS collection with a `heroImage` field.

Home page service cards currently show:
1. Hauling & Junk Removal
2. Construction & Demo Cleanup
3. Property & Yard Cleanup

Other CMS services: Tree & Brush, Roofing, Trash Cans, Dump Trailer, Other Cleanup.

## Image Asset Map

All images live in **Wix Site Files**. Replace with real job photos as they come in.

| # | Image | Placement |
|---|-------|-----------|
| 1 | Gritty hero (16:9) | Home hero (opacity 80) |
| 2 | Hauling couch | Services CMS heroImage; Projects gallery tile 1; Home Services/Projects |
| 3 | C&D cleanup | Services CMS heroImage; Projects gallery tile 2 |
| 4 | Property & yard | Services CMS heroImage; Projects gallery tile 3 |
| 5 | Tree & brush | Services CMS heroImage; Projects gallery tile 4 |
| 6 | Roofing | Services CMS heroImage; Projects gallery tile 5 |
| 7 | Trash cans | Services CMS heroImage; Projects gallery tile 6 |
| 8 | Dump trailer | Services CMS heroImage |
| 9 | Other cleanup | Services CMS heroImage |
| 10 | Family 3:2 | Contact page photo; About |
| 11 | Dusk band | Projects hero background |
| 12 | Mobile hero 4:5 | Services page left photo (also available for mobile hero crop) |

## Image Style Rules

Apply these when generating any new imagery so it matches the existing set:

- Gritty, documentary look
- Golden-hour or overcast Central Texas light
- Slate shadows
- Sun-yellow safety vests
- No readable text or logos
- Generic trailer (real branding to be added later)

## Current Site Status

**Done**
- Contact page and footer: real email, service area, Facebook link
- Contact form: Phone field and "Service needed" dropdown (8 services)
- Projects gallery: captions sit under photos (white on slate)
- Home service cards updated (see above)
- Tablet footer fixed (smaller logo, tighter spacing)
- Mobile checked on Home, Projects, Contact

## Open Items

- [ ] Instagram and LinkedIn footer links still point to Wix placeholder profiles (need real URLs or removal)
- [ ] Terms, Privacy and Accessibility pages are Wix placeholder text (need client-approved policy and details)
- [ ] Hours, licensing and insurance unknown
- [ ] Tablet layouts not fully checked on Services, About and Home
- [ ] Home service-card subtitles are low-contrast grey (fix for accessibility)
- [ ] Swap in real job photos when available
- [ ] Confirm with Chase that AI imagery is acceptable at launch

## Working Conventions

- **Treat the site as unpublished.** Do not publish without explicit approval from Chase.
- **Use only confirmed details.** If a fact isn't in the table above, ask before adding it to the site.
- **Check all breakpoints** (desktop, tablet, mobile) after any layout change. Tablet has been the weakest area.
- **Watch contrast.** White-on-slate works for captions; avoid light grey text on light backgrounds.
- **Keep the image map current.** When a placeholder AI image is replaced with a real photo, update the table above.
- **Flag placeholders.** Anything still showing Wix default text or profiles should be listed under Open Items until resolved.
- **Don't invent legal text.** Terms, Privacy and Accessibility copy must be client-approved.

## Tooling Notes

- Platform: Wix (Wix MCP connector available)
- Image generation: Higgsfield (connector available)
- Source of truth for shot list and status: `claude/higgsfield-shot-list.md`
