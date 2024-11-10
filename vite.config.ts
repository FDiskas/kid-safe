import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: `https://fdiskas.github.io/kid-safe/`,
	optimizeDeps: {
		exclude: ["lucide-react"],
	},
});
