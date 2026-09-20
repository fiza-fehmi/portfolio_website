# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## Prerequisites

- Node.js installed (v16 or higher)
- npm or yarn package manager
- Git for version control

## Build for Production

Before deploying, build the optimized production version:

```bash
npm run build
```

This creates a `dist` folder with optimized assets ready for deployment.

## Deployment Options

### 1. Vercel (Recommended - Free)

**Steps:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite configuration
7. Click "Deploy"

**Build Configuration (Auto-detected):**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 2. Netlify (Free)

**Steps:**

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Optional: Create `netlify.toml` in project root:**

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages (Free)

**Steps:**

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages in repository settings
5. Select `gh-pages` branch

### 4. Firebase Hosting (Free)

**Steps:**

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init hosting
```

Configure:
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds: Choose preference

4. Build and deploy:
```bash
npm run build
firebase deploy
```

### 5. Render (Free)

**Steps:**

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new "Static Site"
4. Connect your repository
5. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Create Static Site"

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records at your domain provider

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS configuration instructions

### For GitHub Pages:
1. Add `CNAME` file to `public` folder with your domain
2. Configure DNS at your domain provider:
   - Add A records pointing to GitHub's IPs
   - Or add CNAME record

## Environment Variables

If you need environment variables (API keys, etc.):

1. Create `.env` file (already in `.gitignore`):
```
VITE_API_KEY=your_key_here
VITE_API_URL=your_url_here
```

2. Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

3. Add environment variables in hosting platform dashboard

## Performance Optimization

The build is already optimized, but you can further improve:

1. **Image Optimization:**
   - Use WebP format
   - Compress images before adding
   - Use CDN for images (ImageKit, Cloudinary)

2. **Code Splitting:**
   - Already handled by Vite
   - Lazy load heavy components if needed

3. **CDN:**
   - Most hosting platforms provide CDN automatically
   - Vercel, Netlify have global CDN

## SSL Certificate

All recommended platforms provide free SSL certificates automatically:
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic (for `.github.io` domains)
- Render: Automatic
- Firebase: Automatic

## Continuous Deployment

All platforms support automatic deployment on git push:
- Push to `main` branch triggers new deployment
- Preview deployments for pull requests
- Rollback to previous versions easily

## Monitoring

### Vercel Analytics:
```bash
npm install @vercel/analytics
```

Add to `App.jsx`:
```javascript
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* Your components */}
      <Analytics />
    </>
  );
}
```

### Google Analytics:
Add tracking code to `index.html`

## Troubleshooting

### Build Fails:
- Check Node.js version (use 16+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for errors in terminal output

### Routing Issues:
- Ensure hosting is configured for SPA (Single Page App)
- Check redirect rules for 404s

### Slow Performance:
- Optimize images
- Check bundle size: `npm run build` shows gzipped sizes
- Use lazy loading for heavy components

## Update Deployment

To update your live site:

1. Make changes locally
2. Test: `npm run dev`
3. Commit and push to GitHub
4. Hosting platform auto-deploys (if configured)

Or manually deploy:
```bash
npm run build
# Then deploy via platform CLI or dashboard
```

## Cost

All recommended platforms offer generous free tiers suitable for personal portfolios:
- Vercel: Free for personal projects
- Netlify: 100GB bandwidth/month free
- GitHub Pages: Free for public repos
- Render: 100GB bandwidth/month free
- Firebase: Free tier available

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)

---

**Recommended for beginners:** Start with Vercel or Netlify for the easiest deployment experience.
