# 2 — Tooling setup (for people who are not engineers)

> Goal of this page: get from "I have an idea" to "I have a repository, an editor, an AI
> assistant, and a live web page" in about 90 minutes, spending nothing.

**Chat first.** You will spend roughly 95% of your time in VS Code Copilot Chat in **Agent
mode**, which can create files, install software, run terminal commands, commit, push and
verify the result. Only two things below genuinely need your own hands: signing in to
accounts, and clicking buttons in GitHub's web settings. Everything else you delegate.

Terminal commands still appear on this page — but as a *fallback*, so you can recognise
what your agent runs, not as the path you are expected to follow.

Set things up **in this order** — later steps depend on earlier ones.

| # | Tool | What it actually is | Who does it | Time |
| --- | --- | --- | --- | --- |
| 1 | GitHub account | Where your project lives online | 🧑 You — it's your identity | 10 min |
| 2 | GitHub Education | Unlocks Copilot Pro and other tools for students | 🧑 You — it's your identity | 10 min (+ approval wait) |
| 3 | VS Code | The editor you'll work in | 🧑 You — one download | 10 min |
| 4 | GitHub Copilot | The agent that does the rest | 🧑 You — one sign-in | 10 min |
| 5 | Git | The thing that saves versions of your work | 💬 Your agent | 5 min |
| 6 | GitHub Pages | Publishes your page at a public URL | 💬 Agent + 🧑 one setting | 15 min |
| 7 | Claude Code or OpenAI Codex CLI | A second AI agent (optional, paid) | 💬 Your agent | 20 min |
| 8 | MCP servers | Gives your AI real tools (see [next page](./03-MCP-SERVERS.md)) | 💬 Your agent | 20 min |

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

## 3. VS Code

**What it is:** the editor — and the home of the agent that will do most of the remaining
work for you.

1. Download from <https://code.visualstudio.com/>.
2. Install, open it, and take the built-in Welcome walkthrough.
3. Learn exactly four things:
   - **Copilot Chat** (`Ctrl/Cmd+Alt+I`) — where you'll spend most of your time
   - **Explorer** (`Ctrl/Cmd+Shift+E`) — your files
   - **Command Palette** (`Ctrl/Cmd+Shift+P`) — do anything by typing its name
   - **Source Control** (`Ctrl/Cmd+Shift+G`) — see what changed, commit with a button

There's a fifth panel, the **Terminal** (`` Ctrl+` ``). You mostly won't type in it — but
keep it visible, because it's where you watch your agent work.

**Extensions:** once Copilot is signed in (step 4), don't go hunting in the marketplace.
Ask for them:

```text
Install these VS Code extensions for me and tell me what each one does in one sentence:
GitHub Pull Requests, markdownlint, Markdown All in One, Live Preview, Code Spell Checker.

Then confirm which ones installed successfully.
```

<details>
<summary>If you'd rather install them yourself</summary>

Extensions panel (`Ctrl/Cmd+Shift+X`), search each by name:

| Extension | Why |
| --- | --- |
| GitHub Copilot + Copilot Chat | AI assistance and agent mode |
| GitHub Pull Requests | Review PRs without leaving the editor |
| markdownlint | Catches broken Markdown in your documents |
| Markdown All in One | Table of contents, preview, table formatting |
| Live Preview | Preview HTML pages locally |
| Code Spell Checker | Typos in a specification are embarrassing |

</details>

**Open a project:** File → Open Folder. Cloning a repository is a job for your agent —
see step 5.

## 4. GitHub Copilot — and Agent mode

**What it is:** AI that reads your files, edits them, runs commands for you, and checks
its own work. This is the step that unlocks everything else.

1. In VS Code, sign in to GitHub (bottom-left account icon).
2. Install **GitHub Copilot** and **GitHub Copilot Chat**.
3. Open Chat with `Ctrl/Cmd+Alt+I`.
4. **Switch the mode dropdown at the bottom of the chat box to "Agent".** Do this now —
   almost every prompt in this kit assumes it.

**Three modes, and why Agent is your default:**

| Mode | What it does | Use it for |
| --- | --- | --- |
| **Ask** | Answers questions. Changes nothing | "What does this file do?" |
| **Edit** | Proposes changes to files you pick | Revising one section of your spec |
| **Agent** ⭐ | Plans, edits files, *runs terminal commands*, uses MCP servers, verifies results | Everything else in this kit |

**Your first agent prompt:**

