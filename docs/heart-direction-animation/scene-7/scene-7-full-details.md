# Scene 7: Full Details

# Overall Behavior

Scene 7 is the final resting state of the Heart Direction website.

By the time this scene is fully revealed:

- the proclamation has closed
- the closed scroll has cleared the frame
- the sun is in position
- all four CTA buttons are visible
- the rainbow is visible
- Lain Doe Love and the horse are fully revealed
- the lower field and flowers are visible
- the surrounding clouds are framing the scene

There is no additional major narrative reveal after this point.

The scene should now behave like a **living illustrated finale**.

The primary movement should come from:

- the sun glow and ray wiggle
- the horse’s leg motion
- the grass and field movement
- subtle cloud drift

The CTA buttons, rainbow, and Lain Doe Love should remain visually stable.

The goal is to create a scene that feels alive and finished without making the final page visually restless.

---

# Starting Frame

Scene 7 begins from the completed transition out of Scene 6.

At the moment the finale settles, the full composition is visible:

- blue sky background
- sun at the top
- cloud framing on both sides
- Be My Sweetheart button
- Read the Journal button
- Contact Me button
- Follow the Journey button
- rainbow
- Lain Doe Love
- horse
- flowers
- grass
- lower landscape

The major scroll-driven entrance animations have ended.

From this point forward, Scene 7 uses primarily ambient animation and direct button interaction.

---

# 1. Exterior Background

The final scene remains in the bright outer-world environment established after the Back to Reality sequence.

The background should feel open, colorful, and stable.

Possible layers include:

- blue sky
- subtle sky texture
- paper grain
- faint painted variation
- atmospheric light
- small decorative accents

The background should not contain any large continuous motion.

It acts as a stable foundation for the finale.

---

# 2. Background Idle Animation

The base sky should remain still.

Optional background texture may use:

- extremely slow horizontal drift
- slight opacity breathing
- barely visible texture movement

The movement should be subtle enough that the visitor does not consciously notice it.

The main visual motion belongs to the sun, horse, grass, and clouds.

---

# 3. Cloud Structure

The clouds frame the composition from the left and right sides.

They should be separated into multiple groups rather than flattened into one asset.

Possible groups:

- upper-left clouds
- upper-right clouds
- middle-left clouds
- middle-right clouds
- lower-left clouds
- lower-right clouds
- clouds behind the rainbow
- clouds behind the horse / landscape

The cloud composition should preserve open space around the CTA buttons.

---

# 4. Cloud Idle Animation

Clouds should continue the ambient movement language established throughout the website.

Possible motion:

- slow horizontal drift
- tiny vertical float
- subtle scale breathing

Suggested ranges:

- horizontal: approximately 2 to 6 pixels
- vertical: approximately 2 to 5 pixels
- scale: approximately 1 to 1.01
- duration: approximately 12 to 20 seconds

Different cloud groups should use different timing.

Avoid:

- synchronized movement
- clouds crossing CTA text
- clouds obscuring the sun
- fast looping motion
- visible jumps at loop points

---

# 5. Sun

The sun is the visual anchor at the top of the final composition.

It should feel radiant and alive, but the movement should remain restrained.

The sun should not compete with the CTA stack.

Its ambient animation consists primarily of:

- subtle glow breathing
- slight ray movement

---

# 6. Sun Base

The central sun face should remain structurally still.

It should not:

- rotate
- bounce
- float dramatically
- scale noticeably

The face acts as the stable center of the sun animation.

---

# 7. Sun Glow

The sun should have a soft repeating glow.

Recommended behavior:

1. resting brightness
2. gradual brightness increase
3. gentle peak
4. slow return to resting level
5. repeat

Suggested duration:

approximately 4 to 8 seconds per cycle.

The glow should feel like light breathing rather than flashing.

---

# 8. Sun Ray Wiggle

The outer rays should have a very slight living motion.

The best implementation is to separate the ray structure from the sun face if possible.

Possible behavior:

- tiny clockwise rotation
- return toward center
- tiny counterclockwise rotation
- return

Or individual ray groups may move by extremely small amounts.

Suggested range:

- rotation: approximately 0.25 to 1 degree
- duration: approximately 5 to 10 seconds

