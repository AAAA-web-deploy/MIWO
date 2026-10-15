# CURSOR — MICRO PANIC ($MIWO) V2 VISUAL RECOVERY — PATCH THE EXISTING WEBSITE

You are updating an EXISTING, functioning React/Vite site deployed at `https://simusashi.site/`, not making a different website from scratch. The project source is the folder I have opened in Cursor. This update ZIP contains HIGH-QUALITY SCENE PAINTINGS, animation-ready individual eye-expression sprites, original characters, approved logo/banner, and this exact change specification.

## STEP ZERO: MANDATORY ASSET AND BASELINE INSPECTION
1. Read `README_FIRST.md`, `guides/ASSET_USAGE_AND_LIMITATIONS.md`, `guides/APPROVED_VISUAL_CONTRACT.md`, `guides/QA_ACCEPTANCE_CHECKLIST.md`.
2. View `ASSET_OVERVIEW.jpg` and images inside `assets/scenes/*.webp` INDIVIDUALLY.
3. Open `preview/OPEN_ME_SCENE_PREVIEW.html` in a browser. It is a VISUAL PROOF OF SEQUENCE AND ART-QUALITY TARGET, not a production site to copy wholesale.
4. Inspect your existing source components, layout, styles, and assets before editing. Back up/commit current work. Keep the currently WORKING mood bubble clicks, client-side meme image export, token drawer, Crew drawer, and working links.
5. Do not make up missing file paths. Do not assume this ZIP overwrites the web application. Copy the `assets/` CONTENTS to public visual assets and use the actual paths in your project.

## FIX THE CORE VISUAL ERROR
The site was previously deployed with flat gradient and tiny simplified SVG environment illustrations. This significantly diverges from our approved artist-quality illustrated ocean, cozy whale dream, and illustrated sunset scene. **USE THE ACTUAL SCENE WEBP FILES PROVIDED HERE AS THE DOMINANT SCENE IMAGERY.** Do not redraw these scenes as flat SVGs. The editorial storyboard references MUST NOT be placed as whole collages in the site.

A crucial technical distinction: most illustrated scene paintings contain MIWO/whales and details baked into one image (they are separate FULL SCENE PAINTINGS, but NOT independent cutout layers). Do not claim to independently animate an object baked into a painting. Preserve painterly quality by treating these as full-scene plates, applying very subtle zoom/parallax to the WHOLE painting, and animating genuine separate foreground elements (isolated MIWO sprite, subtle light/bubbles/wave shader, custom DOM labels) ONLY where they don't create duplicate characters. This is more faithful than falsely re-creating the scene as cheap geometric gradients.

## THE EXACT APPROVED EXPERIENCE (REQUIRED)
Scene 0. QUICK LOADING (<2s, actual asset readiness): near-black, subtle progress; `SKIP INTRO` always visible. No 10-second forced spinner on repeat visits.
Scene 1. ANIMATED MANY-EYE INTRO, black background: use 8 individual transparent WEBP eye pairs from `assets/eyes/`. Eyes do NOT simply sit in a long vertical collage. Multiple pairs appear around darkness at staggered positions, look around, blink, and trade places. Distinct moods: curious, suspicious, sideways, startled, worried, angry, **MOCKING**, **SMILING**. The **MOCKING** eyes MUST use `07_mocking.webp` with an amused, relaxed, side-eyed half-lid (Pepe-like smug energy), and MUST NOT use angry furrowed `06_angry.webp`. Smiling uses `08_smiling.webp`. The right/left pupil glances should be independent if implemented with additional DOM pupil animation; do not rotate the entire page. Stage should feel FUN rather than sinister.
Scene 2. ORIGINAL MIWO REVEAL: fade eye layer and align into `assets/characters/MIWO_original.webp` (BLACK body, white eyes, lavender tie, NO BLUE WHALE COSTUME). Soft warm spotlight. Character bounces/waves. Short caption `Meet MIWO.`
Scene 3. COZY WHALE DREAM: full-bleed illustrated bedroom painting `assets/scenes/01_whale_dream_fullscene.webp`; immense gentle whale in luminous thought cloud, small ORIGINAL unclothed MIWO in bed. This exact scene was approved. Another complete composition available as `01B_whale_dream_variant_fullscene.webp` (optional). Do not substitute abstract geometric dream cloud on flat navy. Caption (live HTML, NOT baked text): `Someday... I'll be a whale.`
Scene 4. COSTUME SPLASH TRANSFORMATION: do a brisk watery wipe/crossfade to the artwork `assets/scenes/02_costume_splash_transition_fullscene.webp`, then cut to sea scene. This transition painting shows both bare MIWO and suited MIWO; it is an intentional comic transformation still, not separate sprites to animate as if independent. The separate `MIWO_whale_costume.webp` is for individual bobbing/overlays elsewhere.
Scene 5. MAIN OCEAN HOME: full-bleed detailed illustration `assets/scenes/03_golden_whale_ocean_hero_fullscene.webp` (or alternate `04_whale_ocean_wide_alternate_fullscene.webp` if crop works substantially better). Large blue whales, dramatic turquoise water, sunset light, rocks and visible MIWO in suit. The visual should match the painterly approved reference at first glance. Place **MICRO PANIC**, **$MIWO**, and **Micro Bag. Whale-Sized Feelings.** as REAL HTML text in safe open sky/water region, without covering the character; do not stretch title over the whale's face. Keep persistent clearly accessible `THE BAG`, `CREW`, `MAKE MEME`, `GO FULL WHALE` actions without converting site into generic nav cards. No embedded storyboard collage.
Scene 6. UNDERWATER EMOTIONS: full-bleed `assets/scenes/05_luminous_underwater_fullscene.webp`. Preserve working eight emotion bubbles and their real asset images. Give a sense of depth and surface-to-underwater motion. Let MIWO visibly express feelings without repeating generic tile grid.
Scene 7. PERSONAL MEME CREATOR: preserve and improve existing working canvas exporter, actual user text input, reaction selection, real PNG download; place it within the illustrated world rather than a sterile dashboard. Use transparent sprites in `assets/reactions`.
Scene 8. SOMEDAY ENDING: fullscreen illustrated warm sunset `assets/scenes/06_someday_sunset_finale_fullscene.webp`, MIWO WITHOUT whale suit gazing toward enormous whale, live HTML caption `Someday, I'll be a whale.` (This is an emotional pause, not the same tiny postcard reused at bottom of page.) The small `references/someday_approved_reference.webp` may remain as optional nostalgic detail, but NOT in place of the full-screen approved ending.

