# 5 — Glossary for non-engineers

Words you'll meet in the first week, in plain language. Skim it now; come back when
something confuses you.

---

## Version control and GitHub

| Term | Plain meaning |
| --- | --- |
| **Git** | A program on your computer that saves versions of your files and lets you go back |
| **GitHub** | A website that stores Git projects online and adds reviews, issues, and hosting |
| **Repository (repo)** | One project: its files plus its entire history |
| **Clone** | Download a copy of a repository onto your computer |
| **Commit** | A saved checkpoint, with a short message describing what changed |
| **Branch** | A parallel workspace where you can change things without affecting `main` |
| **Main** | The official current version of the project |
| **Merge** | Bring a branch's changes into `main` |
| **Pull request (PR)** | A request to merge, with a place to review and discuss it first |
| **Push / pull** | Send your commits to GitHub / get the latest commits from GitHub |
| **Fork** | Your own copy of someone else's repository |
| **Issue** | A ticket: a bug, a task, or a question |
| **README** | The front page of your repository — what this is and how to run it |
| **.gitignore** | A list of files Git should never save (secrets, junk, build output) |
| **Conflict** | Two people changed the same lines; a human must choose |

## Building and publishing

| Term | Plain meaning |
| --- | --- |
| **Static site** | A site made only of files (HTML/CSS/JS) with no server logic — what GitHub Pages hosts |
| **HTML / CSS / JavaScript** | Structure / appearance / behaviour of a web page |
| **Deploy** | Put your work somewhere the public can reach it |
| **GitHub Pages** | Free hosting for static sites, attached to a repository |
| **GitHub Actions** | Automation that runs when something happens (e.g. publish on every push) |
| **CI/CD** | Automatic checking and publishing of changes |
| **Environment variable** | A setting (often a secret) passed to a program without writing it in the code |
| **Localhost** | Your own computer, acting as a web server, visible only to you |
| **Responsive** | Looks right on a phone as well as a laptop |
| **Accessibility (a11y)** | Usable by people with disabilities — keyboard, screen readers, contrast |

## AI assistants

| Term | Plain meaning |
| --- | --- |
| **LLM** | Large language model — the thing that generates the text |
| **Prompt** | What you ask it |
| **Context** | Everything it can currently "see": your message, attached files, tool results |
| **Context window** | The size limit on that. Long sessions push early details out |
| **Token** | Roughly ¾ of a word; how usage and cost are measured |
| **Hallucination** | A confident, fluent, completely made-up answer |
| **Agent mode** | The AI can plan multiple steps and use tools, not just reply |
| **Tool call** | The AI asking to run something real (search, edit a file, open a browser) |
| **System / custom instructions** | Standing rules for every chat (`.github/copilot-instructions.md`, `CLAUDE.md`, `AGENTS.md`) |
| **Prompt injection** | Hidden instructions inside content the AI reads, trying to hijack it |
| **Grounding** | Giving the model real sources so it doesn't invent answers |
| **Model** | The specific brain you're using (e.g. GPT-x, Claude x) — they have different strengths |

## MCP

| Term | Plain meaning |
| --- | --- |
| **MCP** | Model Context Protocol: a standard way to plug tools into AI assistants |
| **MCP server** | One plugin — GitHub, web search, browser, filesystem |
| **MCP client** | The app using those plugins (VS Code, Claude Code, Claude Desktop) |
| **stdio server** | A plugin that runs as a program on your computer |
| **HTTP / remote server** | A plugin hosted by a vendor that you connect to by URL |
| **Tool** | One specific action a server offers (`search`, `create_issue`) |
| **API key** | A password that identifies you to a service — treat it like a password |

## Project documents

| Term | Plain meaning |
| --- | --- |
| **CONCEPT-IDEA** | Why this should exist and for whom |
| **SPECIFICATION** | Exactly what it does |
| **PLAN** | How it gets built, in what order, with what risks |
| **BACKLOG** | The ordered list of next tasks |
| **User story** | "As a *role*, I want *capability*, so that *benefit*" |
| **Acceptance criteria** | How you prove a thing is actually finished |
| **Definition of done** | The shared standard for "finished", agreed in advance |
| **Scope** | What's in and what's out |
| **Scope creep** | Scope quietly growing until nothing ships |
| **MVP** | Minimum viable product — the smallest version that's genuinely useful |
| **Milestone** | A checkpoint that ends in something you can demo |
| **Technical debt** | Shortcuts you took that you'll pay for later |
| **Blocker** | Something stopping progress that you can't fix alone |
| **Grooming** | Tidying and re-prioritising the backlog, usually weekly |

## Commands your agent will run for you

You shouldn't need to type these. They're here so that when they scroll past in the
terminal, you know what just happened.

| Command | What it does |
| --- | --- |
| `cd my-folder` | Move into a folder |
| `ls` / `dir` | List files (macOS-Linux / Windows) |
| `git status` | What have I changed? |
| `git add .` | Stage all your changes |
| `git commit -m "message"` | Save a checkpoint |
| `git push` | Upload commits to GitHub |
| `git pull` | Download others' commits |
| `git checkout -b name` | Start a new branch |
| `npm install` | Install a project's JavaScript dependencies |
| `npx <tool>` | Run a JavaScript tool without installing it permanently |
| `code .` | Open the current folder in VS Code |

Saw something you didn't recognise? Ask: *"You just ran `<command>`. Explain what it did,
whether it changed anything permanently, and how I would undo it."*

---

**Stuck on a word that isn't here?** Ask your assistant:
*"Explain `<term>` as if I've never written code, in three sentences, with an example
from a student project."*
