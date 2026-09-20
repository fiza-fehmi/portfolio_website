# Customization Guide

This guide will help you customize the portfolio website to match your personal brand and information.

## Quick Start Customization Checklist

- [ ] Update personal information
- [ ] Change social media links
- [ ] Add your projects
- [ ] Update experience/timeline
- [ ] Customize colors
- [ ] Add your email for contact form
- [ ] Replace project images
- [ ] Update skills/technologies

## 1. Personal Information

### Hero Section (`src/components/Hero.jsx`)

**Update your name and role:**
```javascript
<h1>
  Hi, I'm <span className="text-gradient">Your Name</span>
</h1>
<h2>Your Title/Role</h2>
```

**Update description:**
```javascript
<p>
  Your personal description and what you do...
</p>
```

### About Section (`src/components/About.jsx`)

**Update introduction:**
- Line ~58-70: Update all text content in the `<p>` tags
- Line ~77-86: Update statistics values (Projects Completed, Technologies, etc.)
- Line ~103-136: Update "What I Do" cards with your services

## 2. Social Media Links

**Update in these files:**
- `src/components/Hero.jsx` - Line ~21-25
- `src/components/Contact.jsx` - Line ~26-50
- `src/components/Footer.jsx` - Line ~12-16

**Change URLs:**
```javascript
const socialLinks = [
  { icon: GitHubIcon, href: 'https://github.com/YOUR-USERNAME', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/in/YOUR-USERNAME', label: 'LinkedIn' },
  { icon: FiverrIcon, href: 'https://fiverr.com/YOUR-USERNAME', label: 'Fiverr' },
];
```

## 3. Skills Section (`src/components/Skills.jsx`)

**Add/Remove Skills:**

```javascript
const skillCategories = [
  {
    category: 'Frontend',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'New Skill', level: 80 }, // Add new skill
      // Remove any skill you don't have
    ],
  },
  // Add new category:
  {
    category: 'New Category',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Skill 1', level: 85 },
    ],
  },
];
```

**Update tech badges (Line ~106-120):**
```javascript
{['MongoDB', 'Express.js', 'Your Tech', 'Another Tech'].map((tech, index) => (
  // ...
))}
```

## 4. Projects Section (`src/components/Projects.jsx`)

**Update project information (Line ~10-47):**

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of your project...',
    image: 'https://your-image-url.com/image.jpg', // Or '/project-image.jpg' if in public folder
    tags: ['React', 'Node.js', 'MongoDB'], // Technologies used
    liveLink: 'https://your-project-live-url.com',
    githubLink: 'https://github.com/yourusername/project-repo',
    gradient: 'from-violet-500 to-purple-500',
  },
  // Add more projects...
];
```

**Project Images:**
1. Place images in `public` folder
2. Reference as `/your-image.jpg`
3. Or use external URLs (Unsplash, Imgur, etc.)

## 5. Experience Section (`src/components/Experience.jsx`)

**Update experience timeline (Line ~10-47):**

```javascript
const experiences = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    period: 'Jan 2023 - Present',
    description: 'Brief description of your role and responsibilities...',
    achievements: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      'Achievement or responsibility 3',
    ],
    color: 'from-violet-500 to-purple-500',
  },
  // Add more experiences...
];
```

## 6. Contact Information (`src/components/Contact.jsx`)

**Update contact details (Line ~28-40):**

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com', // Update this
    href: 'mailto:your.email@example.com', // Update this
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567', // Update this
    href: 'tel:+15551234567', // Update this
  },
  // Update location if needed
];
```

**Connect Contact Form (Optional):**

To make the form functional, integrate with a backend service:

**Option 1: EmailJS (Free)**
```bash
npm install @emailjs/browser
```

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    alert('Message sent successfully!');
  } catch (error) {
    alert('Failed to send message');
  }
};
```

**Option 2: Formspree (Free)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 3: Build your own backend with Node.js + Nodemailer**

## 7. Colors and Theme

### Primary Color (`tailwind.config.js`)

```javascript
colors: {
  primary: {
    DEFAULT: '#8b5cf6', // Change this to your brand color
    dark: '#7c3aed',
    light: '#a78bfa',
  },
}
```

### Gradient Colors (`src/index.css`)

```css
.text-gradient {
  background-image: linear-gradient(to right, rgb(167, 139, 250), rgb(147, 51, 234));
  /* Change colors here */
}
```

### Background and Glow Effects

Throughout components, look for:
- `bg-purple-500/10` - Background colors
- `from-violet-600 to-purple-600` - Gradients
- Replace with your preferred colors

## 8. Typography

**Change Font (`src/index.css`):**

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: YourFont, system-ui, sans-serif;
}
```

**Or update Tailwind config:**
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 9. Meta Tags & SEO (`index.html`)

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your custom description" />
<meta property="og:title" content="Your Name | Your Title" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://your-site.com/preview-image.jpg" />
```

## 10. Favicon

Replace `public/favicon.svg` with your own:
- Create a simple SVG icon
- Or use [favicon.io](https://favicon.io) to generate from text/image
- Update the letter and colors in existing SVG

## 11. Animations

### Adjust Animation Speed

In any component with Framer Motion:
```javascript
<motion.div
  transition={{ duration: 0.6 }} // Change this (0.3 = faster, 1 = slower)
>
```

### Disable Animations

Set `transition={{ duration: 0 }}` or remove motion components

## 12. Responsive Design

The website is already fully responsive, but you can adjust breakpoints in components:
- `md:` - 768px and up
- `lg:` - 1024px and up
- Tailwind CSS handles responsive design

## 13. Add New Sections

To add a new section:

1. Create component: `src/components/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add to navigation in `src/components/Navbar.jsx`

```javascript
// App.jsx
import NewSection from './components/NewSection';

function App() {
  return (
    <>
      {/* ... */}
      <NewSection />
      {/* ... */}
    </>
  );
}
```

## 14. Testing Your Changes

After making changes:

```bash
npm run dev
```

Visit `http://localhost:5173` to see your changes in real-time.

## 15. Common Customizations

### Change Button Styles

Look for classes like:
```javascript
className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
```

### Adjust Spacing

- `py-20` - Padding vertical
- `px-4` - Padding horizontal
- `gap-8` - Gap between elements
- `mb-6` - Margin bottom

Increase/decrease the number to adjust spacing.

### Remove Sections

Don't need a section? Simply:
1. Remove import from `App.jsx`
2. Remove component from JSX
3. Remove navigation link from `Navbar.jsx`

## Need Help?

- Check component files for inline comments
- Refer to [Tailwind CSS docs](https://tailwindcss.com/docs)
- Check [Framer Motion docs](https://www.framer.com/motion/)
- Read [React docs](https://react.dev)

## Best Practices

1. **Test on multiple devices** - Use browser dev tools
2. **Keep backups** - Use Git to commit changes
3. **Update gradually** - Change one section at a time
4. **Optimize images** - Compress before adding
5. **Test forms** - Verify contact form works
6. **Update regularly** - Keep projects and skills current

---

**Tip:** Start by updating text content first, then move to visual customization, and finally add functionality.
