# Scene 3: Full Details

# Overall Behavior

Scene 3 begins as a direct continuation of the bow-and-arrow action from Scene 2.

There should be no visual reset between the two scenes.

The arrow that was drawn and released from the bow continues shooting downward into Scene 3. All three medallions are already positioned along the arrow’s path when it enters.

The arrow shoots behind all three medallions in one continuous movement and reaches its final resting position during the first portion of the scene.

Once the arrow settles, the scene shifts from **kinetic movement to interactive exploration**.

The three medallions become the primary focus.

Each medallion:

- remains positioned in front of the arrow
- has a repeating outer gold glow
- functions as an interactive button
- opens its own modal when selected

The arrow remains stationary behind the medallions throughout the interactive portion of the scene.

---

# Starting Frame

The starting frame is inherited directly from the ending action of Scene 2.

Immediately before Scene 3:

- the bow is fully drawn
- the arrow has been pulled upward
- the bowstring is under tension
- the Meet Lain Doe Love composition has already cleared the viewport
- the bow and arrow are the primary focus

Continued scrolling crosses the release threshold.

At that moment:

- the arrow releases
- the bowstring snaps back
- the arrow accelerates downward
- Scene 3 begins appearing in the arrow’s path

The transition should feel like one continuous action rather than:

**Scene 2 ends → Scene 3 loads → arrow starts moving again.**

---

# 1. Scene Environment

The scene is vertically oriented around the arrow.

The arrow creates the central axis of the composition.

The three medallions are stacked vertically along that axis.

Clouds frame the left and right sides, creating a narrow central passage for the arrow and medallions.

The overall hierarchy should be:

1. Medallions
2. Arrow
3. Clouds
4. Background atmosphere

The scene should be visually simpler than the character scene that came before it.

This gives the interactive objects room to breathe.

---

# 2. Background

The background should remain relatively quiet.

The final artwork may contain:

- dark atmospheric space
- subtle paper texture
- faint grain
- small decorative marks
- subtle light variation

The background should not compete with the gold medallions.

## Idle Animation

The base background can remain completely static.

If additional atmospheric texture is used, it may have:

- extremely slow drift
- faint opacity breathing
- subtle grain movement

Any movement should be nearly imperceptible.

---

# 3. Cloud Structure

The clouds frame the medallion pathway from both sides.

They should be separated into independent groups rather than one flattened cloud image.

Recommended groups:

- upper-left clouds
- upper-right clouds
- middle-left clouds
- middle-right clouds
- lower-left clouds
- lower-right clouds

Additional groups can be created if required by the final illustration.

The clouds should leave enough negative space in the center for:

- arrow
- medallions
- medallion glow
- interaction areas

---

# 4. Cloud Idle Animation

Clouds should move gently throughout the interactive hold.

Different groups can use slightly different movement.

Possible behavior:

- slow horizontal drift
- small vertical float
- subtle scale breathing

Suggested ranges:

- horizontal movement: approximately 2 to 6 pixels
- vertical movement: approximately 2 to 5 pixels
- scale: approximately 1 to 1.01
- duration: approximately 10 to 18 seconds

Movement should remain subtle.

The clouds are framing devices, not the focus.

Avoid:

- synchronized cloud movement
- clouds crossing the center axis
- clouds covering medallions
- clouds obscuring interaction areas
- clouds moving far enough to expose unfinished artwork edges

---

# 5. Arrow

The same arrow from Scene 2 continues into Scene 3.

It should not be replaced by a second arrow asset during the transition if that creates a visible discontinuity.

The viewer should perceive one physical arrow traveling continuously from the bow through the medallion composition.

The arrow becomes the central visual spine of Scene 3.

---

# 6. Arrow Flight

The arrow completes its primary movement during the first portion of Scene 3.

After release from the bow:

- arrow accelerates downward
- arrow enters the medallion composition
- arrow passes behind Medallion 1
- arrow continues behind Medallion 2
- arrow continues behind Medallion 3
- arrow reaches its final resting position

This is one uninterrupted movement.

The arrow should **not**:

- stop at individual medallions
- wait for interaction during its flight
- slowly travel from one medallion to another
- fade between positions
- disappear and reappear
- change horizontal alignment

The arrow remains vertically centered.

---

# 7. Arrow Speed

The arrow flight should preserve the energy of the release from Scene 2.

The draw was slow and controlled.

The release should be fast.

