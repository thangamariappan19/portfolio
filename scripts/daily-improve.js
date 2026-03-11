const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Today's Date
const today = new Date().toISOString().split('T')[0]
const notePath = path.join(__dirname, '../content/notes', `${today}.md`)
const tilDataPath = path.join(__dirname, '../src/data/til.json')

// Check if already exists
if (fs.existsSync(notePath)) {
  console.log(`Note for ${today} already exists. Skipping.`)
  process.exit(0)
}

// TIL Database (A small collection to pick from)
const tips = [
  {
    title: 'JavaScript: The Nullish Coalescing Operator',
    category: 'JavaScript',
    content:
      'The `??` operator returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, unlike `||` which checks for falsy values.',
  },
  {
    title: 'React: Use objects for multiple state variables',
    category: 'React',
    content:
      'Instead of many `useState` hooks, consider using a single state object or `useReducer` when state transitions are complex.',
  },
  {
    title: 'Web Performance: Core Web Vitals',
    category: 'Performance',
    content:
      'LCP (Largest Contentful Paint) measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds.',
  },
  {
    title: 'CSS: The Aspect Ratio Property',
    category: 'CSS',
    content:
      'The `aspect-ratio` property allows you to create boxes that maintain their proportional dimensions, even as they resize.',
  },
  {
    title: 'System Design: Consistency vs Availability',
    category: 'System Design',
    content:
      'In CAP theorem, you often have to trade off between Consistency and Availability during a network partition.',
  },
  {
    title: 'JavaScript: Array.prototype.flatMap()',
    category: 'JavaScript',
    content:
      '`flatMap()` is a combination of `map()` and `flat()` with a depth of 1. It is more efficient than calling them separately.',
  },
  {
    title: 'React: Why unique keys matter',
    category: 'React',
    content:
      'Keys help React identify which items have changed, are added, or are removed. They should be stable, predictable, and unique.',
  },
  {
    title: 'Node.js: The event loop',
    category: 'Node.js',
    content:
      'The event loop allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.',
  },
  {
    title: 'Security: HTTPS and HSTS',
    category: 'Security',
    content:
      'HTTP Strict Transport Security (HSTS) tells browsers that they should only interact with a website using secure HTTPS connections.',
  },
  {
    title: 'Git: Squash and Merge',
    category: 'DevOps',
    content:
      'Squashing commits keeps your history clean by combining all changes from a feature branch into a single commit on the main branch.',
  },
]

// Pick a random tip
const randomTip = tips[Math.floor(Math.random() * tips.length)]

// 1. Create the markdown file in /content/notes
const mdContent = `---
title: "${randomTip.title}"
date: "${today}"
category: "${randomTip.category}"
---

# ${randomTip.title}

${randomTip.content}

*Automated daily improvement committed on ${new Date().toLocaleString()}*
`

console.log(`Creating note: ${notePath}`)
fs.writeFileSync(notePath, mdContent)

// 2. Update /src/data/til.json
let tilData = []
if (fs.existsSync(tilDataPath)) {
  try {
    tilData = JSON.parse(fs.readFileSync(tilDataPath, 'utf8'))
  } catch (e) {
    tilData = []
  }
}

tilData.push({
  id: today,
  date: today,
  ...randomTip,
})

console.log(`Updating ${tilDataPath}`)
fs.writeFileSync(tilDataPath, JSON.stringify(tilData, null, 2))

// 3. Run Prettier
console.log('Running Prettier formatting...')
try {
  execSync('npm run format', { stdio: 'inherit' })
} catch (error) {
  console.error('Error running Prettier:', error.message)
}

console.log('Daily improvement completed successfully!')
