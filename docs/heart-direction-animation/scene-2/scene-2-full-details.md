s# Scene 2: Full Details

# Overall Behavior

Scene 2 begins immediately after the visitor completes the tunnel journey from Scene 1.

The viewer should feel as though they have traveled through the heart tunnel and arrived in a new space where Lain Doe Love is waiting.

The scene unfolds in two distinct beats:

1. **The character introduction**
2. **The bow and arrow reveal**

The character introduction should be allowed to fully register before the bow and arrow become visible.

When the visitor first arrives, the main visible composition is:

- background environment
- Lain Doe Love
- surrounding clouds
- heart necklace

The “Meet Lain Doe Love” banner and birds enter from above and settle into position.

The bow and arrow remain concealed behind the character and clouds until the visitor continues scrolling.

Once all major elements have settled, the scene should feel alive through subtle ambient movement rather than continuous large animation.

---

# Starting Frame

The starting frame of Scene 2 is inherited directly from the ending frame of Scene 1.

The visitor is still moving forward through the final portion of the heart tunnel.

The destination at the end of the tunnel grows until Scene 2 becomes the new environment.

There should not be a visible cut between the tunnel and the character scene.

The transition should feel like the viewer has physically arrived at this location.

Once the tunnel clears:

- Lain Doe Love is centered in the composition
- clouds surround the character
- the heart necklace is visible
- the banner and birds are still above the visible frame or beginning their descent
- the bow and arrow remain hidden behind the character/cloud layer

---

# 1. Background Environment

The background should support the character without competing for attention.

The final artwork may include:

- atmospheric color
- texture
- stars
- subtle light
- paper grain
- haze
- small decorative marks

The background should remain visually quieter than the character, banner, heart, clouds, and bow.

## Idle Animation

The base background should remain mostly static.

Optional ambient layers may include:

- extremely slow texture drift
- faint opacity breathing
- occasional tiny sparkle
- subtle light movement

Any movement should be barely noticeable.

The environment should feel alive without looking animated for the sake of animation.

---

# 2. Rear Cloud Layer

The clouds should not be treated as one flattened object.

There should be at least two cloud depth levels:

- rear clouds
- foreground clouds

Rear clouds should sit behind portions of the character.

They can help create depth between the background and Lain Doe Love.

## Idle Animation

Rear clouds should move slowly.

Suggested motion:

- gentle horizontal drift
- small vertical float
- very subtle scale breathing

Suggested range:

- horizontal: approximately 2 to 6 pixels
- vertical: approximately 2 to 5 pixels
- scale: approximately 1 to 1.01
- duration: approximately 10 to 18 seconds

Different cloud groups should use different timing.

Avoid synchronized movement.

---

# 3. Foreground Cloud Layer

Foreground clouds sit in front of portions of the character and are especially important because they conceal the bow and arrow before the reveal.

These clouds are both visual scenery and a functional masking layer.

## Idle Animation

Foreground clouds may move slightly more than the rear clouds.

Possible motion:

- slow horizontal drift
- gentle upward/downward breathing
- very small scaling shift

Movement should remain subtle enough that the clouds continue hiding the bow and arrow before their reveal.

## Important

The cloud animation must never accidentally expose the hidden bow or arrow early.

Their movement range should be tested against the bow and arrow starting positions.

The reveal should happen only because the bow and arrow move, not because the cloud mask drifts away.

---

# 4. Lain Doe Love Character

Lain Doe Love is the primary visual anchor of the scene.

The character should remain mostly stable.

The surrounding elements move around her rather than making the character herself constantly animate.

This gives the introduction weight.

## Idle Behavior

For the initial version, the character can remain completely still.

Optional future enhancements could include:

- extremely subtle body breathing
- slight fabric movement
- tiny jewelry movement
- very small glow fluctuation around the heart

These are not required for the initial animation build.

Do not add:

- exaggerated body movement
- head bobbing
- random rotation
- facial animation
- unnecessary hand movement

The character should feel composed and intentional.

---

# 5. “Meet Lain Doe Love” Banner

