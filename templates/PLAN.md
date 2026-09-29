# PLAN: <Project Name>

> **Purpose of this document:** decide *how* and *in what order* the specification gets built.
> **Input:** an approved `SPECIFICATION.md`.
> **Companion:** `BACKLOG.md` holds the granular, changing task list. `PLAN.md` holds the
> shape of the work: architecture, milestones, sequence, risks.
> **Rule of thumb:** if it changes weekly, it belongs in the backlog. If it changes the
> shape of the project, it belongs here.

| Field | Value |
| --- | --- |
| Status | `Draft` / `In review` / `Approved` |
| Spec version | 0.1.0 |
| Author | |
| Reviewer(s) | |
| Last updated | YYYY-MM-DD |

---

## 1. Approach in one paragraph

How are we going to build this, in plain language? What is the strategy —
thinnest possible slice first? Fake the hard part until the idea is proven?

## 2. Technical decisions

Record the decision **and the reason**. Future-you will ask "why did I pick that?"

| # | Decision | Chosen option | Why | Alternatives rejected |
| --- | --- | --- | --- | --- |
| D-01 | Hosting | GitHub Pages | free, already using GitHub | Netlify, Vercel |
| D-02 | Language / framework | | | |
| D-03 | Data storage | | | |
| D-04 | Authentication | | | |
| D-05 | Testing approach | | | |

## 3. Architecture

Describe the pieces and how they talk to each other. A simple diagram beats paragraphs.

```text
[ Browser ] --> [ Static site on GitHub Pages ]
                      |
                      v
              [ Data file / API ]
```

**Components:**

| Component | Responsibility | Notes |
| --- | --- | --- |
| | | |

## 4. Repository layout

```text
repo/
├─ README.md
├─ CONCEPT-IDEA.md
├─ SPECIFICATION.md
├─ PLAN.md
├─ BACKLOG.md
├─ docs/            # published site (GitHub Pages)
└─ src/             # application code
```

## 5. Milestones

Each milestone must end with something you can *show a person*. "Set up the database"
is not a milestone; "you can add an item and see it in the list" is.

| # | Milestone | Demonstrable outcome | Covers | Target date |
| --- | --- | --- | --- | --- |
| M0 | Walking skeleton | Empty page deployed at the real URL | — | |
| M1 | | | US-01, US-02 | |
| M2 | | | US-03 | |
| M3 | v1 release | Definition of done met | all `Must` | |

## 6. Sequence and dependencies

What must happen before what, and why.

```text
M0 ──> M1 ──> M2 ──> M3
        └──> (parallel) docs + dashboard
```

- `M1` blocks `M2` because ...
- `<task>` needs `<account/access>` — request it by `<date>`

## 7. Environments and deployment

| Environment | URL | Deployed from | Who can deploy |
| --- | --- | --- | --- |
| Local | http://localhost:____ | working copy | you |
| Production | https://<user>.github.io/<repo>/ | `main` branch | GitHub Actions |

**Deployment steps:** how a change gets from your laptop to the public URL.

## 8. Quality bar

- **Definition of ready:** a backlog item is ready when it has acceptance criteria and
  references a spec requirement.
- **Definition of done (per item):** implemented, self-tested against acceptance
  criteria, reviewed, merged to `main`, visible in production.
- **Testing:** what gets tested automatically vs. manually.
- **Review:** every change goes through a pull request; AI-generated code is read line by
  line before merge.

## 9. Risks

| # | Risk | Likelihood | Impact | Mitigation | Trigger to act |
| --- | --- | --- | --- | --- | --- |
| R-01 | | L/M/H | L/M/H | | |
| R-02 | Scope creep | H | H | Anything new goes to `BACKLOG.md` under "Later" | a new idea arrives mid-milestone |

## 10. Rough effort and schedule

| Milestone | Estimated effort | Calendar |
| --- | --- | --- |
| M0 | 2 h | week 1 |
| M1 | | |

Add a buffer: multiply your first estimate by 1.5. You will be glad you did.

## 11. What we will do if we run out of time

Ordered list of what gets cut, decided *now*, while nobody is panicking.

1. Cut ...
2. Cut ...
3. Ship with ... as a manual step

---

## Reviewer sign-off

- [ ] Every milestone ends in something demonstrable
- [ ] Every `Must` story from the spec appears in at least one milestone
- [ ] Technical decisions include reasons, not just choices
- [ ] Dependencies and blockers are identified with dates
- [ ] Risks have mitigations that are actually actionable
- [ ] The schedule is plausible for the stated hours per week
- [ ] The "run out of time" cut list exists

**Verdict:** `Approved` / `Approved with changes` / `Needs rework`

**Reviewer notes:**

>
