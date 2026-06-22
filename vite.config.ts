// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force Nitro to emit a Cloudflare Worker bundle even outside the Lovable sandbox.
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
    },
  },
  vite: {
    // הבדיקה החכמה: אם אנחנו ב-GitHub Actions נשתמש בנתיב הפרויקט, אחרת (כמו ב-Vercel) בשורש הכללי
    base: process.env.GITHUB_ACTIONS ? '/oramashcanta/' : '/',
  }
});
