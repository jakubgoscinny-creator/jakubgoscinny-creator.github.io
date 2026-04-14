# jakubgoscinny-creator.github.io

Personal GitHub Pages site for **Jakub Goscinny**.

The site is designed to position the profile around:

- systems design
- automation consulting
- workflow portals
- AI-assisted operational tools
- practical business systems delivery

It is intentionally built as a lightweight static site with **plain HTML, CSS, and JavaScript** so it stays easy to maintain and deploy through GitHub Pages without any build pipeline.

## What was built

- Premium one-page personal site with:
  - hero and positioning statement
  - about / what I do
  - selected public work highlights
  - capabilities
  - tooling / stack
  - operating principles
  - project idea wizard that turns rough input into a proposal-ready brief
  - contact / GitHub-first CTA
- Responsive layout tuned for desktop and mobile
- Accessibility basics:
  - semantic sections
  - skip link
  - strong contrast
  - keyboard-friendly navigation
- Minimal client-side JavaScript for the brief wizard, summary generation, and footer year

## Project structure

- `index.html` - page structure, copy, metadata, and links
- `styles.css` - all layout, typography, theme, responsiveness, and motion
- `script.js` - footer year, step navigation, summary generation, and the brief wizard behavior
- `assets/favicon.svg` - simple SVG favicon / brand mark
- `bydgoszcz-stay-decision/` - preserved standalone decision dashboard published as a subpath
- `.nojekyll` - keeps GitHub Pages serving the site as a static root project

## How to edit content later

Most content edits happen in `index.html`.

Typical areas to update:

- Hero positioning text
- Selected work cards
- Capabilities
- Tooling tags
- Wizard field labels and summary logic
- Contact links

If you want to change the visual system:

- colors, spacing, radii, and fonts live in the `:root` block inside `styles.css`
- section layout and card styling are also in `styles.css`

If you want to adjust the wizard behavior:

- edit `script.js`
- update the field lists, scoring rules, or generated summary blocks

## Local preview

Because this is a static site, any lightweight local server is enough.

Example with Python:

```bash
python -m http.server 8080
```

Then open:

```text
http://127.0.0.1:8080/
```

## How redeploy works

GitHub Pages is already configured for the repository user-site:

- repository: `jakubgoscinny-creator.github.io`
- source: `main`
- folder: `/ (root)`

That means redeploy is automatic after pushing changes to `main`.

## Redeploy steps

```bash
git status
git add .
git commit -m "Refresh personal site"
git push origin main
```

After push, GitHub Pages will rebuild and publish automatically.

## Recommended maintenance flow

1. Preview locally.
2. Check links and mobile layout.
3. Commit with a focused message.
4. Push to `main`.
5. Verify the live site at `https://jakubgoscinny-creator.github.io/`.

## Notes

- The copy is grounded in public GitHub repositories and visible project signals.
- No framework is required to maintain the site.
- If a future version needs a blog or structured content, a static generator can be introduced later, but the current setup is the lowest-friction option for GitHub Pages.
