# MLSD course website

The Fall 2025 Machine Learning Systems Design website for Sharif University of Technology.

## Repository separation

- **This repository:** website, course catalog, public resource URLs, team portraits, and course branding.
- **[MLSD-Fall2025](https://github.com/SUT-CS-MLSD/MLSD-Fall2025):** original lecture slides, assignment packages, notebooks, and schedule workbook.

Production downloads link directly to the materials repository. Project briefs link directly to public Google Docs. The site has no dependency on an authenticated course platform.

## Preview locally

```sh
python3 scripts/validate.py
python3 scripts/build.py --local-materials
python3 -m http.server 8766 --bind 127.0.0.1 --directory dist
```

The optional `--local-materials` flag copies the sibling `../MLSD-Fall2025/files` into the ignored preview build and adjusts its links. It never copies materials into website source. For a production build, omit that flag.

## Publish with GitHub Pages

1. Publish the materials repository to its `main` branch first.
2. In this repository’s Settings → Pages, select **GitHub Actions**.
3. Push to `main`, or run the included workflow manually.

The expected project URL is `https://sut-cs-mlsd.github.io/MLSD-Website/`. This is a deployment target, not a claim that deployment has already occurred. Relative assets and hash navigation support GitHub Pages project subpaths.

## Maintain

- `assets/data.js`: resource catalog, public project links, corrected schedule, team roles and contacts.
- `assets/app.js`: routes, cards, search, and lifecycle illustration.
- `assets/style.css`: responsive midnight-blue/cyan design matched to supplied artwork.
- `assets/images/`: supplied course poster, course/university logos, and team portraits.
- `scripts/build.py`: dependency-free static build.

Sara Karimi and Mostafa Abdolmaleki use intentional initials placeholders because no portraits were supplied for them. The lecturer’s faculty website is her only contact link. Original materials and the historic assessment policy retain their provenance; the cancelled midterm is excluded from the current schedule.
