import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt()
  ],
  site: 'https://portfolio-plata.web.app',
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "src/styles/utils.css";`
        }
      }
    }
  }
});