```text
I am new to all of this. Confirm for me, in plain language:
1. Are you in Agent mode right now?
2. Can you create and edit files in this folder?
3. Can you run terminal commands on my behalf, and will you show me each one first?
4. What is this folder's path, and is it already a Git repository?

Keep it short. Then wait for my next instruction.
```

**Read the command, then approve it.** When the agent asks to run something, it shows you
the command first. If you don't understand it, ask "what does that command do and is it
safe?" before approving. You're the adult in the room — you just don't have to be the typist.

## 5. Git — let your agent set it up

**What it is:** the program on *your computer* that tracks versions. GitHub is the
website; Git is the tool. You need both installed. You do **not** need to learn to operate
Git from memory today.

Most guides spend a page here on `git config`, `git add`, `git commit`. Git is plumbing:
it matters that it works, not that you can drive it blind. Hand it over and read along:

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

And to create the project itself:

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

<details>
<summary>If you'd rather do it yourself — or the agent is unavailable</summary>

**Windows:** download from <https://git-scm.com/download/win> and accept the defaults.
**macOS:** run `xcode-select --install`, or install from <https://git-scm.com/download/mac>.

```bash
git config --global user.name "Your Full Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git --version
```

The everyday five:

```bash
git status                      # what have I changed?
git add .                       # stage everything I changed
git commit -m "docs: add spec"  # save a checkpoint with a message
git push                        # send it to GitHub
git pull                        # get the latest from GitHub
```

VS Code's **Source Control** panel does all five with buttons, if you'd rather click than type.

</details>

**You will still learn Git** — just later, and from context. Every command the agent runs
appears in your terminal with an explanation. After a week you'll recognise them. That
beats memorising commands before you have anything to commit.

**Project-wide rules:** create `.github/copilot-instructions.md` and every chat in this
repository follows it — including "explain what you ran". There's a ready-made example in
[`examples/copilot-instructions.md`](../examples/copilot-instructions.md).

**Context is everything.** Type `#` in chat to attach things:

- `#file:CONCEPT-IDEA.md` — attach a specific file
- `#selection` — the text you highlighted
- `#codebase` — let it search the whole project

## 6. GitHub Pages (your public URL)

**What it is:** free static web hosting attached to any GitHub repository. Perfect for a
dashboard, a project site, or a portfolio. It serves HTML/CSS/JS files — it cannot run a
server-side database.

Ask your agent to build and publish it:

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

**🧑 The one part you must click yourself:** Repository → **Settings → Pages** →
**Source:** Deploy from a branch → **Branch:** `main`, **Folder:** `/docs` → Save.
Wait about a minute; your site is at `https://<username>.github.io/<repository>/`.
Put that URL in your README.

**Gotchas — worth knowing so you can spot them:**

- The file must be named `index.html`, lowercase.
- Without an empty `.nojekyll` file, folders starting with `_` are silently ignored.
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

1. **Ask before you type.** Describe the outcome you want and let the agent work out the
   commands. Watch what it runs.
2. **Commit early, commit often.** Small commits with real messages — ask the agent to do it.
3. **Never commit secrets.** Add a `.gitignore` before your first commit (there's one in
   [`examples/.gitignore`](../examples/.gitignore)).
4. **Everything public is public forever.** Assume screenshots and demo data will be seen.
5. **Read what the AI wrote before you save it.** Every line. Every time.
6. **Ask the AI to teach, not just to do:** "Explain what you changed and why, as if I'm
   new to this."
7. **When stuck for more than 20 minutes, ask a person.** Model confidence is not accuracy.

---

## Setup verification

Don't check this by hand. Paste this into chat:

```text
Check my setup and give me a pass/fail table with one row per item:
1. Git is installed and my name and email are configured
2. This folder is a Git repository on branch main, with a remote on GitHub
3. I have at least one commit pushed
4. The GitHub Pages URL for this repository returns HTTP 200
5. A .gitignore exists and would prevent committing secrets

For anything that fails, fix it if you can, or tell me exactly what I need to click.
```

You're ready for the next page when all of these are true:

- [ ] Copilot Chat responds in VS Code, in **Agent** mode
- [ ] Your agent set up Git and you watched it happen
- [ ] At least one commit is pushed to a GitHub repository
- [ ] A page you published is visible at `https://<username>.github.io/<repository>/`

---

**Next:** [3 — MCP servers](./03-MCP-SERVERS.md)
