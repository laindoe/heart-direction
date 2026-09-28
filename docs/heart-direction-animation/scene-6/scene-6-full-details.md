# Scene 6: Full Details

## FULL DETAIL

# Overall Behavior

Scene 6 begins immediately after the visitor has fully exited the heart tunnel and returned to the bright exterior world.

The scene starts with a compact, fully closed parchment scroll centered beneath two floating cherubs.

There should be visible blue sky beneath the closed scroll so the visitor immediately understands that the parchment is a separate object suspended inside the environment rather than the top of a long document already extending below the viewport.

As the visitor begins scrolling, the viewport should remain pinned.

The page itself does not initially move downward.

Instead, the visitor’s scroll input physically opens the parchment.

The lower roller travels downward while additional parchment is revealed between the upper and lower rollers.

As more parchment becomes exposed, the proclamation becomes readable from top to bottom.

Once the parchment becomes taller than the viewport, the interaction changes seamlessly from:

**opening the scroll inside a fixed viewport**

to:

**traveling down the now-expanded proclamation.**

After the visitor reaches the full message and has time to absorb its conclusion, continued scrolling begins rolling the parchment closed again.

The proclamation disappears back into the scroll until the parchment returns to a compact closed state.

The closed scroll then clears the frame and hands the experience into the final scene.

---

# Starting Frame

When Scene 6 begins, the visitor is fully outside the heart tunnel.

Visible:

- bright blue sky
- surrounding clouds
- left cherub
- right cherub
- closed parchment scroll
- open blue sky beneath the scroll

No proclamation text is visible.

The scroll should appear as two rolled parchment sections positioned close together.

The composition should clearly communicate:

**This object is closed.**

The visitor should not initially see a long strip of parchment extending below the rolls.

---

# 1. Exterior Background

The exterior environment should feel bright, open, and calm after the darker interior tunnel sequence.

The background can contain:

- blue sky
- subtle texture
- paper grain
- faint painted variation
- soft atmospheric lighting
- small decorative accents if needed

The background should remain visually quiet.

The proclamation must remain the dominant object once it begins opening.

---

# 2. Background Idle Animation

The base sky should remain stable.

Optional atmospheric layers may include:

- extremely slow horizontal texture drift
- subtle opacity breathing
- faint environmental light movement

Suggested movement should be slow enough that the viewer perceives atmosphere rather than animation.

Avoid large background movement while the visitor is trying to read.

---

# 3. Cloud Structure

The clouds frame the left and right sides of the composition.

They should be separated into independent visual groups rather than one large flattened image.

Possible groups:

- upper-left clouds
- upper-right clouds
- middle-left clouds
- middle-right clouds
- lower-left clouds
- lower-right clouds

The clouds should leave a wide central reading column for the proclamation.

---

# 4. Cloud Idle Animation

Clouds continue subtle ambient movement throughout the scene.

Possible motion:

- slow horizontal drift
- tiny vertical float
- gentle scale breathing

Suggested ranges:

- horizontal movement: approximately 2 to 6 pixels
- vertical movement: approximately 2 to 5 pixels
- scale: approximately 1 to 1.01
- duration: approximately 12 to 20 seconds

Different cloud groups should use slightly different timing.

Avoid:

- synchronized movement
- clouds crossing over proclamation text
- clouds narrowing the central reading area
- fast drift
- visible loop jumps

---

# 5. Cherub Assembly

The two cherubs frame the closed scroll from above.

They should remain independent character assets, but their overall placement should create a balanced ceremonial composition around the parchment.

The cherubs do not physically carry the scroll in the same way the birds carried the banner in Scene 2.

They are visual attendants framing the proclamation.

---

# 6. Left Cherub

The left cherub begins fully visible.

## Idle Animation

Suggested behavior:

- gentle vertical float
- small horizontal drift
- tiny rotation

Suggested range:

- vertical: approximately 4 to 8 pixels
- horizontal: approximately 2 to 5 pixels
- rotation: less than 1 degree
- duration: approximately 4 to 7 seconds

The movement should loop smoothly.

---

# 7. Right Cherub

The right cherub uses the same overall animation language as the left cherub but with different timing.

