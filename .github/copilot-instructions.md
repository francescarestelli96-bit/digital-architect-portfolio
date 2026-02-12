# Copilot Instructions: francesca-portfolio

## Project Overview
This is a **Next.js 16+ portfolio website** using the App Router with TypeScript, Tailwind CSS v4, and PostCSS. It's a minimal starter template focused on showcasing personal work with modern web standards and dark mode support.

**Key Tech Stack:**
- Next.js 16.1.6 (App Router, server-side rendering)
- React 19.2.3 with TypeScript 5
- Tailwind CSS 4 + PostCSS for styling
- ESLint 9 for code quality
- No external UI libraries (vanilla HTML/CSS approach)

## Architecture & File Structure

### Core Application
- **[app/layout.tsx](app/layout.tsx)** – Root layout with metadata, font imports (Geist), and dark mode class variables
- **[app/page.tsx](app/page.tsx)** – Homepage component; currently a template with example content
- **[app/globals.css](app/globals.css)** – Global styles, Tailwind directives, CSS custom properties
- **public/** – Static assets (favicon.ico, next.svg, etc.)

### Configuration
- **[next.config.ts](next.config.ts)** – Next.js configuration (currently minimal)
- **[tsconfig.json](tsconfig.json)** – TypeScript strict mode enabled; path alias `@/*` maps to root
- **[postcss.config.mjs](postcss.config.mjs)** – PostCSS with Tailwind CSS v4
- **[eslint.config.mjs](eslint.config.mjs)** – ESLint with Next.js + TypeScript rules

## Developer Workflows

### Local Development
```bash
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
```

### Development Notes
- Hot reload is automatic; edit [app/page.tsx](app/page.tsx) to see changes instantly
- Next.js optimizes images via `next/image` component (see layout.tsx for Geist fonts)
- Dark mode is applied via `dark:` Tailwind utilities; controlled by system preference or manual toggle in CSS

## Code Patterns & Conventions

### React/TypeScript Patterns
- **Server Components by default** in App Router (recommended for portfolio pages)
- **Async components** acceptable for data fetching; use `'use client'` only when needed (client state, interactivity)
- **Type all props** with inline `React.ReactNode` or separate interfaces
- **Metadata management** via `Metadata` type (see [app/layout.tsx](app/layout.tsx) line 14)

### Styling
- **Tailwind CSS v4** syntax (no v3 fallbacks needed)
- **Dark mode**: Use `dark:` prefix on Tailwind classes; root element gets dark class
- **CSS custom properties** in [app/globals.css](app/globals.css) for fonts: `--font-geist-sans`, `--font-geist-mono`
- **No CSS-in-JS libraries** – keep styling in class names and global CSS

### Path Aliases
- Use `@/*` for imports from root (configured in [tsconfig.json](tsconfig.json))
- Example: `import { metadata } from '@/lib/config'` (future pattern, not yet used)

## Critical Developer Notes

### TypeScript Strict Mode
`strict: true` in [tsconfig.json](tsconfig.json) enforces type safety; all implicit `any` will fail linting.

### ESLint Configuration
- Based on Next.js core Web Vitals + TypeScript rules
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Run `npm run lint` before commits

### Next.js App Router (Not Pages Router)
- All routes are file-based in `app/` directory
- Use `layout.tsx` for shared structure, `page.tsx` for route content
- No `pages/` directory exists

## Integration Points & External Dependencies
- **Vercel deployment**: Configured for easy deploy (see README template links)
- **Google Fonts (next/font)**: Geist Sans/Mono auto-optimized
- **No external APIs** integrated yet – add to `next.config.ts` if needed (redirects, rewrites)

## API Routes & Backend Integration

### App Router API Conventions
- Create API routes in `app/api/[feature]/route.ts` (not pages Router style)
- Use HTTP method exports: `export async function GET()`, `export async function POST()`, etc.
- Return `NextResponse` from `next/server` for proper JSON responses
- Example: `app/api/projects/route.ts` for fetching portfolio projects
- Add request validation and error handling; return appropriate status codes

### Data Fetching Patterns
- **Server Components**: Use `fetch()` directly in components for initial page load (no hydration issues)
- **Client Components**: Use `'use client'` with `useEffect` + `fetch()` for interactive data (rare in portfolio context)
- **Cache strategy**: Leverage Next.js `fetch()` caching; add `{ next: { revalidate: 3600 } }` for periodic updates

## Content Structure & Portfolio Sections

### Planned Sections
When building portfolio content (projects, blog, experience), follow this structure:
- **Projects**: Store metadata in `app/projects/` with `layout.tsx` for shared styling
  - Individual project pages: `app/projects/[slug]/page.tsx`
  - Fetch from `app/api/projects` or static JSON in `public/data/`
- **Blog** (if added): Use `app/blog/[slug]/page.tsx` with markdown processing
- **Contact/Resume**: Simple form pages; minimal backend needed

### SEO & Metadata
- Update `metadata` object in [app/layout.tsx](app/layout.tsx) for global title/description
- Use dynamic metadata in route segments: `export const metadata: Metadata = { title: '...' }`
- Leverage Open Graph meta tags for social sharing (add to layout or specific pages)

## Environment Variables & Build Configuration

### Environment Variables
- Create `.env.local` (git-ignored) for development secrets
- Create `.env.production.local` for production-only configuration (also git-ignored)
- Reference in `next.config.ts` or API routes as `process.env.VARIABLE_NAME`
- Example: `NEXT_PUBLIC_API_URL` (prefix with `NEXT_PUBLIC_` to expose to browser)
- Restart dev server after `.env.local` changes

### Build & Deployment
- **Vercel**: Auto-deploys from git pushes; set environment variables in Vercel dashboard
- **Build optimizations**: Next.js automatically optimizes images, fonts, and code splitting
- **Output**: Static exports to `out/` via `next build` (portfolio is fully static by default)
- Add any custom headers/redirects to `next.config.ts` (currently empty, ready for expansion)

## When Adding Features
1. Keep components in `app/` following App Router structure
2. Add new routes as `app/[feature]/page.tsx` with optional `layout.tsx`
3. Update [app/layout.tsx](app/layout.tsx) metadata for SEO if new pages are public
4. Use `dark:` Tailwind utilities for dark mode support
5. Run `npm run lint` to validate code
6. Test locally with `npm run dev` before building

---

**Last Updated:** February 12, 2026 | **Next.js Version:** 16.1.6