The banner enters from above when the visitor reaches Scene 2.

It should not already be sitting in its final position before the scene begins.

The banner should be prepared as an independent transparent asset.

## Entry Behavior

The banner begins above the visible viewport.

As the scene arrives:

- it moves downward
- it slows as it approaches its final position
- it may have a tiny natural sway
- it settles above the character

The banner should feel like it is floating down rather than falling.

Avoid:

- bouncing
- elastic easing
- hard stops
- large rotations
- dropping too quickly

## Idle Behavior

After settling:

- very slight vertical float
- optional tiny rotation
- extremely gentle sway

Suggested range:

- vertical: approximately 1 to 3 pixels
- rotation: less than 0.5 degree
- duration: approximately 5 to 8 seconds

The text must remain readable at all times.

---

# 6. Left Bird

The left bird accompanies the banner during its entrance.

The bird should be a separate asset from the banner.

This allows it to float independently once the composition settles.

## Entry Behavior

The bird begins above the visible frame with the banner.

As the banner moves downward:

- the bird follows the same overall descent
- it may move slightly faster or slower than the banner
- it may drift horizontally by a few pixels
- it should settle naturally near its final position

The bird should not move in a perfectly straight mechanical line.

## Idle Behavior

After settling:

- gentle vertical float
- tiny horizontal drift
- very small rotation

Suggested range:

- vertical: approximately 3 to 6 pixels
- horizontal: approximately 2 to 4 pixels
- rotation: less than 1 degree
- duration: approximately 4 to 7 seconds

---

# 7. Right Bird

The right bird follows the same overall behavior as the left bird but should not use identical timing.

## Entry Behavior

The right bird should:

- descend from above with the banner
- use a slightly different motion path
- settle at a slightly different moment

This prevents the birds from feeling mirrored by code.

## Idle Behavior

The right bird should:

- float independently
- use a different vertical rhythm
- move horizontally by a few pixels
- rotate very slightly

The birds should feel related but alive.

---

# 8. Bird Animation Scope

For the first implementation, the birds do not need detailed character animation.

Do not require:

- full wing flapping
- head movement
- beak movement
- foot movement

Optional future enhancement:

A very small wing adjustment or feather movement could be added later.

For the current build, floating is enough.

---

# 9. Heart Necklace

The heart necklace is one of the most important elements in Scene 2.

It serves three simultaneous purposes:

1. visual focal point
2. animated light source
3. interactive button

The heart should immediately feel different from ordinary decorative artwork.

It must visually communicate that it can be tapped.

---

# 10. Heart Resting State

The heart should never appear completely dark or inactive.

Its resting state should include:

- visible red color
- soft internal glow
- faint surrounding halo
- optional subtle rays

The resting glow establishes the heart as special before the brighter animation occurs.

---

# 11. Heart Light Animation

The heart should use a deliberate repeating light pattern rather than random flickering.

Recommended rhythm:

1. resting glow
2. gradual brightening
3. short bright blink
4. return to glow
5. brief pause
6. repeat

The animation should feel like a signal.

It should communicate:

**Tap me.**

The rhythm should be noticeable without becoming distracting.

## Suggested Timing

Example cycle:

- resting glow: 1.5 to 2.5 seconds
- brighten: 0.3 to 0.5 seconds
- bright blink: 0.15 to 0.3 seconds
- return: 0.4 to 0.7 seconds
- pause: 1 to 2 seconds

Exact timing should be tested visually.

---

# 12. Heart Glow Structure

The heart interaction should ideally use more than one visual layer.

Recommended layers:

### Heart Base

The illustrated heart itself.

### Inner Light

A brighter version of the heart that can fade in and out.

### Outer Glow

Soft halo around the heart.

### Rays

Optional illustrated rays or radiating lines.

### Interaction Hit Area

Invisible clickable/tappable area slightly larger than the visible heart.

This separation allows the glow to feel like light coming from the object rather than the entire image simply changing opacity.

---

# 13. Heart Hover / Touch State

Desktop hover:

- heart becomes slightly brighter
- halo strengthens
- optional tiny scale increase

