# Security audit triage — 2026-10-21

## Prioritization

The parent issue reports **0 confirmed findings**, **2 needs-validation leads**, and **0 rejected candidates**. There are no confirmed findings to rank and no remediation issues to create. Both leads remain unscored until their stated missing facts are established.

## Issue ready to file

**Title:** `[security][needs-validation] Audit leads to validate`

**Body:**

Tracks the two needs-validation leads from [parent issue #3](https://github.com/Mike-Demo/nes.css/issues/3). These are not confirmed findings; do not assign severity until the missing facts below are established.

- [ ] **Custom Sass function `get-file-as-data-uri` reads build-host files without path confinement and embeds them into built CSS**
  - Fingerprint: `nescss-build-file-read-data-uri`
  - Claimed root cause: `scripts/getFileAsDataURI.js` resolves the SCSS-supplied path with `path.resolve(__dirname, fileString.getValue())` with no confinement to the intended assets tree (`path.resolve` also honours an absolute argument, escaping `scripts/` entirely), then reads the resolved path unconditionally with `fs.readFileSync` and base64-encodes the contents for inclusion…
  - **Exact missing fact:** Whether any lower-trust SCSS is ever compiled with `scripts/scssFunctions.js` registered by a build, CI, or Storybook principal whose filesystem holds secrets outside the repository, without the malicious path string being caught in review, and whether the resulting CSS artifact is then shared or published.

- [ ] **CircleCI release job executes mutable and unpinned inputs (`cimg/node:lts`, `npx semantic-release`) in the job intended to hold npm and GitHub release authority**
  - Fingerprint: `nescss-circleci-release-mutable-inputs`
  - Claimed root cause: The release job in `.circleci/config.yml` runs code from mutable or unpinned inputs — the `cimg/node:lts` image tag at line 216, SSH host-key verification disabled for `github.com` at line 223, and `npx semantic-release` at line 227 instead of the `package.json`-pinned devDependency — in the job intended to exercise npm and GitHub publishing authority, with…
  - **Exact missing fact:** Whether the live CircleCI project for Mike-Demo/nes.css actually runs the release job defined in `.circleci/config.yml` on master with NPM_TOKEN or GH_TOKEN (as project environment variables or via a context) present and authorised to publish the nes.css npm package and create GitHub releases; no token, context, or credential reference appears in so…
