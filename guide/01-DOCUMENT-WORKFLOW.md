# 1 — The four-document workflow

> The whole method in one line: **think in documents, review with a human, then build.**

Most beginner projects fail in the same way — they start with code. Somebody opens an
editor, asks an AI to "build me an app", gets 800 lines back, and then spends three weeks
discovering that nobody agreed on what the app was supposed to do.

This workflow puts four short documents in front of the code. They are cheap to write,
cheap to throw away, and they are the artefacts a human reviews.

---

## The pipeline

```text
   💡                 📐                  🗺️                  ✅                  🔨
CONCEPT-IDEA  →  SPECIFICATION  →  PLAN + BACKLOG  →  human review  →  build
  (why/what)      (what exactly)    (how / in what        (gate)        (the easy part)
                                        order)
      ▲                 ▲                  ▲                                    │
      └─────────────────┴──────────────────┴────────────────────────────────────┘
                     documents get updated as you learn
```

Each document answers one question, and only that question.

| Document | Answers | Typical length | Gate before moving on |
| --- | --- | --- | --- |
| `CONCEPT-IDEA.md` | Why does this deserve to exist, and for whom? | 1–2 pages | Human confirms the problem is real and scope is narrow |
| `SPECIFICATION.md` | What exactly does it do? | 3–6 pages | Human confirms it is testable and complete |
| `PLAN.md` | How will we build it and in what order? | 2–4 pages | Human confirms milestones are demonstrable and realistic |
| `BACKLOG.md` | What is the very next task? | living list | Human confirms priorities and sizes |

> **`PLAN.md` or `BACKLOG.md`?** Use both if the project runs longer than a couple of
> weeks: the plan holds the shape (architecture, milestones, risks), the backlog holds
> the churn (tasks, bugs, questions). For a weekend project, `BACKLOG.md` alone is fine.

---

## Why this order matters

- **Concept before specification** stops you specifying the wrong product beautifully.
- **Specification before plan** stops you choosing a database before you know what data exists.
- **Plan before backlog** stops the backlog becoming a random list of chores.
- **Documents before code** means mistakes cost a paragraph, not a weekend.

There is also an AI-specific reason. A language model will happily fill any gap you leave
with a plausible invention. A specification with acceptance criteria gives the model a
target it can be checked against — and gives *you* the ability to say "this is wrong"
with evidence.

---

## How each stage actually runs

> Everything below happens in **VS Code Copilot Chat, Agent mode**. When a stage says
> "commit it, open a pull request", that is a sentence you type into chat — see the
> [operations prompts](../prompts/PROMPT-PACK.md#operations-prompts--the-terminal-work-you-never-have-to-type).

### Stage 1 — Concept (30–60 minutes)

1. Copy [`templates/CONCEPT-IDEA.md`](../templates/CONCEPT-IDEA.md) into your repo root —
   or ask your agent to fetch it for you.
2. Open Copilot Chat and run prompt #1 from the [prompt pack](../prompts/PROMPT-PACK.md).
3. **Let the AI interview you.** Answer in your own words, messily. This is the step
   people skip and it is the step that makes the project yours.
4. Have it draft the document. Then read every line and rewrite anything that isn't true.
5. Ask the agent to commit it and open a pull request (prompt O4). Request a human review.

### Stage 2 — Specification (1–2 hours)

1. Copy [`templates/SPECIFICATION.md`](../templates/SPECIFICATION.md).
2. Run prompt #2 with `CONCEPT-IDEA.md` attached as context.
3. Push hard on three things the AI is bad at unprompted: **empty states, error states,
   and permissions**.
4. Ask it for "the three places you were least certain". Resolve those yourself.
5. Commit, PR, human review.

### Stage 3 — Plan and backlog (1 hour)

1. Copy [`templates/PLAN.md`](../templates/PLAN.md) and [`templates/BACKLOG.md`](../templates/BACKLOG.md).
2. Run prompts #3 and #4.
3. Sanity-check the estimates yourself — models are chronically optimistic.
4. Make sure milestone 0 deploys something real. An empty page at a public URL on day
   one removes an entire category of late-project panic.
5. Commit, PR, human review.

### Stage 4 — Human review (the gate)

Use [`templates/REVIEW-CHECKLIST.md`](../templates/REVIEW-CHECKLIST.md). See
[4 — Human review](./04-HUMAN-REVIEW.md) for how to run the session.

### Stage 5 — Build

Work top-down through `BACKLOG.md`, one item per branch, one pull request each.
After each item, update the backlog. When reality diverges from the spec, **update the
spec** — a stale specification is worse than none.

---

## The rhythm after the first week

| When | What you do |
| --- | --- |
| Start of a work session | Read the top of `Now` in `BACKLOG.md`. Pick one item. |
| During | One branch, one pull request, small commits. |
| End of session | Move finished items to `Done`. Add anything new to `Later`. |
| Weekly | Groom the backlog. Update `PLAN.md` if the shape changed. |
| At each milestone | Demo it to a person. Record what they said. |

---

## Anti-patterns

| Anti-pattern | What to do instead |
| --- | --- |
| Writing all four documents in one AI session without reading them | One stage, one review, one commit |
| A specification that describes the UI framework | Move it to `PLAN.md` — the spec describes behaviour |
| A backlog item called "build the app" | Split until every item fits in one sitting |
| Letting the AI silently edit an approved document | Ask for proposed diffs; you decide |
| Skipping the human review because the documents "look good" | Fluent prose is exactly what a model produces when it knows nothing |
| Adding features mid-milestone | Put them in `Later`. They'll still be there next week. |

---

**Next:** [2 — Tooling setup](./02-TOOLING-SETUP.md)