Mobile touch:

- heart brightens immediately when pressed
- optional brief scale increase
- modal opens

Suggested scale:

approximately `1.02–1.05`

Avoid large button-like bouncing.

---

# 14. Heart Modal Interaction

Tapping the heart opens a modal.

The modal content will be designed separately, but the interaction behavior should be established here.

## When Opening

- heart briefly brightens
- modal appears above the scene
- background scene remains visible behind the modal if possible
- ambient animations may continue or pause depending on performance
- scroll-driven scene progress should not advance while the modal is being interacted with

## When Closing

- modal disappears
- visitor returns to exactly the same scroll position
- Scene 2 does not restart
- banner does not descend again
- bow and arrow progress does not reset
- heart resumes its normal glow cycle

## Important

The heart interaction must remain available even after the bow and arrow have been revealed, unless a later scene explicitly removes it.

---

# 15. Modal Backdrop

The modal backdrop should separate the information from the scene without completely destroying the sense of place.

Possible treatment:

- translucent dark overlay
- subtle blur
- parchment-style modal over the existing world

The underlying scene should still be recognizable.

The modal itself should not feel like navigating to another webpage.

---

# 16. Bow

The bow is the major second reveal of Scene 2.

It begins hidden behind the character and foreground clouds.

The visitor should not see it during the initial character introduction.

## Starting Position

The bow begins:

- behind the character
- behind the foreground clouds
- vertically lower or higher depending on the final movement path
- positioned so no visible edge leaks out before the reveal

The bow should exist in the scene from the beginning rather than being inserted later.

It is concealed through depth and masking.

---

# 17. Bow Layer Relationship

The layer logic should approximately be:

Background

↓

Rear Clouds

↓

Bow + Arrow

↓

Character

↓

Foreground Clouds

↓

Heart Glow / UI

↓

Banner + Birds

This allows the bow to physically emerge from behind the character and cloud cover.

If necessary, masking should be used rather than relying only on `z-index`.

---

# 18. Bow Reveal Behavior

The bow remains still during the character introduction.

After the initial scene hold, continued scrolling begins the bow reveal.

As it moves:

- bow travels downward
- upper portions become visible first
- more of the bow clears the cloud layer
- the full bow gradually enters the visible composition
- it moves into its final position beneath the character

The reveal should feel like uncovering something that was already present.

Avoid:

- opacity fade-ins
- sudden appearance
- large rotations
- spinning
- bouncing into position

The exact scroll choreography belongs to the **Scene 2 Transition** page.

---

# 19. Arrow

The arrow should be treated as part of the same reveal as the bow.

The arrow begins hidden behind the character and clouds.

It should remain vertically aligned.

## Starting State

Before the reveal:

- shaft hidden
- arrowhead hidden
- only reveal it once scrolling reaches the bow section

No portion should accidentally appear between cloud gaps.

## Reveal Behavior

As the bow moves downward:

- arrow moves with it
- shaft begins clearing the character/cloud mask
- additional length becomes visible
- arrowhead eventually clears the bow and becomes fully visible

The bow and arrow should feel connected.

They should not look like two unrelated objects entering separately.

---

# 20. Bow and Arrow Final Position

Once revealed:

- bow is positioned beneath the character
- arrow remains vertically centered
- arrow visually aligns with the center of the character composition
- bow and arrow become largely still

A tiny settling movement may occur at the end of the reveal.

Suggested settling:

- 1 to 3 pixels
- very gentle
- no bounce

# SCENE 2: MEET LAIN DOE LOVE

## FULL DETAIL

# Overall Behavior

Scene 2 begins immediately after the visitor completes the tunnel journey from Scene 1.

The viewer should feel as though they have traveled through the heart tunnel and arrived in a new space where Lain Doe Love is waiting.

The scene unfolds in two distinct beats:

1. **The character introduction**
2. **The bow and arrow reveal**

The character introduction should be allowed to fully register before the bow and arrow become visible.

When the visitor first arrives, the main visible composition is:

- background environment
- Lain Doe Love
- surrounding clouds
- heart necklace

