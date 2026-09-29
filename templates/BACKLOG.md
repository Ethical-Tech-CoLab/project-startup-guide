# BACKLOG: <Project Name>

> **Purpose of this document:** the living, ordered list of work. One line per item,
> small enough to finish in a sitting, traceable back to the specification.
> **Input:** `SPECIFICATION.md` (what) + `PLAN.md` (order).
> **Rule:** the top of `Now` is always the next thing you pick up. If you can't tell what
> to work on next, the backlog isn't prioritised yet.

| Field | Value |
| --- | --- |
| Last groomed | YYYY-MM-DD |
| Current milestone | M__ |

---

## How to read this file

- **ID** — stable identifier, e.g. `T-014`. Never reuse an ID.
- **Ref** — the spec requirement or story this serves (`FR-03`, `US-01`). Items with no
  reference are suspect: either add the reference or question the item.
- **Size** — `S` (< 1 h), `M` (a few hours), `L` (a day or more — usually should be split).
- **Status** — `todo` / `doing` / `blocked` / `review` / `done`.
- Items in `Now` must have acceptance criteria. Items in `Later` may be one-liners.

---

## 🔥 Now — current milestone

| ID | Task | Ref | Size | Status | Acceptance criteria |
| --- | --- | --- | --- | --- | --- |
| T-001 | | US-01 | S | todo | Given ..., when ..., then ... |
| T-002 | | FR-02 | M | todo | |
| T-003 | | | S | todo | |

## ⏭️ Next — the milestone after this one

| ID | Task | Ref | Size | Notes |
| --- | --- | --- | --- | --- |
| T-010 | | US-03 | M | |
| T-011 | | | S | |

## 🧊 Later — ideas, nice-to-haves, out-of-scope-for-now

Anything that arrives mid-milestone lands here, not in `Now`.

| ID | Task | Ref | Why not now |
| --- | --- | --- | --- |
| T-050 | | — | out of scope for v1 |

## ⛔ Blocked

| ID | Task | Blocked by | Since | Who can unblock |
| --- | --- | --- | --- | --- |
| | | | | |

## ✅ Done

Keep this — it is your progress log and your demo script.

| ID | Task | Ref | Completed | PR |
| --- | --- | --- | --- | --- |
| T-000 | Repository created and deployed empty page | M0 | YYYY-MM-DD | #1 |

---

## 🐞 Bugs

| ID | Symptom | Steps to reproduce | Severity | Status |
| --- | --- | --- | --- | --- |
| B-001 | | 1. ... 2. ... | High/Med/Low | open |

## ❓ Questions for the reviewer

Park things here between review sessions instead of blocking.

| ID | Question | Asked | Answered |
| --- | --- | --- | --- |
| Q-01 | | YYYY-MM-DD | |

---

## Grooming checklist (run this weekly)

- [ ] Everything in `Now` is sized `S` or `M` and has acceptance criteria
- [ ] Every item in `Now` traces to a spec requirement — or has been justified
- [ ] Finished work moved to `Done` with its PR number
- [ ] Blocked items have a named person and a date
- [ ] New ideas from the week are in `Later`, not silently in `Now`
- [ ] The top item in `Now` is genuinely the most valuable next thing
