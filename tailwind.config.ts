import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans],
			},
			colors: {
				border: "hsl(var(--border))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				carbon: {
					DEFAULT: "#F0F0F0",
					100: "#F8F8F8",
					200: "#F0F0F0",
					300: "#E8E8E8",
					400: "#E0E0E0",
					500: "#D8D8D8",
				},
				"carbon-dark": {
					DEFAULT: "#1A1A1A",
					100: "#121212",
					200: "#1A1A1A",
					300: "#242424",
					400: "#2E2E2E",
					500: "#383838",
				},
			},
			borderColor: {
				DEFAULT: "hsl(var(--border))",
			},
			boxShadow: {
				xs: "0 1px 2px 0 rgba(18, 18, 23, 0.05)",
				"xs-dark": "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
				sm: "0 1px 3px 0 rgba(18, 18, 23, 0.1), 0 1px 2px 0 rgba(18, 18, 23, 0.06)",
				"sm-dark":
					"0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
				md: "0px 2px 4px -1px rgba(18, 18, 23, 0.06), 0px 4px 6px -1px rgba(18, 18, 23, 0.08)",
				"md-dark":
					"0px 2px 4px -1px rgba(0, 0, 0, 0.3), 0px 4px 6px -1px rgba(0, 0, 0, 0.2)",
				lg: "0px 4px 6px -2px rgba(18, 18, 23, 0.05), 0px 10px 15px -3px rgba(18, 18, 23, 0.08)",
				"lg-dark":
					"0px 4px 6px -2px rgba(0, 0, 0, 0.2), 0px 10px 15px -3px rgba(0, 0, 0, 0.3)",
				xl: "0px 10px 10px -5px rgba(18, 18, 23, 0.04), 0px 20px 25px -5px rgba(18, 18, 23, 0.10)",
				"xl-dark":
					"0px 10px 10px -5px rgba(0, 0, 0, 0.2), 0px 20px 25px -5px rgba(0, 0, 0, 0.3)",
				"2xl": "0px 25px 50px -12px rgba(18, 18, 23, 0.25)",
				"2xl-dark": "0px 25px 50px -12px rgba(0, 0, 0, 0.4)",
				overlay:
					"0px 1px 2px 0px rgba(18, 18, 23, 0.04), 0px 2px 4px 0px rgba(18, 18, 23, 0.04), 0px 5px 10px 0px rgba(18, 18, 23, 0.03), 0px 12px 24px 0px rgba(18, 18, 23, 0.03), 0px 0px 0px 1px rgba(18, 18, 23, 0.10)",
				"overlay-dark":
					"0px 1px 2px 0px rgba(0, 0, 0, 0.2), 0px 2px 4px 0px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.2), 0px 8px 16px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
