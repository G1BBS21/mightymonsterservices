# Mighty Monster Services — website source of truth

Brand, design and content rules for the [Mighty Monster Services](https://cedarsphere.wixstudio.com/mighty-monster)
website, a Wix Studio site for a family-owned hauling, junk removal and property services
company in Central Texas.

**Start with [`CLAUDE.md`](CLAUDE.md).** It explains how this repo and the Wix site stay in sync
and where everything lives.

## What this repo is (and isn't)

Wix Studio has no option to export a site's visual design as code. The pages, sections and
styling stay in the Studio editor. This repo holds everything that *decides* how the site
should look and read, in a form people and Claude can review, diff and version:

- `brand/` — voice, required phrases, CTAs
- `design/` — layout rules and theme tokens
- `site/` — Wix IDs, apps, and the page inventory with SEO metadata
- `content/` — services and form definitions
- `seo/` — SEO rules, checked by `scripts/check-seo.mjs`

## Site code (optional, later)

If the site ever needs custom code, enable Velo and connect **Git Integration & Wix CLI for
Sites** from the Studio editor. Per Wix's docs, Wix sets up its own GitHub repository for the
site's code. That code repo can then reference this one for rules and content.
See: https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli-for-sites/about-git-integration-wix-cli-for-sites

## Checks

```sh
node scripts/check-seo.mjs
```
