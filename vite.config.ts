import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Viteに作業フォルダの起点(index.htmlがある場所)を教える
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      // すべてのショートカットを定義
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    // 完成品の出力先をプロジェクトルートの`dist`フォルダに指定
    outDir: path.resolve(__dirname, "dist"),
  },
});
