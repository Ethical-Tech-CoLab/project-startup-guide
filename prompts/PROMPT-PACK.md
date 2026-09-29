# Prompt pack — drafting your project documents with AI

Copy each prompt into GitHub Copilot Chat (VS Code), Claude Code, or ChatGPT/Codex.
Run them **in order**. Do not skip the human review between stages.

> **Use Agent mode.** Everything here assumes VS Code Copilot Chat set to **Agent** — it can
> create files, run commands, use MCP servers and verify its own work. The
> [operations prompts](#operations-prompts--the-terminal-work-you-never-have-to-type)
> further down cover Git, commits, pull requests and deployment, so you never need to type
> a terminal command yourself.

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

## Operations prompts — the terminal work you never have to type

These cover the mechanics: Git, commits, pull requests, deployment, and debugging.
Run them in **Agent mode**. You read what happens; you don't type the commands.

### O1 — Set up Git

```text
Set up Git on this machine for me. I am new to this, so narrate what you are doing.

1. Check whether Git is installed. If it is not, install it using the right method for my
   operating system, and tell me what you are installing before you do it.
2. Configure my identity:
   name "<Your Full Name>", email "<the email on my GitHub account>".
3. Set the default branch name to "main".
4. Confirm I am signed in to GitHub in VS Code so pushing will work without me pasting a
   password. If I am not, tell me exactly which button to click.
5. Verify everything by printing the resulting configuration, and tell me in plain language
   what each setting means.

Do not commit anything yet.
```

### O2 — Create the project and its GitHub repository

```text
Create a new project for me called "<project-name>":

1. Make a folder for it and open it as my workspace.
2. Turn it into a Git repository on a branch called main.
3. Add a .gitignore suitable for this kind of project, so secrets and junk are never committed.
4. Add a README.md with the project name and one sentence describing it.
5. Create a matching repository on my GitHub account and push the first commit.
6. Show me the repository URL when you are done.

Tell me what each step did once it is finished.
```

### O3 — Publish a placeholder page

```text
Publish a placeholder page for this project on GitHub Pages.

1. Create docs/index.html with the project name as a heading and one sentence saying it is
   coming soon. Keep it valid, accessible HTML that works on a phone.
2. Create an empty docs/.nojekyll file, and explain to me why it is needed.
3. Commit and push everything to main.
4. Tell me the exact Settings page I need to open and the exact options to choose to turn
   Pages on, since you cannot click that for me.
5. Once I confirm I have done it, wait a minute, then fetch the live URL and verify it
   returns HTTP 200 and shows my heading. Report the URL back to me.
```

### O4 — Put a document up for review

```text
Put <DOCUMENT>.md up for review.

1. Create a branch called docs/<slug>.
2. Commit the document with a clear conventional-commit message.
3. Push the branch and open a pull request against main.
4. Write the PR description for me with three sections: what I want feedback on most,
   what I am least sure about, and anything I could not verify. Base it on the document —
   and ask me if you are unsure what belongs in each section.
5. Give me the pull request URL, and tell me how to request <reviewer's username>
   as a reviewer.
```

### O5 — Ship a finished backlog item

```text
Ship T-00x for me:

1. Create a branch named after the task.
2. Commit the changes with a conventional-commit message referencing T-00x.
3. Push, and open a pull request whose description lists the acceptance criteria and how
   each one was verified.
4. Show me the diff summary and the PR URL.
5. Once it is merged, confirm the deployment succeeded and the live site reflects the change.

If anything fails, diagnose it, tell me what went wrong in plain language, and fix it.
```

### O6 — When something breaks

```text
<Paste the error, or describe what you saw.>

Diagnose this for me:
1. What is actually wrong, in plain language — no jargon I haven't met yet?
2. What is the smallest safe fix?
3. Apply it, then verify it worked and show me the evidence.
4. Tell me what I should watch for so I can recognise this next time.

Do not change anything unrelated to this problem.
```

### O7 — Verify my setup

```text
Check my setup and give me a pass/fail table with one row per item:
1. Git is installed and my name and email are configured
2. This folder is a Git repository on branch main, with a remote on GitHub
3. I have at least one commit pushed
4. The GitHub Pages URL for this repository returns HTTP 200
5. A .gitignore exists and would prevent committing secrets

For anything that fails, fix it if you can, or tell me exactly what I need to click.
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
