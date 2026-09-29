# Prompt pack — drafting your project documents with AI

Copy each prompt into GitHub Copilot Chat (VS Code), Claude Code, or ChatGPT/Codex.
Run them **in order**. Do not skip the human review between stages.

Two habits that make these prompts work far better:

1. **Attach the previous document** as context (in VS Code Chat: `#file:CONCEPT-IDEA.md`).
2. **Make the AI interview you.** The first prompt deliberately forbids the model from
   writing the document until it has asked you questions. That is where the value is.

---

## 1 — CONCEPT-IDEA.md

```text
You are helping me turn a rough idea into a CONCEPT-IDEA.md document.

My rough idea: <describe it in two or three sentences, however messy>

Before writing anything, interview me. Ask me up to 10 questions, one at a time,
focused on: who has this problem, evidence it is real, what people do today instead,
what success would look like in numbers, my time and budget constraints, and what I am
deliberately NOT building.

After the interview, fill in the CONCEPT-IDEA.md template in my repository using only what
I told you. Rules:
- Do not invent facts, statistics, market sizes, or citations. If something needs
  research, add it to the "Open questions" section instead of guessing.
- Mark anything you inferred rather than heard from me with "(inferred)".
- Keep the language plain enough for someone outside my field.
- Make the out-of-scope section genuinely restrictive.
```

## 2 — SPECIFICATION.md

```text
Using the approved #file:CONCEPT-IDEA.md, draft SPECIFICATION.md following the
SPECIFICATION.md template in my repository.

Rules:
- Every "Must" user story must have at least one numbered functional requirement.
- Every functional requirement needs Given/When/Then acceptance criteria.
- Specify empty states, error states, and permissions for each screen.
- Define the data model so it supports every screen you described, with no unused fields.
- Do not choose frameworks or libraries — that belongs in PLAN.md.
- Where the concept document left a question open, carry it into "Open questions"
  rather than inventing an answer.
- Flag anything that looks larger than my stated constraints, and propose what to cut.

Then list the three places you were least certain, and what you'd need from me to resolve them.
```

## 3 — PLAN.md

```text
Using #file:SPECIFICATION.md, draft PLAN.md following the PLAN.md template in my repository.

Constraints: I have <hours> per week for <weeks>, a budget of <amount>, and my
experience level is <beginner/intermediate>.

Rules:
- Milestone 0 must deploy something real (even an empty page) to the production URL.
- Every milestone ends in an outcome I could demo to a person in under a minute.
- Record each technical decision with the reason and the alternatives rejected.
- Prefer the simplest technology that satisfies the spec; justify anything that adds
  a new account, service, or cost.
- Estimate effort, then add a 50% buffer, and say so.
- Include the ordered list of what gets cut if I run out of time.
```

## 4 — BACKLOG.md

```text
Using #file:SPECIFICATION.md and #file:PLAN.md, generate BACKLOG.md following the
BACKLOG.md template in my repository.

Rules:
- Only milestone M0 and M1 tasks go in "Now"; everything else goes in "Next" or "Later".
- Every task references a spec ID (US-xx / FR-xx) or is marked as infrastructure.
- Split anything larger than a few hours into smaller tasks.
- Tasks in "Now" need Given/When/Then acceptance criteria.
- Order "Now" so the top item is the single most valuable next action.
- Do not include tasks whose outcome is "research" without a concrete deliverable.
```

## 5 — Ask for a critical review (before the human review)

```text
Review #file:CONCEPT-IDEA.md #file:SPECIFICATION.md #file:PLAN.md #file:BACKLOG.md
as a skeptical senior engineer and a skeptical product manager.

Report, as a table: the 10 most significant problems, ranked by impact, with the
document, the section, why it matters, and a concrete fix. Focus on:
- Unverifiable or invented claims
- Requirements that cannot be tested
- Missing failure paths, empty states, privacy or accessibility considerations
- Scope that does not fit my stated time budget
- Tasks that will turn out to be much larger than estimated

Do not praise the documents. Do not rewrite them. Just find the problems.
```

## 6 — Research prompt (needs the Tavily MCP server)

```text
Using the Tavily tools, research <topic> as it relates to #file:SPECIFICATION.md.

For each finding, give me: the claim, the source URL, the publication date, and how
confident you are. Prefer primary sources and official documentation. Explicitly tell me
where sources disagree or where you found nothing. Then summarise what this means for
my specification, and list any changes I should make.
```

## 7 — Implementation prompt (per backlog item)

```text
Implement #T-00x from #file:BACKLOG.md.

Context: #file:SPECIFICATION.md (see FR-xx) and #file:PLAN.md (architecture section).

Rules:
- Change only what this task requires. No refactoring of unrelated code.
- Follow the technical decisions already recorded in PLAN.md — if you disagree, say so
  and stop rather than silently choosing something else.
- No secrets or API keys in code; use environment variables.
- After the change, tell me exactly how to verify it against the acceptance criteria.
- Then list anything you did that I should double-check.
```

## 8 — Keep the documents alive

```text
I just finished T-00x. Update BACKLOG.md: move it to Done with today's date and the PR
number, and re-order "Now" if priorities changed. If what I actually built differs from
SPECIFICATION.md, list the differences and propose the exact edits to the spec — do not
edit the spec silently.
```

---

## Prompting habits worth keeping

| Habit | Why |
| --- | --- |
| Make it interview you first | You get *your* project, not the model's average project |
| Say "do not invent — ask instead" | Dramatically reduces confident fabrication |
| Ask for the three least certain parts | Gives the human reviewer a place to start |
| Attach the previous document | Keeps the chain of documents consistent |
| Ask "what did you change and why?" after edits | Stops silent scope drift |
| Never merge code you cannot explain | The point is that *you* are responsible for it |
