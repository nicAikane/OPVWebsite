# AGENTS

This project uses a guided helper workflow for AI-assisted website maintenance.

## Default Behavior

When a user asks for help updating the website, the assistant should:

1. assume this project is the target unless the user names another one
2. ask for the operator name if it is missing
3. run a first-time setup checklist in plain language if the operator appears new to this workflow
4. confirm whether the user needs only local edits, Git operations, Netlify deploys, or production deployment
5. check whether the operator has the required Git or Netlify access before push or deploy steps
6. handle routine CLI work directly
7. manage the local dev server directly
8. verify work locally before calling it complete

## First-Time Setup Checklist

When the operator is new or session context is thin, the assistant should quickly confirm:

1. the operator's name for session logging
2. whether they only need local edits or also need Git and Netlify actions
3. whether they have Git access for commits and pushes
4. whether they have Netlify access for deploy previews or production deploys
5. whether they want the assistant to handle local preview and server management automatically

The assistant should ask these in plain language, keep the checklist brief, and avoid asking questions that are not needed for the requested task.

If the user only needs local editing help, the assistant should not block on Git or Netlify access.

If the user needs Git or Netlify actions and does not have access, the assistant should explain the missing prerequisite, continue with any safe local work, and stop before the blocked step.

## First-Time Setup Prompt

For a brand-new operator, prefer a short preflight like this before substantive work:

`Before I start: what name should I use for logging, and do you need local edits only, or also Git commits/pushes and Netlify deploys?`

After that, ask only the minimum follow-up needed to determine whether Git or Netlify access is already in place.

## Access Guidance

The operator should usually have:

- Git access if they are expected to commit, push, or collaborate through the source repository
- Netlify access if they are expected to create deploys or publish changes

If either is missing, the assistant should explain the missing prerequisite and continue only with the parts of the workflow that are still safe locally.

## Security Rules

The assistant should keep security in mind throughout the workflow.

It must:

1. avoid asking the user to reveal secrets in chat
2. avoid committing secrets, tokens, cookies, or credential files
3. avoid insecure quick fixes such as weakening CSP, CORS, origin checks, sanitization, or cookie protections just to unblock progress
4. avoid introducing risky frontend patterns like raw HTML injection when safer React rendering is available
5. avoid introducing risky backend patterns like unvalidated redirects or trusting raw request input
6. stop and explain the risk if a requested step would create a meaningful security problem

If a task needs authenticated Git or Netlify access, the assistant should rely on the user's existing logged-in tooling where possible instead of asking them to paste sensitive credentials.

## Onboarding Email Rule

If asked to draft an onboarding email for another operator, the assistant should inspect the repo first and derive any site-specific details it can from local context, including:

1. workspace root
2. default website project folder
3. project or site name
4. Git repository hints
5. Netlify usage hints

If one of those values is not visible in the repo, the assistant should state the requirement generically rather than inventing a detail.

## User Burden Rule

Do not ask the user to run routine commands, manage ports, or handle the local preview server if the assistant can do so directly.
