# 2 — Tooling setup (for people who are not engineers)

> Goal of this page: get from "I have an idea" to "I have a repository, an editor, an AI
> assistant, and a live web page" in about 90 minutes, spending nothing.

Everything below has a free option. Set things up **in this order** — later steps depend
on earlier ones.

| # | Tool | What it actually is | Time | Cost |
| --- | --- | --- | --- | --- |
| 1 | GitHub account | Where your project lives online | 10 min | Free |
| 2 | GitHub Education | Unlocks Copilot Pro and other tools for students | 10 min (+ approval wait) | Free |
| 3 | Git | The thing that saves versions of your work | 10 min | Free |
| 4 | VS Code | The editor you'll work in | 10 min | Free |
| 5 | GitHub Copilot in VS Code | AI assistant inside the editor | 10 min | Free tier / free for students |
| 6 | GitHub Pages | Publishes your page at a public URL | 15 min | Free |
| 7 | Claude Code or OpenAI Codex CLI | A second, terminal-based AI assistant | 20 min | Paid subscription or API credit |
| 8 | MCP servers | Gives your AI real tools (see [next page](./03-MCP-SERVERS.md)) | 20 min | Free / free tiers |

---

## 1. GitHub account

**What it is:** GitHub is a website that stores your project's files, keeps every version
of them, hosts discussions and reviews, and can publish your site for free.

1. Go to <https://github.com/signup>.
2. Use an email you'll keep after graduation, but **add your school email as a secondary
   address** — you'll need it for step 2.
3. Pick a username you'd be happy to put on a résumé. `hockeyfan2007` will follow you.
4. Turn on two-factor authentication when prompted (Settings → Password and
   authentication). GitHub requires it and it protects your work.
5. Set your **real full name** in Settings → Profile — student verification matches against it.

**Vocabulary you'll meet immediately:**

| Word | Plain meaning |
| --- | --- |
| Repository ("repo") | One project's folder, with history |
| Commit | A saved checkpoint with a message explaining what changed |
| Branch | A parallel copy where you work without breaking the main version |
| Pull request (PR) | "Please review these changes and merge them into main" |
| Issue | A ticket: a bug, a task, or a question |
| Main | The official, current version of the project |

## 2. GitHub Education (students)

**What it is:** a verification program that unlocks paid developer tools for free while
you're enrolled — including **GitHub Copilot Pro**.

1. Go to <https://education.github.com/pack> and click to apply as a student.
2. Sign in with the GitHub account from step 1.
3. Verify with **either** a school-issued email address (often instant) **or** an upload
   of a dated student ID, enrolment letter, transcript, or class schedule.
4. Make sure your GitHub profile name matches your documents, or it gets rejected.
5. Approval can be instant or take a few days. Apply *before* you need it.

Once approved, enable Copilot at <https://github.com/settings/copilot>.

> The benefit lasts while your student status is valid, and must be renewed. After you
> graduate, Copilot reverts to the free tier or a paid plan. Check the current terms at
> <https://docs.github.com/en/education> — student benefits change over time.

**Also in the pack** (varies over time): free domain names, cloud credits, design tools,
and learning platforms. Worth 20 minutes of browsing.

## 3. Git

**What it is:** the program on *your computer* that tracks versions. GitHub is the
website; Git is the tool. You need both.

**Windows:** download from <https://git-scm.com/download/win> and accept the defaults.
**macOS:** run `xcode-select --install` in Terminal, or install from <https://git-scm.com/download/mac>.

Then tell Git who you are (one time, in Terminal / PowerShell):

```bash
git config --global user.name "Your Full Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Verify it worked:

```bash
git --version
```

**The five commands that cover 95% of what you'll do:**

```bash
git status                      # what have I changed?
git add .                       # stage everything I changed
git commit -m "docs: add spec"  # save a checkpoint with a message
git push                        # send it to GitHub
git pull                        # get the latest from GitHub
```

If a command scares you, ask your AI assistant: *"Explain what `git rebase` does as if
I've never used Git, and tell me whether I need it."*

## 4. VS Code

**What it is:** the editor. It's a text editor with superpowers: a file tree, a built-in
terminal, extensions, and AI chat.

1. Download from <https://code.visualstudio.com/>.
2. Install, open it, and take the built-in Welcome walkthrough.
3. Learn exactly four things:
   - **Explorer** (`Ctrl/Cmd+Shift+E`) — your files
   - **Command Palette** (`Ctrl/Cmd+Shift+P`) — do anything by typing its name
   - **Terminal** (`` Ctrl+` ``) — where you type Git commands
   - **Source Control** (`Ctrl/Cmd+Shift+G`) — commit and push with buttons instead of commands

**Extensions worth installing** (Extensions panel, `Ctrl/Cmd+Shift+X`):

| Extension | Why |
| --- | --- |
| GitHub Copilot + Copilot Chat | AI assistance and agent mode |
| GitHub Pull Requests | Review PRs without leaving the editor |
| markdownlint | Catches broken Markdown in your documents |
| Markdown All in One | Table of contents, preview, table formatting |
| Live Preview | Preview HTML pages locally |
| Code Spell Checker | Typos in a specification are embarrassing |

**Open a project:** File → Open Folder, or clone straight from GitHub with
Command Palette → `Git: Clone`.

## 5. GitHub Copilot in VS Code