The rays should never look like they are spinning.

The effect should feel like heat or celestial energy subtly moving through them.

---

# 9. Sun Animation Hierarchy

The sun animation should read in this order:

Primary:

- glow

Secondary:

- ray wiggle

Still:

- face

This keeps the sun recognizable and composed.

---

# 10. CTA Button System

There are four CTA buttons:

1. Be My Sweetheart
2. Read the Journal
3. Contact Me
4. Follow the Journey

These buttons were already introduced during the Scene 6 transition.

Once Scene 7 begins, they are fully settled and remain stationary.

They do not need continuous entrance or idle movement.

Their animation occurs only through interaction states.

---

# 11. CTA Button 1: Be My Sweetheart

This button functions as a direct link.

The entire illustrated sign should be clickable.

This includes:

- icon
- title
- subtitle
- sign body
- border area

## Idle State

The button remains stable.

Optional subtle treatment:

- extremely faint warm highlight
- slight resting glow

No floating or pulsing is required.

## Hover State

Desktop hover can include:

- slight brightness increase
- soft outer glow
- tiny scale increase

Suggested scale:

approximately 1.02 to 1.03.

## Touch State

On mobile touch:

- immediate brightness response
- optional tiny scale response
- direct navigation

The button should not bounce.

---

# 12. CTA Button 2: Read the Journal

This button follows the same interaction system.

## Idle State

Stable.

## Hover / Touch

- slight brightness increase
- soft highlight
- tiny scale response
- direct navigation

All four buttons should feel like part of one interaction family.

---

# 13. CTA Button 3: Contact Me

The Contact Me button remains visually stable until interacted with.

On interaction:

- subtle brighten
- optional glow
- direct navigation to the intended contact destination

The entire sign is the clickable target.

---

# 14. CTA Button 4: Follow the Journey

The final CTA uses the same system.

Its direct link may lead to the selected social or journey destination.

The whole illustrated sign remains clickable.

No modal is required.

---

# 15. Button Interaction Consistency

All four CTA buttons should use consistent interaction behavior.

Recommended pattern:

### Rest

Static

### Hover

Slight brighten + tiny scale

### Press

Quick visual response

### Release

Navigate

Avoid giving each button a completely different animation language.

The icons and labels already provide visual differentiation.

---

# 16. CTA Hit Areas

The entire rectangular sign should function as one link.

The visitor should not need to tap:

- only the title
- only the icon
- only the subtitle

The invisible hit area should cover the full sign.

On mobile, vertical spacing between buttons should remain generous enough to prevent accidental taps.

---

# 17. CTA Navigation

The buttons should navigate directly to their destinations.

They should not open intermediary modals.

Depending on the final destination, links can:

- open the intended page
- open an external site
- open an email/contact action
- open a social profile

The exact destinations can be configured separately.

---

# 18. Rainbow

The rainbow is a large structural element separating the CTA stack from the character and horse composition.

It should remain primarily static.

The rainbow does not need to:

- float
- bounce
- rotate
- pulse

It already carries significant visual weight.

---

# 19. Rainbow Optional Ambient Treatment

If additional polish is desired, the rainbow may use:

- extremely subtle texture shimmer
- faint light variation
- tiny highlight movement

This is optional.

The recommended first build keeps it still.

---

# 20. Lain Doe Love

Lain Doe Love should remain visually stable.

The character is the emotional centerpiece of the lower composition, but the living motion should primarily come from the horse and landscape.

For the initial version, the character does not need a looped body animation.

---

# 21. Character Optional Polish

Possible future additions:

- slight clothing movement
- tiny hair movement
- subtle cape sway
- very small body breathing

These should only be added after the core finale performs smoothly.

They are not required for the initial implementation.

---

# 22. Horse Animation Goal

The horse is the primary animated character in Scene 7.

The goal is to make the horse feel alive without making it appear to be traveling across the screen.

The horse remains anchored in approximately the same position while its legs move.

The desired feeling is:

- gentle stepping
- slow walking in place
- light prancing

Not:

- running
- galloping
- jumping

---

# 23. Horse Asset Structure

The preferred implementation is to separate the horse into animation layers.

