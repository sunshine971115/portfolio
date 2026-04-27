# Portfolio

Personal portfolio website built with **Vite + React 18 + TypeScript + Tailwind CSS**, plus an Express + Nodemailer contact endpoint.

## Stack

- **Vite** — fast dev server & build
- **React 18** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
- **Express + Nodemailer** — contact form backend (Gmail OAuth2)
- **gh-pages** — deployment

## Scripts

```bash
npm run dev        # start Vite dev server (proxies /api → :3033)
npm run build      # type-check + production build → dist/
npm run preview    # preview production build
npm run lint       # eslint
npm run format     # prettier
npm run server     # start the Express contact API
npm run deploy     # build + publish dist/ to gh-pages
```

## Environment

Create a `.env` for the contact server:

```
CLIENT_ID=...
CLIENT_SECRET=...
REDIRECT_URI=...
REFRESH_TOKEN=...
PORT=3033
```

Front-end can override the API base via `VITE_API_URL` (defaults to `http://localhost:3033`).

## Project structure

```
src/
  components/   # reusable UI (Navbar, Section, ProjectCard, …)
  sections/     # page sections (Hero, About, Skills, Projects, Contact, …)
  assets/       # images
  App.tsx
  main.tsx
  index.css     # tailwind layers + base styles
server/
  server.js     # Express contact endpoint
```

## Deploy

`npm run deploy` builds and pushes `dist/` to the `gh-pages` branch. The Vite `base` is set to `/portfolio/` to match the `homepage` URL.
