import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

const plugins = [react(), tailwindcss()];

export default defineConfig({
  plugins: plugins,
  base: process.env.NODE_ENV === 'production' ? "/portfolio" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
