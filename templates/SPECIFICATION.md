# SPECIFICATION: <Project Name>

> **Purpose of this document:** define *what the system does* precisely enough that two
> different people (or two different AI agents) would build roughly the same thing.
> **Input:** an approved `CONCEPT-IDEA.md`.
> **Output:** the source of truth for `PLAN.md` and `BACKLOG.md`.
> **Rule:** describe behaviour, data, and rules — not implementation details you haven't decided yet.

| Field | Value |
| --- | --- |
| Status | `Draft` / `In review` / `Approved` |
| Concept doc | [CONCEPT-IDEA.md](./CONCEPT-IDEA.md) |
| Author | |
| Reviewer(s) | |
| Version | 0.1.0 |
| Last updated | YYYY-MM-DD |

---

## 1. Summary

Two or three sentences restating the approved concept, so this document stands alone.

## 2. Goals and non-goals

**Goals (v1 must achieve):**

1.
2.
3.

**Non-goals (explicitly not in v1):**

1.
2.

## 3. Users and permissions

| Role | Can do | Cannot do |
| --- | --- | --- |
| Visitor (not signed in) | | |
| Standard user | | |
| Admin / owner | | |

## 4. User stories

Write these as: **As a `<role>`, I want `<capability>`, so that `<benefit>`.**
Give every story an ID — `PLAN.md` and `BACKLOG.md` will reference these IDs.

| ID | Story | Priority |
| --- | --- | --- |
| US-01 | As a ..., I want ..., so that ... | Must |
| US-02 | | Must |
| US-03 | | Should |
| US-04 | | Could |

## 5. Functional requirements

Numbered, testable statements. Each one should be answerable with yes/no after a demo.

| ID | Requirement | Story | Acceptance criteria |
| --- | --- | --- | --- |
| FR-01 | The system shall ... | US-01 | Given ..., when ..., then ... |
| FR-02 | | | |
| FR-03 | | | |

## 6. Screens / interface

For each screen or view: what it shows, what a user can do, and what happens next.

### 6.1 <Screen name>

- **Purpose:**
- **Key elements:**
- **Actions available:**
- **Empty state:** (what it looks like with no data — do not skip this)
- **Error state:**

## 7. Data model

What information is stored, and what each field means. Keep it in plain language.

### Entity: `<Name>`

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| id | string | yes | unique identifier |
| | | | |

**Relationships:** `<Entity A>` has many `<Entity B>` ...

**Retention / deletion:** how long data is kept, and how a user deletes theirs.

## 8. Business rules and edge cases

Rules that are not obvious from the screens.

- What happens on duplicate entries?
- What happens when a required external service is down?
- What are the limits (max upload size, max items, rate limits)?
- What happens to existing data when a user is removed?

## 9. Non-functional requirements

| Category | Requirement |
| --- | --- |
| Performance | e.g. pages load in under 2 seconds on a phone |
| Accessibility | e.g. keyboard navigable; meets WCAG 2.1 AA colour contrast |
| Devices / browsers | e.g. current Chrome, Edge, Safari; mobile responsive |
| Privacy | e.g. no personal data beyond email; no third-party trackers |
| Security | e.g. secrets never committed; auth required for write actions |
| Cost | e.g. must run entirely on free tiers |
| Availability | e.g. best-effort; static hosting |

## 10. External dependencies

| Service | Used for | Account needed | Cost | Fallback if unavailable |
| --- | --- | --- | --- | --- |
| GitHub | source + hosting | yes | free | — |
| | | | | |

## 11. Definition of done (for the whole v1)

- [ ] All `Must` stories implemented and demonstrated
- [ ] Deployed at a public URL
- [ ] README explains how to run it and how to contribute
- [ ] No secrets in the repository
- [ ] A person who has never seen it can complete the happy path unaided

## 12. Open questions carried forward

| ID | Question | Owner | Needed by |
| --- | --- | --- | --- |
| OQ-01 | | | |

---

## Reviewer sign-off

- [ ] Every `Must` story has at least one functional requirement
- [ ] Every functional requirement has testable acceptance criteria
- [ ] The data model covers everything the screens display
- [ ] Empty states, error states, and edge cases are specified
- [ ] Non-functional requirements are realistic for the time and budget available
- [ ] Nothing here contradicts the approved `CONCEPT-IDEA.md`
- [ ] Scope still fits the stated constraints — if not, say what gets cut

**Verdict:** `Approved` / `Approved with changes` / `Needs rework`

**Reviewer notes:**

>
