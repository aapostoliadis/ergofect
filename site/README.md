# Approved Ergofect flow redesign

The 18 approved pages are delivered from `public/site-v2/` through exact `beforeFiles` rewrites in `next.config.js`. This preserves the existing Next.js application, environment configuration, API endpoints, `/ai-assessment` campaign route, and original public assets. The former React pages remain available in source for future migration or rollback.

`public/site-runtime.js` adds production integration to the approved design: the existing cookie preference key and Google/Apollo configurations, a cookie settings control, and explicit audit submission to the existing `/api/send-audit-email` endpoint. Optional scripts load only after acceptance; enrichment does not hide the form. The form displays success only after a successful server response. Email draft and copy actions remain as fallbacks. No lead details are saved to browser storage.

To import a revised approved design, run `node scripts/import-approved-site.cjs /path/to/ergofect-v2`. The importer uses the design's page manifest, canonicalises internal links, copies its original assets, and records output hashes. Only the public deliverables are imported; QA files, dependency caches, and source captures are excluded.

Build with `npm ci` and `npm run build`. Verify with `npm start` against the release routes and with mocked form responses. Do not send a live audit email as an automated deployment check.

Rollback: revert the release commit or restore the previous Vercel production deployment. The original API routes and React pages were not removed.
