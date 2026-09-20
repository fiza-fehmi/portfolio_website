# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Prerequisites

Make sure you have:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- A **code editor** (VS Code recommended)
- **Git** (optional, for version control)

## Installation

1. **Navigate to the project directory:**
```bash
cd "Personal Portflio"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
   - Visit `http://localhost:5173`
   - The site will auto-reload when you make changes

## First Steps to Customize

### Step 1: Update Your Name & Title (2 minutes)

**File:** `src/components/Hero.jsx`

Find and change:
```javascript
Hi, I'm <span className="text-gradient">Fiza Fehmi</span>
```
to:
```javascript
Hi, I'm <span className="text-gradient">Your Name</span>
```

Change:
```javascript
MERN Stack Developer
```
to your title.

### Step 2: Update Social Links (2 minutes)

**Files to update:**
- `src/components/Hero.jsx` (line ~21)
- `src/components/Contact.jsx` (line ~26)
- `src/components/Footer.jsx` (line ~12)

```javascript
const socialLinks = [
  { icon: GitHubIcon, href: 'https://github.com/YOUR-USERNAME', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/in/YOUR-USERNAME', label: 'LinkedIn' },
  { icon: FiverrIcon, href: 'https://fiverr.com/YOUR-USERNAME', label: 'Fiverr' },
];
```

### Step 3: Update Contact Email (1 minute)

**File:** `src/components/Contact.jsx` (line ~28)

```javascript
value: 'your.email@example.com',
href: 'mailto:your.email@example.com',
```

## Project Structure Overview

```
Personal Portflio/
├── src/
│   ├── components/          # All React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── Experience.jsx  # Timeline
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Footer.jsx      # Footer
│   │   └── SocialIcons.jsx # Social media icons
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
└── package.json            # Dependencies
```

## Available Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## What to Customize Next

After the quick start, customize these sections (in order):

1. **About Section** - Your story and statistics
   - File: `src/components/About.jsx`

2. **Skills** - Your technologies
   - File: `src/components/Skills.jsx`

3. **Projects** - Your portfolio pieces
   - File: `src/components/Projects.jsx`

4. **Experience** - Your work timeline
   - File: `src/components/Experience.jsx`

5. **Colors** - Match your brand
   - File: `tailwind.config.js`

## Detailed Guides

For detailed customization:
- **CUSTOMIZATION.md** - Complete customization guide
- **README.md** - Project documentation
- **DEPLOYMENT.md** - How to deploy online

## Deployment Quick Start

**Easiest Method: Vercel (Free)**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click deploy!

Your site will be live at: `your-project.vercel.app`

## Common Issues

### Port already in use
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Build fails
```bash
# Check Node.js version
node --version  # Should be 16+

# Clear cache and rebuild
npm cache clean --force
npm install
npm run build
```

## Getting Help

- Check **CUSTOMIZATION.md** for detailed guides
- Check **README.md** for project info
- Check component files - they have helpful comments
- Google specific errors

## Pro Tips

1. **Save often** - Changes auto-reload in dev mode
2. **Use Git** - Commit after each successful change
3. **Test responsiveness** - Use browser dev tools (F12)
4. **Optimize images** - Compress before adding to project
5. **Deploy early** - Get feedback from real users

## Next Steps

1. ✅ Complete quick customization
2. 📝 Read CUSTOMIZATION.md for details
3. 🎨 Adjust colors and styling
4. 📸 Add your project images
5. 🚀 Deploy to production

---

**You're ready to go!** Start with `npm run dev` and begin customizing. 🎉
