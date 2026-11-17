# investinbrains.com -- investor NDA portal

Static site, no build step. Single page (index.html): forward-looking statement acceptance, then a fillable NDA with drawn signature, then a confirmation screen.

No presentation or other investor material is hosted on this site. Materials are sent to recipients directly by the Company.

Signed NDAs submit to Netlify Forms (form name: "nda") with recipient type, entity, name, title, email, address, date, timestamp and the signature image as a data URL. Honeypot field included.

records.html is an internal tool: load the Netlify Forms CSV export to generate an executed copy of the agreement for any signer.

## Deploy (Netlify, git-backed)
Every push to main auto-deploys. Publish directory: "." -- no build command.
