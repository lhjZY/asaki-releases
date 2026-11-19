# Asaki

The website, downloads and update information for Asaki for Mac, the edition given out here rather than through the Mac App Store.

- The website is the repository root (`index.html`, `privacy.html`, `styles.css`, `site.js`, `assets/`), published with GitHub Pages at https://lhjzy.github.io/asaki-releases/.
- Each version's DMG is attached to its [release](../../releases) as `Asaki-arm64.dmg`, so the latest is always at `releases/latest/download/Asaki-arm64.dmg`.
- `appcast.xml` lists the versions for the app's built-in updater (Sparkle), which reads it at https://lhjzy.github.io/asaki-releases/appcast.xml. Every DMG it lists is signed; the app installs only DMGs whose signature matches its public key.