The “Meet Lain Doe Love” banner and birds enter from above and settle into position.

The bow and arrow remain concealed behind the character and clouds until the visitor continues scrolling.

Once all major elements have settled, the scene should feel alive through subtle ambient movement rather than continuous large animation.

---

# Starting Frame

The starting frame of Scene 2 is inherited directly from the ending frame of Scene 1.

The visitor is still moving forward through the final portion of the heart tunnel.

The destination at the end of the tunnel grows until Scene 2 becomes the new environment.

There should not be a visible cut between the tunnel and the character scene.

The transition should feel like the viewer has physically arrived at this location.

Once the tunnel clears:

- Lain Doe Love is centered in the composition
- clouds surround the character
- the heart necklace is visible
- the banner and birds are still above the visible frame or beginning their descent
- the bow and arrow remain hidden behind the character/cloud layer

---

# 1. Background Environment

The background should support the character without competing for attention.

The final artwork may include:

- atmospheric color
- texture
- stars
- subtle light
- paper grain
- haze
- small decorative marks

The background should remain visually quieter than the character, banner, heart, clouds, and bow.

## Idle Animation

The base background should remain mostly static.

Optional ambient layers may include:

- extremely slow texture drift
- faint opacity breathing
- occasional tiny sparkle
- subtle light movement

Any movement should be barely noticeable.

The environment should feel alive without looking animated for the sake of animation.

---

# 2. Rear Cloud Layer

The clouds should not be treated as one flattened object.

There should be at least two cloud depth levels:

- rear clouds
- foreground clouds

Rear clouds should sit behind portions of the character.

They can help create depth between the background and Lain Doe Love.

## Idle Animation

Rear clouds should move slowly.

Suggested motion:

- gentle horizontal drift
- small vertical float
- very subtle scale breathing

Suggested range:

- horizontal: approximately 2 to 6 pixels
- vertical: approximately 2 to 5 pixels
- scale: approximately 1 to 1.01
- duration: approximately 10 to 18 seconds

Different cloud groups should use different timing.

Avoid synchronized movement.

---

# 3. Foreground Cloud Layer

Foreground clouds sit in front of portions of the character and are especially important because they conceal the bow and arrow before the reveal.

These clouds are both visual scenery and a functional masking layer.

## Idle Animation

Foreground clouds may move slightly more than the rear clouds.

Possible motion:

- slow horizontal drift
- gentle upward/downward breathing
- very small scaling shift

Movement should remain subtle enough that the clouds continue hiding the bow and arrow before their reveal.

## Important

The cloud animation must never accidentally expose the hidden bow or arrow early.

Their movement range should be tested against the bow and arrow starting positions.

The reveal should happen only because the bow and arrow move, not because the cloud mask drifts away.

---

# 4. Lain Doe Love Character

Lain Doe Love is the primary visual anchor of the scene.

The character should remain mostly stable.

The surrounding elements move around her rather than making the character herself constantly animate.

This gives the introduction weight.

## Idle Behavior

For the initial version, the character can remain completely still.

Optional future enhancements could include:

- extremely subtle body breathing
- slight fabric movement
- tiny jewelry movement
- very small glow fluctuation around the heart

These are not required for the initial animation build.

Do not add:

- exaggerated body movement
- head bobbing
- random rotation
- facial animation
- unnecessary hand movement

The character should feel composed and intentional.

---

# 5. “Meet Lain Doe Love” Banner

The banner enters from above when the visitor reaches Scene 2.

It should not already be sitting in its final position before the scene begins.

The banner should be prepared as an independent transparent asset.

## Entry Behavior

The banner begins above the visible viewport.

As the scene arrives:

- it moves downward
- it slows as it approaches its final position
- it may have a tiny natural sway
- it settles above the character

The banner should feel like it is floating down rather than falling.

Avoid:

- bouncing
- elastic easing
- hard stops
- large rotations
- dropping too quickly

## Idle Behavior

After settling:

- very slight vertical float
- optional tiny rotation
- extremely gentle sway

Suggested range:

