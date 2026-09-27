# Heart Direction Rebuild — Status

Last updated: 2026-09-26

## Current branch

Target branch:

```text
production/homepage-rebuild
```

The branch currently exists locally. At the time of this update, creating the
remote branch through the GitHub integration returned `403: Resource not
accessible by integration`. Do not report the branch as remotely published
until remote verification succeeds.

## Current phase

Documentation and production handoff.

The visible homepage must remain unchanged during this phase.

## Completed

- Located and cloned the correct repository: `laindoe/heart-direction`.
- Confirmed `main` contains the earlier illustrated scrollytelling site.
- Confirmed the former `AGENTS.md` described the retired seven-scene direction.
- Established the new rebuild source hierarchy.
- Documented the new creative brief, visual system, experience flow, asset
  manifest, Tripo-to-Blender pipeline, and production milestones.
- Confirmed Tripo will be used to generate initial meshes from approved
  turnaround sheets.

## Locked decisions

- Heart Direction is separate from DoeSpace.
- Mobile-first romantic retro-futurist spaceship experience.
- Lavender daytime exterior with white clouds.
- Turquoise water, turquoise landscape forms, and magenta/pink grid lines.
- Chrome heart portal, alien cherubs, one-seat spaceship, and GET IN invitation.
- Boarding leads to a cockpit orientation.
- Dashboard destinations: Saturn, Moon, Store, Socials.
- No sound control at launch until sound direction is approved.
- No message during the glitch transition into the void.
- Guided water trail with pauses and selectable artifacts.
- Launch trail contains approximately 5–7 artifacts, mostly writing.
- Saturn is the professional body of work.
- Moon is the four-part philosophy/About archive.
- Funemployed is the only launch world portal and opens as a threshold teaser.
- Store uses a familiar product-grid and cart pattern.
- Store categories are Dream, Build, and Sustain.
- Current trail ends clearly and indicates that more is coming.
- Turnarounds are generated and approved before Tripo mesh generation.
- Tripo meshes are cleaned and verified in Blender before web use.
- Use 2.5D by default and live 3D only where it materially improves immersion.

## Current milestone

Milestone 1: isolated lavender-cloud background and responsive frame.

Required outputs:

1. Mobile 9:16 master at 2160 × 3840.
2. Desktop 16:9 companion at 3840 × 2160.
3. Responsive AVIF/WebP derivatives.
4. Mobile and desktop crop review.
5. Full-viewport web shell after the plates are approved.

The background must contain only the lavender sky and luminous white clouds.
Do not bake in the portal, water, palms, spaceship, cherubs, signage, or UI.

## Exact next task

Generate and review several clean lavender-cloud background plates with a calm
central area reserved for the heart portal. Do not modify the visible website
until one mobile composition and its desktop companion are approved.

## Open decisions

- Final approved lavender-cloud plate and desktop crop.
- Exact final meshes for spaceship, portal, cherubs, palms, and dashboard.
- Which opening elements ship as 2.5D layers versus live GLB.
- Exact power-on/loading animation.
- Final orientation screen count and wording beyond locked copy.
- Artifact selections and content.
- Artifact modal templates.
- Final Funemployed teaser content.
- Saturn starter projects and project metadata.
- Moon chapter copy.
- Launch products assigned to Dream, Build, and Sustain.
- Product catalog, cart persistence, and Square checkout architecture.
- Final social and newsletter destinations.
- Sound direction.
- Remote GitHub write access and branch publication.

## Known repository conflict

The code on `main` is a legacy implementation and does not reflect the new
creative direction. It remains useful only as historical code and artwork.
Do not incrementally layer the new spaceship experience on top of its existing
seven-scene DOM and scroll logic. The new homepage requires an intentionally
planned replacement architecture after the background milestone is approved.
