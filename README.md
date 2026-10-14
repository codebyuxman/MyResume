# Usman Khalid · Portfolio

Personal portfolio site for Usman Khalid, Senior Software Engineer & Technical Lead (Distributed Systems & Applied AI).

A static site in plain HTML, CSS and vanilla JavaScript, with no build step.

```
index.html                     page content
assets/css/styles.css          design system + responsive layout
assets/js/main.js              nav, mobile menu, scroll reveal, counters
assets/img/usman-hero.jpg      hero background photo
assets/img/resume-preview.jpg  resume thumbnail for the Resume section
assets/Usman-Khalid-Resume.pdf downloadable CV
```

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Merge into the default branch.
2. Repository **Settings → Pages → Build and deployment**: Source "Deploy from a branch", choose the default branch and `/ (root)`.
3. To use `usmankhalid.dev`, add it under **Custom domain** and point the domain's DNS at GitHub Pages.

To update the CV, replace `assets/Usman-Khalid-Resume.pdf` and keep the same file name.
