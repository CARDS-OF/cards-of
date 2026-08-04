# CARDS-OF / cards-of

`cards-of` records dealt-card provenance separately from agent/thread birth
order. This repository owns schemas and shared namespace conventions, not the
concrete card data for any one agent.

Concrete identity/card repos should live beside this repo, for example:

```text
CARDS-OF/meridian-ottobot
```

The conventions are designed to preserve these distinctions:

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

## Concrete Data

Concrete card data should live in identity-specific repos, not here. For
example:

```text
cards-of/meridian-ottobot/cards.json
cards-of/meridian-ottobot/agents.json
cards-of/meridian-ottobot/decks.json
```

This registry repo may contain schemas and documentation examples, but should
not carry a live agent's own instance records.