Possible structure:

### Horse Body

Includes:

- torso
- head
- neck
- main body structure

### Front Left Leg

Separate asset.

### Front Right Leg

Separate asset.

### Rear Left Leg

Separate asset if visible and required.

### Rear Right Leg

Separate asset if visible and required.

### Optional Harness / Reins

Separate only if subtle movement is desired.

This gives the animation system control without requiring the entire horse illustration to be redrawn for every frame.

---

# 24. Horse Leg Animation

The legs should move through a small repeated cycle.

Possible simplified cycle:

### Position A

One front leg slightly forward.

### Position B

Leg returns toward neutral while opposite leg begins shifting.

### Position C

Opposite leg slightly forward.

### Position D

Return toward starting position.

Rear legs can either:

- participate subtly
- or remain mostly stable if the artwork makes rear-leg movement difficult

The animation does not need to be an anatomically perfect walk cycle.

It only needs enough believable movement to make the horse feel alive.

---

# 25. Horse Leg Motion Range

Leg movement should remain modest.

Avoid extremely wide leg swings.

The horse is not covering physical distance.

The animation should look like:

**weight shifting + stepping**

rather than:

**running in place.**

Exact rotation and translation values should be calibrated to the final separated artwork.

---

# 26. Horse Body Support Motion

A completely static torso paired with moving legs may look disconnected.

The horse body can therefore have a tiny support motion.

Possible behavior:

- vertical movement of approximately 1 to 3 pixels
- subtle forward/back shift
- tiny head movement

Suggested cycle should match the leg rhythm.

Keep this extremely restrained.

---

# 27. Character Stability During Horse Motion

Lain Doe Love should remain visually stable even while the horse moves.

If the horse body has slight vertical motion, the character may need to move with the horse body as part of the same parent container.

This prevents the rider from appearing disconnected.

The character should not independently bounce.

---

# 28. Horse Animation Loop

The loop should be seamless.

Suggested duration:

approximately 2.5 to 5 seconds depending on the final motion.

The loop should not have an obvious reset.

The last frame/state should naturally connect back to the first.

---

# 29. Horse Animation Technical Recommendation

Preferred order:

### Option 1: Separated Assets + GSAP/CSS

Best for:

- control
- performance
- responsiveness
- reduced-motion support

### Option 2: Sprite / Frame Sequence

Useful if:

- leg geometry is difficult to separate
- a few hand-drawn poses produce a better result

### Option 3: Animated WebP

Acceptable if:

- the lower character animation is produced as one pre-rendered loop

Traditional GIF should be the least preferred option because of:

- lower quality
- larger file sizes
- limited transparency quality
- less animation control

---

# 30. Grass and Field

The lower landscape should feel alive beneath the horse.

The field may contain:

- grass
- flowers
- leaves
- ground texture
- decorative plants

The movement should support the horse without making it look like the horse is on a moving treadmill.

---

# 31. Grass Motion Goal

The preferred effect is **wind movement** rather than horizontal ground scrolling.

The grass should appear to:

- sway
- bend slightly
- return
- move in small grouped waves

This creates natural environmental life.

---

# 32. Grass Layer Structure

Where possible, separate the field into:

### Base Ground

Static.

### Rear Grass

Subtle movement.

### Foreground Grass / Flowers

Slightly more visible sway.

### Select Flower Heads

Optional tiny independent movement.

Not every plant needs to move.

A few animated layers can sell the entire effect.

---

# 33. Grass Idle Animation

Suggested behavior:

- small side-to-side sway
- slight vertical bob
- alternating movement direction
- different timing between layers

Suggested range:

- rotation: approximately 0.5 to 2 degrees
- translation: approximately 1 to 4 pixels
- duration: approximately 3 to 8 seconds

The movement should remain gentle.

---

# 34. Flower Movement

Selected flowers may move with the grass.

Possible movement:

- tiny stem sway
- flower head tilt
- slight return movement

Avoid independently animating dozens of flowers.

Choose a few strategic foreground elements.

---

# 35. Grass + Horse Relationship

The horse animation and field animation should complement one another.

They do not need to be perfectly synchronized.

The horse is moving under its own rhythm.

