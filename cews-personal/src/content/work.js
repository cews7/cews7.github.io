/**
 * The work register. Newest first.
 *
 *   active     — building it now
 *   shipped    — out in the world, not being worked on
 *   superseded — replaced by something else; kept on the record
 *
 * Adding an entry is an edit to this file only.
 */
export const work = [
  {
    title: 'ConvoCrate',
    href: 'https://convocrate.com',
    role: 'Creator',
    dates: '2025—',
    status: 'active',
    tags: ['SMS', 'iOS', 'Android'],
    summary: 'Organized texting for general contractors.',
    detail: 'Jobsite communication gets buried in personal text threads. ConvoCrate gives each ' +
      'team member a real business number and sorts conversations into color-coded project ' +
      'crates, so photos, files, and history stay attached to the job rather than scattered ' +
      'across phones. Subs and clients text a normal number — no app to install on their end. ' +
      'Currently in free early access.'
  },
  {
    title: 'podclub',
    href: 'https://podclub.io',
    role: 'Co-creator',
    dates: '2019—',
    status: 'active',
    tags: ['Vue.js', 'Product'],
    summary: 'A platform where people self-organize into groups to discuss podcasts.',
    detail: 'Built with a friend. I took it from idea to scoped, buildable pieces, and have helped run it since launch.'
  },
  {
    title: 'YouTube Notes',
    href: 'https://chromewebstore.google.com/detail/youtube-notes/bkpibpnngpjoecfcjjniipjlcihkknkn',
    role: 'Creator',
    dates: '2024',
    status: 'shipped',
    tags: ['Vue.js', 'Chrome Extension'],
    summary: 'A Chrome extension for taking timestamped notes on YouTube videos.',
    detail: 'Published on the Chrome Web Store.'
  },
  {
    title: 'Stellabounce',
    href: 'https://project30.itch.io/stellabounce',
    role: 'Solo',
    dates: '2024',
    status: 'shipped',
    tags: ['Godot 4', 'GDScript', 'Vector art'],
    summary: 'A puzzle game about bouncing to reach the stars.',
    detail: 'A prototype I put out rather than polished. The bouncing mechanic works, and the idea still interests me.'
  },
  {
    title: 'Space Invaders Clone',
    href: 'https://project30.itch.io/space-invaders-clone',
    role: 'Solo',
    dates: '2024',
    status: 'shipped',
    tags: ['Godot 4', 'GDScript', 'Aseprite'],
    summary: 'The arcade classic, rebuilt to learn the engine.',
    detail: 'Written to get fluent in Godot rather than to make something new. Sprites drawn in Aseprite.'
  }
]
