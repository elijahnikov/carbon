import CodeBlock from "@/components/common/code-blocks/code-block";
import { CommandBlock } from "@/components/common/code-blocks/command-block";
import { Link } from "@/components/common/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import * as React from "react";

export default function InstallationPage() {
	return (
		<div className="flex min-h-screen">
			<div className="flex border-r border-dashed mt-16 flex-col w-full min-w-[500px] max-w-[50vw] min-h-[calc(100vh-128px)]">
				<div className="dark:bg-carbon-dark-200 border-b border-dashed h-12 px-4 bg-carbon-light-200 flex items-center justify-between">
					<h1 className="font-semibold">Installation</h1>
				</div>
				<div className="flex flex-col gap-4 px-8">
					<h2 className="text-md mt-8 text-black dark:text-white font-medium">
						Prerequisites
					</h2>
					<p className="text-secondary-foreground/75">
						Carbon UI uses the following libraries:
					</p>
					<ul className="list-disc list-inside">
						<li className="flex gap-2 items-center">
							<Link
								href="https://lucide.dev/guide/installation"
								target="_blank"
								className="hover:underline"
							>
								Lucide Icons
							</Link>
							<p className="text-secondary-foreground/75">
								a library of icons that are designed to be used in React.
							</p>
						</li>
						<li className="flex gap-2 items-center">
							<Link
								href="https://cva.style/docs"
								target="_blank"
								className="hover:underline"
							>
								Class Variance Authority
							</Link>
							<p className="text-secondary-foreground/75">
								a utility for generating CSS classes with variant support.
							</p>
						</li>
						<li className="flex gap-2 items-center">
							<Link
								href="https://github.com/lukeed/clsx#readme"
								target="_blank"
								className="hover:underline"
							>
								clsx
							</Link>
							<p className="text-secondary-foreground/75">
								a utility for constructing className strings conditionally.
							</p>
						</li>
						<li className="flex gap-2 items-center">
							<Link
								href="https://github.com/dcastil/tailwind-merge"
								target="_blank"
								className="hover:underline"
							>
								tailwind-merge
							</Link>
							<p className="text-secondary-foreground/75">
								a utility for merging Tailwind CSS classes.
							</p>
						</li>
					</ul>

					<p className="text-sm font-medium text-secondary-foreground">
						Install the above dependencies using the following command:
					</p>
					<CommandBlock
						pnpm={
							"pnpm add lucide-react class-variance-authority clsx tailwind-merge"
						}
						npm={
							"npm install lucide-react class-variance-authority clsx tailwind-merge"
						}
						yarn={
							"yarn add lucide-react class-variance-authority clsx tailwind-merge"
						}
						bun={
							"bun add lucide-react class-variance-authority clsx tailwind-merge"
						}
					/>
					<h2 className="text-md mt-8 text-black dark:text-white font-medium">
						Installation
					</h2>
					<p className="text-secondary-foreground/75">
						Copy the code blocks below and insert them into your project to
						install and use Carbon UI.
					</p>
					<CodeBlock
						code={`import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
`}
						fileName="src/lib/utils.ts"
					/>
					<CodeBlock
						code={`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		--border: 0 0% 85%;
		--background: 0 0% 94%;
		--card: 0 0% 97%;
		--input: 0 0% 100%;

		--primary: 218 91% 60%;
		--primary-hover: 218 90% 64%;
		--primary-active: 218 88% 67%;
		--primary-ring: 213 93% 67%;
		--primary-border: 218 91% 60%;
		--primary-outline: 221 83% 53%;
		--primary-foreground: 0 0% 100%;

		--destructive: 0 84% 60%;
		--destructive-hover: 0 84% 64%;
		--destructive-active: 1 82% 67%;
		--destructive-ring: 0 89% 71%;
		--destructive-border: 0 94% 82%;
		--destructive-outline: 0 72% 50%;
		--destructive-foreground: 0 0% 100%;

		--secondary: 0 0% 83%;
		--secondary-hover: 0 0% 85%;
		--secondary-active: 0 0% 87%;
		--secondary-foreground: 0 0% 32%;
	}

	.dark {
		--border: 0 0% 18%;
		--background: 0 0% 10%;
		--card: 0 0% 14%;
		--input: 0 0% 7%;

		--primary: 218 91% 60%;
		--primary-hover: 218 73% 55%;
		--primary-active: 217 59% 50%;
		--primary-ring: 213 93% 67%;
		--primary-border: 221 83% 53%;
		--primary-outline: 221 83% 53%;
		--primary-foreground: 0 0% 100%;

		--destructive: 0 84% 60%;
		--destructive-hover: 0 68% 55%;
		--destructive-active: 0 54% 50%;
		--destructive-ring: 0 72% 50%;
		--destructive-border: 0 89% 71%;
		--destructive-outline: 0 72% 50%;
		--destructive-foreground: 0 0% 100%;

		--secondary: 0 0% 25%;
		--secondary-hover: 0 0% 28%;
		--secondary-active: 0 0% 32%;
		--secondary-foreground: 0 0% 90%;
	}
}
`}
						fileName="globals.css"
					/>
					<CodeBlock
						code={`import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans],
				mono: ["var(--font-geist-mono)", ...fontFamily.mono],
			},
			colors: {
				border: "hsl(var(--border))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: "hsl(var(--card))",
				input: "hsl(var(--input))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					hover: "hsl(var(--primary-hover))",
					active: "hsl(var(--primary-active))",
					ring: "hsl(var(--primary-ring))",
					border: "hsl(var(--primary-border))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					hover: "hsl(var(--secondary-hover))",
					active: "hsl(var(--secondary-active))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					hover: "hsl(var(--destructive-hover))",
					active: "hsl(var(--destructive-active))",
					ring: "hsl(var(--destructive-ring))",
					border: "hsl(var(--destructive-border))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				carbon: {
					DEFAULT: "#F0F0F0",
					100: "#F8F8F8",
					200: "#F0F0F0",
					300: "#E8E8E8",
					400: "#E0E0E0",
					500: "#D8D8D8",
					600: "#D0D0D0",
					700: "#C8C8C8",
					800: "#C0C0C0",
					900: "#B8B8B8",
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
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				shimmer: "shimmer 1.5s infinite",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
			},
		},
	
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

`}
						fileName="tailwind.config.ts"
					/>
					<Button
						after={<ArrowRightIcon />}
						className="ml-auto mb-8 mt-6"
						asChild
					>
						<Link href="/docs/components/accordion">Explore components</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
