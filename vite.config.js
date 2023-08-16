import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react_simple_to_do/", // Add this line
  plugins: [react()],
});