The landscape is moving from environmental air/wind.

This creates a richer living scene than forcing both systems onto one timing loop.

---

# 36. Final Animation Hierarchy

The scene should prioritize motion in this order:

## Primary Motion

- horse legs

## Secondary Motion

- grass and flowers

## Tertiary Motion

- sun glow
- sun ray wiggle
- clouds

## Mostly Still

- Lain Doe Love
- CTA buttons
- rainbow
- overall layout

This hierarchy prevents visual overload.

---

# 37. Layer Structure

Recommended visual stack from back to front:

### Background

1. blue sky
2. sky texture
3. atmospheric details

### Upper Environment

1. sun base
2. sun glow
3. sun ray layer
4. upper clouds

### CTA Layer

1. Be My Sweetheart
2. Read the Journal
3. Contact Me
4. Follow the Journey

### Mid Environment

1. rainbow
2. middle clouds

### Lower Environment

1. rear landscape
2. rear grass
3. horse rear legs
4. horse body
5. horse front legs
6. Lain Doe Love / rider
7. harness / reins if separated
8. foreground grass
9. flowers
10. foreground clouds or accents

Exact ordering may change depending on the illustration overlap.

---

# 38. Horse Layer Parenting

To simplify animation:

- horse body and rider should likely share a parent container
- independent leg pieces remain children or sibling layers
- overall horse/rider container remains fixed in the composition

This makes it easier to add tiny support motion without breaking alignment.

---

# 39. Scene Positioning

Scene 7 should not continue sliding vertically once the visitor reaches its final resting state.

The composition should settle.

The page can simply end naturally beneath the scene.

Avoid another lengthy pinned scroll after the finale is established.

The visitor should be able to interact with the CTA links comfortably.

---

# 40. Scroll Behavior

There is no major story-driven scroll animation within Scene 7.

Once the incoming Scene 6 transition finishes:

- scene is fully visible
- ambient loops run
- CTA buttons are active
- user can interact or stop scrolling

This creates closure.

---

# 41. Reverse Scroll Behavior

If the user scrolls back upward into Scene 6:

- Scene 7 entrance should reverse according to the Scene 6 Transition specification
- horse/grass ambient loops may continue while visible
- finale elements move downward and out according to the previous transition
- proclamation returns

The ambient loops themselves do not need to reverse direction.

Only the scene-level entrance/exit choreography reverses.

---

# 42. Mobile Layout

Mobile portrait is the master layout.

Important requirements:

- sun remains readable at the top
- all four CTA buttons fit cleanly in the vertical composition
- buttons are large enough to tap
- rainbow remains visible as a divider
- horse and character remain legible
- landscape has enough room for movement
- no animation causes horizontal overflow

---

# 43. Mobile Button Behavior

Buttons should respond immediately to touch.

Requirements:

- entire sign is tappable
- no hover-dependent information
- no tiny hit zones
- visual feedback before navigation where possible
- enough space between links to prevent accidental taps

---

# 44. Mobile Horse Performance

The horse animation should be tested carefully on mobile.

Avoid:

- overly large transparent layers
- excessive number of leg assets
- constant heavy filters
- giant animated frame sequences

A few transform-based pieces will likely be the most efficient approach.

---

# 45. Mobile Grass Performance

Grass animation should use a small number of grouped layers.

Do not animate every individual blade.

Possible efficient setup:

- rear grass group
- foreground grass group
- one flower accent group

This creates environmental movement with minimal rendering overhead.

---

# 46. Desktop Behavior

Desktop should preserve the same vertical visual hierarchy.

Wider screens may reveal:

- more cloud width
- additional landscape
- broader rainbow
- more negative space

The CTA buttons should remain grouped rather than spreading horizontally.

The finale should still read as one illustrated poster composition.

---

# 47. Performance Requirements

Prefer:

- CSS transforms
- GSAP transforms
- opacity
- small rotation
- lightweight pre-rendered glow assets

Avoid:

- heavy real-time blur filters
- extremely large GIFs
- dozens of independent grass elements
- repeated layout calculations
- unnecessary full-scene redraws

Critical finale assets should be loaded before the visitor reaches the scene.

---

# 48. Sun Performance

