# Isipho Media Group &bull; Corporate Website (`isiphomediagroup.co.za`)
**Isipho Media Group (Pty) Ltd** (Reg. 2026/276471/07)

Primary corporate website for Isipho Media Group, featuring our full subsidiary directory, BPO services, media ecosystem, luxury commerce (Shop Shop), and technology initiatives (EvidencePack).

## Deployment Instructions (GitHub + Cloudflare Pages)
1. Create a **NEW** GitHub repository named `isipho-media-corporate` (separate from your EvidencePack repository).
2. Upload `index.html`, `styles.css`, `app.js`, `wrangler.toml`, and this `README.md` to the root of the repository.
3. Log in to Cloudflare Pages, click **Create Application** -> **Pages** -> **Connect to Git**.
4. Select your `isipho-media-corporate` repository.
5. Leave build settings blank (static site) or set output directory to root (`.`).
6. Click **Save and Deploy**.
7. In Cloudflare Pages custom domains, bind `isiphomediagroup.co.za`.

## Separation from EvidencePack
* **EvidencePack Repository:** `evidencepack` -> deployed to `evidencepack.isiphomediagroup.co.za`.
* **Corporate Website Repository:** `isipho-media-corporate` -> deployed to `isiphomediagroup.co.za`.