- vertical: approximately 1 to 3 pixels
- rotation: less than 0.5 degree
- duration: approximately 5 to 8 seconds

The text must remain readable at all times.

---

# 6. Left Bird

The left bird is physically holding the “Meet Lain Doe Love” banner and should therefore be treated as part of the same connected assembly as the banner and right bird during the entrance animation.

The left bird should remain in the same position relative to the banner throughout the entire descent.

## Entry Behavior

The left bird begins above the visible viewport with the banner and right bird.

As the assembly enters:

- the left bird moves downward at exactly the same speed as the banner
- it maintains its position relative to the banner
- it follows the same overall movement path as the banner and right bird
- it reaches its final position at exactly the same time as the banner and right bird
- any sway or floating motion applied during the descent should affect the entire assembly together

The left bird should never appear to move independently while it is carrying the banner.

---

# 7. Right Bird

The right bird is physically holding the opposite side of the “Meet Lain Doe Love” banner and follows the same entrance behavior as the left bird.

The right bird, left bird, and banner should visually function as **one connected object during the entrance animation**.

## Entry Behavior

The right bird begins above the visible viewport with the banner and left bird.

As the assembly enters:

- the right bird moves downward at exactly the same speed as the banner
- it maintains its position relative to the banner
- it follows the same overall movement path as the banner and left bird
- it reaches its final position at exactly the same time
- any vertical floating, horizontal drift, rotation, or sway during the entrance applies to the complete bird-and-banner assembly rather than to the individual bird

There should never be a moment where one bird appears higher, lower, faster, or slower than the other in a way that makes the banner appear disconnected from what they are carrying.

---

# 8. Birds + Banner Assembly

During the entrance animation, the two birds and the “Meet Lain Doe Love” banner should be treated as **one connected moving unit**.

Although the birds and banner should remain separate image assets for flexibility, their primary entrance movement should be controlled by a shared parent container or animation group.

## Entry Movement

The complete assembly begins above the visible viewport.

As the visitor scrolls:

- the entire assembly floats downward from the top of the screen
- both birds and the banner move simultaneously
- their spacing and physical relationship remain locked
- the assembly may have a very subtle unified side-to-side sway or rotation
- the movement gradually slows as the assembly approaches its final position
- all three elements settle into place simultaneously

The movement should feel like two birds **carrying a banner through the air together**, not three independent objects entering the scene.

Avoid:

- different descent speeds between birds
- independent bird entrance paths
- one bird settling before the other
- independent rotation that breaks the illusion of carrying the banner
- stretching or changing the distance between the birds and banner
- bouncing when the assembly reaches its final position

## Idle Behavior

Once the complete assembly has settled into its final position, it should continue to feel gently suspended in the air.

The **entire bird-and-banner assembly** can:

- float slightly upward and downward
- drift by a few pixels horizontally
- have an extremely subtle unified sway

The birds may have very small secondary character movements later, such as subtle wing or feather motion, but their bodies must continue to maintain the physical relationship required to hold the banner.

The banner should never appear to detach from the birds or move independently from their grip.

---

# 9. Heart Necklace

The heart necklace is one of the most important elements in Scene 2.

It serves three simultaneous purposes:

1. visual focal point
2. animated light source
3. interactive button

The heart should immediately feel different from ordinary decorative artwork.

It must visually communicate that it can be tapped.

---

# 10. Heart Resting State

The heart should never appear completely dark or inactive.

Its resting state should include:

- visible red color
- soft internal glow
- faint surrounding halo
- optional subtle rays

The resting glow establishes the heart as special before the brighter animation occurs.

---

# 11. Heart Light Animation

The heart should use a deliberate repeating light pattern rather than random flickering.

Recommended rhythm:

1. resting glow
2. gradual brightening
3. short bright blink
4. return to glow
5. brief pause
6. repeat

The animation should feel like a signal.

It should communicate:

**Tap me.**

The rhythm should be noticeable without becoming distracting.

## Suggested Timing

Example cycle:

