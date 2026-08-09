# Heart Direction Website - Codex Instructions

## Project Overview

This repository contains the Heart Direction scrollytelling website.

It is a lightweight static website built with:

- HTML
- CSS
- JavaScript

There is currently no framework, package manager, build system, or component architecture.

Do not introduce React, Next.js, Vite, or another framework unless explicitly requested.

The current project structure should remain lightweight.

---

# Primary Goal

The current priority is to rebuild and improve the animation architecture for the Heart Direction website.

The website is a continuous illustrated scroll experience made of seven scenes.

The animation system must support:

- smooth scroll-driven transitions
- reversible animation
- mobile-first behavior
- native-feeling scrolling
- independent ambient animation
- reusable scene logic
- future artwork replacement without rebuilding the animation system

The current artwork is still temporary in places.

Do not treat current image positioning or temporary artwork as permanent design requirements when the animation documentation specifies otherwise.

---

# Source of Truth

The complete animation specification lives in:

```text
/docs/heart-direction-animation/

These documents define the intended behavior of the website.

When implementing a scene, read all relevant documentation before editing code.

This includes:

scene overview
full detail
transition
asset checklist
global scroll / transition rules

If the current implementation conflicts with the animation documentation, the documentation should be treated as the intended behavior unless explicitly instructed otherwise.

Do not invent new choreography when the documentation already defines it.

Scene Structure

The intended narrative structure is:

Scene 1 - The Entrance
Scene 2 - Meet Lain Doe Love
Scene 3 - The Medallions
Scene 4 - The Quest
Scene 5 - Back to Reality
Scene 6 - The Proclamation
Scene 7 - The Finale

The current repository may not match this structure yet.

For example, some existing scenes are merged or numbered inconsistently.

When refactoring, prefer the intended seven-scene structure.

Do not rely on legacy class names, IDs, or page numbers as the canonical scene numbering.

Global Scroll Philosophy

The user should feel like they are scrolling through a normal webpage while the illustrated world responds to that scroll.

The animation should never feel like it is controlling the user.

The experience should feel:

natural
responsive
smooth
reversible
continuous

The user must be able to:

scroll slowly
scroll quickly
stop anywhere
reverse direction
use trackpad scrolling
use mouse-wheel scrolling
use native mobile touch scrolling

Do not aggressively hijack scroll behavior.

Avoid:

forced snapping
custom scroll physics
replacing native scrolling
locking the user inside animations
fixed-speed autoplay
blocking reverse scrolling
large delays between user input and visual response

Pinned sections are allowed when required for storytelling, but the user must still feel like their normal scroll input is directly controlling visible progress.

Reversible Animation

All narrative scroll-driven animations must reverse cleanly when scrolling upward.

If an element:

enters
exits
opens
closes
moves
scales
reveals
hides
changes lighting
changes position

while scrolling downward, reversing the scroll should restore the previous visual state predictably.

The user should be able to retrace the entire website without:

animation resets
duplicated elements
broken masks
timeline jumps
stale states
requiring a page refresh

Every intermediate state should remain visually valid if the user stops scrolling.

Scroll-Driven vs Ambient Animation

These are two different systems.

Scroll-Driven Narrative Animation

Examples:

entering the heart tunnel
moving through the tunnel
revealing the bow
drawing the bow
firing the arrow
arrow movement between scenes
heart impact
exiting the tunnel
opening the proclamation
closing the proclamation
revealing the finale

These animations should be controlled by scroll progress.

They must reverse with scroll.

Ambient Animation

Examples:

drifting clouds
floating cherubs
marquee flicker
glowing heart
sun glow
horse stepping
grass movement
stars twinkling

These animations are time-based.

They should continue when the user stops scrolling.

They do not need to reverse when the user scrolls upward.

Keep ambient animation separate from narrative timelines.

Preferred Animation Architecture

Prefer a modular GSAP + ScrollTrigger architecture for narrative animation.

The current project does not use GSAP yet.

GSAP and ScrollTrigger may be introduced without converting the project to a framework or build system.

Preferred structure: js/
    scroll.js
    ambient.js
    modals.js

    scenes/
        scene-01.js
        scene-02.js
        scene-03.js
        scene-04.js
        scene-05.js
        scene-06.js
        scene-07.js

script.js should eventually become a lightweight initializer rather than containing the entire animation system.

Each scene module should own its own choreography.

Do not replace one giant manual timeline with one giant GSAP timeline.

Prefer multiple connected scene timelines that together create one continuous experience.

Current Architecture Warning

The current implementation contains legacy scroll logic that is fragile.

Known issues include:

hard-coded vh timing values
fixed pixel motion distances
scene-specific CSS variables written on every scroll event
merged Scene 2 and Scene 3 canvas
direct geometry reads during scrolling
mixed viewport measurement systems
static future scenes with animation comments but no implementation
inconsistent scene numbering
duplicate scene assets
modal scrolling that currently continues behind overlays

Do not build new animation behavior on top of brittle legacy logic if that logic directly conflicts with the new animation architecture.

Refactor safely and incrementally.

Implementation Strategy

Work in stages.

Do not attempt to rebuild all seven scenes in one task.

Preferred order:

inspect repository
establish animation foundation
stabilize modal behavior
establish scene module structure
implement Scene 1
test
implement Scene 2
test
continue scene by scene

Do not continue automatically into the next scene unless explicitly requested.

Change Scope

Before modifying code:

inspect the current implementation
identify which code is reusable
identify which code conflicts with the requested behavior
make the smallest safe change
preserve unrelated working behavior

Do not perform broad unrelated refactors.

Do not redesign the website.

Do not change copy unless explicitly requested.

Do not replace assets unless explicitly requested.

Do not reorganize the entire image library unless explicitly requested.

Artwork

Current artwork should be treated as animation-ready placeholders where necessary.

The animation system should allow art to be replaced later without rewriting choreography.

Whenever an object needs independent motion, prefer independent assets or logical wrappers for that object.

Examples:

clouds
cherubs
tunnel layers
arrows
medallions
heart lighting
scroll rollers
sun rays
horse legs
grass layers

Avoid flattening independently animated objects into one large image when that would prevent the documented animation.

Mobile First

Mobile portrait is the primary experience.

The current visual system is based around a narrow illustrated design canvas.

Preserve the mobile-first composition where practical.

Desktop should adapt the same scene choreography rather than becoming a completely separate website.

Test especially for:

iPhone Safari
dynamic browser chrome
100dvh
orientation changes
touch scrolling
fast swipes
reverse scrolling
viewport resize

Avoid mixing multiple viewport measurement systems without a clear reason.

Scroll Performance

Prioritize smooth mobile performance.

Prefer:

transform
opacity
GSAP transforms
cached measurements
ScrollTrigger refresh hooks
lightweight masking

Avoid:

layout reads on every native scroll event
repeated getBoundingClientRect() during every scroll callback
unnecessary style writes
heavy real-time blur filters
large numbers of permanently active will-change layers
giant GIFs
unnecessary full-screen frame sequences

Use pre-rendered glow layers where appropriate.

Pinning

Pinned sections are acceptable when required by the narrative.

Examples include:

tunnel travel
proclamation opening

Pinning should feel invisible.

The user should always see a visual response when scrolling.

Avoid situations where the page feels frozen or stuck.

Pinned sections should transition smoothly back into normal document movement.

Easing

Use restrained motion.

Most narrative animation should remain closely tied to scroll progress.

Avoid:

bounce
elastic easing
exaggerated overshoot
cartoon-like spring behavior

Faster triggered motion is acceptable when the story requires it.

Examples:

arrow release
bowstring snap
brief light impact

These should still reconnect correctly to reverse scrolling.

Modals

Modal behavior must preserve animation state.

When a modal opens:

preserve current scroll position
prevent background scrolling
preserve scene timeline state
prevent underlying narrative progression

When a modal closes:

restore the exact previous scroll position
resume the same animation state
avoid jumps
avoid restarting the scene

Modal transitions themselves may be animated, but should not alter narrative scroll progress.

Reduced Motion

Respect: prefers-reduced-motion

Reduced-motion behavior should preserve narrative understanding while reducing major animated travel.

Possible adjustments include:

shorter transitions
fewer ambient loops
simplified scale movement
simplified tunnel travel
reduced parallax
reduced horse/grass movement
direct document reveal for proclamation

Do not remove access to content or navigation.

Scene 1 Specific Direction

Scene 1 is the entrance into Heart Direction.

The final implementation must eventually support:

living sky
drifting clouds
independent cherub float
subtle tunnel glow
marquee light behavior
Enter the Tunnel interaction
forward camera movement through the heart
layered tunnel depth
reversible entrance

Do not implement Scene 1 until explicitly asked after the foundation architecture is approved.

Scene 2 Specific Direction

Scene 2 contains:

Lain Doe Love
sacred-heart interaction
birds holding the banner
bow and arrow reveal
bow draw
arrow release

Birds and banner must move as one connected assembly during entrance.

The bow draw and arrow release must behave as documented.

Do not assume the current merged canvas is the final architecture.

Scene 3 Specific Direction

Scene 3 contains:

three medallions
arrow traveling behind all three
medallion glow
optional interactive medallion buttons
arrow continuing toward the Quest scene

Scene 3 should be independently controllable from Scene 2.

Scene 4 Specific Direction

Scene 4 contains:

arrow
heart
Quest marquee button
heart impact
light burst
transition toward Back to Reality

The Quest sign is physically attached to the heart and powers on after impact.

Scene 5 Specific Direction

Scene 5 is the tunnel exit.

It should reuse the same conceptual tunnel system as Scene 1, but the viewer is traveling outward.

The exterior world should already exist beyond the tunnel opening.

The next scene's closed proclamation scroll should already be present in the exterior world.

Scene 6 Specific Direction

Scene 6 contains the proclamation.

Core behavior:

closed scroll
viewport remains pinned
scroll physically unfurls
proclamation grows
once taller than viewport, document travel begins
full proclamation is read
scroll rolls closed again
finale begins appearing beneath it

Do not fake this by simply scaling one long parchment image vertically.

The scroll rollers and visible parchment region should behave like a physical scroll.

Scene 7 Specific Direction

Scene 7 is the final resting tableau.

Once established:

sun glows subtly
sun rays wiggle slightly
CTA buttons remain stable
buttons are direct links
rainbow remains stable
Lain Doe Love remains mostly still
horse legs animate gently
grass and flowers move subtly
clouds drift

There is no additional major narrative scene after this.

Final CTA Links

The final scene contains four links:

Be My Sweetheart
Read the Journal
Contact Me
Follow the Journey

Do not invent or change their destinations unless explicitly provided.

Placeholder URLs may remain placeholders until destinations are supplied.

The entire illustrated sign should act as the clickable area.

Code Quality

Prefer readable implementation over clever implementation.

Use:

descriptive function names
clear scene boundaries
named timing constants where necessary
comments for unusual choreography
reusable helpers only where they genuinely simplify the code

Avoid:

unexplained magic numbers
huge anonymous animation blocks
deeply nested transform logic
duplicate scene timing calculations
silent mutation of global state
Testing Expectations

After significant animation work, verify:

scroll down
scroll up
pause midway
fast scroll
slow scroll
mouse wheel
trackpad
mobile touch
resize
orientation change
modal open/close
reduced motion
scene handoffs

Do not consider an animation complete if it only works when scrolling downward at one speed.

Reporting Changes

After completing a task, report:

files created
files modified
behavior implemented
behavior intentionally preserved
behavior intentionally removed
temporary compromises
remaining issues
testing steps

Do not automatically proceed into additional scene work without explicit approval.

Important Final Rule

The visual goal is not to create a website that showcases animation technology.

The goal is to make the animation mechanics disappear.

The visitor should feel like they are simply scrolling through an illustrated world that responds naturally to their movement.



