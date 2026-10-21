# Heart Direction — launch experience flow

Approved scope: 2026-10-19. See STATUS.md for implementation status.

## Exterior

Show the finished homepage composition with the approved cyan sky, heart portal
and marquee, and spaceship. Keep GET IN as the semantic entry control. Final
surrounding scenery is subject to composition review, not an automatic expansion
of the asset list.

## Boarding

Retain the existing canopy opening and camera movement into the cockpit. Refine
timing and continuity after visual review. Reduced motion enters directly; slow
or failed 3D loading must not block dashboard access.

## Dashboard

The dashboard is the launch destination. Retain the approved chrome/heart design
and four primary controls: SATURN, MOON, STORE, SOCIALS. Replace instructions and
controls that currently lead to the artifact trail with dashboard-appropriate
content; new copy beyond coming-soon labels needs review.

- SATURN: show Coming soon within the dashboard experience.
- MOON: show Coming soon within the dashboard experience.
- STORE: show the first digital product's preview, description, price and Buy
  control inside Heart Direction. Payhip handles checkout with Square processing
  and automatically emails the download link. Validate actual embedded/linked
  checkout behavior before claiming checkout never leaves the site.
- SOCIALS: offer Substack, Instagram and Threads links using supplied URLs.
- Dashboard heart (Back to Homepage): restore the exterior and a usable GET IN control.

Panels must close predictably, restore focus, and work with touch and keyboard.
Keep purchase failures/cancellations recoverable without restarting boarding.

## Deferred

Takeoff, tunnel/glitch travel, void arrival, artifact library/trail, Funemployed,
functional Saturn portfolio, Moon chapters, and full storefront/cart are outside
this launch. Preserve earlier work without exposing unfinished routes.

## Artwork dashboard update — 2026-10-19

The website now renders the original exported v013 dashboard, including the
Blender heart, housing, screen bezel and four physical buttons. Removed the
covering HTML dashboard, replacement SVG heart and destination modals. HTML text
is perspective-aligned inside the model's black display using projected geometry;
accessible 44px minimum targets track the real heart and button caps on resize.
Saturn/Moon show Coming soon on that display. Store and Socials replace the same
screen content; longer content scrolls within the display. The original heart,
labeled Home, restores the exterior and GET IN focus. A plain control fallback
remains available if WebGL/model loading fails. No Blender source or GLB changed.

In-app browser checks passed at 390×844 and 1440×900, plus narrow 320×700
screen fit/touch targets and 844×390 Home navigation. Destination changes,
repeat boarding, keyboard Home activation and focus restoration were verified;
no browser console warnings/errors were captured. Physical iPhone Safari,
reduced-motion and model-failure behavior were not newly browser-tested.
Exact next task: review the dashboard material/camera appearance against the
Blender reference, then continue portal/exterior integration as a separate milestone.

## Physical cockpit correction — 2026-10-19

Supersedes prior dashboard-clone/ship-hide behavior: the whole ship now remains
visible from the pilot view. Dashboard text and controls project directly onto
the original ship geometry in a single renderer. The closed exterior dome is
visible, opens during boarding and stays out of the forward view inside. Home
restores the closed dome. See COCKPIT_PRESENCE_REVIEW.md for implementation,
mobile/desktop checks and material limitations. Source models remain untouched.
