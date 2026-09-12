# Ergofect

## Project

This repository is Ergofect's business website, built with Next.js 14 and React 18. Reuse its existing components, styling, and brand assets. Keep claims grounded in approved proof; an empty brand template is not evidence. Lead engagements are delivered by Akis; do not invent a team, clients, results, or product capabilities.

## Commands and references

`npm run dev` starts local development. `npm run build` produces the application build; `npm start` serves that build. `npm run lint` runs linting. There is no preview or test script in package.json. Use package.json as the command source of truth.

Read README.md for positioning and contribution details. Read relevant components and styles for UI work. `.claude/brand-context.md` is currently an unfilled template; use confirmed context for copy and ask only when a missing fact prevents an accurate claim.

## Completion and boundaries

For implementation requests, finish the requested change, inspect the affected result, and resolve failures introduced by the change. Keep validation proportional to the work; use a build for runtime changes and visual checks for layout or interaction changes. Report checks that could not run. Do not replace completion with an offer to verify later.

Local edits, relevant local checks, and draft PRs are within an implementation request. Reuse authorization already supplied for the same action and target. Production deployment or merge requires a request covering that target and the required preview checks. A push to the connected production branch can deploy the site.

Preserve explicit no-production or read-only instructions. Sending outreach, submitting real contact forms, changing access, adding paid services, or deleting data requires authorization for that external effect. Keep credentials in the approved secret environment. Do not expose them in files, logs, or examples.

Use skills that match the actual task. A UI or copy change does not imply a new provider, database, project scaffold, or design process. Keep project facts here and substantial task-specific procedures in linked documentation.
