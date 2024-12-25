import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://portfolio-astro-six-wine.vercel.app/",
  integrations: [icon(), mdx(),],
});
