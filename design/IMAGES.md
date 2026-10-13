# Images

All images live in **Wix Site Files**. The current set is 12 AI-generated images (Higgsfield),
**generated, in use, and approved by Chase as a stopgap** until real job photos exist. Whether
they can stay up at launch is still open (see `OPEN_ITEMS.md`).

This file replaces the old Higgsfield shot list (`docs/history/higgsfield-shot-list.md`).

## Real job photos (from Chase, 2026-10-12)

Approved mapping. Alt text describes only what's shown (no towns or customers). Wix URLs are
from Site Files (uploaded 2026-10-12).

| Photo | File | Replaces | Alt text | Wix URL |
|-------|------|----------|----------|---------|
| R1 | `mighty-monster-truck-and-trailer-commercial-job.jpg` | About page photo (new) | Mighty Monsters Hauling pickup and dump trailer parked at a commercial job site | [f32b3d](https://static.wixstatic.com/media/5dcc7b_f32b3d667cfa4e83961e6f5baea756fc~mv2.jpg) |
| R2 | `mighty-monster-rent-me-dump-trailer.jpg` | #8 Dump trailer; Projects tile 6 (was #7) | Loaded black dump trailer marked "Rent Me" with the phone number 254-339-2243 | [7e074f](https://static.wixstatic.com/media/5dcc7b_7e074fb5f07445e5b6ce2ebb7bd06cad~mv2.jpg) |
| R3 | `mighty-monster-garage-demo-framing.jpg` | #3 C&D cleanup | Crew member working inside a garage stripped down to its wood framing | [affdcd](https://static.wixstatic.com/media/5dcc7b_affdcd721e1a4656b559f253ce2fc08c~mv2.jpg) |
| R4 | `mighty-monster-brush-removal-trailer.jpg` | #5 Tree & brush | Trailer piled high with cut branches and brush between two houses | [f340ca](https://static.wixstatic.com/media/5dcc7b_f340ca9df42b4c4ca285fb45b9aa0e03~mv2.jpg) |
| R5 | `mighty-monster-junk-removal-load.jpg` | #2 Hauling couch | Trailer loaded with an old wooden rocking chair, cardboard boxes and household junk | [a6197e](https://static.wixstatic.com/media/5dcc7b_a6197e3f2096430f8203758f05d8836c~mv2.jpg) |
| R6 | `mighty-monster-cleanout-load.jpg` | #9 Other cleanup | Dump trailer filled with trash bags, boxes and storage bins from a cleanout | [94abd9](https://static.wixstatic.com/media/5dcc7b_94abd9cb00bf41a9a4af4735c461791f~mv2.jpg) |
| R7 | `mighty-monster-fence-debris-haul.jpg` | #4 Property & yard | Pickup bed loaded with old chain-link fencing, wire, lumber and a mattress | [77ef97](https://static.wixstatic.com/media/5dcc7b_77ef97983c54475b8f82c0380c2135ac~mv2.jpg) |
| R8 | `mighty-monster-branded-trailer-roof-job.jpg` | #1 Gritty hero (Home) | Mighty Monsters Hauling dump trailer beside a house during a roof replacement | [d6aec7](https://static.wixstatic.com/media/5dcc7b_d6aec752633a42688d3104bcb6702c82~mv2.jpg) |
| R9 | `mighty-monster-roofing-crew-dusk.jpg` | #6 Roofing | Roofer installing new shingles on a house at dusk | [725421](https://static.wixstatic.com/media/5dcc7b_725421dd0dd749c0b75bb95051ba942d~mv2.jpg) |
| R10 | `mighty-monster-roof-job-dusk-wide.jpg` | #11 Dusk band (Projects hero) | House with a freshly shingled roof at dusk, ladder against the wall | [51327d](https://static.wixstatic.com/media/5dcc7b_51327d0724b04d38b23a3ecf22cf1bcc~mv2.jpg) |

### Pro Galleries (updated via the Pro Gallery API)

**Projects gallery** `00e39e82-921c-41cb-986d-89fd13975c64`. Tile titles use the service names:

| Tile | Title | Photo |
|------|-------|-------|
| 1 | Hauling & Junk Removal (was "Garage Cleanout & Junk Removal") | R5 |
| 2 | Construction & Demo Cleanup | R3 |
| 3 | Property & Yard Cleanup | R7 |
| 4 | Tree & Brush Removal | R4 |
| 5 | Roofing Services (was "Roof Tear-Off & Haul-Away") | R9 |
| 6 | Dump Trailer Rentals (was "Trash Can Cleaning & Disinfecting") | R2 |

**Untitled 4-image gallery** `928457ef-c825-4d8c-9287-1dea62ffb618` (page placement not
recorded; likely the Home Services/Projects strip): roofing → R9, tree & brush → R4,
dump trailer → R2. The trash-can image stays AI.

AI images that stay for now: #7 Trash cans (Trash Can Sanitation service), #10 Family 3:2
(Contact; About keeps it unless R1 replaces it there), #12 Mobile hero 4:5.

## AI asset map (original)

When a placeholder is replaced with a real photo, update this table in the same commit.

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

The Services CMS hero image URLs are in `content/services.json`.

## Style rules for new imagery

Match the existing set:

- Gritty, documentary look
- Golden-hour or overcast Central Texas light
- Slate shadows
- Sun-yellow safety vests
- No readable text or logos
- Generic trailer (real branding to be added later)

## Alt text

Describe only what's shown, e.g. "Crew loading an old couch into a trailer". Don't name towns
or customers, for real photos too (Chase's call, 2026-10-12). For AI images, never imply a
real job.
