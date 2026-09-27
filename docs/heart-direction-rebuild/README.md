# Heart Direction Rebuild Documentation

This directory is the durable handoff for the new Heart Direction homepage.
It replaces the retired seven-scene brief as the working source of truth.

Read in this order:

1. `STATUS.md` — current milestone, locks, open decisions, and exact next task.
2. `CREATIVE_BRIEF.md` — purpose, audience, launch scope, content, and tone.
3. `EXPERIENCE_FLOW.md` — visitor journey and interaction states.
4. `VISUAL_SYSTEM.md` — palette, materials, composition, and motion tone.
5. `ASSET_MANIFEST.md` — required assets and the turnaround → Tripo → Blender
   → web pipeline.
6. `PRODUCTION_PLAN.md` — storage, Blender setup, milestones, performance gates,
   and dependency rules.

The user's newest explicit instruction always takes precedence. When an
approved decision changes, update `STATUS.md` and every affected document in
the same commit so future Codex sessions do not have to reconstruct the change
from chat history.

Legacy HTML, CSS, JavaScript, artwork, and Git history remain available for
historical reference. They do not define the new experience.
