import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://uimp3.github.io",
  base: "/portfolio/",
  integrations: [
    icon()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});