Suggested behavior:

- gentle vertical float
- slight horizontal drift
- tiny rotation
- offset animation cycle

The two cherubs should not move like mirrored mechanical copies.

Their motion should feel related but independent.

---

# 8. Cherub Character Animation Scope

For the initial implementation, the cherubs only need floating movement.

Do not require:

- full wing flapping
- trumpet movement
- hand animation
- facial animation
- body deformation

Possible later enhancements:

- slight wing adjustment
- tiny trumpet shift
- subtle fabric movement

These are optional polish, not requirements for the first build.

---

# 9. Closed Scroll Structure

The scroll must be built as a functional animated object rather than a single flattened image.

Recommended structural pieces:

### Upper Roller

The rolled parchment at the top.

### Lower Roller

The rolled parchment at the bottom.

### Parchment Body

The expandable paper area between the rollers.

### Proclamation Artwork

The text and decorative content that appears on the parchment.

### Optional Shadows

Subtle shadowing beneath the rollers or paper edges.

Separating these pieces is essential for making the scroll appear to physically unfurl.

---

# 10. Closed Scroll Resting State

At the beginning:

- upper roller is visible
- lower roller sits close beneath it
- only a small amount of parchment may be visible between them
- no proclamation content is readable
- scroll remains centered
- open sky is visible below

The scroll should remain mostly still.

Optional idle motion:

- 1 to 2 pixel vertical float
- slight shadow breathing
- tiny parchment texture movement

Avoid any partial opening before the visitor scrolls.

---

# 11. Closed Scroll Hold

There should be a brief hold before the unfurling begins.

During this hold:

- viewport remains pinned
- scroll remains fully closed
- cherubs float
- clouds drift
- sky remains visible beneath the scroll

The visitor needs enough time to understand the object before changing it.

---

# 12. Pinned Viewport

The first major portion of Scene 6 should use a pinned viewport.

The viewer’s physical scroll input should not immediately move the entire page downward.

Instead, the pinned scene absorbs that scroll progress and uses it to open the parchment.

During this phase:

- sky remains in place
- cherubs remain framing the top
- clouds remain ambient
- scroll remains centered
- lower roller moves downward
- parchment grows

This is essential to the illusion.

---

# 13. Scroll Opening Mechanics

As the visitor scrolls:

- upper roller remains near its original vertical position
- lower roller moves downward
- parchment body expands between them
- additional proclamation artwork is revealed

The parchment should appear to unroll from the rollers.

It should not look like a long rectangle stretching with CSS scale alone.

The rollers should preserve their illustrated proportions throughout the movement.

---

# 14. Upper Roller Behavior

During the initial pinned opening:

- upper roller remains mostly anchored
- it may make extremely small positional adjustments for realism
- it should not travel dramatically downward

The upper roller acts as the stable top of the document.

Once the visitor later begins traveling down the long proclamation, the upper roller can naturally leave the viewport with the top of the parchment.

---

# 15. Lower Roller Behavior

The lower roller performs most of the visible opening movement.

As scroll progress increases:

- lower roller moves downward
- parchment body extends above it
- additional content becomes visible

The lower roller should remain physically attached to the bottom edge of the exposed parchment.

It should never appear disconnected from the paper.

---

# 16. Parchment Body

The parchment body fills the expanding space between the rollers.

It should maintain:

- consistent width
- consistent texture
- consistent edge treatment
- readable text scale

The paper should not visually stretch vertically.

Instead, more paper should be revealed.

Possible implementation:

- masked long parchment artwork
- expandable clipping container
- segmented parchment pieces
- repeating central paper texture beneath fixed content

The chosen method should preserve the hand-drawn appearance.

---

# 17. Proclamation Content

The proclamation text and ornamentation should be treated as one designed document.

The current composition includes a hierarchy such as:

- “HEAR YE HEAR YE”
- “BY DIVINE DECLARATION”
- introductory proclamation language
- “THE GIFT REVEALED FROM FOLLOWING YOUR HEART”
- creative supply chain declaration
- creator / culture / legacy statement
- “THIS IS THE BEGINNING OF”
- “TEN GRAND”
- decorative separators and flourishes

