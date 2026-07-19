import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // 👈 viteSingleFile() is completely removed here
  base: "/",
  build: {
    outDir: ".", // 👈 Compiles assets straight into your main directory folder
    emptyOutDir: false, // 👈 Safety flag so Vite never deletes your raw /src components
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
