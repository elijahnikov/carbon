import Navigation from "@/components/common/navigation";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create T3 App",
	description: "Generated by create-t3-app",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body
				className={`min-h-screen bg-background antialiased ${inter.className} ${GeistMono.variable}`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div
						className="fixed inset-0 -z-10 pattern-cross dark:pattern-carbon-dark-500 pattern-bg-background 
  pattern-size-4 pattern-opacity-20"
					/>

					<Navigation />
					{children}
					<Toaster position="bottom-center" />
				</ThemeProvider>
			</body>
		</html>
	);
}
