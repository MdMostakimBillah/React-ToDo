import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: [
    "favicon.ico",
    "apple-touch-icon.png",
    "android-chrome-512x512.png",
  ],
  manifest: {
    name: "Note Book",
    short_name: "Note",
    description: "An app that can add your all note.",
    icons: [
      {
        src: "./android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#272d39",
    background_color: "#272d39",
    display: "standalone",
    scope: ".",
    start_url: ".",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), VitePWA(manifestForPlugin)],
//   base: "/React-ToDo/",
// });

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      ...manifestForPlugin,
      devOptions: {
        enabled: true, // Enables PWA in development for debugging
      },
    }),
  ],
  base: "/React-ToDo/",
});