The exact final copy may evolve, but the animation should support a vertically designed proclamation with multiple reading sections.

---

# 18. Content Reveal

The proclamation should be revealed because the parchment itself is opening.

Avoid making every paragraph independently fade into view.

The primary logic should be:

**paper appears → content printed on that paper becomes visible**

Optional micro-polish can include:

- slight ink sharpening
- faint gold detail shimmer
- subtle ornament highlight

But these should remain secondary.

---

# 19. Initial Reveal Order

As the parchment begins opening, the first visible content should appear near the top.

The visitor gradually encounters:

1. opening ornament
2. HEAR YE HEAR YE
3. proclamation introduction
4. next decorative separator
5. subsequent message sections

The reveal order naturally follows the vertical document layout.

---

# 20. Readability

Reading is the priority once text begins appearing.

The proclamation should remain:

- centered
- large enough for mobile reading
- high contrast
- visually stable
- free from competing motion

Avoid:

- text scaling while being read
- parchment wobbling
- strong cloud movement behind text
- heavy glow effects
- blur transitions over copy

The visitor should be able to stop scrolling at any point and read comfortably.

---

# 21. Threshold to Long-Document Travel

Eventually the lower roller reaches the bottom region of the viewport.

At this point, continuing to lower the roller while keeping the viewport pinned would push content outside the visible screen.

This becomes the threshold where the interaction changes.

The transition should happen when the parchment has approximately filled the usable viewport height.

Before threshold:

**viewport pinned + scroll grows**

After threshold:

**document continues growing + camera follows downward**

---

# 22. Seamless Mode Change

The visitor should not notice a technical switch between pinned opening and document travel.

There should be no:

- jump
- snap
- position reset
- sudden change in scroll sensitivity
- visible reflow

The parchment should continue moving as though the same physical action is simply carrying the viewer farther down the document.

---

# 23. Proclamation Travel

Once the parchment exceeds the viewport:

- top of the document begins moving upward
- visitor travels downward through the proclamation
- new content enters from below
- already-read content leaves above

The scroll remains vertically centered.

The camera should essentially follow the document.

---

# 24. Cherub Exit During Proclamation Travel

The cherubs only need to frame the opening of the proclamation.

Once the viewer begins moving down the long document:

- cherubs naturally move upward with the top composition
- they gradually leave the viewport
- their idle animation continues while visible

Do not force them to stay pinned alongside the entire proclamation.

The focus should shift entirely to reading.

---

# 25. Upper Clouds During Document Travel

Upper clouds may also leave naturally as the visitor travels downward.

Lower or repeating cloud groups can continue framing the parchment if desired.

The background should continue to feel like the same exterior world without creating obvious repeated cloud tiles.

---

# 26. Scroll Reading Pace

The proclamation travel should allow comfortable reading.

The visitor controls pace through scroll, but the mapping between scroll distance and document travel should not be overly aggressive.

One wheel tick or finger movement should not send multiple paragraphs flying past.

This needs mobile testing.

The goal is:

**scroll enough to keep moving, but slow enough to read.**

---

# 27. Fully Open Scroll

At the end of the document journey, the parchment is completely unfurled.

The visitor eventually reaches:

- lower proclamation sections
- final declaration
- TEN GRAND
- concluding ornament
- lower roller

The lower roller should now be fully visible.

This visually confirms that the entire scroll has been opened.

---

# 28. Fully Open Hold

Once the bottom of the proclamation is reached, there should be a deliberate hold.

During this moment:

- lower roller is visible
- final message remains readable
- TEN GRAND remains on screen long enough to register
- parchment remains completely open
- no closing starts immediately

This is the culmination of the proclamation.

---

# 29. Closing Trigger

Continued scrolling beyond the fully open hold begins the closing sequence.

The visitor’s scroll now physically rolls the parchment back up.

The closing should feel connected to the same object mechanics used during opening.

---

# 30. Closing Direction

The lower roller begins traveling upward.

As it moves:

- parchment disappears into the lower roll
- bottom content disappears first
- visible document becomes progressively shorter

The visual logic is:

**the proclamation is being rolled back up from the bottom.**

