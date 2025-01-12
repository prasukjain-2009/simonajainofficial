import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#000000",
          "@secondary-color": "#fefcf5",
          "@link-color": "#000000",
          "@success-color": "#52c41a",
          "@warning-color": "#faad14",
          "@error-color": "#f5222d",
          "@font-size-base": "14px",
          "@heading-color": "rgba(0, 0, 0, 0.85)",
          "@text-color": "rgba(0, 0, 0, 0.65)",
          "@text-color-secondary": "#fefcf580",
          "@disabled-color": "rgba(0, 0, 0, 0.25)",
          "@border-radius-base": "4px",
          "@border-color-base": "#d9d9d9",
          "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
