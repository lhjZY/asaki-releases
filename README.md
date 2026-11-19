# Asaki

The website, downloads and update information for Asaki, the Mac app.

- The website is the repository root (`index.html`, `privacy.html`, `styles.css`, `site.js`, `assets/`), deployed as a static site.
- Each version's DMG is attached to its [release](../../releases) as `Asaki-arm64.dmg`, so the latest is always at `releases/latest/download/Asaki-arm64.dmg`.
- `appcast.xml` lists the versions for the app's built-in updater (Sparkle). Every DMG it lists is signed; the app installs only DMGs whose signature matches its public key.

## Server

The site is served from a Tencent Cloud server (ssh host `iasaki`, Ubuntu 24.04, Caddy) at `/srv/asaki`. `./deploy.sh` uploads the site; `server/Caddyfile` is the server's `/etc/caddy/Caddyfile`. DMGs go in `/srv/asaki/downloads`, which `deploy.sh` leaves alone.
