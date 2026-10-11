# Decision-model recommendation: a project-discovery checkpoint

Date: 2026-10-11. Status: documentation proposal; no runtime change.
Scope: this repository's startup workflow. Public sources only.

## Existing workflow and useful insertion point

Reviewed [README](https://github.com/Ethical-Tech-CoLab/project-startup-guide/blob/bebbb08d23ee22c6bf7099a165024c955cb7156b/README.md),
revision `bebbb08d23ee22c6bf7099a165024c955cb7156b`.
This is a README-led assessment.

The guide begins with concept, specification and plan/backlog, then human
review before building. The dashboard embeds source templates/prompt material
through a build process.

Add an optional decision-opportunity checklist during specification review,
not a model call that automatically selects the project architecture. Jev is
not the generative model that writes the student's code or documentation.

## Checklist and copy-ready prompt

> Inspect this project's instructions, architecture, actual code paths and
> tests. Identify bounded semantic decisions currently using generative LLMs
> or fragile heuristics. For each cite a path and function; define input,
> typed output and unknown/no-fit behavior; identify deterministic checks
> that must stay in code; compare rules, a local classifier and approved
> decision-model APIs; define labeled tests, calibration, latency, complete
> cost and rollback. Do not change files or call model APIs yet. State when
> there is no useful fit. Produce DECISION-MODEL-RECO.md for human review.

Review questions:

- Could a parser, formula or exact identifier solve this more reliably?
- Is the proposed output bounded, rather than code or prose generation?
- What source data may leave the project, and to which endpoint?
- What is the consequence of a confident wrong answer?
- What accepted work does the new call actually replace?
- Who approves labels, error bounds and a reversible pilot?

## Starter resources

The [official TypeSafe coding-agent guide](https://docs.typesafe.ai/introduction/coding-agents.md)
and [agent skill](https://docs.typesafe.ai/agent-skill.md) already provide
codebase-discovery and cookbook prompts. Link and review them; do not silently
install external agent instructions across student projects.

Use Jev for a bounded-decision experiment, Microsoft-Decision-1 when an approved
Foundry environment is the appropriate endpoint, or Sage as another measured
candidate. Do not prescribe a commercial provider before privacy, task and
cost requirements are known. Their exact proprietary models are not available
for local inference; simple rules or licensed local classifiers are valid
starting points.

## Evaluation and implementation scope

Test the checklist on representative projects with both useful opportunities
and deliberate no-fit cases. Human reviewers should assess path accuracy,
preservation of constraints, unsupported claims, label feasibility, effort and
whether the proposal would actually reduce accepted-task cost.

Hard gate: human review remains mandatory; suggestions do not authorize
deployment, accounts, purchases or egress. No benchmark or saving has been
measured by this proposal.

If adopted, edit the source prompt/template and regenerate the dashboard
through its existing build rather than editing embedded generated output.
This standalone recommendation changes neither templates nor the dashboard.
