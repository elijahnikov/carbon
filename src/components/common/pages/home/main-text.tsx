"use client";

import { Button } from "@/components/ui/button";
import { logos, variations } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HyperText } from "../../hyper-text";

const tools = ["React", "Tailwind", "Radix"];

export default function MainText() {
	const [currentVariation, setCurrentVariation] = useState(
		variations[Math.floor(Math.random() * variations.length)] ?? "web app",
	);
	const [index, setIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => {
				const newIndex = (prevIndex + 1) % variations.length;
				setCurrentVariation(variations[newIndex] ?? "web app");
				return newIndex;
			});
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col -mt-12 sticky gap-6">
			<div>
				<p className="text-xs uppercase text-secondary-foreground dark:text-carbon-900 font-medium font-mono">
					Built with
				</p>
				<div className="flex gap-2">
					{tools.map((tool, index) => (
						<div className="flex gap-2 items-center" key={tool}>
							<p className="text-md dark:text-white font-medium">{tool}</p>
							<div>{logos[tool.toLocaleLowerCase() as keyof typeof logos]}</div>
							{index !== tools.length - 1 && <p className="text-sm">+</p>}
						</div>
					))}
				</div>
			</div>
			<div
				suppressHydrationWarning
				className="text-5xl max-w-[500px] text-balance flex flex-col font-semibold leading-tight"
			>
				<span className="dark:text-carbon-900 text-secondary-foreground">
					Production-ready components to power your next
				</span>
				<HyperText
					key={index}
					framerProps={{
						show: { transition: { delay: index === 0 ? 0 : 0.2 } },
					}}
					className="dark:text-white text-black font-bold"
					text={`${currentVariation}`}
				/>
			</div>
			<div className="space-y-4">
				<div className="max-w-[600px] text-balance text-md text-secondary-foreground dark:text-carbon-900 font-medium">
					A thoughtfully designed collection of over 100+ React components,
					blocks and templates that combines the utility of React, Tailwind and
					Radix. Simply copy what you need and ship faster.
				</div>
				<div className="flex items-center gap-2">
					<Button after={<ArrowUpRight />}>Get started</Button>
					<Button variant={"secondary"}>View components</Button>
				</div>
			</div>
		</div>
	);
}
