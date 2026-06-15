# Asset Flow — Trial Site (No longer being Maintained)

## Trial Purpose

Use this branch to:

- Test new UI flows and features without affecting production.
- Verify API changes and integration points.
- Validate accessibility and responsive behavior.
- Deploy preview instances (Vercel/Netlify) for stakeholder content review.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started (Local)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## Features to Try

- Basic asset listing and viewing
- Create / edit / delete asset flows (if available in UI)
- Authentication (trial/demo credentials or local auth)
- API endpoints for assets and flows
- Frontend responsiveness and accessibility checks

## Requirements

- Node.js 16+ (or later LTS)
- npm, yarn, or pnpm
- (Optional) Docker for containerized setups

## Environment

Copy `.env.example` to `.env` and update values as needed. Typical variables include:

- PORT
- DATABASE_URL
- NODE_ENV
- API_URL
- AUTH_SECRET

## Running Locally (Detailed)

1. Clone the repo and checkout the `try` branch:

   git clone https://github.com/Ali-Ch-001/asset-flow.git
   cd asset-flow
   git checkout try

2. Install dependencies:

   npm install
   # or
   yarn install
   # or
   pnpm install

3. Configure environment variables (see above).

4. Start the dev server:

   npm run dev

5. Open http://localhost:3000 (or the port from `.env`).

## Running Tests

If the project includes tests, run:

```bash
npm test
# or
yarn test
```

Add or update tests to cover any trial features you are evaluating.

## Deployment (Trial Previews)

Use the `try` branch for preview deployments on Vercel, Netlify, or a staging server. Configure the hosting service to build from the `try` branch so stakeholders can review the changes.

## Feedback & Issues

File issues in this repository for any bugs or improvements discovered while testing. Use clear titles and reproduction steps. Tag issues with `try` or `preview` where appropriate.

## Contributing

This branch is experimental — open pull requests against `try` for trial features. Include description, testing notes, and screenshots/videos where helpful.

## Contact

Maintainer: Ali (owner: Ali-Ch-001)
Co-maintainer: Ali Mohsin (ali-mohsin-ccript)

---


