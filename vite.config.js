import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "ReactHrnetModal",
      fileName: "react-hrnet-modal",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
