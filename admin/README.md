# ZANKSTUDIO Admin

The admin area is intentionally local and deployment-safe. It provides a single place to manage the presentation content without inventing facts or requiring a database.

Edit `admin/config.json` for brand-level settings. The front-end can read this file at runtime from `/admin/config.json`.

## Asset manifest

All visual assets are stored under `public/img/`. Keep filenames stable unless the front-end references are updated.

Current restored assets:
- zank-logo.png
- hero.jpg
- product-tee.jpg
- product-hoodie.jpg
- product-cap.jpg
- detail.jpg
- posters.jpg
- print-shop.jpg
- packaging.jpg
- ed-1.jpg
- ed-2.jpg

## Admin access

A client-side admin panel cannot securely protect private credentials. For a production CMS with real authentication, use a server-side auth/database service. This repository keeps the editable content schema separated so that a backend can be attached later without rebuilding the visual system.
