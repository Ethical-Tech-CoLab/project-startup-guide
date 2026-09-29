# 4 — The human review gate

> AI drafts. **Humans approve.** No document moves forward without a person putting their
> name on it.

This page is about *running* the review. The checklist itself lives in
[`templates/REVIEW-CHECKLIST.md`](../templates/REVIEW-CHECKLIST.md).

---

## Why a human gate exists

A language model produces confident, well-organised, grammatically perfect text
regardless of whether it knows anything about your problem. That is genuinely useful for
drafting — and genuinely dangerous as a final product. The failure modes are specific:

| Failure mode | What it looks like in these documents |
| --- | --- |
| **Fabrication** | Invented statistics, API endpoints, pricing tiers, or citations |
| **Plausible vagueness** | Three paragraphs that say nothing testable |
| **Optimism** | "This should take about two hours" for a week of work |
| **Silent scope growth** | Features nobody asked for, quietly added to the spec |
| **Missing negatives** | No empty states, no errors, no privacy, no accessibility |
| **Averaging** | Your specific project turned into a generic one |

A human reviewer catches all six. No amount of re-prompting reliably does.

---

## Who should review

Best case, two different people:

- **A domain reviewer** — understands the users and the problem. Reviews `CONCEPT-IDEA.md`
  hardest.
- **A technical reviewer** — has built and shipped something. Reviews `PLAN.md` and
  `BACKLOG.md` hardest.

If you only have one person, that's fine. If you have *nobody*, review it yourself —
but **wait 24 hours first**, and read it printed or on a different device. You will catch
things you were blind to while writing.

---

## How to run the review

### Before the session (author)

1. All documents committed on a branch, opened as a pull request.
2. Run prompt #5 from the [prompt pack](../prompts/PROMPT-PACK.md) — the AI self-critique.
   Fix the obvious problems first. Don't waste a human's time on those.
3. In the PR description, write:
   - What you want feedback on most
   - What you are least sure about
   - Anything you could not verify

### During the session (reviewer, 20–40 min per document)

1. Read the whole document once without commenting.
2. Second pass with the checklist, leaving comments in the pull request.
3. Prefix every comment:
   - `BLOCKING:` — must change before approval
   - `NIT:` — suggestion, author's call
   - `QUESTION:` — you need to understand before deciding
4. For anything rejected, say what "good" would look like.
5. Give a verdict and fill in the sign-off block in the document.

### The one question that catches the most

Pick a section — any section — and ask the author:

> **"Explain this part to me in your own words, without reading it."**

If they can't, they didn't review what the AI wrote. That's the real thing being tested.

---

## Verdicts

| Verdict | Meaning | Next step |
| --- | --- | --- |
| **Approved** | Move to the next document | Merge the PR |
| **Approved with changes** | Fix the listed items; no second review needed | Author fixes, then merges |
| **Needs rework** | Material problems; another review required | Author revises, re-requests review by a named date |

Always attach a date to rework. "I'll get to it" is how projects quietly die.

---

## Using GitHub for reviews (recommended)

Keeping reviews in pull requests gives you a permanent, dated record of who approved what
— which is also exactly how professional teams work. Ask your agent to do it:

```text
Put CONCEPT-IDEA.md up for review.

1. Create a branch called docs/concept-idea.
2. Commit the document with a clear conventional-commit message.
3. Push the branch and open a pull request against main.
4. Write the PR description for me with three sections: what I want feedback on most,
   what I am least sure about, and anything I could not verify. Base it on the document —
   and ask me if you are unsure what belongs in each section.
5. Give me the pull request URL, and tell me how to request <reviewer's username>
   as a reviewer.
```

Repeat for each document, changing the branch and file name.

<details>
<summary>The commands behind that, if you want to see them</summary>

```bash
git checkout -b docs/concept-idea
git add CONCEPT-IDEA.md
git commit -m "docs: add concept idea for <project>"
git push -u origin docs/concept-idea
```

Then on GitHub: **Pull requests → New pull request → Reviewers → request your reviewer.**

</details>

Helpful repository settings for this workflow:

- **Settings → Branches → Add branch ruleset** on `main`: require a pull request and one
  approving review. This makes the gate structural rather than a matter of discipline.
- Use the **Files changed** tab to comment on exact lines.
- Use **Suggested changes** for small wording fixes — the author can accept them in one click.

You can also ask for an AI review *in addition to* the human one (Copilot code review),
but it never replaces the human approval.

---

## Reviewing AI-written *code* later

The same gate applies during the build phase, with three additions:

- [ ] You can explain what every changed file does
- [ ] No secrets, keys, or tokens were added to the repository
- [ ] The change does what its backlog item's acceptance criteria say — you ran it

Never merge code you couldn't debug at 2 a.m. If you can't, ask the AI to explain it or
simplify it until you can.

---

## A short script for the reviewer

> "I read it once end to end, then again against the checklist.
> Blocking: items 3, 7, and the data model — it doesn't cover the export screen.
> Nits: the wording in section 2.
> Question: where did the '40% of students' figure come from?
> Verdict: approved with changes. Re-request review by Friday if the data model changes shape."

---

**Next:** [5 — Glossary for non-engineers](./05-GLOSSARY.md)
