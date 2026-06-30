# Design System

## Visual Theme

AKtion! feels like a working soundstage at the moment the lights come up: exact, dramatic, and full of possibility. True white and near-black create the production environment. A decisive rose-red supplies energy, while restrained brass adds craft without falling into conventional luxury styling.

## Color Palette

- Background: `oklch(1 0 0)`
- Surface: `oklch(0.965 0.004 355)`
- Ink: `oklch(0.12 0.01 355)`
- Muted: `oklch(0.43 0.018 355)`
- Primary: `oklch(0.55 0.21 354.5)`
- Primary dark: `oklch(0.39 0.16 354.5)`
- Brass accent: `oklch(0.57 0.11 72)`
- Line: `oklch(0.88 0.008 355)`

## Typography

- Display: Bodoni Moda, a high-contrast cinematic serif used for major statements.
- Body and interface: Manrope, a clear geometric sans used for navigation, copy, buttons, and forms.
- Display sizes use fluid `clamp()` values and never exceed 6rem.

## Layout

- Maximum content width: 1440px.
- Page gutters: fluid from 20px to 64px.
- Sections favor asymmetric two-column compositions and full-width photographic moments.
- Corner radius stays restrained at 0, 8px, or 12px.

## Components

- Header: transparent or white, wordmark left, primary navigation centered, consultation action isolated on the right.
- Buttons: rectangular, compact, clear verb-led labels.
- Icon system: consistent 1.7px line icons with square stroke caps and minimal ornament.
- Forms: visible labels, large controls, inline validation, clear success and error states.
- Footer: near-black closing field with navigation, contact placeholders, and a direct booking action.

## Motion

One coordinated first-load reveal, subtle image scale on hover, and direct navigation transitions. All nonessential motion is disabled when reduced motion is preferred.
