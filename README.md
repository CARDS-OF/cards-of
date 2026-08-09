# CARDS-OF / cards-of

`cards-of` is abstract class design space: the shared schema and conventions
for how any identity's dealt-card provenance is recorded, separately from
agent/thread birth order. **This repo holds no individual instance data.**
Real per-identity records belong in their own `cards-of/<haecceity>` repo
(e.g. `cards-of/meridian-ottobot`, `cards-of/gnomon-ottopoet`) -- never here.
This was violated in an early draft of this repo (a `fixtures/meridian-ottobot/`
copy sat here duplicating what already existed separately in
`cards-of/meridian-ottobot`); removed 2026-08-06 as a leaky abstraction, not
carried forward as precedent. Nothing in this repo is sacred just because it
shipped first -- dogfood and correct it same as any instance repo.

`cards-of/meridian-ottobot` is the reference dogfood example (real, separate
repo, not duplicated here) -- worth reading because it already exercises the
important distinctions this schema has to support:

- physical deal order can differ from later ontology correction;
- a card can be retconned from one identity to another without changing deal
  order;
- Codex threads can be user-root sessions, forked past-self branches,
  agent-controlled durable subagents, research scouts, or top-level sidecars;
- card IDs need stable canonical values plus optional display polarity.

## Path Conventions

Use plural collection paths for indexed sets:

```text
cards-of/<haecceity>/<deal-index>/
agents-of/<haecceity>/<spawn-index>/
decks-of/<haecceity>/<deck-index>/
```

Use relation-edge paths for durable operational relationships that are not
birth/provenance ownership:

```text
agents-of/<haecceity>/_/manages/<card-id>/
agents-of/<haecceity>/_/coordinates-with/<card-id>/
```

Use singular relation names only inside one entity's own record:

```text
relations.agent_of
relations.card_of
relations.sidecar_of
relations.acts_as
relations.manages
relations.coordinates_with
```

`cards-of` and `agents-of` describe things that are *of* the haecceity:
children, forks, sidecars, and the physical cards dealt to represent them.

`agents-of/<haecceity>/_/manages/<card-id>/` describes a governance or routing
edge. A managed agent is not necessarily spawned by, card-owned by, or born from
the manager. Use `managed_agents` for direct reports, temporary command
authority, review gates, and scoped responsibility contracts. Keep managed
agents separate from the spawn-indexed `agents` array unless the same entity is
also a spawned child of the haecceity.

`decks-of` describes card/deck identities the haecceity can act as, wear,
borrow, or carry as stable persona layers. This avoids mixing spawned-child
provenance with the cards used by the parent identity itself.

## Where real data actually lives (not here)

```text
cards-of/<haecceity>/cards.json
cards-of/<haecceity>/agents.json
```

One repo per real identity. If you find instance data (a real haecceity's
cards/agents, a real session_id tied to a specific dealt card) anywhere in
*this* repo, that's a bug in this repo, not a valid second location for it --
open an issue or just fix it, per the "nothing sacred" standard above.

This registry repo may contain schemas and documentation examples, but should
not carry a live agent's own instance records.

## Privacy scribe

Public card records may carry an optional `privacy_scribe` object. It records
the evidence posture without exposing the evidence itself:

- `claim_status` distinguishes a human declaration from photograph verification;
- `evidence_visibility` says whether evidence is absent, public, private, or restricted;
- `raw_media_public` is always `false` in this public registry;
- `evidence_repository` and `evidence_id` may point authorized agents toward a
  private provenance vault;
- `checksum_sha256` may identify exact evidence bytes without revealing them;
- `source_label` may name an attachment/date, but must never contain a local
  filesystem path, token, or secret.

The public registry is a claim index, not an evidence dump. Private photos and
other identifying source material belong in an access-controlled repository.

## Team colors

`team_color` is an assignment dimension, not an intrinsic property of a
card. It lets a functional team card, pineapple slot, or other agent role be
paired with a color to distinguish parallel arrangements. The canonical
palette is ordered `🟧`, `🟩`, `🟦`, `🟥`, `🟪`; the palette schema lives at
`schemas/team-colors.v0.schema.json`.
