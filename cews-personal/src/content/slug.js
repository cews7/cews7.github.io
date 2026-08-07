/**
 * Anchor ids for register entries.
 *
 * Derived from the entry's own text rather than stored, so a link and its
 * target can never drift apart — both are generated from the same source.
 * Editing an entry's wording changes its anchor, which only matters for
 * links shared from outside the site.
 */
export function slugify(text, maxWords = 8) {
  return String(text)
    .toLowerCase()
    .split(/\s+/)
    .slice(0, maxWords)
    .join(' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