---

# 31. Closing Content Order

Content disappears in reverse vertical order.

For example:

1. final ornament disappears
2. TEN GRAND disappears
3. “THIS IS THE BEGINNING OF” disappears
4. preceding statement sections disappear
5. earlier proclamation sections disappear
6. opening content eventually disappears

The viewer should perceive the message being physically rolled away.

---

# 32. Lower Roller During Closing

The lower roller remains attached to the moving edge of the parchment.

It travels upward as the document shortens.

Its motion should be smooth and directly connected to scroll progress.

Do not:

- teleport the roller
- fade it out
- disconnect it from the paper

---

# 33. Upper Roller During Closing

The upper roller remains at the top end of the remaining parchment.

As the document becomes short enough, the scene can transition back toward a pinned composition.

The upper and lower rollers gradually approach one another.

---

# 34. Return to Pinned Object Mode

When the visible parchment becomes shorter than the viewport again, the interaction can transition back from document travel to a pinned scene.

The viewport stabilizes.

The remaining parchment continues rolling closed inside the fixed composition.

This should be as seamless as the opening mode change.

---

# 35. Fully Closed Ending State

The proclamation eventually returns to the compact closed-scroll configuration.

At this point:

- no proclamation text remains visible
- upper and lower rollers sit close together
- parchment body is mostly concealed
- scroll is centered again
- exterior sky becomes visually prominent

The declaration has been delivered and sealed.

---

# 36. Closed Scroll Exit

The closed scroll should remain visible briefly after completing the closing animation.

Then, continued scrolling begins the handoff into the final scene.

Possible behavior:

- closed scroll moves upward
- scroll subtly scales down as it leaves
- surrounding proclamation clouds move upward with it
- next scene begins entering from below

Avoid simply fading the scroll away.

It should feel like the completed chapter is physically being left behind.

---

# 37. Cherubs During Closing

Depending on the final camera composition, the cherubs may re-enter the visual field as the scroll returns to its compact closed state, or they may remain absent after leaving earlier.

The cleaner option is likely:

- cherubs frame the opening state
- leave during long-document travel
- optionally become visible again only if the camera returns to the original exterior position during closing

This should be determined by the exact implementation.

If reappearing requires an awkward reset, do not force it.

The scroll remains the priority.

---

# 38. Closed Scroll to Finale

The final scene should begin appearing only after the proclamation has actually closed.

Do not overlap the full proclamation with the finale too early.

The hierarchy should be:

1. complete message
2. close message
3. return to closed scroll
4. clear the scroll
5. reveal finale

That gives the proclamation a definitive ending.

---

# 39. Visual Attention Hierarchy

## Closed State

1. closed scroll
2. cherubs
3. clouds
4. sky

## Opening

1. expanding parchment
2. newly revealed text
3. scroll rollers
4. cherubs/clouds

## Reading

1. proclamation text
2. parchment
3. background framing

## Final Declaration

1. TEN GRAND
2. concluding text
3. lower roller

## Closing

1. rolling parchment
2. disappearing proclamation content

## End

1. closed scroll
2. emerging finale

---

# 40. Ambient Animation Hierarchy

## While Closed

Primary:

- cherub floating
- cloud drift

Secondary:

- subtle parchment texture

## While Reading

Primary:

- none beyond scroll-driven parchment movement

Secondary:

- extremely subtle background/cloud motion

The proclamation should become calmer once reading begins.

## While Closing

Primary:

- scroll closing

Ambient motion remains secondary.

# 41. Layer Structure

Recommended logical order from back to front:

### Exterior Background

1. blue sky
2. sky texture
3. atmospheric details

### Cloud Environment

1. rear-left clouds
2. rear-right clouds
3. foreground-left clouds
4. foreground-right clouds

### Cherubs

1. left cherub
2. right cherub

### Scroll

1. parchment body
2. proclamation artwork/content
3. upper roller
4. lower roller
5. parchment shadows
6. optional parchment highlights

### Transition to Finale

1. final-scene background
2. final-scene elements

The exact DOM stack may vary, but the parchment body and rollers must remain visually connected.

---

# 42. Scroll Architecture

