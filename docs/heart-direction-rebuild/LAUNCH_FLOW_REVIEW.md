# Current dashboard implementation

Updated 2026-10-19 on production/homepage-rebuild.

Visible dashboard uses the existing Blender-exported geometry, including the
original heart. Destination modals, the covering CSS shell and replacement SVG
heart have been removed. HTML screen content maps to the 3D display plane via a
homography; semantic controls track projected button/heart bounds. No runtime
dependency was added. GLB and Blender masters remain unchanged.

SATURN/MOON display Coming soon in-screen. STORE/SOCIALS use the same scrollable
screen; real product/URLs are still pending. Home is the actual heart with a
persistent Home label and hover/focus feedback. It returns to the exterior and
restores GET IN focus. WebGL loss switches to plain accessible controls.

Verified in the in-app browser: original artwork visible; no dialogs; Saturn and
Moon screen text; Store/Socials content changes; repeat boarding/Home cycles;
keyboard Home activation; GET IN focus restoration; alignment at 390×844 and
1440×900; 320×700 controls are all at least 44×44 and coming-soon text fits without
scrolling; Home works after 844×390 resize. No console warnings/errors captured.
Screenshots: production/renders/spaceship/dashboard-web-mobile.png and
production/renders/spaceship/dashboard-web-desktop.png. Module syntax and
HTML structure checks passed. Screen homography corner mapping was numerically
checked against the source model's screen bounds.

Still unverified: physical iPhone Safari, actual commerce and download delivery,
current browser reduced-motion and forced model/network failure scenarios.
Materials approximate the Blender look using glTF materials and neutral runtime
reflections; exact Blender procedural material parity is not claimed.

---

The following describes the superseded HTML/modal implementation and its
historical checks. It is retained as history, not current behavior.

# Focused launch flow — implementation history

Branch: production/homepage-rebuild. No commit, push or deployment.

## Implemented

- Existing cyan exterior, spaceship GLB, canopy motion and 2.6-second camera
  boarding retained. No Blender or 3D asset changes.
- Boarding now ends at the dashboard. Removed active takeoff, artifact trail,
  Funemployed, scroll progression and void transition.
- Saturn/Moon show Coming soon in native dialogs.
- Store stages one digital download; no Buy control appears until product name,
  price and HTTPS checkout URL are provided. Payhip/Square is not connected yet.
- Socials lists Substack, Instagram, Threads; missing URLs show coming soon.
- js/launch-config.js is the public configuration point for owner-supplied
  product details and URLs. Never add payment secrets there.
- Configured checkout opens a new tab so the dashboard remains available after
  checkout cancellation; actual provider flow still requires end-to-end testing.
- Dashboard heart (Back to Homepage) restores the exterior, GET IN and keyboard focus.
- Modal close/Escape uses the native dialog; close restores opener focus/scroll.
- Prior HTML/JS/CSS preserved byte-for-byte as inactive .txt snapshots in
  archive/pre-focused-launch, rather than a second active website route.

## Validation

- JavaScript module syntax checks passed for script.js and launch-config.js.
- HTML parser check passed: unique IDs, no deferred journey/takeoff controls.
- Node VM interaction harness passed normal/reduced motion crossed with model
  stub/no model: two full boarding/return cycles and all four panel open/close
  checks per case, focus restoration, and HTTPS URL filtering.
- These are simulated DOM/state checks, not browser rendering or WebGL tests.
- Browser-control inventory exposed no available browsers; mobile/desktop visual,
  native Escape/focus trap, actual model loading, resize, WebGL context loss,
  slow loading and physical iPhone Safari checks remain unverified.
- Existing model remains about 11.7 MB; no new runtime dependency was installed.

## Remaining work

Visual review, final portal integration and dashboard alignment; final product,
Payhip checkout and social URLs; actual purchase/download-email verification;
loading/performance and device testing. Current portal/water remain placeholders.

Dashboard navigation update: the labeled, keyboard-accessible heart at the top
of the dashboard returns to the homepage. The separate Return outside button
is removed. A persistent label plus hover/focus/pressed styles signal interaction.
The HTML heart replaces the two decorative heart meshes only in the dashboard
render clone; the source GLB, exterior ship and boarding geometry are unchanged.

## Physical cockpit correction — 2026-10-19

Supersedes prior dashboard-clone/ship-hide behavior: the whole ship now remains
visible from the pilot view. Dashboard text and controls project directly onto
the original ship geometry in a single renderer. The closed exterior dome is
visible, opens during boarding and stays out of the forward view inside. Home
restores the closed dome. See COCKPIT_PRESENCE_REVIEW.md for implementation,
mobile/desktop checks and material limitations. Source models remain untouched.
