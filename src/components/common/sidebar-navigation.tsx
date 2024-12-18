"use client";

import _ from "lodash";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Badge from "../ui/badge";
import { cn } from "../utils/cn";

const components = [
	"alert",
	"avatar",
	"avatar-group",
	"badge",
	"button",
	"button-group",
	"card",
	"checkbox",
	"dialog",
	"dropdown-menu",
	"input",
	"popover",
	"select",
	"skeleton",
	"slider",
	"toast",
	"switch",
	"textarea",
	"tooltip",
];

const comingSoon = [
	"accordion",
	"tabs",
	"table",
	"drawer",
	"spinner",
	"command",
	"date-picker",
	"label",
];

const allComponents = [
	...components.map((component) => ({
		title: _.upperFirst(component.replace(/-/g, " ")),
		href: `/docs/components/${component}`,
		status: "available",
	})),
	...comingSoon.map((component) => ({
		title: _.upperFirst(component.replace(/-/g, " ")),
		href: `/docs/components/${component}`,
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
	Blocks: [
		{
			title: "Dialog",
			href: "/docs/blocks/dialog",
		},
	],
	Components: allComponents,
};

export function SidebarNavigation() {
	const pathname = usePathname();

	return (
		<aside className="w-64 border-r px-6 pt-6 fixed top-12 bottom-0 overflow-y-auto">
			<nav className="gap-4 flex flex-col">
				{Object.entries(navigationLinks).map(([section, links]) => (
					<div key={section}>
						<h2 className="text-sm font-semibold text-carbon-900">{section}</h2>
						<ul className="mt-2 flex space-y-1 flex-col">
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
												? "shadow-sm-dark ring-1 text-black bg-carbon-dark-200 dark:text-white"
												: "hover:ring-1 hover:text-black dark:hover:text-white dark:hover:shadow-sm-dark hover:bg-carbon-dark-200",
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
