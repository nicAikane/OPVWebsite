# Website Operator Onboarding Email

Use this file as a reusable drafting guide. Before writing the email, inspect the current repo and derive the repo-specific details from local context instead of leaving placeholders.

## Repo Discovery Rules

Before drafting the email, the agent should inspect the repo for:

1. the workspace root from the current session path
2. the default website project folder from the root routing files and project agent files
3. any project name or site name visible in README, agent files, package metadata, or repo structure
4. any Git repository URL or source-of-truth hints visible in README, Git config, or project docs
5. any Netlify usage visible from files such as `netlify.toml`, deploy scripts, docs, or agent instructions
6. any live production domain visible in README or agent files

If a value is not visible in the repo, the email should say that access is needed for "the Git repository used for this site" or "the Netlify site/team used for this site" rather than inventing details.

## Drafting Rules

- Write the email as if it is ready to send.
- Replace repo-specific values with discovered values from the current repo.
- Keep the process description generic enough that it can be reused for other sites that use the same workflow.
- Only keep site-specific details where they are grounded in the repo.

## Email Body

Subject: Access and workflow setup for maintaining this website

Hi [NAME],

I’m setting you up to help maintain this website using an AI-assisted workflow in our shared repo.

The goal is that you can open a terminal in the project workspace, ask the AI something natural like `Help me update the website`, and the repo’s helper instructions will guide the session from there. The AI should handle as much of the technical workflow as possible, including local preview, routine CLI work, and deploy preparation.

## Accounts and access you need

Please make sure you have the following before starting:

1. Access to the shared workspace for this repo
2. A local machine with terminal access
3. Node.js and npm installed
4. Git access if you will need to commit or push changes
5. Netlify access if you will need to create deploy previews or publish changes
6. Access to one of the supported AI coding tools:
   - Codex
   - Claude Code
   - Gemini

## What each account is for

- Shared workspace access lets you open the repo and related files.
- Git access is needed if you will commit, push, or collaborate through the source repository.
- Netlify access is needed if you will create deploy previews, draft deploys, or production deploys.

If you only need to make local edits and preview them, Git and Netlify access may not be needed immediately, but it is better to get them up front if you will be maintaining the site.

## How to start

1. Open a terminal in the workspace root for this repo.
2. Start a new session in Codex, Claude Code, or Gemini from that folder.
3. Ask the AI:
   - `Help me update the website`
4. When prompted, give your name for logging.
5. Tell the AI whether you need:
   - local edits only
   - Git commit/push help
   - Netlify deploy help

## What the AI should do

Once you start in the correct folder, the repo includes agent instruction files that should make the AI:

1. route into the correct website project
2. ask for your name if needed
3. initialize session logging
4. inspect the repo and determine the task type
5. handle local preview and dev server tasks directly
6. make and verify changes
7. prepare Git or Netlify steps if your task requires them
8. ask before any production deployment

## What you should not need to do manually

In normal use, the AI should handle:

- finding the correct project folder
- reading the repo instructions
- starting and stopping the local preview server
- checking the local preview
- making scoped edits
- preparing deploy steps

You should mostly be providing intent and approvals when needed, not managing the mechanics yourself.

## Security expectations

The AI is supposed to operate with security in mind. It should not ask you to:

- paste passwords, API keys, tokens, session cookies, or secrets into chat
- commit secrets or credential files into the repo
- weaken security settings just to make something work

If the AI asks you to paste a secret into chat or into a source file, stop and check with me.

## If something is missing

If you do not yet have Git or Netlify access, you can still usually do local editing and preview work. The AI should tell you when a task is blocked because an external account or permission is missing.

## Repo-specific notes

Include the discovered values here when visible in the repo:

- Workspace root
- Default website project folder
- Git repo or source-of-truth hint
- Netlify/site deploy hint
- Live production domain

Thanks,
[YOUR NAME]