**What it is:** AI that reads your open files and helps you write documents and code.

1. In VS Code, sign in to GitHub (bottom-left account icon).
2. Install **GitHub Copilot** and **GitHub Copilot Chat**.
3. Open Chat with `Ctrl/Cmd+Alt+I`.

**Three modes, and when to use each:**

| Mode | What it does | Use it for |
| --- | --- | --- |
| **Ask** | Answers questions about code/files | "What does this file do?" |
| **Edit** | Proposes changes to files you pick | Revising a section of your spec |
| **Agent** | Plans and executes multi-step work, runs tools and MCP servers | "Draft SPECIFICATION.md from the concept doc" |

**Context is everything.** Type `#` in chat to attach things:

- `#file:CONCEPT-IDEA.md` — attach a specific file
- `#selection` — the text you highlighted
- `#codebase` — let it search the whole project

**Set project-wide instructions once.** Create `.github/copilot-instructions.md` and every
chat in this repository will follow it. There's a ready-made example in
[`examples/copilot-instructions.md`](../examples/copilot-instructions.md).

## 6. GitHub Pages (your public URL)

**What it is:** free static web hosting attached to any GitHub repository. Perfect for a
dashboard, a project site, or a portfolio. It serves HTML/CSS/JS files — it cannot run a
server-side database.

**The quickest version:**

1. Put your site files in a `docs/` folder in your repository (an `index.html` at minimum).
2. Push to GitHub.
3. Repository → **Settings → Pages**.
4. **Source: Deploy from a branch**, Branch: `main`, Folder: `/docs`. Save.
5. Wait ~1 minute. Your site is at `https://<username>.github.io/<repository>/`.

**Gotchas that waste beginners' afternoons:**

- The file must be named `index.html`, lowercase.
- Add an empty file named `.nojekyll` next to it, otherwise folders starting with `_`
  are ignored.
- Links and paths are **case-sensitive** on Pages even if they work on Windows.
- Use relative paths (`./style.css`), never `C:\Users\...` or `/style.css`.
- Changes take a minute and are cached — hard-refresh with `Ctrl/Cmd+Shift+R`.
- Everything published is **public**. Never put keys, passwords, or personal data in it.

**The more flexible version** (build step, or publishing a folder other than `docs/`) uses
a GitHub Actions workflow. There's a working one in
[`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml) — set
Settings → Pages → Source to **GitHub Actions** to use it.

## 7. A second AI assistant: Claude Code or OpenAI Codex

**Why two?** Copilot lives in the editor and is excellent for in-context work. A
terminal-based agent is better at long, multi-file jobs, and a second model gives you a
second opinion — which is genuinely useful when reviewing your own documents.

**These are paid.** Skip this step if budget is zero; Copilot alone is enough to follow
this whole guide.

### Claude Code (Anthropic)

- Account: <https://claude.ai> → then <https://www.anthropic.com/claude-code> for install
  instructions. Included with Claude Pro/Max subscriptions, or via API billing.
- Runs in your terminal: `claude` inside your project folder.
- Project memory lives in a `CLAUDE.md` file at your repository root — put your
  conventions there (see [`examples/CLAUDE.md`](../examples/CLAUDE.md)).
- There is also a VS Code extension so it can run inside the editor.

### OpenAI (ChatGPT / Codex CLI)

- Account: <https://chatgpt.com>. Developer platform and API keys:
  <https://platform.openai.com>.
- The Codex CLI lives at <https://github.com/openai/codex> — terminal agent, similar shape
  to Claude Code.
- Project instructions go in an `AGENTS.md` file at your repository root.

> **Money warning.** API usage is pay-as-you-go and a long agent session can burn credit
> quickly. Set a hard spending limit in the provider's billing settings *on day one*, and
> prefer flat-rate subscriptions while you're learning.

> **Keys are secrets.** An API key is a password that can spend your money. Never paste
> one into a file you commit, a screenshot, or a chat message. Keep it in an environment
> variable or your editor's secret prompt — see the [MCP page](./03-MCP-SERVERS.md).

## 8. MCP servers

Your AI assistant is smart but isolated: by default it can't search today's web, read
your GitHub issues, or click through your site. MCP servers are the plugins that give it
those abilities.

That's the whole of the [next page](./03-MCP-SERVERS.md).

---

## Ground rules, whatever tools you choose

1. **Commit early, commit often.** Small commits with real messages.
2. **Never commit secrets.** Add a `.gitignore` before your first commit (there's one in
   [`examples/.gitignore`](../examples/.gitignore)).
3. **Everything public is public forever.** Assume screenshots and demo data will be seen.
4. **Read what the AI wrote before you save it.** Every line. Every time.
5. **Ask the AI to teach, not just to do:** "Explain what you changed and why, as if I'm
   new to this."
6. **When stuck for more than 20 minutes, ask a person.** Model confidence is not accuracy.

---

## Setup verification

You're ready for the next page when all of these are true:

- [ ] `git --version` prints a version
- [ ] You can open a folder in VS Code and use the built-in terminal
- [ ] Copilot Chat responds in VS Code
- [ ] You have pushed at least one commit to a GitHub repository
- [ ] A page you wrote is visible at `https://<username>.github.io/<repository>/`

---

**Next:** [3 — MCP servers](./03-MCP-SERVERS.md)
