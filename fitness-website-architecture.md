# FitCoach — Frontend Architecture

Lightweight feature-based structure for the Vite + React + Tailwind + React Router + TanStack Query rebuild. Page set matches the real template (Home, About, Classes, Packages, Blog, Contact).

## 1. Folder Structure

```
fitness-coach-website/
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   │
│   ├── app/
│   │   ├── providers/
│   │   │   └── AppProviders.jsx
│   │   └── queryClient.js
│   │
│   ├── routes/
│   │   ├── router.jsx
│   │   └── paths.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ClassesPage.jsx
│   │   ├── ClassDetailPage.jsx
│   │   ├── PackagesPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogDetailPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── features/
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── AboutPreview.jsx
│   │   │   │   └── CtaSection.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── about/
│   │   │   ├── components/
│   │   │   │   ├── StorySection.jsx
│   │   │   │   └── CredentialsList.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── classes/
│   │   │   ├── api/
│   │   │   │   └── classes.api.js
│   │   │   ├── hooks/
│   │   │   │   ├── useClasses.js
│   │   │   │   └── useClass.js
│   │   │   ├── components/
│   │   │   │   ├── ClassCard.jsx
│   │   │   │   ├── ClassGrid.jsx
│   │   │   │   └── ClassDetails.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── packages/
│   │   │   ├── components/
│   │   │   │   ├── PackageCard.jsx
│   │   │   │   └── PackagesGrid.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── testimonials/
│   │   │   ├── components/
│   │   │   │   ├── TestimonialCard.jsx
│   │   │   │   └── TestimonialsCarousel.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── transformations/
│   │   │   ├── components/
│   │   │   │   └── TransformationsGallery.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── blog/
│   │   │   ├── api/
│   │   │   │   └── blog.api.js
│   │   │   ├── hooks/
│   │   │   │   ├── usePosts.js
│   │   │   │   └── usePost.js
│   │   │   ├── components/
│   │   │   │   ├── PostCard.jsx
│   │   │   │   ├── PostGrid.jsx
│   │   │   │   └── PostContent.jsx
│   │   │   └── index.js
│   │   │
│   │   └── contact/
│   │       ├── api/
│   │       │   └── contact.api.js
│   │       ├── hooks/
│   │       │   └── useSubmitContactForm.js
│   │       ├── components/
│   │       │   └── ContactForm.jsx
│   │       └── index.js
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Spinner.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Container.jsx
│   │   │   └── Section.jsx
│   │   └── common/
│   │       ├── SeoHead.jsx
│   │       ├── ScrollToTop.jsx
│   │       └── ErrorBoundary.jsx
│   │
│   ├── services/
│   │   └── apiClient.js
│   │
│   ├── hooks/
│   │   ├── useMediaQuery.js
│   │   └── useDisclosure.js
│   │
│   ├── utils/
│   │   ├── cn.js
│   │   └── formatDate.js
│   │
│   ├── constants/
│   │   ├── navigation.js
│   │   └── siteConfig.js
│   │
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── fonts/
│
├── .env.example
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 2. Folder Responsibilities

- **`app/`** — App-wide setup: the TanStack `QueryClient` instance and the `AppProviders` tree that wraps the whole app. Any future global provider (theme, i18n) goes here.
- **`routes/`** — Single source of truth for routing. `router.jsx` holds the `createBrowserRouter` tree (Data mode); `paths.js` exports path constants so no page hardcodes a URL.
- **`layouts/`** — Shared page shells (Navbar + Footer + `<Outlet />`). Pages never render their own nav/footer.
- **`pages/`** — One file per route. Thin by design: they compose feature components inside a layout, nothing else.
- **`features/`** — The core of the app, one folder per site section. Each feature owns its `components/`, and — only where real data-fetching is involved — its `api/` and `hooks/`. `classes`, `blog`, and `contact` fetch/submit data; `home`, `about`, `packages`, `testimonials`, and `transformations` are presentational for now. Everything a feature exposes goes through `index.js`.
- **`components/`** — Shared, feature-agnostic UI. `ui/` = generic primitives (Button, Modal, Badge). `layout/` = structural pieces used by layouts. `common/` = cross-cutting one-offs (SEO tags, error boundary, scroll restoration).
- **`services/`** — The single shared HTTP client (base URL, headers, interceptors). Every feature's `api/` file is built on top of it; this is the only file that knows how requests actually go out.
- **`hooks/`** — Reusable hooks not tied to one feature or to data-fetching (e.g. `useMediaQuery`). Data-fetching hooks always live inside their feature.
- **`utils/`** — Small, pure helper functions with no React or DOM dependency.
- **`constants/`** — Static, hardcoded app-wide values: nav links, site metadata, socials.
- **`assets/`** — Images, icons, and fonts imported into components (`public/` is for files Vite should serve untouched, like the favicon).

## 3. Architectural Rules

**Pages & routing**
- New route → add the file to `pages/`, register it in `routes/router.jsx`, add its path to `routes/paths.js`.
- A page only composes feature components inside a layout — no `fetch`, no business logic, no state beyond simple UI toggles.

**Components**
- Used in 2+ places, or has no domain meaning (Button, Modal, Card) → `components/ui/` or `components/layout/`.
- Only makes sense inside one feature (e.g. `ClassCard`) → `features/<feature>/components/`.
- If a feature-specific component turns out to be needed elsewhere, promote it to `components/` — never import across another feature's internals.

**API & TanStack Query**
- New request function → `features/<feature>/api/<feature>.api.js`, built on the shared client from `services/apiClient.js`.
- New `useQuery`/`useMutation` → `features/<feature>/hooks/`, one hook per file, named `use<Thing>`.
- Components call hooks only — never `api/` files or `services/apiClient.js` directly.

**Hooks & utils**
- Reusable, not feature-bound, not data-fetching → top-level `hooks/`.
- Pure logic, no React → `utils/`.

**Features**
- A new section of the site (e.g. a future "Nutrition" page) → a new folder under `features/`, same shape (`components/`, plus `api/`/`hooks/` only if it fetches data).
- A very simple static page (e.g. Privacy Policy) doesn't need a feature folder — write it directly in `pages/`.

**Naming**
- Components: `PascalCase.jsx` (`ClassCard.jsx`)
- Hooks: `camelCase.js`, prefixed `use` (`useClasses.js`)
- API files: `<feature>.api.js` (`classes.api.js`)
- Everything else (utils, constants, config): `camelCase.js`

**Scaling later**
- If a feature needs state beyond `useState`, add a small `store.js` inside that feature — don't introduce a global state library up front.
- If a feature's query keys start repeating across its hooks, add one `queryKeys.js` inside that feature — don't centralize globally until more than one feature actually needs it.
