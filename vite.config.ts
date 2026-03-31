import { defineConfig } from 'vite';

/**
 * GitHub Pages project site: /<repo-name>/; tag builds: /<repo-name>/<tag>/.
 * Set `VITE_BASE` in CI. Local dev: omit (defaults to `./`).
 * On Windows shells, pass a quoted value if paths get mangled: `set "VITE_BASE=/repo/v1/"`
 */
function resolveBase(): string {
  const v = process.env.VITE_BASE?.trim();
  if (!v || v === './') return './';
  let b = v.replace(/\\/g, '/');
  if (!b.startsWith('/')) b = `/${b}`;
  if (!b.endsWith('/')) b += '/';
  return b;
}

export default defineConfig({
  base: resolveBase(),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});
