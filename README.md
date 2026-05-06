# AI Boost Now — aiboostnow.com

  Marketing website for [AI Boost Now](https://aiboostnow.com).

  Built with **React + Vite + TypeScript**. Auto-deployed via GitHub Actions on every push to `main`.

  ## Local development

  ```bash
  pnpm install
  pnpm dev
  ```

  ## Deploy pipeline

  Push to `main` → GitHub Actions builds → rsync to server.

  ### Required GitHub Secrets

  | Secret | Value |
  |--------|-------|
  | `SSH_PRIVATE_KEY` | Private SSH deploy key |
  | `SSH_HOST` | `109.199.99.205` |
  | `SSH_USER` | `lazarenet` |
  | `SSH_DEPLOY_PATH` | `/home/lazarenet/public_html/aiboostnow` |
  