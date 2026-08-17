# investinbrains.com — gated investor portal

Static site, no build step. Single page (index.html): forward-looking statement acceptance → fillable NDA with drawn signature → embedded watermarked presentation. Signed devices skip the gate.

Signed NDAs submit to Netlify Forms (form name: "nda") with recipient type, entity, name, title, email, address, date, timestamp and the signature as a PNG data URL. Honeypot field included.

## Deploy (Netlify, git-backed)
1. Push this folder's contents to the root of crasode/brains-bio (main).
2. Netlify → Add new project → Import from Git → pick the repo. Publish directory: "." — no build command.
3. Domain management → add investinbrains.com.
4. Forms → Form notifications → Email to calvin@brainsbio.com.

Every push to main auto-deploys.
