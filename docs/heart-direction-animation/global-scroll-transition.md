# Global Scroll and Transition

## Purpose

All scene transitions across the Heart Direction website should behave as one continuous scroll experience.

The visitor should feel like they are scrolling normally through the page while the illustrated world responds to that movement.

The site should never feel like it is fighting the user, trapping them inside an animation, or forcing them through a predetermined sequence at a fixed speed.

Scrolling controls the experience, but the interaction should still feel natural.

---

## Reversible Animation

Every scroll-driven animation should reverse cleanly when the visitor scrolls upward.

If an object:

- enters while scrolling down
- moves through the viewport
- opens
- closes
- reveals something
- leaves the frame
- changes position
- changes scale
- changes lighting

then scrolling back upward should return that object through the same states in reverse.

The visitor should be able to retrace the entire journey naturally.

There should be no need to reload the page or restart a scene.

---

## Continuous Scene Progress

Scene transitions should connect directly to one another.

The ending state of one scene should become the starting state of the next.

Avoid:

- visual resets
- sudden jumps
- hard cuts unless intentionally designed
- objects teleporting between positions
- duplicated assets appearing during handoffs
- timeline restarts between scenes

The website should feel like one continuous illustrated environment rather than a series of separate animation clips.

---

## Natural Scrolling

The website should preserve the feeling of normal browser scrolling.

The user should be able to:

- scroll slowly
- scroll quickly
- stop at any point
- reverse direction
- use touch scrolling naturally
- use a mouse wheel or trackpad normally

Animations should respond to the scroll rather than override it.

The viewer should feel:

**I am scrolling through the story.**

Not:

**The website has taken control of my screen.**

---

## No Scroll Hijacking

Do not use aggressive scroll hijacking.

Avoid:

- forcing the page to move at a fixed speed
- autoplaying the visitor through a scene
- snapping the user to every animation beat
- preventing reverse scrolling
- locking the scroll unnecessarily
- replacing normal scrolling with custom drag behavior
- large delays between finger movement and page response

Pinned sections may be used when required for specific effects, but the visitor's normal scroll input should still control progress.

---

## Smooth Scrub Behavior

Scroll-driven animation should use smooth scrubbed progress.

The visual movement can trail the user's scroll slightly to soften motion, but it should never feel disconnected.

A subtle smoothing value can be used where appropriate.

The goal is:

**responsive first, polished second.**

If the visitor scrolls, the scene should immediately respond.

---

## Pausing Mid-Animation

Every scroll-driven scene should remain visually valid when paused at any point.

The visitor may stop scrolling halfway through:

- a tunnel transition
- a bow draw
- an arrow movement
- a parchment opening
- a scene reveal

Nothing should break simply because the animation is paused between its beginning and ending states.

Avoid intermediate states where:

- assets reveal unfinished edges
- masks fail
- hidden objects accidentally appear
- layers detach
- text becomes unreadable

---

## Scroll Speed Independence

Animations must remain understandable at different scroll speeds.

### Slow Scroll

The visitor should be able to inspect the movement in detail.

### Normal Scroll

The experience should feel smooth and cinematic.

### Fast Scroll

The animation should still reach the correct state without breaking, skipping important structural states, or leaving assets in incorrect positions.

---

## Ambient vs Scroll-Driven Animation

Ambient animations should remain separate from scroll-driven animation.

Examples of ambient motion:

- clouds drifting
- cherubs floating
- lights flickering
- stars twinkling
- sun glowing
- horse stepping
- grass swaying

These animations continue independently while the visitor pauses.

Scroll-driven animation controls the narrative movement:

- entering the tunnel
- revealing the bow
- shooting the arrow
- moving through medallions
- heart impact
- leaving the tunnel
- opening the proclamation
- closing the proclamation
- revealing the finale

Ambient animations do not need to reverse when scrolling upward.

Narrative animations do.

---

## Pinned Scenes

Pinned scenes can be used when the storytelling requires the viewport to remain stable while an object transforms.

Examples include:

- entering or leaving the heart tunnel
- opening the proclamation scroll

However, pinning should feel invisible to the visitor.

The user should still feel like they are scrolling normally.

Avoid sudden moments where the page appears stuck.

There should always be visible response to scroll input.

---

## Easing

Scroll-driven movement should use restrained easing.

Avoid:

- bounce
- elastic movement
- exaggerated overshoot
- cartoon-style acceleration

Movement should feel smooth, physical, and intentional.

Where an action represents a real event, such as the arrow firing or the bowstring snapping, a faster triggered movement may be used.

Everything else should remain closely tied to scroll progress.

---

## Mobile Priority

Natural scrolling is especially important on mobile.

The site should preserve:

- normal touch momentum
- responsive finger movement
- expected vertical scrolling behavior
- native browser feel

Avoid systems that interfere with iPhone scrolling physics unless absolutely necessary.

The animations should enhance native scrolling rather than replace it.

---

## Modal Exception

The only time page scrolling should intentionally lock is while an interactive modal is open.

When a modal opens:

- current scene progress is preserved
- background timeline pauses
- page does not move behind the modal

When the modal closes:

- visitor returns to the exact same scroll position
- normal scroll behavior resumes
- no animation restarts

---

## Final Rule

At every point in the experience, the visitor should feel like:

**their scrolling is revealing the world.**

The website should never feel like:

**the animation is controlling their scrolling.**

The motion should sit on top of normal scrolling so naturally that the mechanics disappear and the story becomes the thing they notice.