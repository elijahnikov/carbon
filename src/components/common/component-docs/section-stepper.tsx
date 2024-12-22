"use client";

import { cn } from "@/components/utils/cn";
import type { ComponentObject } from "@/lib/doc-data";
import { TextIcon } from "lucide-react";
import { useEffect, useState } from "react";

const buttonClass =
	"text-secondary-foreground text-xs pl-5 py-1.5 rounded-none hover:font-medium hover:no-underline dark:hover:text-white hover:text-black cursor-pointer transition-all duration-300";
const activeButtonClass =
	"font-medium text-primary border-l-2 border-primary dark:hover:text-primary hover:text-primary";

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
		for (const example of componentData.examples || []) {
			const element = document.getElementById(example.id);
			if (element) observer.observe(element);
		}

		return () => observer.disconnect();
	}, [componentData.apiReference, componentData.examples]);

	const isApiSubsection = () => {
		return componentData.apiReference?.some((api) => api.id === activeSection);
	};

	const isExampleSubsection = () => {
		return componentData.examples?.some(
			(example) => example.id === activeSection,
		);
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
		<div className="hidden  xl:flex fixed top-24 right-8 flex-col gap-2 text-sm">
			<div className="flex items-center gap-2">
				<TextIcon className="size-4" />
				<p className="text-md font-medium">On this page</p>
			</div>
			<div className="flex border-l flex-col items-start justify-start overflow-y-auto">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className={cn(
						buttonClass,
						activeSection === "usage" ? activeButtonClass : "",
					)}
					onClick={() => scrollToSection("usage", 220)}
				>
					Usage
				</div>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className={cn(
						buttonClass,
						activeSection === "installation" ? activeButtonClass : "",
					)}
					onClick={() => scrollToSection("installation")}
				>
					Installation
				</div>
				{componentData.apiReference && (
					<div>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							className={cn(
								buttonClass,
								activeSection === "api-reference" || isApiSubsection()
									? activeButtonClass
									: "",
							)}
							onClick={() => scrollToSection("api-reference")}
						>
							API Reference
						</div>
						<div className="flex flex-col">
							{componentData.apiReference.map((api) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<div
									className={cn(
										buttonClass,
										activeSection === api.id ? activeButtonClass : "",
										"text-left justify-start",
									)}
									key={api.id}
									onClick={() => scrollToSection(api.id)}
								>
									<p className="pl-4">{api.title}</p>
								</div>
							))}
						</div>
					</div>
				)}
				{componentData.examples && componentData.examples.length > 0 && (
					<div>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							className={cn(
								buttonClass,
								activeSection === "examples" || isExampleSubsection()
									? activeButtonClass
									: "",
							)}
							onClick={() => scrollToSection("examples")}
						>
							Examples
						</div>
						<div className="flex flex-col">
							{componentData.examples.map((example) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<div
									className={cn(
										buttonClass,
										activeSection === example.id ? activeButtonClass : "",
										"text-left justify-start",
									)}
									key={example.id}
									onClick={() => scrollToSection(example.id)}
								>
									<p className="pl-4">{example.title}</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
