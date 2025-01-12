import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
    assetsDir: "assets",
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const extType = info[info.length - 1];
          if (/\.(css|less)$/.test(assetInfo.name)) {
            return `assets/css/[name].[hash][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|ico|webp)$/.test(assetInfo.name)) {
            return `assets/images/[name].[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name].[hash][extname]`;
          }
          return `assets/[name].[hash][extname]`;
        },
      },
    },
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
        additionalData: '@import "@/styles/variables.less";',
        modifyVars: {
          "@primary-color": "#000000",
          "@link-color": "#000000",
          "@success-color": "#52c41a",
          "@warning-color": "#faad14",
          "@error-color": "#f5222d",
          "@font-size-base": "14px",
          "@heading-color": "rgba(0, 0, 0, 0.85)",
          "@text-color": "rgba(0, 0, 0, 0.65)",
          "@text-color-secondary": "rgba(0, 0, 0, 0.45)",
          "@disabled-color": "rgba(0, 0, 0, 0.25)",
          "@border-radius-base": "4px",
          "@border-color-base": "#d9d9d9",
          "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
    devSourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false,
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
