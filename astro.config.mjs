// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://voluble-cactus-dc9452.netlify.app",
  integrations: [preact()]
});