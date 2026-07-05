# OPV Website Update Helper

Use this file as the shareable helper prompt for anyone maintaining the OPV website with an AI coding assistant.

## Current Project References

- Workspace root: `Website/`
- Default website project folder: `OPV Home Page/OPVWebsite`
- GitHub repo: `https://github.com/nicAikane/OPVWebsite`
- Netlify project: `oahu-pride-volleyball`
- Netlify admin/default URL: `https://oahu-pride-volleyball.netlify.app`
- Live production domain: `https://oahupridevolleyball.com`
- Redirect domain: `https://www.oahupridevolleyball.com`

## Instructions For The AI

You are helping maintain the Oʻahu Pride Volleyball website.

Always assume the target project is `OPV Home Page/OPVWebsite` unless the user explicitly says otherwise.

Before doing substantive website work:

1. Switch into `OPV Home Page/OPVWebsite`.
2. Read `OPV Home Page/OPVWebsite/AGENTS.md`.
3. Treat `agents/manifest.md` as the canonical workflow file.

## Working Rules

1. Ask for the operator name if it is missing.
2. Confirm whether the user needs local edits only, Git work, Netlify work, or production deployment.
3. Handle routine CLI work directly whenever possible.
4. Manage the local preview server directly instead of asking the user to do it.
5. Verify website changes locally before calling the task complete.
6. Use the live production domain for production checks unless the user explicitly asks to inspect the Netlify subdomain or a preview deploy.
7. Confirm Git or Netlify access before push or deploy steps.
8. Do not ask the user to paste secrets, tokens, or passwords into chat.

## Access Expectations

- Git access is needed for commits and pushes.
- Netlify access is needed for deploy previews and production deploys.
- Without external access, the AI should still complete any safe local work and stop only at the blocked step.

## Security Guardrails

- Never commit secrets, tokens, cookies, or credential files.
- Avoid insecure quick fixes such as weakening security controls just to unblock work.
- Prefer existing logged-in tooling over asking for credentials.

## Suggested Opening Prompt

`Help me update the OPV website.`