## WHALE MODE interaction
Activating `GO FULL WHALE` must produce visible world-state change: whale/world slightly enlarge, lens/lighting shift, bubbles emerge, MIWO reacts if a separate sprite is present, and confidence text appears. The bag remains `BAG: STILL MICRO` throughout. Repeatable; not a one-way dead state. Avoid claiming actual wallet balance. Offer reduced-motion alternative.

## CONTENT / IDENTITY
- Project name `MICRO PANIC`, ticker `$MIWO` everywhere; NEVER display `Meme` as ticker, $MPANIC, $MICRO, or fake names.
- Primary motto: `Micro Bag. Whale-Sized Feelings.` Secondary joke: `I can't move the market. The market moves me.`
- The original mascot is nearly black with enormous cream eyes, small curved tuft and lavender tie; blue whale outfit is always a COSTUME, and NOT on MIWO in the dark intro, bare reveal, dream or final sunset ending.
- **Logo letter-free.** Use `assets/logo/MIWO_logo_no_text.png`; do not add letters or token name inside the icon.
- No invented CA, supply, liquidity status, ownership claims, taxes, chart data, token statistics, socials. Leave blank not active where unavailable. Keep trade/chart links behind valid real config. Show network label only as provided in config.
- The Department of Unnecessary Panic is at most a small gag, not the primary website story.

## PERFORMANCE AND ACCESSIBILITY
- Prefer WebP scene assets from this package; lazy-load the underwater/finale scene. Optimized original PNGs are source masters, do NOT eagerly serve them all.
- Scene paints are high-quality rich raster art; preserve correct `background-size: cover` or object-fit; for mobile adjust `object-position` individually to keep MIWO visible. Do NOT stretch/crop faces.
- Mobile first view must show recognizable MIWO and essential title/CTA without losing half the character; give right navigation accessible drawer.
- Screen readers: skip intro, labels and focus management for modals; avoid focus traps; keyboard actions functional.
- Set `prefers-reduced-motion` to skip cinematic animation automatically and land at main content. Intro should also have SKIP control and never trap user.
- Never use a giant autoplay background video or massive unoptimized particle system. Limit effects to transform/opacity where possible.

## NON-NEGOTIABLE ACCEPTANCE VISUAL PROOFS
Before saying finished, capture the actual site at desktop (1440×900) and phone (390×844) showing:
  1) black intro containing multiple distinct expressive eye pairs, including mocking and smile;
  2) ORIGINAL UN-SUITED MIWO against dark/warm reveal;
  3) bedroom dream with full luminous whale cloud;
  4) costume splash / transition;
  5) richly painted whale-ocean homepage;
  6) lush painted underwater emotion setting;
  7) full-screen MIWO-without-costume sunset whale ending;
  8) working meme creator and modal actions.
Compare the screenshots to `ASSET_OVERVIEW.jpg`, the specified actual scene images and approved reference board. If visual richness is missing or any scene is replaced by plain gradients, correct it BEFORE reporting completion. If a full-scene image is insufficiently separable for required motion, state the limitation; do NOT invent missing transparent art.

## IMPLEMENTATION IN EXISTING SOURCE
Do not wipe project. Find current React app entry, its hero, modal, intro, mood bubble and meme creator components. Reuse existing code and replace scene state/rendering plus background images. Keep imports concrete to where you copy assets; use e.g. `/miwo-v2/scenes/03_golden_whale_ocean_hero_fullscene.webp` after copying into `public/miwo-v2/scenes/`. Create a single scene manifest in source; no hardcoded scattered paths. Build and test with existing `npm run build` or current package scripts. Fix lint/types, browser console errors, and broken image paths. Never announce done before screenshots and functional checks are completed. This ZIP is a source-art + implementation-instruction update, not a magically installed website.
