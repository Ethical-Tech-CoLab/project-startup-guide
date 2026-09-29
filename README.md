# Project Startup Guide

**Think in documents. Review with a human. Then build.**

A complete starter kit for students and non-engineers beginning a project with AI
assistance: four Markdown documents to write before any code, a human review gate,
a recommended free toolchain, MCP server setup, and an interactive dashboard you can
deploy to GitHub Pages.

---

## The method in one line

```text
   💡                 📐                  🗺️                  ✅                  🔨
CONCEPT-IDEA  →  SPECIFICATION  →  PLAN + BACKLOG  →  human review  →  build
  (why/what)      (what exactly)    (how / in what        (gate)        (the easy part)
                                        order)
```

| Document | Answers | Gate before moving on |
| --- | --- | --- |
| [`CONCEPT-IDEA.md`](templates/CONCEPT-IDEA.md) | Why should this exist, and for whom? | A human confirms the problem is real and the scope is narrow |
| [`SPECIFICATION.md`](templates/SPECIFICATION.md) | What exactly does it do? | A human confirms it is testable and complete |
| [`PLAN.md`](templates/PLAN.md) | How is it built, in what order? | A human confirms milestones are demonstrable and realistic |
| [`BACKLOG.md`](templates/BACKLOG.md) | What is the very next task? | A human confirms priorities and sizes |

Documents are drafted with an AI assistant, **read and rewritten by you**, and then
reviewed by a person against [`REVIEW-CHECKLIST.md`](templates/REVIEW-CHECKLIST.md)
before anything moves forward.

---

## What's in here

```text
project-startup-guide/
├─ docs/
│  ├─ index.html                    the interactive dashboard (GitHub Pages)
│  └─ .nojekyll
├─ guide/
│  ├─ 00-START-HERE.md              read this first
│  ├─ 01-DOCUMENT-WORKFLOW.md       the four documents and how they chain together
│  ├─ 02-TOOLING-SETUP.md           GitHub, Git, VS Code, Copilot, Pages, Claude/OpenAI
│  ├─ 03-MCP-SERVERS.md             MCP explained, the starter set, safety rules
│  ├─ 04-HUMAN-REVIEW.md            how to run the review gate
│  └─ 05-GLOSSARY.md                every term, in plain language
├─ templates/                       the four documents + the reviewer's checklist
├─ prompts/PROMPT-PACK.md           eight prompts covering the whole workflow
├─ examples/                        mcp.json, copilot-instructions.md, CLAUDE.md, .gitignore
├─ tools/build-templates.mjs        embeds templates into the dashboard
└─ .github/workflows/deploy-pages.yml
```

---

## Quick start

1. Read [`guide/00-START-HERE.md`](guide/00-START-HERE.md).
2. Work through [`guide/02-TOOLING-SETUP.md`](guide/02-TOOLING-SETUP.md) — about 90 minutes, free.
3. Add the MCP servers from [`guide/03-MCP-SERVERS.md`](guide/03-MCP-SERVERS.md) — start with GitHub and Tavily.
4. Copy the four templates into your own project's repository root.
5. Run the prompts in [`prompts/PROMPT-PACK.md`](prompts/PROMPT-PACK.md), in order, one review between each.

Or open the dashboard and let it walk you through it.

---

## Publishing the dashboard

The dashboard is a single self-contained HTML file — no build step, no dependencies.

**Option A — deploy from a branch (simplest)**

1. Push this repository to GitHub.
2. Settings → Pages → **Source: Deploy from a branch**.
3. Branch `main`, folder `/docs`. Save.
4. It is live at `https://<username>.github.io/<repository>/` within a minute.

**Option B — GitHub Actions**

Set Settings → Pages → **Source: GitHub Actions**. The included
[workflow](.github/workflows/deploy-pages.yml) publishes `docs/` on every push to `main`.

**Preview it locally**

```bash
npx serve docs
# then open the printed http://localhost:3000 address
```

Opening `docs/index.html` directly from the file system also works; copy-to-clipboard
falls back to a legacy method outside a secure context.

---

## Editing the content

The dashboard embeds the templates so a visitor can copy or download them without leaving
the page. Those copies are generated — **edit the files in `templates/`, `prompts/` and
`examples/`**, then re-embed:

```bash
node tools/build-templates.mjs
```

The script injects each file into the matching `<script type="text/markdown" data-src="…">`
block in `docs/index.html`. Running it twice is safe.

---

## What the dashboard covers

| Tab | Contents |
| --- | --- |
| **Start here** | The method, the five phases, a 10-minute version |
| **1 · Tools** | GitHub, GitHub Education, Git, VS Code, Copilot, GitHub Pages, Claude Code / Codex |
| **2 · MCP servers** | What MCP is, where config lives, the starter set, safety rules, troubleshooting |
| **3 · The four documents** | What goes in each, the prompt to draft it, when it is done |
| **4 · Human review** | Who reviews, how, the checklist, verdicts |
| **5 · Build & ship** | Walking skeleton, the build loop, weekly rhythm, verification, demo |
| **Templates & prompts** | Copy or download every file in this kit |
| **Glossary** | ~70 searchable terms for non-engineers |

Progress ticks are stored in the visitor's browser (`localStorage`) — nothing is uploaded.

---

## A note on accuracy

Pricing, free tiers, student benefits and MCP server addresses change over time.
Everything here was checked when written, but verify anything that matters against the
vendor's own documentation — and teach your AI assistant to do the same, with sources.

## Licence

Use it, fork it, adapt it for your class or cohort.