Scene 6 requires three distinct technical behaviors inside one master sequence.

## Mode A: Pinned Unfurl

- viewport fixed
- lower roller moves down
- parchment reveal increases
- content becomes visible

## Mode B: Document Travel

- parchment has exceeded viewport
- document moves through viewport
- visitor travels downward
- full proclamation becomes readable

## Mode C: Roll Closed

- lower roller moves upward
- parchment disappears
- document shortens
- scene eventually returns to compact state

These should belong to one coordinated timeline rather than independent scroll systems fighting for control.

---

# 43. Scroll Reversal

All scroll-controlled phases should reverse cleanly.

If the visitor scrolls upward while opening:

- lower roller rises
- parchment closes
- content disappears

If they reverse during document travel:

- document moves back toward earlier sections

If they reverse during closing:

- parchment begins reopening
- previously hidden content returns in the correct order

The scene should never duplicate or lose parchment content.

---

# 44. Transition Between Scroll Modes

The technical transition points between pinned and document-travel states are especially important.

Testing should confirm:

- no sudden velocity change
- no scroll jump
- no scroll position mismatch
- no content clipping
- no lower roller detachment
- no viewport snapping

These threshold moments should feel invisible to the visitor.

---

# 45. Parchment Masking

The proclamation artwork should only appear within the exposed parchment area.

During opening and closing, content should be clipped by the moving parchment boundary.

Text should not become visible below the lower roller before the paper reaches it.

Likewise, during closing, text should disappear behind the roller as it is rolled up.

Possible implementation:

- overflow-hidden parchment viewport
- clip-path
- SVG mask
- transform-based reveal container

---

# 46. Text Asset Strategy

There are two possible approaches.

## Option A: Text Included in Illustrated Parchment

Advantages:

- exact visual control
- maintains hand-designed composition
- easiest way to preserve ornamental layout

Disadvantages:

- less accessible
- harder to edit
- potential readability/resolution issues

## Option B: Live HTML Text Positioned on Parchment

Advantages:

- accessible
- sharper on all screens
- editable
- responsive

Disadvantages:

- more difficult to match the illustrated typography precisely

For this project, a hybrid may work best:

- decorative titles/ornaments as artwork
- important body copy as live text where practical

Regardless of method, animation architecture should not rely on individual text line animations.

---

# 47. Mobile Behavior

Mobile portrait is the master experience.

The scroll width should leave comfortable margins from the viewport edges.

Text must remain large enough to read without pinch zooming.

The parchment can occupy most of the width, but clouds should still provide enough exterior context to preserve the illustrated-world feeling.

The closed scroll must be fully visible at the beginning.

---

# 48. Mobile Reading Behavior

During document travel:

- proclamation should remain centered
- no horizontal drift
- no horizontal scrolling
- text remains within safe width
- side clouds never overlap text
- browser UI changes should not produce jumps

Dynamic viewport units should be handled carefully during pinned states.

---

# 49. Desktop Behavior

Desktop preserves the same vertical proclamation structure.

Do not spread the proclamation horizontally.

Wider screens may reveal:

- more sky
- more clouds
- additional negative space around the parchment

The scroll remains centered.

The reading column should not become excessively wide.

---

# 50. Performance Requirements

Prefer transform and masking over layout-heavy animation.

Critical assets should be preloaded before Scene 6 begins.

Optimize:

- parchment artwork
- cloud assets
- cherubs
- proclamation textures

Avoid:

- enormous single transparent PNGs where smaller layered assets work
- continuously recalculating parchment height in JavaScript every frame
- heavy blur effects behind text
- dozens of individually animated text nodes

The scroll should remain smooth on mobile.

---

# 51. Parchment Texture Performance

If the parchment body becomes extremely tall, avoid using one unnecessarily huge bitmap.

Possible strategies:

- scalable parchment center texture
- repeatable central paper section
- separate decorative borders
- responsive vector or CSS-assisted paper structure

The final solution should preserve the illustrated appearance without creating an enormous memory-heavy asset.

---

# 52. Accessibility

The proclamation must remain accessible even though its presentation is highly animated.

Requirements should include:

