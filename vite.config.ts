import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Viteにindex.htmlがある場所を教える
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      // @が指す場所を教える
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  build: {
    // 完成したファイルの出力先をプロジェクトのルート直下の`dist`フォルダに指定
    outDir: path.resolve(__dirname, "dist"),
  },
});