The arrow should therefore travel through the medallion stack significantly faster than normal scroll-driven movement.

The viewer should clearly perceive:

**The bow fired the arrow.**

However, the movement should still remain visually readable.

The arrow should not travel so quickly that the visitor cannot understand that it passed behind the three medallions.

The exact duration should be tuned during implementation based on mobile testing.

---

# 8. Arrow Final Position

After passing behind all three medallions, the arrow reaches a final resting position.

In this position:

- feathers remain visible above the medallion stack
- shaft remains visible in the gaps between medallions
- shaft continues beneath the third medallion
- arrowhead remains visible below the third medallion

The medallions conceal the sections of the arrow directly behind their circular bodies.

The final result should create one continuous vertical arrow running behind all three medallions.

---

# 9. Arrow Idle State

Once the arrow reaches its final position, it stops moving.

It should not:

- float
- bounce
- pulse
- sway
- continuously slide

The arrow has completed its shot.

Keeping it still creates contrast with the glowing medallions and communicates that the action portion of the scene has ended.

The arrow remains in this position until the transition out of Scene 3 begins.

---

# 10. Arrow Layering

The arrow must remain behind all three medallions.

The visual relationship should be:

**Arrow**

↓

**Medallion artwork**

↓

**Medallion glow / interaction effects**

The arrow remains visible only in the spaces where it is not physically covered by a medallion.

The arrow should never appear to pass over the front face of a medallion.

---

# 11. Medallion System

There are three vertically stacked medallions.

Each medallion is:

- an independent visual asset
- an independent interactive button
- connected to its own modal
- surrounded by an animated outer gold glow

The medallions should share the same interaction language so the visitor immediately understands that they belong to one system.

However, each medallion remains independently selectable.

---

# 12. Medallion 1

The first medallion contains the illustrated landscape/path symbol.

It occupies the upper position in the vertical stack.

The arrow passes directly behind it.

## Resting State

Medallion 1 should remain visually stable.

The artwork itself does not need to float or move.

Its primary ambient animation comes from the outer gold glow.

## Interaction

Tapping Medallion 1 opens Modal 1.

The medallion should briefly brighten when selected.

---

# 13. Medallion 2

The second medallion contains the illustrated hands/creation symbol.

It occupies the middle position.

The arrow continues behind it.

## Resting State

The medallion remains physically still.

Its outer gold glow continues independently.

## Interaction

Tapping Medallion 2 opens Modal 2.

The medallion briefly brightens when selected.

---

# 14. Medallion 3

The third medallion contains the illustrated eye/vision symbol.

It occupies the lowest position in the stack.

The arrow continues behind it before reaching the visible arrowhead below.

## Resting State

The medallion remains physically still.

Its outer gold glow provides the primary ambient animation.

## Interaction

Tapping Medallion 3 opens Modal 3.

The medallion briefly brightens when selected.

---

# 15. Medallion Ribbon Areas

Each medallion contains a ribbon/banner area beneath its circular illustration.

The ribbon should remain part of the clickable medallion.

The entire medallion assembly should function as one interaction target rather than requiring the visitor to tap only the circular center.

If text is eventually added to the ribbons, it should remain readable throughout the glow animation.

The glow should not reduce contrast or wash out the text.

---

# 16. Outer Gold Glow

Each medallion should have an independent outer gold glow.

The glow should surround the outside perimeter of the medallion rather than filling or recoloring the entire illustration.

The purpose of the glow is to:

- separate the medallions from the dark background
- reinforce their gold material
- communicate interactivity
- give the otherwise stationary medallions ambient life

---

# 17. Gold Glow Structure

Ideally, the glow should be separate from the base medallion artwork.

Recommended structure for each medallion:

### Base Medallion

Original illustrated artwork.

### Outer Glow

Soft gold halo extending beyond the medallion edge.

### Highlight Layer

Optional brighter edge or rim-light effect.

### Interaction Hit Area

Invisible clickable/tappable area covering the complete medallion.

Separating the glow from the artwork allows the lighting to animate without changing the opacity or clarity of the illustration itself.

---

# 18. Gold Glow Idle Animation

The glow should use a slow repeating cycle.

Recommended behavior:

1. faint resting gold halo
2. gradual brightness increase
3. halo expands slightly outward
4. glow reaches peak intensity
5. glow softly contracts
6. brightness returns to resting level
7. brief pause
8. repeat

