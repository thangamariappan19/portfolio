const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const ROOT = path.resolve(__dirname, '..')
const MANIFEST = require('./improvements-manifest.json')
const PROGRESS_FILE = path.join(ROOT, 'src', 'improvements', 'progress.json')
const MSG_FILE = path.join(ROOT, '.git', '_improve_msg')

function run(cmd) {
  return execSync(cmd, { cwd: ROOT, stdio: 'pipe', encoding: 'utf8' })
}

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8').replace(/\r\n/g, '\n')
}

function writeFile(relPath, content) {
  fs.writeFileSync(path.join(ROOT, relPath), content, 'utf8')
}

function commit(message, file) {
  fs.writeFileSync(MSG_FILE, message, 'utf8')
  try {
    run(`git add "${file}"`)
    run(`git commit -F ".git/_improve_msg"`)
    return true
  } catch (e) {
    return false
  } finally {
    if (fs.existsSync(MSG_FILE)) fs.unlinkSync(MSG_FILE)
  }
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { applied: [], skipped: [] }
  return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'))
}

function saveProgress(progress) {
  fs.mkdirSync(path.dirname(PROGRESS_FILE), { recursive: true })
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2) + '\n', 'utf8')
}

const progress = loadProgress()
const done = new Set([...(progress.applied || []), ...(progress.skipped || [])])
const pending = MANIFEST.filter(imp => !done.has(imp.id))

if (pending.length === 0) {
  console.log('All improvements have been applied.')
  process.exit(0)
}

const batch = pending.slice(0, 3)
let committed = 0

for (const imp of batch) {
  console.log(`\n[${imp.id}] ${imp.title}`)

  let content
  try {
    content = readFile(imp.file)
  } catch {
    console.log('  SKIP — file not readable')
    progress.skipped.push(imp.id)
    continue
  }

  if (!content.includes(imp.find)) {
    console.log('  SKIP — anchor not found (may already be applied)')
    progress.skipped.push(imp.id)
    continue
  }

  writeFile(imp.file, content.replace(imp.find, imp.replace))

  if (commit(imp.commitMessage, imp.file)) {
    console.log(`  OK — "${imp.commitMessage}"`)
    progress.applied.push(imp.id)
    committed++
  } else {
    console.log('  FAIL — git commit failed')
    progress.skipped.push(imp.id)
  }
}

saveProgress(progress)

const progressRelPath = path.relative(ROOT, PROGRESS_FILE).replace(/\\/g, '/')
fs.writeFileSync(MSG_FILE, 'chore: log daily improvement batch', 'utf8')
try {
  run(`git add "${progressRelPath}"`)
  const diff = run('git diff --cached --name-only')
  if (diff.trim()) run(`git commit -F ".git/_improve_msg"`)
} catch (_) {
} finally {
  if (fs.existsSync(MSG_FILE)) fs.unlinkSync(MSG_FILE)
}

const remaining = pending.length - batch.length
console.log(`\nDone. ${committed} commit(s) today. ${remaining} improvement(s) remaining.`)