- readable text contrast
- logical document order
- modal-free access to the full proclamation
- keyboard-readable content if live text is used
- reduced-motion alternative

If the proclamation is rendered entirely as artwork, provide equivalent semantic text outside the visual layer for assistive technology.

---

# 53. Reduced Motion

For `prefers-reduced-motion`:

- remove the long physical unfurl sequence
- reveal the proclamation with a shorter expansion or fade
- allow straightforward document scrolling
- reduce cherub/cloud animation
- shorten the closing sequence

The narrative order should remain:

closed scroll → proclamation → full message → closed scroll → finale.

---

# 54. Placeholder Artwork Requirements

Before final artwork is complete, temporary assets should at minimum be separated into:

- exterior sky
- cloud groups
- left cherub
- right cherub
- upper scroll roller
- lower scroll roller
- parchment body
- proclamation content
- optional parchment shadows

The important mechanics to solve before final polish are:

- pinned unfurl
- roller connection
- parchment masking
- transition into document travel
- reading pace
- full-open hold
- reverse closing
- transition back to compact scroll
- final-scene handoff

---

# 55. Locked Scene Behavior

When Scene 6 begins:

- visitor is fully outside the tunnel
- closed scroll is centered
- cherubs float above
- clouds drift
- open sky exists below the closed scroll
- viewport holds
- continued scrolling begins opening the parchment
- lower roller moves downward
- proclamation is revealed
- parchment reaches viewport height
- scene seamlessly transitions into document travel
- visitor travels down the proclamation
- full message is revealed
- final declaration receives a brief hold
- continued scrolling begins rolling the parchment closed
- lower roller travels upward
- content disappears in reverse order
- parchment returns to compact closed state
- scroll briefly holds
- scroll clears the frame
- final scene begins emerging

---

# Acceptance Criteria

Scene 6 is complete when:

1. The scene begins with a clearly closed scroll.
2. Open blue sky is visible beneath the closed scroll.
3. Both cherubs are already floating when the scene begins.
4. Clouds are already drifting.
5. No proclamation content is visible before opening begins.
6. There is a brief closed-scroll hold.
7. Initial scroll input does not immediately move the entire page down.
8. The viewport remains pinned during the first opening phase.
9. The lower roller visibly moves downward.
10. The upper roller remains relatively anchored.
11. More parchment is physically revealed between the rollers.
12. The parchment does not appear vertically stretched.
13. Text appears because parchment is revealed, not through unnecessary line-by-line fades.
14. Content remains clipped to the visible parchment.
15. The scroll remains centered during opening.
16. Text stays readable on mobile.
17. The transition from pinned opening to document travel is seamless.
18. No jump occurs when the parchment exceeds viewport height.
19. The visitor can naturally travel down the proclamation.
20. Cherubs naturally leave the viewport once the long-document journey begins.
21. Clouds never interfere with readability.
22. Reading pace feels comfortable.
23. The full proclamation is eventually revealed.
24. TEN GRAND receives enough screen time to register.
25. The lower roller becomes visible at the bottom.
26. There is a short fully-open hold.
27. Continued scrolling begins the closing sequence.
28. Lower roller travels upward during closing.
29. Bottom content disappears first.
30. Content appears to roll physically into the parchment.
31. No text remains visible outside the exposed parchment.
32. Closing transitions smoothly back toward a pinned composition.
33. Scroll returns to a genuinely compact closed state.
34. No proclamation content remains visible once closed.
35. Closed state briefly holds before the finale.
36. Final scene does not begin before the proclamation is sealed.
37. Closed scroll leaves naturally rather than simply disappearing.
38. Reverse scrolling restores each previous parchment state correctly.
39. Pinned/document-travel threshold works in both directions.
40. No roller detaches from the parchment.
41. No large blank gaps appear during opening or closing.
42. No rectangular asset boundaries become visible.
43. Scene performs smoothly on mobile.
44. Mobile browser-height changes do not break the pinned stage.
45. Reduced-motion users can still access the complete proclamation.
46. Final artwork can replace placeholder assets without rebuilding the scroll architecture.
47. The scene cleanly hands off into the final sequence after the proclamation closes.