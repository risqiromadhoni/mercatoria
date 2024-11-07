import TanStackRouterVite from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		server: {
			port: +env.VITE_APP_PORT,
		},
		plugins: [
			// TanStackRouterVite(),
			react(),
			tsconfigPaths(),
			svgr(),
			VitePWA({
				registerType: "autoUpdate",
				injectRegister: false,

				pwaAssets: {
					disabled: false,
					config: true,
				},

				manifest: {
					name: "Mercatoria",
					short_name: "mercatoria",
					description: "An online shop you loved",
					theme_color: "#292DA2",
				},

				workbox: {
					globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
					cleanupOutdatedCaches: true,
					clientsClaim: true,
				},

				devOptions: {
					enabled: false,
					navigateFallback: "index.html",
					suppressWarnings: true,
					type: "module",
				},
			}),
		],
	};
});
