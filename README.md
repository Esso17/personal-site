# Personal Site — Production AI Platform Engineer

A premium personal website built to communicate technical leadership and production AI expertise to HR Business Partners, Engineering Managers, Directors, and Principal Engineers.

Designed with inspiration from Vercel, Linear, Stripe, Apple, and Anthropic.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Font | Geist (Vercel) |
| Theme | next-themes (dark/light) |
| Deployment | Vercel |

---

## Project Structure

```
personal-site/
├── app/
│   ├── globals.css          # Design tokens, global styles, utility classes
│   ├── layout.tsx           # Root layout with SEO metadata and theme provider
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Fixed nav with scroll-aware behavior
│   │   └── Footer.tsx       # Minimal footer
│   ├── sections/            # One file per page section
│   │   ├── Hero.tsx
│   │   ├── BusinessImpact.tsx
│   │   ├── Platforms.tsx
│   │   ├── CareerJourney.tsx
│   │   ├── TechnicalExpertise.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── Articles.tsx
│   │   ├── Hackathons.tsx
│   │   ├── Leadership.tsx
│   │   └── InternalMobility.tsx
│   └── ui/
│       ├── AnimatedCounter.tsx  # Scroll-triggered count-up
│       └── ThemeToggle.tsx      # Dark/light mode toggle
├── lib/
│   ├── data.ts              # ALL your content — edit this file
│   └── utils.ts             # cn(), easing functions
├── public/
│   └── resume.pdf           # Add your resume here
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Personalizing Your Content

**All content lives in one file: `lib/data.ts`**

Edit these exports to replace placeholders with your real information:

### 1. Personal info
```ts
export const personal = {
  name: 'YOUR NAME',
  title: 'YOUR TITLE',
  tagline: 'YOUR HEADLINE',
  bio: 'YOUR BIO',
  location: 'YOUR CITY',
  email: 'your@email.com',
  links: {
    linkedin: 'https://linkedin.com/in/YOUR_HANDLE',
    github: 'https://github.com/YOUR_HANDLE',
    medium: 'https://medium.com/@YOUR_HANDLE',
    resume: '/resume.pdf',
  },
}
```

### 2. Resume
Place your resume PDF at `public/resume.pdf`. It will be served at `/resume.pdf`.

### 3. Impact metrics
Edit `impactMetrics` array — update `value`, `label`, and `description` for each metric.

### 4. Platforms
Edit `platforms` array — fill in your real platform names, descriptions, technologies, and metrics.

### 5. Career journey
Edit `careerJourney` array — replace `YOUR COMPANY`, dates, and descriptions with your real history.

### 6. Articles
Edit `articles` array — replace titles, excerpts, and URLs with your real Medium articles.

### 7. Hackathons
Edit `hackathons` array — fill in your real hackathon details.

### 8. Leadership
Edit `leadershipItems` array — update metrics and descriptions.

### 9. Internal mobility targets
Edit `mobilityTargets` and `mobilityValues` — customize for your specific situation.

---

## Deploying to Vercel

### Option A: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Option B: Deploy via Vercel Dashboard

1. Push this project to a **private** GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

### Important: Keep it private

Set your GitHub repository to **private** and configure Vercel's **Password Protection** (requires Vercel Pro) or use **Vercel's Deployment Protection** to keep the site accessible only to people with the link.

---

## Customizing the Design

### Colors / accent
The accent gradient is defined as CSS variables in `app/globals.css`:
```css
--accent-from: #818cf8;  /* indigo */
--accent-to: #a78bfa;    /* violet */
```
Change these to any color pair you prefer.

### Fonts
The site uses Geist (Vercel's font). To switch:
1. Replace the import in `app/layout.tsx`
2. Update `--font-geist-sans` in `tailwind.config.ts`

### Adding a profile photo
In `components/sections/Hero.tsx`, add an `<Image>` component from `next/image`:
```tsx
import Image from 'next/image'

// Inside the hero content:
<Image
  src="/photo.jpg"
  alt="Your Name"
  width={80}
  height={80}
  className="rounded-full border-2 border-[var(--border)] mb-6"
/>
```
Place `photo.jpg` in the `public/` folder.

---

## Performance Notes

- All animations use `viewport={{ once: true }}` — they fire once and stop, preventing re-renders
- Images use Next.js `<Image>` for automatic optimization
- Fonts are loaded via `next/font` for zero layout shift
- Dark mode is set server-side via `next-themes` to prevent flash

---

## SEO

Metadata is configured in `app/layout.tsx`. Update:
- `title` — your name and title
- `description` — your bio
- `keywords` — your key skills
- `openGraph` — for social sharing

The site currently sets `robots: { index: false }` to prevent indexing (internal use only). Remove this line if you want it publicly indexed.

---

## Questions

All content is in `lib/data.ts`. All design tokens are in `app/globals.css`. All section layouts are in `components/sections/`. The codebase is intentionally flat and readable — no magic.
