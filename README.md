# AutoAudio website

Static source for https://msitarzewski.github.io/AutoAudio/ . This repository hosts the landing page and project-updates RSS feed. The Mac application is in development; no application binaries or full book downloads are distributed here.

## Hosting

GitHub Pages publishes the main branch root. `.nojekyll` keeps this a buildless static site. All local asset URLs are relative to the `/AutoAudio/` project path. No build dependencies, analytics, external fonts or runtime credentials.

[GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Publication boundary

Only the files in this website directory are public. Private manuscripts, PDF/EPUB/audio reading editions, model prompts, research snapshots, extracted source text, runtime logs, credentials and app memory are excluded. The first book is shown as a production example; its source-wording and publication review remain pending. Its private reading files are delivered separately to the owner.

`feed.xml` currently carries project updates. It is RSS2 with one real development update and no audio enclosure. A future cleared audio episode needs a stable public HTTPS URL, the exact hosted byte count, the correct media type, and a stable episode GUID. Do not insert a fake or private enclosure merely to make the feed appear populated.

## Credits and terms

Presentation follows the same restrained Apple-platform family as [Glass Power Tools](https://github.com/msitarzewski/GlassPowerTools). Cover illustration was generated locally in ComfyUI0.41.0 with Z-Image-Turbo; cover typography uses Source Serif4 and Source Sans3. Website layout and publication design were prepared with Codex assistance.

Website source code is GPL-3.0-only; see LICENSE. The application, model, artwork, fonts and source publications have separate terms. This notice does not assign a blanket content license or copyright owner to the book or its cover. The embedded cover image is a publication asset; third-party research snapshots are not included.
