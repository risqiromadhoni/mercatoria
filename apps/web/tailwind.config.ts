import type { Config as DaisyUIConfig } from "daisyui/src";
import { light as lightTheme } from "daisyui/src/theming/themes";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const daisyUiConfig = {
	themes: [
		{
			light: {
				...lightTheme,
				primary: "#7368fe",
				"primary-content": "#ffffff",
			},
		},
	],
	base: true,
	styled: true,
	utils: true,
} satisfies DaisyUIConfig;

const twConfig = {
	darkMode: ["class", '[data-mode="dark"]'],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', ...fontFamily.sans],
			},
			colors: {
				primary: {
					50: "oklch(var(--color-primary-50))",
					100: "oklch(var(--color-primary-100))",
					200: "oklch(var(--color-primary-200))",
					300: "oklch(var(--color-primary-300))",
					400: "oklch(var(--color-primary-400))",
					500: "oklch(var(--color-primary-500))",
					600: "oklch(var(--color-primary-600))",
					700: "oklch(var(--color-primary-700))",
					800: "oklch(var(--color-primary-800))",
					900: "oklch(var(--color-primary-900))",
					950: "oklch(var(--color-primary-950))",
					DEFAULT: "oklch(var(--color-primary-500))",
				},
				toreaBay: {
					50: "var(--color-torea-bay-50)",
					100: "var(--color-torea-bay-100)",
					200: "var(--color-torea-bay-200)",
					300: "var(--color-torea-bay-300)",
					400: "var(--color-torea-bay-400)",
					500: "var(--color-torea-bay-500)",
					600: "var(--color-torea-bay-600)",
					700: "var(--color-torea-bay-700)",
					800: "var(--color-torea-bay-800)",
					900: "var(--color-torea-bay-900)",
					950: "var(--color-torea-bay-950)",
					DEFAULT: "var(--color-torea-bay-800)",
				},
				stormGray: {
					50: "var(--color-storm-gray-50)",
					100: "var(--color-storm-gray-100)",
					200: "var(--color-storm-gray-200)",
					300: "var(--color-storm-gray-300)",
					400: "var(--color-storm-gray-400)",
					500: "var(--color-storm-gray-500)",
					600: "var(--color-storm-gray-600)",
					700: "var(--color-storm-gray-700)",
					800: "var(--color-storm-gray-800)",
					900: "var(--color-storm-gray-900)",
					950: "var(--color-storm-gray-950)",
					DEFAULT: "var(--color-storm-gray-500)",
				},
			},
			backgroundImage: {
				"gradient-products":
					"linear-gradient(180deg, #7368FE 0%, #3B26AD 100%)",
				"gradient-products-squared":
					"linear-gradient(to right, hsl(240deg 5% 65% / 50%) 1px, transparent 1px), linear-gradient(to bottom, hsl(240deg 5% 65% / 50%) 1px, transparent 1px)",
				"gradient-auth": "linear-gradient(180deg, #DDE2FF 0%, #7368FE 100%)",
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [require("tailwindcss-animate"), require("daisyui")],
	daisyui: daisyUiConfig,
} satisfies Config;

export default twConfig;