The movement should feel luminous rather than pulsating like a notification.

## Suggested Timing

Approximate cycle:

- resting state: 1 to 2 seconds
- brighten/expand: 0.8 to 1.2 seconds
- peak: 0.2 to 0.4 seconds
- soften/contract: 0.8 to 1.2 seconds
- pause: 1 to 2 seconds

Exact values should be adjusted visually.

---

# 19. Glow Timing Between Medallions

The three medallions should not pulse at exactly the same moment.

Use slightly offset timing.

For example:

- Medallion 1 begins first
- Medallion 2 begins slightly later
- Medallion 3 begins slightly later again

This should not become an obvious top-to-bottom chase animation.

The offsets should simply prevent the three glows from breathing in mechanical synchronization.

The visitor should perceive three living interactive objects rather than one flashing unit.

---

# 20. Medallion Hover State

On desktop, hovering over a medallion should strengthen its interactive state.

Possible behavior:

- outer glow brightens
- halo expands slightly
- edge highlight becomes more visible
- medallion scales very slightly

Suggested scale:

approximately `1.02–1.04`

The effect should be smooth and immediate without bouncing.

When hover ends, the medallion returns to its normal idle glow cycle.

---

# 21. Medallion Touch State

On mobile, tapping a medallion should provide immediate visual feedback before the modal opens.

On touch:

- outer glow becomes brighter
- medallion may scale very slightly
- optional short highlight flashes around the rim
- modal opens

The feedback should happen quickly enough that the visitor knows their touch registered.

# 22. Interaction Hit Areas

The interactive area should be larger than any narrow illustrated details.

The entire medallion should function as the button.

This includes:

- circular body
- ribbon
- reasonable surrounding tap padding

The invisible interaction area should not overlap neighboring medallions.

Recommended minimum mobile target size:

approximately 44 × 44 CSS pixels, although the actual medallions will likely be significantly larger.

---

# 23. Modal System

Each medallion opens a separate modal.

The three modals should use the same underlying modal system even though their content differs.

This prevents unnecessary duplicate code and ensures consistent interaction.

The modal contents can be designed separately from the Scene 3 animation.

---

# 24. Modal Opening Behavior

When a medallion is selected:

1. selected medallion briefly brightens
2. scroll-driven progression pauses
3. modal backdrop appears
4. modal content appears above the scene
5. underlying Scene 3 remains preserved

The arrow should remain stationary behind the medallions.

The scene should not move while the visitor is interacting with the modal.

---

# 25. Modal Background

The Scene 3 composition should remain recognizable behind the modal if possible.

Possible treatment:

- translucent dark overlay
- subtle blur
- reduced background brightness

The modal should feel like an information layer opening **inside the existing experience**, not navigation to a different webpage.

---

# 26. Modal Closing Behavior

When the modal closes:

- modal content disappears
- backdrop disappears
- visitor returns to exactly the same scroll position
- arrow remains in its resting position
- medallions remain where they were
- arrow flight does not replay
- glow animations resume
- cloud animations resume if they were paused

The visitor can then:

- open another medallion
- reopen the same medallion
- continue scrolling

---

# 27. Modal Progress Requirements

Opening a modal must not change Scene 3's scroll progress.

The system should preserve:

- scroll position
- GSAP timeline progress
- arrow state
- medallion state

Closing the modal must not trigger:

- page jump
- timeline reset
- arrow replay
- scene reload
- automatic scroll movement

---

# 28. Optional Interaction

Opening the modals is optional.

The visitor should never be forced to:

- open Medallion 1
- open Medallion 2
- open Medallion 3
- open all three before continuing

The main scrollytelling journey remains intact without modal interaction.

The modals provide deeper information for visitors who want it.

---

# 29. Scene Hold

After the arrow reaches its final position, Scene 3 enters its primary hold.

This is intentionally calmer than the arrow release.

During the hold:

- arrow remains stationary
- medallions remain stationary
- gold glows animate
- clouds drift subtly
- all three medallions remain interactive

No major scroll-driven animation should immediately begin.

The visitor should have visual breathing room to understand that the medallions can now be explored.

---

# 30. Visual Attention Hierarchy

The scene should guide attention in this order:

## First

Arrow shooting through the composition.

## Second

The complete stack of three medallions.

## Third

Animated gold glows indicating interaction.

## Fourth

Individual medallion illustrations and ribbons.

## Background

