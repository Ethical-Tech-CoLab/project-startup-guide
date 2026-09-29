# REVIEW-CHECKLIST: human review of AI-assisted project documents

> **Who this is for:** the human reviewing `CONCEPT-IDEA.md`, `SPECIFICATION.md`,
> `PLAN.md`, and `BACKLOG.md` after they were drafted with AI assistance.
> **Time needed:** 20–40 minutes per document. Do not skim. The whole value of the
> workflow is that a person catches what the model confidently got wrong.

Record the review in the document's sign-off section and, ideally, as comments on a pull request.

---

## Universal checks (apply to every document)

### Accuracy

- [ ] Every factual claim (price, limit, capability, API, statistic) is verified or marked unverified
- [ ] No invented product names, features, endpoints, or citations
- [ ] Links resolve, and point at what the text says they point at
- [ ] Anything time-sensitive says *when* it was checked

### Gaps

- [ ] Nothing is described only in the positive case — failure paths exist
- [ ] Things the document *should* mention but doesn't (privacy, cost, accessibility, maintenance)
- [ ] Sections that are still template placeholders (`<...>`, `TBD`, empty table rows)

### Honesty

- [ ] Confident language is backed by evidence; guesses are labelled as guesses
- [ ] Effort estimates are plausible for the person actually doing the work
- [ ] The scope matches the stated time and budget

### Consistency

- [ ] Terms mean the same thing in every document
- [ ] Nothing contradicts a previously approved document
- [ ] IDs (`US-xx`, `FR-xx`, `T-xxx`) are used consistently and actually exist

### Voice

- [ ] A non-expert could read it and follow the argument
- [ ] The author could defend every sentence — nothing was pasted in unread

---

## CONCEPT-IDEA.md

- [ ] The problem is stated without the solution baked into it
- [ ] The user is a specific group, not "everyone"
- [ ] Evidence exists that the problem is real (even anecdotal — but stated as such)
- [ ] Success criteria are measurable and time-bound
- [ ] Out-of-scope list meaningfully narrows v1
- [ ] Risky assumptions are flagged
- [ ] **Ask out loud:** "What would make this project pointless?" Is that answered?

## SPECIFICATION.md

- [ ] Each `Must` story maps to functional requirements
- [ ] Each requirement has acceptance criteria you could demo against
- [ ] Data model supports every screen; every field is actually used somewhere
- [ ] Empty, loading, and error states are described
- [ ] Permissions are explicit for every role
- [ ] Privacy: what personal data is collected, why, and how it's deleted
- [ ] Non-functional requirements are testable, not aspirational adjectives
- [ ] **Ask out loud:** "Could someone build the wrong thing and still satisfy this document?"

## PLAN.md

- [ ] Milestones end in demonstrable outcomes, not activities
- [ ] Milestone 0 deploys something real, however empty
- [ ] Technical decisions record *why*, and mention what was rejected
- [ ] Dependencies on other people/accounts have dates and owners
- [ ] Risks have concrete mitigations and a trigger for acting on them
- [ ] There is an explicit "if we run out of time, we cut this" list
- [ ] **Ask out loud:** "What is the riskiest assumption, and does the plan test it early?"

## BACKLOG.md

- [ ] The top item in `Now` is unambiguously the next thing to do
- [ ] Items are small (finishable in a sitting) and reference the spec
- [ ] Nothing in `Now` is a vague heading like "build the backend"
- [ ] Blocked items name a person and a date
- [ ] New ideas went to `Later` rather than quietly expanding the current milestone
- [ ] **Ask out loud:** "If I disappeared for a week, could someone pick this up?"

---

## Red flags that mean "send it back"

| Signal | Why it matters |
| --- | --- |
| Long, fluent prose with no specifics | Typical AI filler; no decisions were actually made |
| Requirements with no acceptance criteria | Cannot be verified, so it will be declared "done" arbitrarily |
| Every risk mitigated by "we will be careful" | Not a mitigation |
| Estimates in round numbers with no basis | Nobody thought about the work |
| Screens with no empty/error state | The demo will look great and the product will break |
| A citation you cannot find | Possibly fabricated — verify or delete |
| The author cannot explain a section in their own words | They did not review what the AI wrote |

---

## How to give the feedback

1. **Separate blocking from non-blocking.** Prefix comments with `BLOCKING:` or `NIT:`.
2. **Ask questions rather than dictating** where the author has more context.
3. **Say what "good" looks like** for anything you reject.
4. **Give a verdict**: `Approved` / `Approved with changes` / `Needs rework`.
5. **Timebox rework**: name a date for the next review.

**Reviewer:** ______________________  **Date:** ____________  **Document:** ____________

**Verdict:** `Approved` / `Approved with changes` / `Needs rework`