- resting glow: 1.5 to 2.5 seconds
- brighten: 0.3 to 0.5 seconds
- bright blink: 0.15 to 0.3 seconds
- return: 0.4 to 0.7 seconds
- pause: 1 to 2 seconds

Exact timing should be tested visually.

---

# 12. Heart Glow Structure

The heart interaction should ideally use more than one visual layer.

Recommended layers:

### Heart Base

The illustrated heart itself.

### Inner Light

A brighter version of the heart that can fade in and out.

### Outer Glow

Soft halo around the heart.

### Rays

Optional illustrated rays or radiating lines.

### Interaction Hit Area

Invisible clickable/tappable area slightly larger than the visible heart.

This separation allows the glow to feel like light coming from the object rather than the entire image simply changing opacity.

---

# 13. Heart Hover / Touch State

Desktop hover:

- heart becomes slightly brighter
- halo strengthens
- optional tiny scale increase

Mobile touch:

- heart brightens immediately when pressed
- optional brief scale increase
- modal opens

Suggested scale:

approximately `1.02–1.05`

Avoid large button-like bouncing.

---

# 14. Heart Modal Interaction

Tapping the heart opens a modal.

The modal content will be designed separately, but the interaction behavior should be established here.

## When Opening

- heart briefly brightens
- modal appears above the scene
- background scene remains visible behind the modal if possible
- ambient animations may continue or pause depending on performance
- scroll-driven scene progress should not advance while the modal is being interacted with

## When Closing

- modal disappears
- visitor returns to exactly the same scroll position
- Scene 2 does not restart
- banner does not descend again
- bow and arrow progress does not reset
- heart resumes its normal glow cycle

## Important

The heart interaction must remain available even after the bow and arrow have been revealed, unless a later scene explicitly removes it.

---

# 15. Modal Backdrop

The modal backdrop should separate the information from the scene without completely destroying the sense of place.

Possible treatment:

- translucent dark overlay
- subtle blur
- parchment-style modal over the existing world

The underlying scene should still be recognizable.

The modal itself should not feel like navigating to another webpage.

---

# 16. Bow

The bow is the major second reveal of Scene 2.

It begins hidden behind the character and foreground clouds.

The visitor should not see it during the initial character introduction.

## Starting Position

The bow begins:

- behind the character
- behind the foreground clouds
- vertically lower or higher depending on the final movement path
- positioned so no visible edge leaks out before the reveal

The bow should exist in the scene from the beginning rather than being inserted later.

It is concealed through depth and masking.

---

# 17. Bow Layer Relationship

The layer logic should approximately be:

Background

↓

Rear Clouds

↓

Bow + Arrow

↓

Character

↓

Foreground Clouds

↓

Heart Glow / UI

↓

Banner + Birds

This allows the bow to physically emerge from behind the character and cloud cover.

If necessary, masking should be used rather than relying only on `z-index`.

---

# 18. Bow Reveal Behavior

The bow remains still during the character introduction.

After the initial scene hold, continued scrolling begins the bow reveal.

As it moves:

- bow travels downward
- upper portions become visible first
- more of the bow clears the cloud layer
- the full bow gradually enters the visible composition
- it moves into its final position beneath the character

The reveal should feel like uncovering something that was already present.

Avoid:

- opacity fade-ins
- sudden appearance
- large rotations
- spinning
- bouncing into position

The exact scroll choreography belongs to the **Scene 2 Transition** page.

---

# 19. Arrow

The arrow should be treated as part of the same reveal as the bow.

The arrow begins hidden behind the character and clouds.

It should remain vertically aligned.

## Starting State

Before the reveal:

- shaft hidden
- arrowhead hidden
- only reveal it once scrolling reaches the bow section

No portion should accidentally appear between cloud gaps.

## Reveal Behavior

As the bow moves downward:

- arrow moves with it
- shaft begins clearing the character/cloud mask
- additional length becomes visible
- arrowhead eventually clears the bow and becomes fully visible

The bow and arrow should feel connected.

They should not look like two unrelated objects entering separately.

---

# 20. Bow and Arrow Final Position

Once revealed:

