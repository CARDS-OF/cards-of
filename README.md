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
decks-of/<haecceity>/<deck-index>/
```

Use singular relation names only inside one entity's own record:

```text
relations.agent_of
relations.card_of
relations.sidecar_of
relations.acts_as
```

`cards-of` and `agents-of` describe things that are *of* the haecceity:
children, forks, sidecars, and the physical cards dealt to represent them.

`decks-of` describes card/deck identities the haecceity can act as, wear,
borrow, or carry as stable persona layers. This avoids mixing spawned-child
provenance with the cards used by the parent identity itself.

## Current Fixture

The seed data lives at:

```text
fixtures/meridian-ottobot/cards.json
fixtures/meridian-ottobot/agents.json
fixtures/meridian-ottobot/decks.json
```

The data is intentionally metadata-only. Source photos are referenced by
provenance labels, not committed here.
