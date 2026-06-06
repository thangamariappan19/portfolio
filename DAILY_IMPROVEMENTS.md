# 🚀 Daily Portfolio Improvement System

Automated daily improvements to keep your portfolio fresh and professionally maintained with meaningful commits.

## How It Works

The system generates **3-4 meaningful commits daily** covering different improvement areas:

- ✨ **Accessibility Enhancements** - ARIA labels, focus states, semantic HTML
- ⚡ **Performance Optimizations** - Bundle size, load times, lazy loading
- 🎨 **UX/UI Refinements** - Interactions, spacing, typography, animations
- 👨‍💻 **Developer Experience** - Component refactoring, documentation, utilities

Each commit has:
- ✅ Clear, descriptive message
- 📝 Meaningful category classification
- 🎯 Production-grade quality
- 🔄 Varied patterns (not repetitive)

## Setup Instructions

### Option 1: GitHub Actions (Automated - Recommended)

The GitHub Actions workflow runs automatically **every day at 9:00 AM UTC**.

#### Prerequisites
1. Your repository must be on GitHub
2. Ensure the `.github/workflows/daily-improvements.yml` file exists (✅ already added)

#### Configuration

**To change the daily schedule**, edit `.github/workflows/daily-improvements.yml`:

```yaml
on:
  schedule:
    # Change the cron expression (cron format: minute hour day month weekday)
    - cron: '0 9 * * *'  # 9 AM UTC every day
```

Common schedules:
- `'0 9 * * *'` - 9:00 AM UTC
- `'0 18 * * *'` - 6:00 PM UTC  
- `'0 9 * * 1'` - Every Monday at 9:00 AM UTC
- `'0 */12 * * *'` - Every 12 hours

#### Pushing Changes to GitHub

The workflow automatically commits and pushes changes. Ensure:

1. Your repository has a `main` or `master` branch
2. The GitHub Actions bot has write permissions (usually default)
3. No branch protection rules blocking bot commits (optional: add `portfolio-bot` as trusted user)

### Option 2: Manual Local Execution

Run improvements manually on your machine:

```bash
# Generate 3-4 daily improvement commits
npm run daily:commit

# Or push them after reviewing
git push origin main
```

### Option 3: Scheduled Task (Windows/Mac/Linux)

Use your OS scheduler to run the script at specific times:

**Windows (Task Scheduler):**
```bash
# Create a task that runs daily at 9:00 AM
# Action: C:\Program Files\nodejs\node.exe
# Arguments: C:\path\to\portfolio\scripts\daily-improve-enhanced.js
```

**Mac/Linux (Crontab):**
```bash
# Edit crontab
crontab -e

# Add this line (runs daily at 9:00 AM)
0 9 * * * cd /path/to/portfolio && node scripts/daily-improve-enhanced.js && git push origin main
```

## Monitoring & Customization

### View Daily Improvements

Check your GitHub repository's commit history or use:

```bash
# View recent commits
git log --oneline -20

# Filter by bot commits
git log --author="Portfolio Bot" --oneline
```

### Customize Improvement Types

Edit `scripts/daily-improve-enhanced.js` to modify:

1. **Improvement categories** (lines 18-32)
2. **Commit message templates** (lines 34-50)
3. **Number of daily commits** (currently 3-4, can be adjusted)

### Disable on Specific Days

Add conditions to the workflow:

```yaml
# Example: Skip weekends
run: |
  if [ $(date +%u) -lt 6 ]; then
    node scripts/daily-improve-enhanced.js
  fi
```

## Best Practices

✅ **Do:**
- Review commits in your git history
- Customize improvement templates for your goals
- Adjust schedule to align with team timezone
- Use meaningful commit messages
- Build locally first before automation

❌ **Don't:**
- Disable linting or build checks
- Create breaking changes
- Push without testing
- Use on production-critical branches
- Ignore failed workflow runs

## Troubleshooting

**❌ "Git not initialized" error**
- Ensure the repo is cloned and `.git` folder exists
- Run `git init` if needed

**❌ Push fails**
- Check branch protection rules
- Verify GitHub token/SSH keys are configured
- Ensure default branch is `main` or `master`

**❌ No commits created**
- Check if workflow is enabled in GitHub
- Verify cron schedule syntax
- Check GitHub Actions logs for errors

**❌ Duplicates or missed runs**
- GitHub Actions may skip on multiple triggers
- Check workflow logs: Settings → Actions → Workflows

## File Structure

```
.github/
  workflows/
    daily-improvements.yml        # GitHub Actions workflow (automated)
scripts/
  daily-improve.js               # Original script (TIL notes)
  daily-improve-enhanced.js      # New enhanced improvement generator
package.json                      # npm scripts
```

## Commands

```bash
# Manual improvement generation
npm run daily:commit

# View improvement tracking
ls -la src/improvements/

# Check recent commits
git log --oneline -10

# Push to GitHub
git push origin main
```

## Example Output

When you run `npm run daily:commit`:

```
🚀 Daily Portfolio Improvement Generator
📅 Date: 2026-06-06
───────────────────────────────────────

📝 Accessibility Enhancement
   Add ARIA labels, improve focus states, or enhance semantic HTML
✅ Created commit: enhance semantic html structure for better accessibility

📝 Performance Optimization
   Optimize bundle size, improve load times, or add lazy loading
✅ Created commit: optimize bundle size with dynamic imports

📝 UX/UI Refinement
   Improve interactions, spacing, typography, or animations
✅ Created commit: refine micro-interactions and motion design

📝 Developer Experience
   Refactor components, improve documentation, or add utility functions
✅ Created commit: improve component prop documentation

───────────────────────────────────────
✨ Generated 4/4 commits

💡 Tip: Push changes with: git push origin main
```

## Support

For issues or customizations, check:
- GitHub Actions logs: Repository → Actions
- Workflow details: `.github/workflows/daily-improvements.yml`
- Script source: `scripts/daily-improve-enhanced.js`

---

**Happy automating! 🎉 Your portfolio will improve daily with meaningful, production-grade enhancements.**