Clouds and atmosphere.

Once the arrow stops, the medallions replace the arrow as the primary focal point.

---

# 31. Ambient Animation Hierarchy

## Primary Ambient Motion

- medallion outer gold glows

## Secondary Ambient Motion

- clouds
- subtle background atmosphere

## Completely Still

- arrow after landing
- medallion artwork itself
- ribbons

The stillness of the physical medallions makes the light surrounding them more noticeable.

---

# 32. Layer Structure

Recommended logical layer order from back to front:

### Background

1. Base background
2. Background texture
3. Atmospheric effects

### Environment

1. Left cloud groups
2. Right cloud groups

### Arrow Layer

1. Arrow

### Medallion 1

1. Medallion 1 base
2. Medallion 1 outer glow
3. Medallion 1 optional highlight

### Medallion 2

1. Medallion 2 base
2. Medallion 2 outer glow
3. Medallion 2 optional highlight

### Medallion 3

1. Medallion 3 base
2. Medallion 3 outer glow
3. Medallion 3 optional highlight

### Interaction

1. Medallion 1 hit area
2. Medallion 2 hit area
3. Medallion 3 hit area

### Modal UI

1. Modal backdrop
2. Modal container
3. Modal content
4. Modal close control

The exact DOM order can vary if CSS stacking contexts require it, but visually the arrow must always remain behind the medallion artwork.

---

# 33. Camera Behavior

Scene 3 should not introduce another dramatic camera move immediately after the arrow release.

The arrow provides the motion.

The camera should remain primarily aligned with the vertical medallion composition.

Once the arrow settles, the camera becomes stable.

Avoid:

- camera rotation
- unnecessary horizontal panning
- dramatic zooming
- movement that makes tapping medallions difficult

The scene needs stability because this is an interactive section.

---

# 34. Scroll Behavior

Scene 3 contains two different scroll states.

## Initial Scroll State

The first portion completes the arrow's downward shot.

This portion should be relatively short.

The arrow should not require a long scroll distance to travel through the three medallions.

## Interactive Hold State

Once the arrow settles:

- major movement stops
- medallions remain available
- visitor can pause indefinitely
- ambient animation continues

Further scrolling eventually begins the transition out of Scene 3.

That exit choreography should be defined separately on the **Scene 3 Transition** page.

---

# 35. Relationship to Scene 2

The arrow release should visually bridge both scenes.

Implementation should avoid treating the arrow flight as two unrelated animations.

Conceptually, the sequence is:

**Scene 2**

Bow drawn

↓

Arrow released

↓

Bowstring snaps

↓

**Scene 2 → Scene 3 Transition**

Arrow accelerates downward

↓

**Scene 3**

Arrow passes behind Medallion 1

↓

Medallion 2

↓

Medallion 3

↓

Arrow settles

The visitor should experience this as one continuous action.

---

# 36. Mobile Behavior

Mobile portrait is the master composition.

The viewport should comfortably show the vertical relationship between:

- arrow
- three medallions
- surrounding clouds

The medallions must remain large enough to:

- understand their symbols
- read future ribbon text
- recognize their glow
- tap comfortably

The arrow should remain centered through different mobile viewport widths.

Clouds may need responsive cropping rather than scaling the entire composition uniformly.

---

# 37. Mobile Modal Behavior

On mobile:

- modal should fit within the safe viewport
- modal content may scroll internally
- page behind modal should remain locked
- browser should not jump when scroll locking is enabled
- close control must remain easy to reach
- reopening the scene should preserve exact position

Avoid relying exclusively on hover states to communicate that the medallions are clickable.

The gold glow provides the persistent mobile interaction cue.

---

# 38. Desktop Behavior

Desktop should preserve the same vertical structure.

Wider screens may reveal:

- more clouds
- more background atmosphere
- additional negative space

Do not spread the three medallions horizontally.

They remain stacked vertically along the arrow.

The arrow remains the central spine.

---

# 39. Performance Requirements

Use transforms and opacity for the arrow movement.

The arrow flight should not rely on repeated layout calculations.

Medallion glow effects should be optimized carefully because three continuously animated blur/filter effects can become expensive on mobile.

Where possible:

- use pre-rendered glow assets
- animate opacity and scale of the glow layer
- avoid continuously animating large CSS blur values

This can create the appearance of an expanding glow with substantially less rendering cost.

---

# 40. Gold Glow Performance

