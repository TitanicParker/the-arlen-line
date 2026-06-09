# The Arlen Line Papers

A GitHub Pages-ready digital book scaffold for **The Arlen Line Papers**.

This repository is designed as a static, durable web book rather than a blog or document dump. It includes a cover experience, title page, table of contents, chapter pages, chapter Markdown source files, previous/next navigation, reading progress, and local resume memory.

## Repository structure

```text
the-arlen-line/
├── index.html                 # Animated cover / landing page
├── title.html                 # Quiet title page
├── contents.html              # Book-style table of contents
├── chapters/                  # GitHub Pages chapter HTML files
├── manuscript/
│   ├── chapters/              # Chapterized Markdown source files
│   └── source/                # Original working document and control packet
├── assets/
│   ├── css/book.css           # Book, cover, typography, responsive styles
│   ├── js/book-data.js        # Chapter metadata
│   ├── js/reader.js           # Progress + resume-reading behavior
│   └── data/chapters.json     # Machine-readable chapter list
└── README.md
```

## Publishing on GitHub Pages

1. Upload the contents of this folder to the root of the `the-arlen-line` repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/root` folder.
5. Save. GitHub Pages will publish the site shortly after.

## Editing the book

The editable chapter source lives in `manuscript/chapters/` as Markdown. The public reading pages live in `chapters/` as HTML.

For this first packet, chapter HTML pages were generated from the Markdown files so the site works on GitHub Pages without a build step.

## Reading-memory feature

The site uses browser `localStorage` to remember:

- the most recently opened chapter;
- approximate scroll position within each chapter;
- the cover page's Resume Reading link.

No server or external service is used.

## Chapter count

This packet contains **30 public reading sections** split from the working manuscript.

## Design direction

Literary, luminous, geometric, quiet, and archival. The interface is designed to serve the recovered-document feeling of the manuscript without turning it into a generic essay archive.

## Future enhancements

- Add a proper build script so Markdown can regenerate HTML automatically.
- Add optional dark/light mode controls.
- Add margin-note extraction for editor notes.
- Add search across the corpus.
- Add image assets for barn, field, line, or circle motifs if approved.