If the sun glow uses a separate raster layer:

- animate opacity
- optionally animate scale very slightly

For ray wiggle:

- use transform rotation on a separate ray layer

This should be significantly cheaper than complex filter animation.

---

# 49. Horse Performance

The preferred implementation should animate transform values rather than swapping enormous full-screen frames.

If using a sprite sequence:

- limit frame count
- tightly crop frames
- optimize image format

If using separated assets:

- rotate legs around realistic pivot points
- use transform-origin carefully

---

# 50. Accessibility

The CTA links must remain accessible as real links or semantic buttons.

Requirements include:

- keyboard focus support
- visible focus state
- accessible link text
- sufficient contrast
- no dependence on animation to understand navigation

The illustrated button asset can sit behind or inside a semantic anchor element.

---

# 51. Reduced Motion

For users with `prefers-reduced-motion`:

Disable or substantially reduce:

- horse leg loop
- grass sway
- flower movement
- sun ray wiggle
- cloud drift

The sun may retain a very subtle static glow.

CTA interactions remain available.

The final scene should still feel complete without animation.

---

# 52. Placeholder Asset Requirements

Before final animation testing, prepare separate assets for at least:

- sky
- sun face/base
- sun rays
- sun glow
- cloud groups
- four CTA signs
- rainbow
- Lain Doe Love
- horse body
- moving horse leg pieces or frame sequence
- static landscape
- foreground grass
- rear grass
- optional flower groups

The most important mechanics to test first are:

- horse leg motion
- rider/horse alignment
- grass motion
- mobile performance
- CTA click areas

---

# 53. Locked Final Scene Behavior

When Scene 7 is fully active:

- sun remains in place
- sun glow breathes softly
- sun rays wiggle subtly
- clouds drift gently
- four CTA buttons remain stable
- all four CTA buttons function as direct links
- rainbow remains static
- Lain Doe Love remains mostly still
- horse legs move in a gentle repeating cycle
- horse body uses only minimal support movement
- grass and selected flowers sway gently
- no further major story animation occurs
- visitor has reached the final resting state of the website

---

# Acceptance Criteria

Scene 7 is complete when:

1. The full finale composition settles cleanly after Scene 6.
2. No additional major narrative reveal begins.
3. Sun remains structurally stable.
4. Sun glow cycles smoothly.
5. Sun-ray wiggle is subtle.
6. Sun never spins or bounces.
7. Clouds continue gentle movement.
8. CTA buttons remain stationary.
9. All four CTA signs are fully clickable.
10. Buttons navigate directly to their intended destinations.
11. Button hover states are subtle and consistent.
12. Button touch states work clearly on mobile.
13. Full illustrated sign acts as each button's hit area.
14. Rainbow remains stable.
15. Lain Doe Love remains mostly still.
16. Horse leg animation is clearly visible.
17. Horse leg movement feels like stepping or gentle walking rather than galloping.
18. Horse animation loops seamlessly.
19. Horse legs do not visibly detach from the body.
20. Horse body support movement is restrained.
21. Rider remains correctly aligned with horse.
22. Grass has visible but subtle environmental movement.
23. Grass does not resemble a conveyor belt.
24. Selected flowers may sway without excessive individual animation.
25. Horse and grass animations complement rather than compete with each other.
26. Sun animation remains secondary to the lower living motion.
27. CTA readability is never affected by ambient animation.
28. No cloud crosses over important button text.
29. Scene remains stable when the user stops scrolling.
30. Mobile composition retains all important elements.
31. Mobile button targets are comfortable to tap.
32. Horse animation performs smoothly on mobile.
33. Grass animation performs smoothly on mobile.
34. No animation creates horizontal overflow.
35. Desktop preserves the same overall visual hierarchy.
36. Ambient effects pause or simplify appropriately for reduced-motion users.
37. CTA navigation remains fully usable with reduced motion.
38. Keyboard users can access all CTA links.
39. No large GIF or other unnecessarily heavy animation is required if a lighter implementation works.
40. Final artwork can be updated without rebuilding the entire finale animation system.
41. The page has a clear visual and functional ending.
42. The final scene feels alive while remaining calm enough for the visitor to choose their next destination.