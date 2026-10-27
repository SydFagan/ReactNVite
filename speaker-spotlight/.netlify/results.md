Deploys were failing because the site's base directory was set to `speaker-spotlight` in the Netlify dashboard, but that folder doesn't exist in the repository. The project's `package.json` and source files are at the repository root, so `npm run build` couldn't find anything to build.

A `netlify.toml` was added at the repository root. It sets the base directory to the root, the build command, and the publish directory (`dist`). Settings in this file take precedence over the dashboard, so builds run from the right place even though the dashboard still says `speaker-spotlight`.

Some build environments start without dependencies installed at the root. In those cases Vite and its React plugin couldn't be found. The build command therefore installs dependencies from the existing lockfile whenever they're missing, then runs `npm run build`. When dependencies are already present, as on Netlify's standard CI, the install step is skipped. A stale, auto-generated copy of the old build config was also removed so it can't override the current settings.

To keep the dashboard consistent with the repository, clear the **Base directory** field under Site configuration → Build & deploy → Build settings. This is optional, because the config file already fixes the build.
