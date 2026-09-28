# Heart Direction — Experience Flow

## State 1: exterior invitation

The visitor arrives at the lavender daytime dreamscape. The chrome heart
tunnel, marquee, cherubs, palm promenade, water, and one-seat spaceship are
fully visible.

Ambient activity draws attention without forcing action:

- soft water ripples;
- GET IN reflection or glow;
- restrained ship glow;
- cherub hover;
- subtle illuminated signage.

Primary action: select the spaceship.

## State 2: boarding transition

Selecting the ship triggers a forward zoom that feels like entering the
vehicle. The cockpit replaces the exterior view.

The dashboard powers on with a short Heart Direction loading treatment before
presenting orientation. Exact loading animation remains to be designed.

## State 3: welcome

The central dashboard screen introduces the experience.

Copy:

> Journey through Lain Doe Love's heart, mind, and body of work.

Control:

> Prepare for Takeoff

No sound control appears in the launch version.

## State 4: orientation

Orientation explains only what the visitor needs:

- scroll forward to travel deeper;
- pause when something catches the eye;
- select an artifact to reveal it;
- portals may be entered or skipped;
- Saturn, Moon, Store, and Socials remain available from the dashboard.

The map is not shown before the visitor enters the cockpit. Exact orientation
screen count and final wording should remain concise and be confirmed before
implementation.

Final control:

> Take Off

## State 5: tunnel entry

The ship advances across the water into the heart tunnel. The viewpoint looks
forward, so the daytime exterior does not remain visible inside the tunnel.
The world becomes dark and cosmic while chrome ribs and the water route guide
the visitor inward.

At the threshold, a short glitch/pull-through transition occurs. No additional
message appears during this transition.

## State 6: void arrival

The visitor emerges facing an illuminated arch:

> Welcome to Lain Doe Love's Heart

Cherubs hover above it. The dashboard repeats the core instruction to scroll
forward and select an artifact. Saturn and the Moon are visible far away as
stable landmarks.

## State 7: artifact trail

The ship remains on the water path. User scrolling controls forward movement.
Artifacts appear in widely spaced groups, generally 2–3 per arch.

Selecting an artifact pauses or visually settles the journey and opens the
appropriate presentation:

- writing: readable paper or reading modal;
- image/artwork: focused lightbox;
- audio: player associated with the physical object;
- video: controlled viewer styled for the artifact;
- world preview: threshold or portal presentation.

Exact modal templates will be defined per media type before implementation.

## State 8: world portal encounter

A portal or doorway occupies the center of the route. The dashboard asks
whether to enter or remain on the main path.

- Enter: transition into the world's threshold experience.
- Continue: camera travels through or past the doorway and resumes the trail.

Only the Funemployed threshold teaser opens at launch.

## Persistent detours

### Saturn

The Saturn dashboard control leaves the main trail and places the visitor on a
simple Saturn surface. The same forward-scrolling interaction continues under
one visually continuous ring.

Projects face the viewer. Selecting a project makes that project dominant while
others fade. A lightbox/slideshow presents the work. The dashboard holds concise
project information and a fullscreen control. A clear return control restores
the exact previous position on the heart trail.

### Moon

The Moon control moves the visitor to the philosophy temple. Four forward-facing
panels—Earth, Air, Fire, and Water—remain visible in the viewport. Selecting a
panel opens a borderless pearl-chrome fullscreen reading modal. Closing it
returns to the temple without changing the persistent dashboard.

### Store

The Store control opens a familiar product grid. The dashboard provides store
categories and a persistent cart control. Selecting a product opens a fullscreen
product view with imagery, description, price, quantity, add-to-cart, and
checkout options. Final Square behavior remains unresolved.

### Socials

The Socials control opens the available platforms in a controlled dashboard
state or overlay. Substack and Threads are currently planned. Final destinations
must be supplied before launch.

## State 9: present end of the trail

The forward path reaches its current end and cannot continue. The dashboard
acknowledges that this is the present edge of Heart Direction and that more is
coming. It offers a newsletter or follow action.

This ending is not an interrupted transmission unless that direction is
explicitly re-approved; the later correction replaced it with a clear current
endpoint.

## Navigation-state requirements

- Detours return to the visitor's previous main-trail position.
- Artifact modals preserve trail position.
- Background movement pauses while an overlay requires reading or action.
- Browser back behavior and explicit UI controls must not produce duplicate or
  lost navigation states.
- Reduced-motion mode preserves all content and choices with shorter or direct
  transitions.
