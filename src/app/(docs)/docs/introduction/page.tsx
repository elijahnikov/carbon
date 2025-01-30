"use client";

import { Link } from "@/components/common/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkmodeShowcase from "../../../../../public/darkmode-showcase.png";
import lightmodeShowcase from "../../../../../public/lightmode-showcase.png";

export default function IntroductionPage() {
	const theme = useTheme();
	return (
		<div className="flex min-h-screen">
			<div className="flex border-r border-dashed mt-16 flex-col w-full min-w-[500px] max-w-[50vw] min-h-[calc(100vh-128px)]">
				<div className="dark:bg-carbon-dark-200 border-b border-dashed h-12 px-4 bg-carbon-light-200 flex items-center justify-between">
					<h1 className="font-semibold">Introduction</h1>
				</div>
				<div className="flex flex-col gap-4 p-8">
					<h1 className="text-2xl font-semibold">What is Carbon?</h1>
					<p className="text-secondary-foreground/75">
						Carbon is a thoughtfully designed collection of over 100+ React
						components, blocks and templates that combines the utility of React,
						Tailwind and Radix. Simply copy what you need and ship faster.
					</p>
					<Card className="p-2">
						{theme.theme === "dark" ? (
							<div className="relative">
								<div className="rounded-lg h-8 w-16 bg-carbon-dark-200 absolute bottom-0 left-0" />
								<Image
									className="rounded-lg shadow-overlay-dark"
									src={darkmodeShowcase}
									alt="Carbon Darkmode Showcase"
									width={1000}
									height={1000}
								/>
							</div>
						) : (
							<div className="relative">
								<div className="rounded-lg h-8 w-16 bg-carbon-200 absolute bottom-0 left-0" />
								<Image
									className="rounded-lg shadow-overlay-light"
									src={lightmodeShowcase}
									alt="Carbon Lightmode Showcase"
									width={1000}
									height={1000}
								/>
							</div>
						)}
					</Card>
					<Button after={<ArrowRightIcon />} className="ml-auto mt-6" asChild>
						<Link href="/docs/installation">Get Started</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
