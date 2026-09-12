# Lovable AI Design System

A Lovable-oriented design system concept built with the existing NES.css component primitives.

This repository reimagines the documentation and demo experience around AI-native product surfaces: prompt composers, agent status panels, review flows, usage dashboards, and human-in-the-loop controls. The published package remains `nes.css`; the Lovable-specific layer shown here comes from documentation patterns, composition examples, and demo styling in this repo.

## What this demo is for

- AI chat and prompt composition interfaces
- Agent workflow monitoring and approval steps
- Model selection, guardrails, and confidence states
- Evaluation dashboards, usage summaries, and launch checklists

## Design principles

- **Guided autonomy** — always show what the AI is doing, what happens next, and where a human can step in.
- **Clear feedback** — success, warning, and error states should be visible at a glance.
- **Composable patterns** — primitives should combine into assistants, copilots, queues, and review tools.
- **Fast trust building** — every critical action should expose status, provenance, and approvals.

## Core UI patterns

- **Prompt composer** with model, mode, and action controls
- **Conversation surfaces** for user requests, assistant responses, and reviewer comments
- **Agent run cards** with stage, health, and confidence signals
- **Approval workflows** for publish, rollback, and escalation moments
- **Operational dashboards** for throughput, acceptance rate, and response latency

## Installation

### Styles

Use the package through npm, Yarn, or a CDN.

#### via package manager

```shell
npm install nes.css
# or
yarn add nes.css
```

#### Sass / SCSS

```scss
@import "./node_modules/nes.css/css/nes.css";
```

#### JavaScript

```js
import "nes.css/css/nes.min.css";
```

#### HTML

```html
<link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
```

#### via CDN

```html
<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

## Usage

The framework remains CSS-only and intentionally layout-agnostic. Use the base `nes.css` primitives to assemble Lovable-flavored product experiences such as:

- AI feature launchpads
- Workspace copilots
- Team review consoles
- Experiment and eval scorecards
- Safe automation dashboards

The live docs in `/docs` demonstrate these patterns with Lovable-flavored content and interaction states; they do not ship as additional compiled package assets.

## Browser support

Compatible with the newest versions of Chrome, Firefox, and Safari.

## License

Code released under the MIT License. Documentation released under Creative Commons.

## Development

```shell
npm install
npm run build
```
