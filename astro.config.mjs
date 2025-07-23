// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      SITE_URL: envField.string({context: "client", access: "public"})
    }
  },

  adapter: cloudflare()
});