# Copilot instructions for this project

> Copy this file to `.github/copilot-instructions.md` in your own repository and edit the
> bracketed parts. Every Copilot Chat session in the repository will follow it.

## About this project

<One or two sentences: what this project is and who it is for.>

Authoritative documents, in order of precedence:

1. `CONCEPT-IDEA.md` — why this exists and for whom
2. `SPECIFICATION.md` — what the system does (the source of truth for behaviour)
3. `PLAN.md` — architecture, milestones, and recorded technical decisions
4. `BACKLOG.md` — the ordered task list

If a request conflicts with an approved document, say so and stop rather than
silently doing something else.

## Who I am

I am <a student / new to programming>. Explain your reasoning in plain language and
define jargon the first time you use it. Teach as you go — after a change, tell me what
you did and why in two or three sentences.

## How to work with me

- Ask clarifying questions when a request is ambiguous rather than guessing.
- Do not invent facts, statistics, APIs, package names, or citations. If something needs
  verification, use the Tavily tools and give me the source URL, or tell me you don't know.
- Prefer the simplest solution that satisfies `SPECIFICATION.md`.
- Change only what the current task requires; no unrelated refactoring.
- Follow the technical decisions recorded in `PLAN.md`. If you disagree with one, argue
  for it explicitly — don't quietly pick something else.
- After any change, tell me exactly how to verify it against the task's acceptance criteria.
- Flag anything I should double-check before merging.

## Documents

- Keep documents in the existing template structure; don't reorganise sections.
- Mark anything you inferred rather than were told with "(inferred)".
- Never edit an approved document silently — propose the diff and let me decide.
- Keep `BACKLOG.md` current: finished items move to `Done` with the date and PR number.

## Code

- <Language / framework, e.g. plain HTML, CSS, and vanilla JavaScript — no build step.>
- No secrets, API keys, or tokens in the repository. Use environment variables.
- Prefer clear names over clever code; comment only where intent isn't obvious.
- Accessibility matters: semantic HTML, keyboard navigation, sufficient colour contrast.
- Everything must work on a phone-sized screen.

## Git

- Conventional commit messages: `docs:`, `feat:`, `fix:`, `chore:`.
- One branch and one pull request per backlog item, referencing its ID (e.g. `T-014`).
