# Project Structure

## Root Level
```
├── app/                    # Next.js App Router directory
├── public/                 # Static assets
├── .kiro/                  # Kiro AI assistant configuration
├── .next/                  # Next.js build output (auto-generated)
├── node_modules/           # Dependencies (auto-generated)
└── package.json            # Project configuration
```

## App Directory (Next.js App Router)
```
app/
├── components/             # Reusable React components
│   ├── AccordionItem.jsx
│   ├── CTA.jsx
│   ├── CourseProjects.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Instructor.jsx
│   ├── LeadMagnet.jsx
│   ├── Navbar.jsx
│   ├── Pricing.jsx
│   ├── Program.jsx
│   ├── StudentProjects.jsx
│   ├── Testimonials.jsx
│   └── VibeCodingIntro.jsx
├── paccbet/                # Sub-route for additional page
│   └── page.js
├── globals.css             # Global styles and Tailwind imports
├── layout.js               # Root layout with metadata and analytics
├── page.js                 # Homepage component
└── favicon.ico             # Site icon
```

## Component Organization
- All components are in `app/components/` directory
- Components use `.jsx` extension
- Each component is a default export function
- Components follow PascalCase naming convention
- Main page layout assembled in `app/page.js`

## Styling Architecture
- Global styles in `app/globals.css`
- Tailwind CSS with custom Apple-inspired theme
- Custom CSS properties for consistent color palette
- Responsive design patterns throughout

## Public Assets
- Static files served from `public/` directory
- Subdirectory `public/paccbet/` contains additional project assets
- Images and other static resources accessible via root path

## Configuration Files
- `next.config.mjs` - Next.js configuration (minimal setup)
- `package.json` - Dependencies and scripts
- `jsconfig.json` - JavaScript project configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind