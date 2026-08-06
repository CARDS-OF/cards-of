# CARDS-OF / cards-of

`cards-of` records dealt-card provenance separately from agent/thread birth
order.

The first dogfood fixture is `meridian-ottobot`, because it already exercises
the important distinctions:

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
```

Use singular relation names only inside one entity's own record:

```text
relations.agent_of
relations.card_of
relations.sidecar_of
```

## Current Fixture

The seed data lives at:

```text
fixtures/meridian-ottobot/cards.json
fixtures/meridian-ottobot/agents.json
```

The data is intentionally metadata-only. Source photos are referenced by
provenance labels, not committed here.

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
