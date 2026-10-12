# Wix CMS collections

| Collection | Fields | Items | Mirror in repo |
|------------|--------|-------|----------------|
| `Services` | title, slug, tagline, intro, benefits[], weTake[], weCantTake[], heroImage, sortOrder, featured | 8 | `services.json` |
| `FAQs` | title, answer, category, sortOrder | 6 | `faqs.json` |
| `ServiceAreas` | title, slug, intro, sortOrder | 0 (empty) | — |
| `Testimonials` | title, quote, city, rating, photo, approved | 0 (empty) | — |

Rules:

- **Testimonials:** only real, client-provided reviews. Never write or generate them. Only
  show items with `approved: true`.
- **ServiceAreas:** only towns or counties Chase has confirmed (see `site/site.json` →
  `contact.serviceArea`).
- When CMS content changes, update the mirror file in the same commit.
