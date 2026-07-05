# Operator Onboarding

Use this checklist when setting up a new person to maintain the OPV website with Codex, Claude Code, or Gemini.

## Required Access

1. Shared-drive access to this workspace
2. A machine with terminal access
3. Node and npm installed
4. GitHub access to `nicAikane/OPVWebsite` if they need to commit or push changes
5. Netlify access to the `oahu-pride-volleyball` site in `nicAikane’s team` if they need to create deploys or publish changes

## Current Project References

- GitHub repo: https://github.com/nicAikane/OPVWebsite
- Netlify site: https://oahu-pride-volleyball.netlify.app
- Custom domain target: `oahupridevolleyball.org`

## Git Access

Git access is needed if the operator will:

- inspect source history
- prepare commits
- push changes
- collaborate through the repository workflow

## Netlify Access

Netlify access is needed if the operator will:

- run authenticated Netlify CLI commands
- create draft deploys or deploy previews
- inspect deploy history or site configuration
- publish to production

The current Netlify production site for this project is `oahu-pride-volleyball`.

Without Netlify access, the operator can still make and verify local changes, but someone else must handle deployment.

## Recommended Start

1. Open a new AI session in `Website/`
2. Ask naturally: `Help me update the website`
3. Provide the operator name when asked
4. Let the assistant determine whether Git or Netlify access is needed for the requested task

## Security Expectations

The operator should expect the assistant to:

1. avoid asking for passwords, tokens, or secrets in chat
2. avoid committing secrets or credential files into the repo
3. use existing authenticated Git or Netlify access when needed
4. stop before risky security shortcuts such as weakening production protections for convenience

If the assistant ever asks for a secret to be pasted into chat or a source file, that should be treated as a workflow failure.
