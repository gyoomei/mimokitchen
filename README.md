# MimoKitchen — Fridge to Recipe · AI Chef

> Tell MimoKitchen what's in your fridge. Get three recipes — fast, fancy, healthy — each with steps, prep time, and leftover ideas.

**Live:** [gyoomei.github.io/mimokitchen](https://gyoomei.github.io/mimokitchen/)

## What it does

Paste a comma-separated list of ingredients (or click pantry chips). Pick optional filters — under 20 min, vegetarian, halal, vegan, gluten-free, low-carb. Get three distinct recipes back:

1. **Fast lane** — under 20 minutes, weeknight pace
2. **Slow craft** — weekend project, deeper technique
3. **Light and bright** — vegetable-forward, lower calorie

Each recipe includes:
- Recipe name + evocative tagline
- Total time, servings, difficulty
- Step-by-step instructions (5 steps, action verbs first)
- 2 chef tips (substitution, technique, finish)
- Ingredients you already have (✓) and need to add (+)
- Leftover reuse idea

## Five-stage agent pipeline

1. **Pantry parser** — normalizes your messy comma-separated input into a clean grocery list (chips with × to remove)
2. **Cuisine detector** — pattern-matches your ingredients against six cuisine fingerprints (Italian, Japanese, Indonesian, Mexican, Asian, South Asian, Mediterranean)
3. **Three chefs** — Xiaomi MiMo V2.5 generates three distinct recipes in parallel, each with its own register
4. **Step formatter** — validates JSON schema, splits prep vs cook, calculates total time, marks ingredients you have vs need
5. **Leftover agent** — suggests one creative reuse per recipe so nothing goes to waste

## Stack

- Single HTML + vanilla JS (no framework)
- [Pollinations.ai](https://pollinations.ai) for MiMo V2.5 access (free, no key)
- Bilingual EN ↔ ID with full coverage (hero, scan card, recipe pane, pipeline, footer all translate)
- Light/dark theme with persistent localStorage
- Fully fluid responsive — 320px to 1920px+, zero horizontal overflow
- Museum-light aesthetic — Fraunces serif + Inter + JetBrains Mono, cream + tomato + basil + turmeric palette

## Why MimoKitchen

Existing recipe tools either:
- Gate behind sign-up (Yummly, Eat This Much)
- Generate one recipe at a time (no decision tree)
- Show ad-laden walls of irrelevant content (recipe blogs)
- Don't filter for what you actually have

MimoKitchen returns three options instantly, free, no signup, no upload. Ingredient list never leaves the page except as a prompt.

## License

MIT

## Powered by

[Xiaomi MiMo V2.5](https://huolinger010.github.io/mimoorbit/) · [Pollinations.ai](https://pollinations.ai) · [Hermes Agent](https://hermes-agent.nousresearch.com/)