- bow is positioned beneath the character
- arrow remains vertically centered
- arrow visually aligns with the center of the character composition
- bow and arrow become largely still

A tiny settling movement may occur at the end of the reveal.

Suggested settling:

- 1 to 3 pixels
- very gentle
- no bounce

# 21. Bow and Arrow Idle State

Once the reveal is complete, the bow and arrow should remain mostly static.

Optional effects:

- slight metallic shimmer
- subtle highlight
- tiny reflected light from the heart

No constant floating is necessary.

The bow acts as a structural visual anchor for the next story beat.

---

# 22. Opening Animation Hierarchy

The visitor should not be asked to notice everything simultaneously.

The hierarchy should be:

## First Attention

- Lain Doe Love
- heart necklace

## Second Attention

- Meet Lain Doe Love banner
- birds

## Third Attention

- surrounding clouds and atmosphere

## Final Reveal

- bow
- arrow

This hierarchy is essential to the story.

The bow and arrow should never compete with the character introduction before their reveal.

---

# 23. Ambient Animation Hierarchy

## Most Visible

- blinking heart
- birds floating
- selected cloud movement

## Secondary

- banner floating
- background atmosphere
- subtle heart halo changes

## Mostly Still

- Lain Doe Love
- bow once revealed
- arrow once revealed
- overall composition

This keeps Scene 2 visually active without turning it into a swarm of competing loops.

---

# 24. Layer Structure

Recommended logical layer order from back to front:

### Background

1. Base background
2. Background texture
3. Atmospheric effects

### Environment

1. Rear cloud groups

### Hidden Prop Layer

1. Bow
2. Arrow

### Character

1. Lain Doe Love

### Foreground Environment

1. Foreground clouds

### Character Effect

1. Heart base
2. Heart inner light
3. Heart glow
4. Heart rays

### Introduction Elements

1. Meet Lain Doe Love banner
2. Left bird
3. Right bird

### Interactive Layer

1. Heart interaction hit area

### UI

1. Modal backdrop
2. Modal content
3. Modal close control

The exact stack may require adjustment during implementation, but the hidden bow and arrow must remain behind both the character and relevant cloud cover until their reveal.

---

# 25. Camera Behavior

The camera should arrive from the tunnel facing directly toward the character.

Once Scene 2 is established, the camera should become relatively stable.

Scene 2 should not contain another dramatic camera zoom immediately after the tunnel transition.

The movement comes primarily from:

- banner descent
- bird descent
- ambient floating
- bow and arrow reveal

This gives the visitor a visual rest after traveling through the tunnel.

Avoid:

- unnecessary camera rotation
- side-to-side panning
- continuous zooming
- large parallax shifts that move the character away from center

The character remains the central anchor.

---

# 26. Scroll Behavior

Scene 2 should remain pinned while its major reveal sequence plays.

Scroll progress controls:

- completion of the arrival from Scene 1
- banner and bird descent
- introduction hold
- bow and arrow reveal
- final hold

Ambient animation remains time-based rather than scroll-based.

The visitor should be able to pause scrolling at any point without seeing:

- half-visible unintended assets
- broken masks
- banner clipping
- bow leaking through clouds
- character shifting unexpectedly

Scrolling upward should reverse the scroll-driven choreography cleanly.

Ambient loops do not need to reverse.

---

# 27. Introduction Hold

The introduction requires a deliberate hold after the banner and birds settle.

During this hold:

- character remains fully visible
- banner is in position
- birds float
- heart continues blinking
- clouds continue drifting
- bow and arrow remain completely hidden

This is the actual **Meet Lain Doe Love** moment.

The visitor must be given enough scroll distance to absorb the composition before the bow reveal begins.

Do not allow the bow to immediately emerge the instant the banner reaches position.

---

# 28. Mobile Behavior

Mobile portrait is the primary layout.

The composition should preserve:

- banner visibility
- character visibility
- heart accessibility
- cloud framing
- bow visibility after reveal
- arrow vertical alignment

The heart interaction hit area should be large enough to tap comfortably without visibly enlarging the artwork.

Recommended minimum interactive target:

