# The Product Field Manual

An interactive, all-levels product management course with 12 modules, 48 lessons, saved progress, flashcards, a scored quiz, RICE prioritization, metric trees, an interview timer, and a 30-day capstone.

## GitHub Pages

The deploy-ready static site is in `docs/` and has no build step.

1. Create a GitHub repository and push this folder as the repository root.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your default branch and the **`/docs`** folder, then save.

GitHub will publish the site at the Pages URL shown in that screen. Progress is stored in each learner's browser with `localStorage`; no account or backend is required.

## Local preview

Open `docs/index.html` directly, or serve the repository with any static file server. The `docs/` folder is fully portable: copy it to any static host and keep `index.html`, `styles.css`, `app.js`, and `og.png` together.
