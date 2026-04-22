# Design Brief

**Aesthetic:** Premium enterprise fintech SaaS. Salesforce/HubSpot DNA with refined minimalism. Dashboard-heavy interface for financial services CRM + ERP.

**Tone:** Refined professionalism meets functional clarity. Luxury through restraint—clean, sophisticated, precise.

**Differentiation:** Multi-layered surface hierarchy. Soft card elevation. Premium default light mode with optional dark mode. Precise data tables. Controlled animations on page transitions and modal reveals.

## Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | `0.42 0.08 265` | `0.75 0.12 265` | Corporate authority, buttons, links |
| Secondary | `0.60 0.10 185` | `0.68 0.14 185` | Calm intelligence, secondary UI |
| Accent | `0.68 0.18 75` | `0.72 0.16 75` | Precise action highlights, alerts |
| Neutral | `0.92 0.02 0` | `0.20 0.02 0` | Backgrounds, muted elements |
| Destructive | `0.63 0.24 17` | `0.72 0.20 17` | Errors, deletions |
| Chart 1–5 | Multi-color set | Multi-color set | Dashboard widgets, data visualization |

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Space Grotesk | Headers, KPI titles, dashboard cards |
| Body | General Sans | Copy, tables, form labels, UI text |
| Mono | JetBrains Mono | Financial figures, code, system messages |

**Scale:** Base 16px. Hierarchy: 32px (h1), 24px (h2), 20px (h3), 16px (body), 14px (caption).

## Structural Zones

| Zone | Background | Border | Purpose |
|------|-----------|--------|---------|
| Header | `bg-card` | `border-b` | Profile, branch switcher, notifications |
| Sidebar | `bg-sidebar` | `border-r` | Navigation, collapsible, active state |
| Dashboard | `bg-background` | None | Main content area |
| Card Section | `bg-card shadow-card` | `border` | KPI widgets, chart containers |
| Content Divider | `bg-muted/20` | None | Alternating section backgrounds |
| Footer | `bg-muted/40` | `border-t` | Minimal, legal text |

## Component Patterns

- **Cards:** `rounded-2xl p-6 bg-card shadow-card border border-border`
- **Buttons:** Primary `bg-primary text-primary-foreground`, Secondary `bg-secondary/10 text-secondary`, Accent `bg-accent text-accent-foreground`
- **Tables:** Clean data presentation, 1px borders, hover state: `bg-muted/50`
- **Modals:** `glass` effect with slide-up animation
- **Forms:** Input: `bg-input border border-border rounded-lg`, Labels: `font-display text-sm font-medium`
- **Charts:** Five-color palette with soft shadows, positioned in card containers

## Motion & Animation

- **Page transitions:** Fade-in `animate-fade-in` (0.3s ease-out)
- **Modal reveals:** Slide-up `animate-slide-up` (0.3s ease-out)
- **Card animations:** Staggered reveals on dashboard load
- **Interactive:** Smooth transitions on hover/focus, `transition-smooth` for all interactive elements
- **Choreography:** Sidebar navigation items animate on menu open

## Spacing & Rhythm

- **Base unit:** 4px
- **Card padding:** 24px (6 * 4px)
- **Margin:** Sections use 32px (8 * 4px), cards use 16px (4 * 4px)
- **Gap:** Grid uses 24px, lists use 16px

## Elevation & Depth

- **Flat:** 1px border, no shadow (inputs, form fields)
- **Card:** `shadow-card` (0 2px 8px RGBA light, 0 4px 16px RGBA)
- **Elevated:** `shadow-elevated` (0 8px 24px RGBA, 0 12px 32px RGBA) for modals, popovers
- **Glass:** Frosted effect with blur and semi-transparency on overlays

## Light Mode

- **Background:** `#FCFCFC` (0.985 0 0)
- **Card:** `#FAFAFA` (0.98 0 0)
- **Foreground:** `#2C2C2C` (0.18 0 0)
- **Muted:** `#ECECEC` (0.92 0.02 0)
- **Border:** `#E8E8E8` (0.91 0.01 0)

## Dark Mode

- **Background:** `#1A1A1A` (0.125 0 0)
- **Card:** `#282828` (0.16 0 0)
- **Foreground:** `#F0F0F0` (0.94 0 0)
- **Muted:** `#3A3A3A` (0.20 0.02 0)
- **Border:** `#424242` (0.22 0.01 0)

## Constraints

- No gradients as backgrounds (only on text/accents for emphasis)
- No glow effects—shadows must be realistic
- Rounded corners: 0px (sharp), 8px (small), 12px (medium), 16px (large), 24px (cards/modals), full (badges)
- Opacity used only for layering (muted backgrounds), never for color mixing
- Chart colors maintain 5-color harmony across light/dark modes

## Signature Detail

**Precision surface layering:** Dashboard uses three distinct background levels (background → muted/20 → card) creating visual hierarchy without visual noise. Each card elevation is earned through functional hierarchy, not decoration.
