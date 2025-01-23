import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://portfolio-astro-six-wine.vercel.app/",
  integrations: [
    icon(), 
    mdx(), 
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});