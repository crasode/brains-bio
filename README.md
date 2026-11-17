# investinbrains.com -- wall-crossing agreement portal

Static site, no build step. Single page (index.html), four steps: Access Notice, Important Notices and Forward-Looking Statements, the Wall-Crossing Agreement with its acceptance form, confirmation.

No presentation or other investor material is hosted on this site. Materials are sent to recipients directly by the Company.

- agreement.js: agreement and notices text plus the version label. Generated from counsel's drafts; replace it when counsel issues a new version and change the version label.
- executed.js: acknowledgement wording and the renderer for an accepted copy with its Acceptance Record.
- records.html: internal tool. Load the Netlify Forms CSV export to produce an accepted copy for any signer. Records from before the Wall-Crossing Agreement render on the prior NDA.

Acceptances submit to Netlify Forms (form name: "nda"): recipient type, entity, name, title, capacity, jurisdiction, eligibility category, individuals with access, instrument under s. 6.3(a), email, address, acknowledgements, typed name, timestamp and agreement version. Netlify stores the submitter IP with each submission. Honeypot field included.

## Deploy (Netlify, git-backed)
Every push to main auto-deploys. Publish directory: "." -- no build command.