A recommended lightweight approach is:

- create a transparent gold halo asset for each medallion
- position it behind or around the medallion
- animate its opacity
- animate scale between approximately 1 and 1.03 or 1.05

This produces the breathing halo without requiring the browser to generate a large real-time glow every frame.

The base medallion artwork remains untouched.

---

# 41. Scroll Reversal

Scrolling upward should reverse the scroll-controlled portions of Scene 3 cleanly.

If the visitor reverses before the arrow has completed its initial flight:

- arrow moves upward along the same path
- medallions remain in position
- arrow eventually returns toward the Scene 2 transition state

Once the visitor reaches the Scene 2 release threshold, the bow system should visually reconnect correctly.

The arrow should never duplicate.

---

# 42. Modal + Reverse Scroll Protection

While a modal is open, the underlying scroll timeline should not advance or reverse.

This prevents accidental changes to the arrow position while the visitor is reading.

Only after the modal closes should normal page scrolling resume.

---

# 43. Reduced Motion

For visitors using `prefers-reduced-motion`:

- shorten the arrow flight
- avoid aggressive acceleration
- keep medallions immediately readable
- reduce cloud movement
- retain the outer gold glow at a slower/lower intensity
- preserve all modal interactions

The narrative relationship should remain:

**arrow released → arrow positioned behind medallions → medallions become interactive.**

---

# 44. Placeholder Artwork Requirements

The current artwork can remain during animation development.

Before implementation, the scene should at minimum have separate temporary assets for:

- arrow
- Medallion 1
- Medallion 2
- Medallion 3
- Medallion 1 glow
- Medallion 2 glow
- Medallion 3 glow
- left cloud groups
- right cloud groups
- background

The modals can initially use placeholder content while their interaction behavior is tested.

The important mechanics to solve before final illustration are:

- arrow continuity from Scene 2
- arrow layering behind all three medallions
- arrow resting position
- medallion interaction
- modal scroll preservation
- gold glow performance

---

# 45. Locked Scene Behavior

When Scene 3 begins:

- arrow is already in motion from Scene 2
- all three medallions are positioned along its path
- arrow shoots behind all three in one continuous movement
- arrow reaches its resting position during the first portion of the scene
- arrow remains still
- all three medallions display animated outer gold glows
- clouds continue subtle ambient motion
- each medallion can independently open its modal
- closing a modal returns the visitor to the same scene state
- no modal interaction is required to continue
- further scrolling eventually initiates the transition to Scene 4

---

# Acceptance Criteria

Scene 3 is complete when:

1. The arrow release from Scene 2 flows continuously into Scene 3.
2. The same arrow visually continues through both scenes.
3. All three medallions are already positioned when the arrow enters.
4. The arrow shoots behind all three medallions in one uninterrupted movement.
5. The arrow does not pause at individual medallions.
6. The initial arrow movement completes within the first portion of Scene 3.
7. The arrow remains vertically centered.
8. The arrow never appears in front of a medallion.
9. Arrow feathers remain visible above the completed stack.
10. Arrow shaft remains visible between medallions.
11. Arrowhead remains visible below the third medallion.
12. The arrow becomes completely stationary after its flight.
13. All three medallions remain physically stable.
14. Each medallion has a visible animated outer gold glow.
15. Gold glows expand and brighten subtly rather than flashing.
16. Glow timing is slightly offset between medallions.
17. Each medallion clearly reads as interactive.
18. Each medallion has its own modal.
19. Tapping a medallion provides immediate visual feedback.
20. Opening a modal preserves the underlying scene.
21. The arrow remains stationary while a modal is open.
22. Closing a modal returns the visitor to the exact same scroll position.
23. Closing a modal does not replay the arrow animation.
24. Visitors can open the medallions in any order.
25. Visitors can reopen a medallion.
26. Visitors are not required to open any modal.
27. Cloud animation remains subtle and never obstructs interaction.
28. The scene provides a clear interactive hold after the arrow settles.
29. Mobile tap targets are comfortable.
30. The scene remains smooth on mobile.
31. Glow effects do not create noticeable performance issues.
32. Reverse scrolling correctly returns the arrow toward Scene 2.
33. No duplicate arrow, masking error, asset edge, or stacking glitch becomes visible.
34. Placeholder artwork can later be replaced without rebuilding the animation architecture.
35. The scene is technically prepared for the separate **Scene 3: Transition** into the next story beat.