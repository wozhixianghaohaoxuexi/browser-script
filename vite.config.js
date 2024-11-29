import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/main.js"),
      output: {
        // format: "cjs",
        format: "iife",
        dir: resolve(__dirname, "dist"),
        entryFileNames: "[name].[hash].js",
        // 将 chunk 文件也直接放到 dist 目录
        chunkFileNames: '[name].[hash].js'
      }
    }
  }
});