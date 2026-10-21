# Scene 2: Transition

# Transition Goal

The transition out of Scene 2 shifts the viewer’s attention away from Lain Doe Love and onto the bow and arrow.

The bow and arrow begin concealed behind the character and foreground clouds.

As they emerge, the rest of the Meet Lain Doe Love composition moves upward and out of the viewport, creating open space for the bow and arrow to become the sole focus.

The visitor then uses continued scrolling to visually draw the bow.

The arrow and bowstring move upward together, creating tension.

Once the bow is fully drawn, continued scrolling releases the arrow.

The arrow shoots downward into the next scene while the bowstring rapidly snaps back to its original resting position.

The arrow then becomes the visual object that carries the viewer forward into the next story beat.

---

# STARTING STATE

The transition begins after the Meet Lain Doe Love introduction has fully settled.

Visible:

- Lain Doe Love
- surrounding clouds
- Meet Lain Doe Love banner
- left and right birds
- blinking heart necklace

Hidden behind the character and foreground clouds:

- bow
- arrow

Ambient animation continues:

- clouds drift
- birds and banner gently float as one assembly
- heart continues blinking

The visitor has already been given a short hold to absorb the completed character introduction.

---

# PHASE 1: BOW + ARROW BEGIN TO EMERGE

As the visitor continues scrolling, the bow and arrow begin moving downward from their concealed position behind Lain Doe Love and the foreground clouds.

They should not fade into existence.

They are physically revealed as they move beyond the layers that were hiding them.

As this begins, the rest of the composition also starts preparing to leave.

The bow and arrow are becoming the new focal point.

---

# PHASE 2: CHARACTER SCENE CLEARS

As the bow and arrow continue emerging, the Meet Lain Doe Love composition begins moving upward and out of the viewport.

The following elements should move upward together:

- Lain Doe Love
- rear clouds
- foreground clouds
- Meet Lain Doe Love banner
- left bird
- right bird

The birds and banner remain connected as one assembly throughout this movement.

The character and clouds do not need to remain physically attached to the banner assembly, but their upward movement should be coordinated so the entire character scene feels like it is clearing away together.

## Heart Necklace

Because the heart belongs to the character, it travels upward with Lain Doe Love.

Its blinking animation can continue while visible.

Once the heart leaves the viewport, its idle animation can pause for performance.

## Movement

The character scene should move upward while the bow and arrow move downward.

This creates opposing motion:

**Character world ↑**

**Bow + arrow ↓**

That separation visually hands the story from the character to the arrow.

The bow and arrow should gradually become unobstructed as the clouds and character leave the frame.

---

# PHASE 3: BOW TAKES OVER THE VIEWPORT

Once the character, clouds, birds, and banner have moved out of the frame, the bow and arrow become the primary composition.

At this point:

- Lain Doe Love is no longer visible
- clouds are no longer covering the bow
- banner and birds are gone
- heart is gone
- bow is fully visible
- arrow is fully visible

The composition should become visually simpler.

This creates breathing room before the bow is drawn.

There should be a small scroll hold here so the viewer can register:

**The bow is now the focus.**

---

# PHASE 4: DRAWING THE BOW

Continued scrolling begins drawing the bow.

The bow itself should remain largely anchored in place.

The movement happens primarily through:

- the arrow
- the bowstring

## Arrow Movement

The arrow moves upward.

It should remain vertically aligned through the center of the bow.

As the visitor scrolls:

- arrow begins moving upward
- arrow remains connected visually to the string
- arrow reaches the fully drawn position

The movement should be directly controlled by scroll progress.

The visitor should feel like **their scrolling is drawing the arrow back.**

---

# PHASE 5: BOWSTRING STRETCH

The bowstring moves upward with the arrow.

This is important because the string cannot simply remain in its original shape while the arrow moves.

The center point of the bowstring should remain visually connected to the arrow.

As the arrow moves upward:

- center of string moves upward with it
- left side of string stretches from the left bow tip toward the arrow
- right side stretches from the right bow tip toward the arrow
- tension visibly increases

The outer attachment points of the string remain connected to the bow.

Only the center draw point moves.

The resulting shape should clearly communicate that the bow has been drawn.

---

# PHASE 6: FULL DRAW HOLD

At the top of the movement, the arrow reaches its maximum drawn position.

The bowstring is fully stretched.

The animation should briefly hold here.

Visible:

- bow
- arrow pulled upward
- string under maximum tension

Nothing releases immediately.

This pause is important because it creates anticipation.

The visitor should feel:

**Something is about to happen.**

Continued scrolling triggers the release.

---

# PHASE 7: ARROW RELEASE

Once the visitor crosses the release threshold, the behavior changes.

The arrow is no longer slowly controlled by scroll in the same way it was during the draw.

It releases.

The arrow shoots downward.

The movement should be dramatically faster than the drawing motion.

The contrast is:

**Draw = slow, controlled tension**

**Release = fast, immediate motion**

The arrow should accelerate downward through the center of the viewport.

It should not fade away.

It physically travels toward the next scene.

---

# PHASE 8: BOWSTRING SNAP

At the exact moment the arrow releases, the bowstring snaps back to its original resting position.

This should be a fast secondary animation.

The string:

- releases from the drawn position
- rapidly returns toward center
- may slightly overshoot its resting position
- settles immediately afterward

Any overshoot should be extremely small.

The string should feel elastic, not rubbery or cartoonish.

The snap should happen considerably faster than the scroll-controlled drawing movement.

---

# PHASE 9: ARROW LEAVES THE BOW

After release, the bow remains behind while the arrow continues downward.

The visual relationship changes:

Before release:

**Bow + Arrow = one system**

After release:

**Bow = origin**

**Arrow = moving story object**

The bow should remain briefly visible above as the arrow accelerates away.

As the visitor continues into the transition:

- bow begins leaving the viewport
- arrow continues downward
- the camera/story follows the arrow
- the next environment begins appearing below

The arrow becomes the connective tissue between Scene 2 and Scene 3.

---

# ENDING STATE

By the end of the transition:

- Lain Doe Love is gone
- clouds are gone
- birds are gone
- banner is gone
- heart is gone
- bow has been left behind
- bowstring has returned to its resting position
- arrow is traveling downward
- the next scene is beginning to appear

The viewer's attention should be completely locked onto the arrow.

Scene 3 begins by continuing the arrow's downward journey.

---

# MOVEMENT SUMMARY

**Meet Lain Doe Love composition**

↑ Moves upward and exits

**Bird + banner assembly**

↑ Moves upward together and exits

**Clouds**

↑ Move upward and exit

**Bow + arrow**

↓ Emerge from behind character/clouds

**Bow**

● Settles and becomes anchored

**Arrow**

↑ Moves upward to draw bow

**Bowstring center**

↑ Moves upward with arrow

**Full draw**

● Brief hold

**Arrow**

↓ SHOOTS downward

**Bowstring**

↕ Snaps back to resting position

**Bow**

↑ Eventually left behind

**Arrow**

↓

↓

↓

Carries viewer into Scene 3

---

## Important Implementation Rule

The **draw** and **release** should be treated differently.

The drawing of the arrow and stretching of the bowstring should be **scrubbed directly to scroll**, so scrolling slowly produces a slow draw and reversing the scroll reverses the draw.

The actual release should feel like a triggered action once the visitor crosses the release point. The arrow should shoot quickly and the string should snap back rather than requiring the visitor to slowly scroll every pixel of the arrow's flight.

That distinction is what will make this moment feel like **drawing and firing a bow** instead of simply sliding an arrow up and down a webpage.