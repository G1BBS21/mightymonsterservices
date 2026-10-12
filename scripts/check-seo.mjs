#!/usr/bin/env node
// Validates site/pages.json against the rules in seo/SEO.md.
import { readFileSync } from "node:fs";

const { pages } = JSON.parse(readFileSync(new URL("../site/pages.json", import.meta.url)));
const problems = [];
const seenTitles = new Set();

for (const page of pages) {
  const { name, seoTitle: title, seoDescription: desc } = page;
  if (!title) problems.push(`${name}: missing seoTitle`);
  else {
    if (title.length > 60) problems.push(`${name}: title is ${title.length} chars (max 60)`);
    if (!/\| Mighty Monster( Services)?$/.test(title)) problems.push(`${name}: title must end with "| Mighty Monster" or "| Mighty Monster Services"`);
    if (seenTitles.has(title)) problems.push(`${name}: duplicate title`);
    seenTitles.add(title);
  }
  if (!desc) problems.push(`${name}: missing seoDescription`);
  else if (desc.length < 120 || desc.length > 160) problems.push(`${name}: description is ${desc.length} chars (want 120-160)`);
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`SEO OK: ${pages.length} pages`);
