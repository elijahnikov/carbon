"use client";

import {
	blocks,
	blocksComingSoon,
	comingSoon,
	components,
} from "@/lib/constants";
import _ from "lodash";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Badge from "../ui/badge";
import { cn } from "../utils/cn";

const formatTitle = (title: string) =>
	_.startCase(title.replace(/-/g, " ")).replaceAll("And", "and");

const allComponents = [
	...components.map((component) => ({
		title: formatTitle(component),
		href: `/docs/components/${component}`,
		status: "available",
	})),
	...comingSoon.map((component) => ({
		title: formatTitle(component),
		href: `/docs/components/${component}`,
		status: "coming-soon",
	})),
].sort((a, b) => a.title.localeCompare(b.title));

const allBlocks = [
	...blocks.map((block) => ({
		title: formatTitle(block),
		href: `/docs/blocks/${block}`,
		status: "available",
	})),
	...blocksComingSoon.map((block) => ({
		title: formatTitle(block),
		href: `/docs/blocks/${block}`,
		status: "coming-soon",
	})),
].sort((a, b) => a.title.localeCompare(b.title));

const navigationLinks = {
	"Getting Started": [
		{
			title: "Introduction",
			href: "/docs/introduction",
		},
		{
			title: "Installation",
			href: "/docs/installation",
		},
		{
			title: "Colors",
			href: "/docs/colors",
		},
	],
	Blocks: allBlocks,
	Components: allComponents,
};

export function SidebarNavigation() {
	const pathname = usePathname();

	return (
		<aside className="w-[450px] bg-background border-r border-dashed px-6 pt-12 fixed top-12 bottom-0 overflow-y-auto place-content-end place-items-end">
			<nav className="gap-4 w-[205px] flex flex-col">
				{Object.entries(navigationLinks).map(([section, links]) => (
					<div key={section}>
						<h2 className="text-sm ml-2.5 font-semibold text-neutral-700 dark:text-neutral-500">
							{section}
						</h2>
						<ul className="mt-2 gap-0.5 flex flex-col">
							{links.map((link) =>
								"status" in link && link.status === "coming-soon" ? (
									<div
										className="cursor-not-allowed flex gap-4 items-center text-sm text-secondary-foreground/50 rounded-md px-3 py-2"
										key={link.href}
									>
										<p>{link.title}</p>
										<Badge
											color="yellow"
											shape={"pill"}
											className="text-xs py-1 opacity-75"
											size="sm"
										>
											In progress
										</Badge>
									</div>
								) : (
									<Link
										className={cn(
											"text-sm group flex items-center justify-between text-secondary-foreground  dark:ring-carbon-dark-500 ring-carbon-dark-500/20 ring-inset rounded-md px-3 py-2",
											pathname === link.href
												? "text-black dark:bg-carbon-dark-300 bg-carbon-400 dark:text-white"
												: " hover:text-black dark:hover:text-white hover:bg-carbon-400 dark:hover:bg-carbon-dark-300",
										)}
										key={link.href}
										href={link.href}
									>
										{link.title}
										<ArrowRight
											className={cn(
												"opacity-0 size-4",
												pathname !== link.href && "group-hover:opacity-100",
											)}
										/>
									</Link>
								),
							)}
						</ul>
					</div>
				))}
			</nav>
		</aside>
	);
}
