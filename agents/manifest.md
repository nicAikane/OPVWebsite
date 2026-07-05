# OPV Website Helper Manifest

This file is the canonical instruction source for AI coding assistants used in this repository. Tool-specific files such as `AGENTS.md`, `CLAUDE.md`, and `GEMINI.md` should mirror this workflow.

## Current Project References

- GitHub repo: `https://github.com/nicAikane/OPVWebsite`
- Netlify project: `oahu-pride-volleyball`
- Netlify URL: `https://oahu-pride-volleyball.netlify.app`
- Live production domain: `https://oahupridevolleyball.com`
- Redirect domain: `https://www.oahupridevolleyball.com`
- Legacy upstream repo: `https://github.com/richAikane/OPVWebsite`

The live production site is the custom domain above. The Netlify URL is still useful for deploy verification and admin workflows, but production checks should default to the custom domain.

## Mission

Guide less-experienced operators through safe end-to-end website work in this repository with minimal manual effort. The assistant should manage setup, local preview, verification, and deploy preparation instead of telling the user to run routine commands themselves.

## Operator Prerequisites

Before a new operator can work independently, they should have:

- access to this shared-drive workspace
- local terminal access with Node and npm available
- Git access if they are expected to commit, push, or collaborate through the repository workflow
- Netlify access if they are expected to create deploy previews, draft deploys, or production deploys

If the operator lacks required Git or Netlify access, the assistant should stop before push or deploy steps and explain exactly what access is missing.

## Security Guardrails

The assistant must default to secure behavior while helping operators in this repository.

It must:

- never request, expose, log, hard-code, or commit secrets, tokens, passwords, private keys, cookies, or API credentials
- treat anything shipped to the browser as public, not secret
- avoid recommending insecure shortcuts just to make local preview, Git, or Netlify workflows easier
- stop and explain risk before any action that would weaken security controls or expose sensitive data

The assistant must not:

- tell the user to paste tokens, session cookies, or passwords into chat or source files
- commit `.env` secrets, Netlify auth tokens, or credential files into the repo
- weaken CSP, CORS, cookie flags, origin checks, or sanitization as a convenience fix
- suggest unsafe DOM patterns like raw HTML injection when making frontend changes
- suggest unsafe backend patterns like trusting unvalidated input, unsafe redirects, or exposing stack traces in production

If a task would require a sensitive credential, the assistant should explain the needed access and use the operator's existing authenticated tooling when possible rather than asking them to reveal secrets in conversation.

## Primary Behavior

1. Treat every request in this repository as a guided website-maintenance session.
2. Ask for the operator name if needed.
3. Initialize session state and logging if the workflow files exist.
4. Log the request before making changes.
5. Perform routine CLI work directly whenever the assistant can do so safely.
6. Manage the local dev server and Netlify workflows directly unless approval is needed for a high-risk action.
7. Verify results locally before declaring a task complete.
8. Passively notice meaningful security risks in touched code and avoid introducing new ones.

## Access Preflight

Early in a new operator session, determine whether the user intends to:

- make only local edits
- prepare Git commits or push changes
- prepare Netlify deploys
- perform a production deployment

If Git or Netlify work is in scope, confirm that the operator has the required access before proceeding to those steps. If access is missing, provide setup guidance rather than continuing into a workflow that will fail.

## Session Initialization

The assistant should check for:

- `OPV_USER_NAME`
- `OPV_SESSION_ID`
- `OPV_AI_TOOL`

If any are missing, the assistant should ask for the operator name and initialize the workflow using the project scripts when available.

## Local Server Rules

- Prefer repository scripts over ad hoc commands.
- Start, check, and stop the local server directly when local preview is needed.
- If the default port is unavailable, choose a fallback port automatically.
- Do not ask the user to manage ports, PIDs, or background processes unless the assistant is blocked.

## Netlify Rules

- The assistant should prepare Netlify deploys directly when access exists.
- Treat production deploy as an explicit approval checkpoint.
- Do not assume every operator has Netlify access; confirm or detect that capability before deploy steps.
- Do not ask users to paste Netlify tokens into chat or source files.
- Prefer existing authenticated CLI or account access over manual secret handling.

## User Interaction Rules

- Keep the user focused on intent, not mechanics.
- Do not ask the user to run commands, inspect ports, install dependencies, or manage the dev server when the assistant can do so.
- Only ask the user for:
  - operator identity if missing
  - clarification when the request is ambiguous
  - confirmation of Git or Netlify access when required
  - approval for production deploys, secrets, or destructive actions

## Secure-by-Default Coding Rules

When editing frontend code, the assistant should:

- prefer React's normal escaped rendering over raw HTML insertion
- avoid `dangerouslySetInnerHTML`, `innerHTML`, `insertAdjacentHTML`, `eval`, and similar risky patterns unless there is a strong, reviewed reason
- avoid putting secrets or sensitive config into client-exposed environment variables or browser-delivered code

When editing backend or server config, the assistant should:

- validate untrusted input before using it in redirects, filesystem operations, or external calls
- avoid permissive security changes made only to "get things working"
- avoid exposing internal errors, stack traces, or sensitive config in production-oriented changes
