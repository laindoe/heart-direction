# Heart Direction — focused launch production plan

Approved scope: 2026-10-19. STATUS.md defines current requirements.

## Milestone 1 — simplify the existing prototype

Retain exterior → canopy/camera boarding → dashboard. Stage Saturn and Moon as
coming soon. Remove the active takeoff, artifact trail and world-navigation
continuation from the launch flow. Preserve prior work and source assets.
Exit: every launch control leads to a defined dashboard state or return outside.

## Milestone 2 — visual integration

Review portal v002 depth, spaceship/dashboard v013 and entry timing. Integrate
approved portal imagery/geometry and finalize exterior framing and responsive
dashboard controls. Use the approved cyan sky. Avoid requiring new scenery or
world assets without a concrete composition need and review.
Exit: one coherent mobile-first exterior-to-dashboard experience.

## Milestone 3 — digital product and socials

Use Payhip Free Forever initially, Square processing, and Payhip automatic
email/download delivery. Start with one digital product and a Buy control;
no custom cart, checkout backend or fulfillment service. Confirm current fees,
account availability and embed behavior. Connect Substack, Instagram and Threads.
Exit: an end-to-end test verifies payment and delivery, and all links work.

## Milestone 4 — launch verification

Optimize GLB/media loading, textures/materials, memory and draw calls. Test mobile
portrait, desktop, physical iPhone Safari/dynamic browser chrome, touch, keyboard,
focus restoration, reduced motion, unavailable WebGL, slow/failed assets, checkout
failure/cancellation and return navigation. Record results and remaining issues.
Exit: a reviewable release candidate; publishing requires explicit approval.

## Production boundaries

- Keep static HTML/CSS/JavaScript baseline and existing prototype runtime.
- New dependencies need purpose, payload, alternatives, mobile cost and approval.
- Prefer 2.5D when it provides the required appearance more efficiently than 3D.
- Keep source assets in heart-direction-production and optimized exports in the
  web repository. Do not commit large Blender masters/raw textures to the web repo.
- Use desktop Blender only; background mode crashes on this Mac. Prepare scripts
  for the Text Editor when desktop control is unavailable. Do not imply syntax
  validation verifies Blender execution or visual correctness.
- Preserve original GLBs and versioned Blender files. Use new versions for changes.
- Work on production/homepage-rebuild, preserve existing uncommitted work, and do
  not commit, push, merge or deploy as part of this documentation update.

## Deferred production

Artifact/content kits, tunnel/void travel, full Saturn/Moon worlds, Funemployed,
custom commerce infrastructure, categories/cart/accounts, and sound design are
not launch milestones. Re-scope explicitly before resuming them.

## Homepage assembly preview — 2026-10-19

The exterior assembly pass is implemented locally: portal v002 image cutout,
existing spaceship and sky, turquoise water, and procedural palm/grid-hill/winged
cherub-position stand-ins. Source assets are preserved. Boarding and in-screen
dashboard navigation remain functional; exterior scenery stays visible from the
cockpit. Portal cutout is an AI-derived preview, not a native transparent Blender
export or final approved asset. See HOMEPAGE_ASSEMBLY_REVIEW.md for provenance,
files, browser checks and screenshots. The next milestone is visual review and
composition adjustments across the complete scene, not additional worlds.
