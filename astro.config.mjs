import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/site_config";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), relativeLinks()],
});
