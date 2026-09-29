# 0 — Start here

Welcome. This kit exists because most first projects fail the same way: not from bad
code, but from never deciding what was being built.

You will spend the first few hours writing four short documents instead of code. That
feels slow. It is the fastest thing you can do.

---

## What you'll end up with

- A GitHub repository with four reviewed documents in it
- A live web page at a public URL, from day one
- An AI assistant wired up with real tools (search, GitHub, a browser)
- A backlog that always tells you what to do next
- A habit of having a human check the work before it becomes permanent

## What you need

- A computer you can install software on
- About 90 minutes for setup, then 3–4 hours for the documents
- One person willing to read your documents and be honest about them
- No programming experience

## How you'll work: chat first

You'll spend roughly 95% of your time in **VS Code Copilot Chat, in Agent mode**. Agent
mode doesn't just answer questions — it creates files, installs software, runs terminal
commands, commits, pushes, opens pull requests, and checks that the result actually works.

So this kit leads with prompts. Where a terminal command genuinely helps, it's included
as a collapsed fallback so you can *recognise* it, not so you have to memorise it.

Only two things need your own hands: **signing in to accounts**, and **clicking buttons in
GitHub's web settings**. An agent can't log in as you, and it shouldn't.

The pattern to internalise:

```text
<describe what you want to be true when you are done>

Do it for me: work out the steps, run whatever commands are needed, and show me each
command before you run it. Explain what each one does in one plain sentence. If anything
fails, diagnose it and try again. When you are finished, verify the result and tell me
how you verified it.
```

## The reading order

| # | Page | Time | Why |
| --- | --- | --- | --- |
| 1 | [The four-document workflow](./01-DOCUMENT-WORKFLOW.md) | 10 min | Understand the method before you use it |
| 2 | [Tooling setup](./02-TOOLING-SETUP.md) | 90 min | GitHub, Git, VS Code, Copilot, GitHub Pages |
| 3 | [MCP servers](./03-MCP-SERVERS.md) | 30 min | Give your assistant real tools |
| 4 | [Human review](./04-HUMAN-REVIEW.md) | 10 min | How the gate works, from both sides |
| 5 | [Glossary](./05-GLOSSARY.md) | skim | Every unfamiliar word, in plain language |

Then use [`prompts/PROMPT-PACK.md`](../prompts/PROMPT-PACK.md) to draft each document, and
copy the templates from [`templates/`](../templates).

Prefer clicking to reading? Open the dashboard (`docs/index.html`, or the published
GitHub Pages URL) — it contains the same material as an interactive checklist.

---

## Six rules worth adopting now

1. **Ask, don't type.** Work in VS Code Copilot Chat in **Agent mode**. It installs things,
   creates files, runs commands, commits, pushes and verifies. You describe the outcome and
   read what it does. Roughly 95% of this guide needs no terminal typing at all.
2. **Read everything the AI writes before you save it.** If you cannot explain a paragraph
   in your own words, it is not yours yet.
3. **Never commit a secret.** API keys, passwords, tokens. Add `.gitignore` first.
4. **Ship something empty on day one.** A blank page at the real URL prevents a whole
   category of late-project panic.
5. **New ideas go in `Later`.** They will still be there next week; your milestone will not.
6. **Ask a human when you have been stuck for 20 minutes.** Model confidence is not accuracy.

---

## A realistic first week

| Day | What you do |
| --- | --- |
| 1 | Accounts and tools. Push an empty page to GitHub Pages. |
| 2 | MCP servers. Draft `CONCEPT-IDEA.md` by letting the AI interview you. Open a PR. |
| 3 | Act on review feedback. Draft `SPECIFICATION.md`. Open a PR. |
| 4 | Act on review feedback. Draft `PLAN.md` and `BACKLOG.md`. Open a PR. |
| 5 | Review session. Then pick the top item in `Now` and build it. |

If day 2 takes three days, that is normal and it is still faster than rebuilding in week four.

---

**Next:** [1 — The four-document workflow](./01-DOCUMENT-WORKFLOW.md)
