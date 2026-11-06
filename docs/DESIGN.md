# DESIGN.md — DPP Platform
> Design system reference for `dpp.eu/platform`
> Generated from: [https://www.dpp.eu/platform](https://www.dpp.eu/platform)

---

## Table of Contents

1. [Colors](#1-colors)
2. [Typography](#2-typography)
3. [Spacing](#3-spacing)
4. [Borders](#4-borders)
5. [Border Radius](#5-border-radius)
6. [Design Tokens (CSS Variables)](#6-design-tokens-css-variables)
7. [Components](#7-components)

---

## 1. Colors

### 1.1 Background Scale

| Token | Hex | Usage |
|---|---|---|
| `--color-bg-base` | `#12131a` | Page background |
| `--color-bg-dark-alt` | `#0d0e15` | Alternative deep sections |
| `--color-bg-surface` | `#1a1b22` | Sections, content panels |
| `--color-bg-card` | `#242632` | Cards at rest |
| `--color-bg-elevated` | `#2e3040` | Hover cards, dropdowns, tooltips |

### 1.2 Text

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#ffffff` | Headings, high-contrast labels |
| `--color-text-secondary` | `#a3aab8` | Body text, descriptions |
| `--color-text-muted` | `#9698a6` | Captions, helper text, disabled |
| `--color-text-disabled` | `#4b5563` | Disabled states |

### 1.3 Brand Accent — Blue

| Token | Hex | Usage |
|---|---|---|
| `--color-accent-50` | `#dde1ff` | Fondos de acento claros |
| `--color-accent-400` | `#7a94eb` | Acento: texto, iconos, enlaces, anillo de foco |
| `--color-accent-500` | `#506fe1` | Bordes, tintes y gráficos (no usar como texto pequeño) |
| `--color-accent-600` | `#4968da` | Controles rellenos (texto blanco) |
| `--color-accent-700` | `#3455c6` | Hover / pulsado de controles rellenos |
| `--color-accent-dim` | `rgba(80, 111, 225, 0.14)` | Accent background fill (transparent) |
| `--color-accent-border` | `rgba(80, 111, 225, 0.35)` | Accent borders |

### 1.4 Semantic

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#22c55e` | Status: ENFORCED, LIVE, active |
| `--color-success-bg` | `rgba(34, 197, 94, 0.12)` | Success background fill |
| `--color-success-border` | `rgba(34, 197, 94, 0.30)` | Success border |
| `--color-warning` | `#f59e0b` | Status: PENDING, READY |
| `--color-warning-bg` | `rgba(245, 158, 11, 0.12)` | Warning background fill |
| `--color-danger` | `#f36f6f` | Status: RISK, errors |
| `--color-danger-bg` | `rgba(243, 111, 111, 0.12)` | Danger background fill |
| `--color-info` | `#5e98f8` | Informational elements |

### 1.5 Border Colors

| Token | Value | Usage |
|---|---|---|
| `--color-border-subtle` | `rgba(255, 255, 255, 0.09)` | Cards at rest, section dividers |
| `--color-border-default` | `rgba(255, 255, 255, 0.18)` | Default borders, inputs |
| `--color-border-strong` | `rgba(255, 255, 255, 0.33)` | Hover, active elements |
| `--color-border-accent` | `rgba(80, 111, 225, 0.40)` | Featured/highlighted cards |

### 1.6 Contrast (WCAG 2.1 AA)

Text needs ≥ 4.5:1 and UI boundaries ≥ 3:1. Values below are calculated for the token set above; `danger`, `info`, `text-muted` and `accent-400` were lightened from the original values to meet AA on every surface.

| Pareja | #12131a | #1a1b22 | #242632 | #2e3040 |
|---|---|---|---|---|
| Texto primario `#ffffff` | 18.5:1 | 17.2:1 | 15.0:1 | 13.0:1 |
| Texto secundario `#a3aab8` | — | 7.4:1 | 6.4:1 | 5.6:1 |
| Texto atenuado `#9698a6` | — | 6.0:1 | 5.2:1 | 4.5:1 |
| Acento (texto/iconos) `#7a94eb` | 6.4:1 | 5.9:1 | 5.2:1 | 4.5:1 |
| Peligro `#f36f6f` | — | 6.0:1 | 5.2:1 | 4.5:1 |
| Info `#5e98f8` | — | 6.0:1 | 5.2:1 | 4.5:1 |
| Éxito `#22c55e` | — | 7.5:1 | 6.6:1 | 5.7:1 |
| Aviso `#f59e0b` | — | 8.0:1 | 7.0:1 | 6.1:1 |
| Blanco sobre botón `#4968da` | 4.9:1 (hover `#3455c6`: 6.4:1) | | | |
| Borde de control `#506fe1` (no texto, mín. 3:1) | 4.1:1 | 3.8:1 | 3.4:1 | |

---

## 2. Typography

### 2.1 Font Families

| Token | Value | Usage |
|---|---|---|
| `--font-display` | `'Inter', system-ui, sans-serif` | All headings (h1–h6) |
| `--font-body` | `'Inter', system-ui, sans-serif` | Body copy, UI labels |
| `--font-mono` | `'JetBrains Mono', ui-monospace, monospace` | Code, IDs, badges, data chips |

> **Source:** Inter via Google Fonts (`fonts.googleapis.com/css2?family=Inter`)

---

### 2.2 Type Scale by Tag

#### `h1` — Hero Headline

```css
h1 {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 1.5rem;
}
```

**Example:** *"Una plataforma. Cinco pilares. Todo el stack textil."*

---

#### `h2` — Section Headline

```css
h2 {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1rem;
}
```

**Example:** *"Todo fluye hacia un único hub"*

---

#### `h3` — Card / Module Title

```css
h3 {
  font-family: var(--font-display);
  font-size: clamp(18px, 2.5vw, 28px);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin-bottom: 0.75rem;
}
```

**Example:** *"DPP Platform"*

---

#### `h4` — Feature Title

```css
h4 {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0;
  color: #ffffff;
  margin-bottom: 0.5rem;
}
```

**Example:** *"Schema ESPR-native"*

---

#### `h5` — Sub-feature / Label Heading

```css
h5 {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: #a3aab8;
  margin-bottom: 0.25rem;
}
```

**Example:** *"Campos Art. 8-9 + composición"*

---

#### `h6` — Eyebrow / Section Label

```css
h6 {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9698a6;
  margin-bottom: 0.5rem;
}
```

**Example:** *"Arquitectura · Los 5 Pilares"*

---

#### `p` — Body Text

```css
p {
  font-family: var(--font-body);
  font-size: 15px;           /* 16px on large screens */
  font-weight: 400;
  line-height: 1.65;
  color: #a3aab8;
  max-width: 60ch;
  margin-bottom: 1rem;
}

p.small {
  font-size: 13px;
  line-height: 1.6;
  color: #9698a6;
}
```

---

#### `ul` / `li` — Lists

```css
ul {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  color: #a3aab8;
  padding-left: 1.25rem;
  list-style: disc;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.25rem;
}

li::marker {
  color: #7a94eb;
}
```

---

#### `a` — Links

```css
/* Navigation links */
a.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.15s;
}
a.nav-link:hover {
  color: #7a94eb;
}

/* Body / in-content links */
a.body-link {
  font-size: 14px;
  font-weight: 400;
  color: #7a94eb;
  text-decoration: none;
  transition: text-decoration 0.15s;
}
a.body-link:hover {
  text-decoration: underline;
  text-decoration-color: rgba(80, 111, 225, 0.5);
}

/* CTA arrow link */
a.cta-link {
  font-size: 14px;
  font-weight: 500;
  color: #7a94eb;
}
a.cta-link::after {
  content: ' →';
}
```

---

### 2.3 Eyebrow / Overline Pattern

Used above h2/h3 headings to introduce sections:

```css
.eyebrow {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.10em;
  color: #7a94eb;          /* accent variant */
  /* or */
  color: #9698a6;          /* neutral variant */
  margin-bottom: 8px;
  display: block;
}
```

**Example:** *"Pilar 1", "Los 5 Pilares", "Arquitectura"*

---

## 3. Spacing

### 3.1 Base Scale (4px grid)

| Token | Value | Common Usage |
|---|---|---|
| `--space-1` | `4px` | Icon gaps, tight internal padding |
| `--space-2` | `8px` | Inline element gaps, badge padding |
| `--space-3` | `12px` | Card internal gaps |
| `--space-4` | `16px` | Default component padding |
| `--space-5` | `20px` | Button horizontal padding |
| `--space-6` | `24px` | Card padding, nav item spacing |
| `--space-8` | `32px` | Between cards, sub-section gap |
| `--space-12` | `48px` | Section internal padding |
| `--space-16` | `64px` | Between major sections (mobile) |
| `--space-20` | `80px` | Section padding (tablet) |
| `--space-24` | `96px` | Section `padding-block` (desktop) |
| `--space-32` | `128px` | Hero vertical padding |

### 3.2 Layout & Container

| Property | Value |
|---|---|
| `max-width` (content) | `1280px` |
| Page `padding-inline` (mobile) | `16px` |
| Page `padding-inline` (tablet) | `32px` |
| Page `padding-inline` (desktop) | `48px–64px` |
| Navbar height | `64px` |
| Section `padding-block` (mobile) | `64px` |
| Section `padding-block` (desktop) | `96px–128px` |
| Grid column gap | `24px–32px` |
| Grid row gap | `24px` |

### 3.3 Component-level Margins

| Element | `margin-bottom` |
|---|---|
| `h1` | `1.5rem (24px)` |
| `h2` | `1rem (16px)` |
| `h3` | `0.75rem (12px)` |
| `h4`, `h5`, `h6` | `0.5rem (8px)` |
| `p` | `1rem (16px)` |
| Section eyebrow → heading gap | `8px` |
| Card stack gap | `24px` |

---

## 4. Borders

| Token | Value | Usage |
|---|---|---|
| `--border-subtle` | `1px solid rgba(255,255,255,0.09)` | Cards at rest, dividers |
| `--border-default` | `1px solid rgba(255,255,255,0.18)` | Inputs, default card borders |
| `--border-strong` | `1px solid rgba(255,255,255,0.33)` | Hover state, active elements |
| `--border-accent` | `1px solid rgba(80, 111, 225,0.40)` | Featured / highlighted cards |
| `--border-card` | `1px solid rgba(80,111,225,0.35)` | Modules and cards of the editor |
| `--border-control` | `1px solid #506fe1` | Inputs, selects, chips (non-text contrast ≥ 3:1) |
| `--border-accent-left` | `2px solid #506fe1` | Left-side section accent rule |
| `--border-success` | `1px solid rgba(34,197,94,0.40)` | ENFORCED / LIVE status |
| `--border-warning` | `1px solid rgba(245,158,11,0.40)` | PENDING status |
| `--border-danger` | `1px solid rgba(243, 111, 111,0.40)` | RISK / error state |

> **Note:** All borders use alpha transparency rather than hard hex values, allowing them to work consistently across different surface backgrounds within the dark palette.

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-xs` | `2px` | Micro elements, inline code |
| `--radius-sm` | `4px` | Small badges, status chips |
| `--radius-md` | `6px` | Buttons, small cards |
| `--radius-lg` | `8px` | Inputs, navigation items |
| `--radius-xl` | `12px` | Cards (default) |
| `--radius-2xl` | `16px` | Feature panels, larger cards |
| `--radius-3xl` | `24px` | Hero cards, modals |
| `--radius-full` | `9999px` | Pills, tags, avatar circles |

---

## 6. Design Tokens (CSS Variables)

Recommended `:root` declaration:

```css
:root {
  /* === Backgrounds === */
  --color-bg-base:       #12131a;
  --color-bg-dark-alt:   #0d0e15;
  --color-bg-surface:    #1a1b22;
  --color-bg-card:       #242632;
  --color-bg-elevated:   #2e3040;

  /* === Text === */
  --color-text-primary:   #ffffff;
  --color-text-secondary: #a3aab8;
  --color-text-muted:     #9698a6;
  --color-text-disabled:  #4b5563;

  /* === Accent (Blue) === */
  --color-accent-50:     #dde1ff;
  --color-accent-400:    #7a94eb;
  --color-accent-500:    #506fe1;
  --color-accent-600:    #4968da;
  --color-accent-700:    #3455c6;
  --color-accent-dim:     rgba(80, 111, 225, 0.14);
  --color-accent-border:  rgba(80, 111, 225, 0.35);

  /* === Semantic === */
  --color-success:        #22c55e;
  --color-success-bg:     rgba(34, 197, 94, 0.12);
  --color-success-border: rgba(34, 197, 94, 0.30);
  --color-warning:        #f59e0b;
  --color-warning-bg:     rgba(245, 158, 11, 0.12);
  --color-warning-border: rgba(245, 158, 11, 0.30);
  --color-danger:         #f36f6f;
  --color-danger-bg:      rgba(243, 111, 111, 0.12);
  --color-danger-border:  rgba(243, 111, 111, 0.30);
  --color-info:           #5e98f8;

  /* === Borders === */
  --border-subtle:        1px solid rgba(255, 255, 255, 0.09);
  --border-default:       1px solid rgba(255, 255, 255, 0.18);
  --border-strong:        1px solid rgba(255, 255, 255, 0.33);
  --border-accent:        1px solid rgba(80, 111, 225, 0.40);
  --border-card:          1px solid rgba(80, 111, 225, 0.35);
  --border-control:       1px solid #506fe1;

  /* === Border Radius === */
  --radius-xs:    2px;
  --radius-sm:    4px;
  --radius-md:    6px;
  --radius-lg:    8px;
  --radius-xl:    12px;
  --radius-2xl:   16px;
  --radius-3xl:   24px;
  --radius-full:  9999px;

  /* === Typography === */
  --font-display: 'Inter', system-ui, -apple-system, sans-serif;
  --font-body:    'Inter', system-ui, -apple-system, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, 'Cascadia Code', monospace;

  /* === Spacing === */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* === Layout === */
  --max-w-content: 1280px;
  --navbar-height: 64px;
}
```

---

## 7. Components

### 7.1 Buttons

```css
/* Primary — dark filled */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #12131a;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}
.btn-primary:hover {
  background: #1a1b22;
  border-color: rgba(255, 255, 255, 0.33);
}

/* CTA / Accent */
.btn-accent {
  background: #4968da;
  color: #ffffff;
  border: none;
  font-weight: 600;
  border-radius: var(--radius-md);
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s;
}
.btn-accent:hover {
  background: #3455c6;
}

/* Secondary — outlined */
.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: var(--radius-md);
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.50);
}

/* Ghost / text */
.btn-ghost {
  background: transparent;
  color: #7a94eb;
  border: none;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}
.btn-ghost:hover {
  text-decoration: underline;
}
```

---

### 7.2 Cards

```css
/* Standard card */
.card {
  background: var(--color-bg-card);        /* #242632 */
  border: var(--border-default);
  border-radius: var(--radius-xl);         /* 12px */
  padding: 24px;
  transition: border-color 0.2s, background 0.2s;
}
.card:hover {
  background: var(--color-bg-elevated);
  border-color: rgba(255, 255, 255, 0.33);
}

/* Featured / accent card */
.card-featured {
  border-color: rgba(80, 111, 225, 0.40);
}

/* Card eyebrow */
.card-eyebrow {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.10em;
  color: #7a94eb;
  margin-bottom: 6px;
  display: block;
}

/* Card title */
.card-title {
  font-size: 17px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.3;
}

/* Card body */
.card-body {
  font-size: 14px;
  color: #a3aab8;
  line-height: 1.6;
}
```

---

### 7.3 Badges / Status Pills

```css
/* Base badge */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: var(--font-mono);
}

/* Variants */
.badge-success {
  background: rgba(34, 197, 94, 0.12);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.30);
}
.badge-warning {
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.30);
}
.badge-danger {
  background: rgba(243, 111, 111, 0.12);
  color: #f36f6f;
  border: 1px solid rgba(243, 111, 111, 0.30);
}
.badge-accent {
  background: rgba(80, 111, 225, 0.14);
  color: #7a94eb;
  border: 1px solid rgba(80, 111, 225, 0.25);
}
.badge-neutral {
  background: rgba(255, 255, 255, 0.06);
  color: #9698a6;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
```

---

### 7.4 Navigation

```css
.navbar {
  height: var(--navbar-height);         /* 64px */
  display: flex;
  align-items: center;
  padding: 0 var(--space-8);
  background: rgba(18, 19, 26, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: var(--border-subtle);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: var(--radius-lg);
  transition: color 0.15s, background 0.15s;
}
.nav-link:hover {
  color: var(--color-text-primary);
  background: rgba(255, 255, 255, 0.05);
}
.nav-link.active {
  color: #ffffff;
}
```

---

### 7.5 Section Layout

```css
.section {
  padding-block: var(--space-24);    /* 96px */
  max-width: var(--max-w-content);
  margin-inline: auto;
  padding-inline: var(--space-8);
}

@media (max-width: 768px) {
  .section {
    padding-block: var(--space-16);  /* 64px */
    padding-inline: var(--space-4);  /* 16px */
  }
}

.section-header {
  text-align: center;
  max-width: 680px;
  margin-inline: auto;
  margin-bottom: var(--space-12);  /* 48px */
}
```

### 7.6 Editor forms and modules

| Element | Spec |
|---|---|
| Page container | `max-width: 1152px`, padding `32px 24px` |
| Gap between modules | `36px` |
| Module header | padding `24px 32px`, title `18px / 600` white, indicator `24px` in accent |
| Module body | padding `0 32px 32px`, grid gap `24px 32px` |
| Labels | `16px / 600`, white, `8px` below |
| Inputs / selects | padding `12px 16px`, text `16px`, radius `8px`, `--border-control`, bg `#242632` |
| Buttons | padding `10px 20px`, `15px / 500`; primary `#4968da` + white `700`; outline `1.5px #506fe1` + accent text |
| Chips and badges | chips radius full, padding `8px 16px`; badges `12px` mono |
| Cards | padding `24px`, radius `12px`, `--border-card` |
| Focus ring | `2px` accent, offset `2px` |

---

*Last updated: November 2026 · Source: dpp.eu/platform*
