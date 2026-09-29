# CLAUDE.md / AGENTS.md — project memory for terminal AI agents

> Copy this to `CLAUDE.md` (Claude Code) or `AGENTS.md` (OpenAI Codex CLI and several
> other agents) at your repository root. Both tools read these automatically at the start
> of a session. Keep it short — it is prepended to every conversation.

## Project

<Name> — <one sentence about what it is and who it's for>.

Source of truth, in precedence order: `SPECIFICATION.md` → `PLAN.md` → `BACKLOG.md`.
`CONCEPT-IDEA.md` explains the why. Do not contradict an approved document; raise a
conflict instead.

## Commands

```bash
# run locally
<e.g. npx serve docs>

# checks before opening a pull request
<e.g. npx markdownlint "**/*.md">
```

## Conventions

- Language/stack: <e.g. static HTML/CSS/JS in docs/, no build step>
- Commit style: `docs:` / `feat:` / `fix:` / `chore:`, referencing the backlog ID
- One backlog item per branch and pull request
- Documents follow the templates in `templates/`; don't restructure them

## Rules

- Never commit secrets, API keys, or personal data.
- Don't invent facts, package names, or citations — verify or say you don't know.
- Change only what the current task needs.
- Run the mechanical work for me — Git, installs, builds, deploys — but show me each
  command first and explain it in one plain sentence. I don't want to type in the terminal.
- After a change, state how to verify it against the item's acceptance criteria.
- Ask before adding a dependency, a new service, or anything that costs money.
- Explain your reasoning in plain language; I am still learning.

## Context I keep forgetting to mention

- This must run entirely on free tiers.
- The reviewer is <name>; documents get approved by pull request review.
- Deadline: <date>. Weekly time available: <hours>.
