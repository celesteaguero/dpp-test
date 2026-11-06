# DPP Editor — Status and Next Steps

Vela Textile DPP prototype · Status as of November 5, 2026

## Phase 1 is applied (blue palette, spacing, type)

- **Palette:** `#506fe1` for borders and graphics, `#4968da` for filled buttons, and the agreed surfaces (`#12131a` page, `#1a1b22` modules, `#242632` inputs). No teal remains in the project.
- **Sizes and spacing** taken from the blue file:
  - Labels are 16 px / 600.
  - Inputs have `12×16` padding.
  - Module headers are `24×32` with an 18 px title.
  - There is a 36 px gap between modules, a 1152 px container and 24 px card padding.
- **Docs:** `DESIGN.md` has a new contrast table (section 1.6) and an editor sizes section (7.6). `CONTEXTO-DPP.md` is updated.
- **Caveat:** contrast was verified numerically, but the pages were not rendered. Check the look locally, with a hard refresh because of cached CSS.

### Contrast fixes, applied everywhere

These changes were made globally (editor, public page, map and `DESIGN.md`) so the whole interface meets WCAG AA.

- **Accent text:** `#6885e8` → `#7a94eb`. It fell just under AA (about 4.4:1) on `#242632` panels and on hover surfaces.
- **Muted text:** `#6b7280` → `#9698a6`. It was about 3:1 before.
- **Danger:** `#ef4444` → `#f36f6f`. It was about 4:1 on panels.
- **Info:** `#3b82f6` → `#5e98f8`. Same reason.
- **Button fill:** `#506fe1` → `#4968da`. White text was 4.47:1 and is now 4.9:1.

## Next steps, in the order I would do them

### 1. Test what is already delivered

- Phase 1 visuals, locally and on the hosting.
- Uploads: a PNG image, a PDF certificate, a file over 5 MB, and a `.txt` renamed to `.pdf`. The last two should be rejected.
- The supplier modal, the map and the distance figure (added beyond the step originally requested).
- On the hosting, also check the PHP upload size limit and that `uploads/` is writable. Upload `uploads/.htaccess` once by hand, because the sync excludes that folder.

### 2. Phase 2: layout from the blue mockup

- Navbar, module headers with icon, subtitle and status circle, product name and color fields, creation date and modification history.
- Full fiber cards, tier cards, care pictograms, and the QR block inside Module D.
- Self-host the assets the mockup loads from Google (7 images, Material Symbols, Inter), so the demo does not depend on third-party links.
- **Open decision:** the mockup's tier cards take a free-text location per stage, while the current version picks from a supplier list. Which one should win?

### 3. Remaining functionality

- ERP simulation, which autofills Module A when leaving the SKU field.
- Roles and access layers (public / B2B / authorities). The roles section of the spec was cut off, so it needs completing first.
- Missing research fields: recycled content, EPR number, ESPR declaration and recyclability score.
- Spec details not yet built: the microplastics default ("Moderado" with 35% polyester), a `localStorage` backup, and the "Next" flow between modules.

### 4. Polish

- Hardened `.htaccess`, an accessibility and mobile review, clearer error messages, and self-hosted fonts.

## What is needed to continue

1. Test results from step 1.
2. Whether Phase 2 should start now or after Phase 1 has been reviewed.
3. Supplier list or free-text locations for the tier cards.
