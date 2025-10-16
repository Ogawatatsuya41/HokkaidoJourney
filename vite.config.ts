import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 以前消してしまった @assets と @shared の設定を戻しました
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    // Viteにビルドの開始点を教えます
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html"),
    },
    // 完成したファイルの出力先をプロジェクトのルート直下の`dist`フォルダに指定
    outDir: path.resolve(__dirname, "dist"),
  },
});
