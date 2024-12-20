"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/components/utils/cn";
import type { ComponentObject } from "@/lib/doc-data";
import { TextIcon } from "lucide-react";
import { useEffect, useState } from "react";

const buttonClass =
	"text-secondary-foreground rounded-none hover:font-medium hover:no-underline dark:hover:text-white hover:text-black cursor-pointer transition-all duration-300";
const activeButtonClass =
	"font-medium text-primary border-l-2 border-primary  scale-105 dark:hover:text-primary hover:text-primary";

export default function SectionStepper({
	componentData,
}: { componentData: ComponentObject }) {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const intersectingEntries = entries.filter(
					(entry) => entry.isIntersecting,
				);

				if (intersectingEntries.length > 0) {
					const sortedEntries = intersectingEntries.sort((a, b) => {
						const rectA = a.boundingClientRect;
						const rectB = b.boundingClientRect;
						return Math.abs(rectA.top) - Math.abs(rectB.top);
					});

					setActiveSection(sortedEntries[0]?.target.id || "");
				}
			},
			{
				rootMargin: "-30% 0px -70% 0px",
				threshold: [0, 0.25, 0.5, 0.75, 1],
			},
		);

		const sections = ["usage", "installation"];
		if (componentData.apiReference) {
			sections.push("api-reference");
		}
		if (componentData.examples) {
			sections.push("examples");
		}
		for (const section of sections) {
			const element = document.getElementById(section);
			if (element) observer.observe(element);
		}
		for (const api of componentData.apiReference || []) {
			const element = document.getElementById(api.id);
			if (element) observer.observe(element);
		}

		return () => observer.disconnect();
	}, [componentData.apiReference, componentData.examples]);

	const isApiSubsection = () => {
		return componentData.apiReference?.some((api) => api.id === activeSection);
	};

	const scrollToSection = (elementId: string, offset = 70) => {
		const element = document.getElementById(elementId);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};
	return (
		<div className="hidden xl:flex fixed top-24 right-32 flex-col gap-2 text-sm">
			<div className="flex items-center gap-2">
				<TextIcon className="size-4" />
				<p className="text-md font-medium">On this page</p>
			</div>
			<div className="flex border-l flex-col items-start">
				<Button
					className={cn(
						buttonClass,
						activeSection === "usage" ? activeButtonClass : "",
					)}
					variant={"link"}
					onClick={() => scrollToSection("usage", 220)}
				>
					Usage
				</Button>
				<Button
					variant={"link"}
					className={cn(
						buttonClass,
						activeSection === "installation" ? activeButtonClass : "",
					)}
					onClick={() => scrollToSection("installation")}
				>
					Installation
				</Button>
				{componentData.apiReference && (
					<div>
						<Button
							className={cn(
								buttonClass,
								activeSection === "api-reference" || isApiSubsection()
									? activeButtonClass
									: "",
							)}
							variant={"link"}
							onClick={() => scrollToSection("api-reference")}
						>
							API Reference
						</Button>
						<div className="flex flex-col">
							{componentData.apiReference.map((api) => (
								<Button
									className={cn(
										buttonClass,
										activeSection === api.id ? activeButtonClass : "",
									)}
									variant={"link"}
									key={api.id}
									onClick={() => scrollToSection(api.id)}
								>
									{api.title}
								</Button>
							))}
						</div>
					</div>
				)}
				{componentData.examples && (
					<Button
						className={cn(
							buttonClass,
							activeSection === "examples" ? activeButtonClass : "",
						)}
						variant={"link"}
						onClick={() => scrollToSection("examples")}
					>
						Examples
					</Button>
				)}
			</div>
		</div>
	);
}