approximately 44 × 44 CSS pixels.

The modal must fit inside the mobile viewport and remain scrollable internally if its content is longer than the screen.

Opening the modal should not cause the browser to jump the page.

---

# 29. Desktop Behavior

Desktop should preserve the same choreography.

Do not redesign the scene into a completely different layout.

Wider screens may reveal more cloud scenery around the character.

The character, banner, heart, bow, and arrow should remain centrally organized.

The birds can have slightly more horizontal breathing room.

The heart should remain easy to identify as interactive.

---

# 30. Performance Requirements

Use transform and opacity for most animated movement.

Prefer:

- `translate`
- `scale`
- `rotate`
- opacity
- filter/glow only where performance permits

Avoid constantly recalculating layout during scroll.

Banner and bird entrance should be controlled through the master GSAP timeline.

Bow and arrow reveal should also belong to the master timeline.

Ambient animations can use separate repeating GSAP timelines.

The heart light cycle should be independent of scroll progress.

The modal should not destroy or recreate the entire GSAP scene when opened.

---

# 31. Masking Requirements

The bow and arrow reveal is the most technically sensitive element in this scene.

The implementation must ensure:

- no bow edge appears early
- no arrow shaft appears through gaps unexpectedly
- cloud movement does not expose the props
- reverse scrolling restores the concealment perfectly

Possible methods include:

- proper layer stacking
- clipping masks
- CSS `clip-path`
- overflow-hidden masking containers
- custom SVG masks

The simplest reliable method should be used.

---

# 32. Reduced Motion

For visitors using `prefers-reduced-motion`:

- remove the long floating descent
- banner and birds can fade or gently translate into position
- reduce bird and cloud idle movement
- keep the heart interaction visible through glow rather than rapid blinking
- reveal the bow and arrow with a shorter controlled movement or crossfade
- preserve the narrative order

The character introduction should still occur before the bow reveal.

---

# 33. Placeholder Artwork Requirements

The current rough illustration can remain during animation development.

However, the scene needs enough independent assets to properly test the actual choreography.

At minimum, temporary assets should be separated into:

- background
- rear clouds
- foreground clouds
- Lain Doe Love
- banner
- left bird
- right bird
- heart
- heart glow
- bow
- arrow

Do not wait for final illustration before testing the bow masking or heart interaction.

Those mechanics should be solved first.

---

# 34. Locked Scene Behavior

When Scene 2 begins:

- the viewer arrives from the tunnel
- Lain Doe Love is already present
- clouds surround the character
- heart begins its repeating glow/blink cycle
- birds and banner descend from above
- birds and banner settle
- scene holds
- heart remains interactive
- continued scrolling reveals bow and arrow from behind the character/clouds
- bow and arrow settle beneath the character
- ambient animation continues

---

# Acceptance Criteria

Scene 2 is complete when:

1. The transition from the tunnel feels continuous.
2. Lain Doe Love is the first clear focal point.
3. The character does not dramatically animate into position.
4. Banner enters from above smoothly.
5. Both birds enter with the banner but move independently.
6. Banner and birds settle without bouncing.
7. Birds continue subtle independent floating after arrival.
8. Clouds move subtly without exposing hidden props.
9. Heart necklace visibly glows and blinks.
10. Heart reads clearly as interactive.
11. Tapping the heart opens the modal.
12. Closing the modal preserves scroll position.
13. Modal interaction does not restart the scene.
14. Bow and arrow remain completely hidden during the introduction.
15. There is a clear hold after the banner settles.
16. Bow and arrow emerge physically from behind the character and clouds.
17. Bow and arrow do not fade into existence.
18. Bow and arrow move together as one reveal.
19. Reverse scrolling cleanly hides the bow and arrow again.
20. Character remains visually stable throughout the scene.
21. Scene performs smoothly on mobile.
22. No asset edges, masking errors, or layering glitches are visible.
23. Ambient animation continues naturally when the visitor stops scrolling.
24. Final artwork can replace placeholder assets without rebuilding the animation architecture.
25. The completed composition is ready to hand off into the next scene.
