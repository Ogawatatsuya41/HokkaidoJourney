import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    rollupOptions: {
      // ★★★ ここのパスを修正しました ★★★
      input: path.resolve(__dirname, "client/src/index.html"),
    },
    outDir: path.resolve(__dirname, "dist"),
  },
});
