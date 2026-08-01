/**
 * Current focus — dated positions.
 *
 * The rule that makes this page worth reading: entries are never deleted.
 * When a position changes, set status to 'superseded', fill in `revised`,
 * and say in `outcome` what actually happened. Being wrong in public and
 * leaving it up is the whole point.
 *
 * status: 'active' | 'superseded' | 'resolved'
 */
export const positions = [
  {
    // TODO(eric): all placeholders. Replace with positions you actually hold.
    claim: 'Placeholder — your first position goes here.',
    dates: '2026',
    status: 'active',
    reasoning: 'One paragraph on why you believe this and what you have done about it. Concrete beats hedged; a position nobody could disagree with is not a position.',
    outcome: '',
    revised: ''
  }
]

/** What I am working on right now. Short, and expected to go stale. */
export const focus = {
  updated: 'August 2026',
  body: 'Placeholder — a paragraph on what has your attention this month.'
}
