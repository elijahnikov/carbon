"use server";

import { blocksData } from "@/lib/blocks-data";
import { getExampleSource } from "@/lib/general";
import dynamic from "next/dynamic";
import CopyButton from "../component-docs/copy-button";

const getBlockName = (path: string) => {
	const componentName = path.split("/").pop()?.replace(".tsx", "") ?? "";
	return componentName.replace(/-/g, " ");
};

export default async function BlockPage({ slug }: { slug: string }) {
	const blockData = blocksData[slug];

	const fileSources = await Promise.all(
		(blockData ?? []).map((path) => getExampleSource(`src/${path}`)),
	);
	const components = (await Promise.all(
		(blockData ?? []).map((path) => dynamic(() => import(`@/${path}`))),
	)) as unknown as Array<React.ComponentType>;

	const combined = fileSources.map((source, index) => ({
		source: source ?? "",
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		Component: components[index]!,
		title: getBlockName(blockData?.[index] ?? "") ?? "",
		id: index,
	}));

	return (
		<div className="flex min-h-screen">
			<div className="flex border-r border-dashed mt-16 flex-col gap-8 w-full min-w-[500px] max-w-[48vw] min-h-[calc(100vh-128px)]">
				<div className="grid grid-cols-2">
					{combined.map(({ source, Component, ...rest }, index) => {
						const isEven = index % 2 === 0;
						const isFirstRow = index < 2;
						const isLastRow = index >= combined.length - 2;

						return (
							<div
								className={`flex px-8 dark:bg-carbon-dark-200 bg-none py-14 border-dashed flex-col relative justify-between items-center
									${!isEven ? "border-l" : ""} 
									${!isFirstRow ? "border-t" : ""}
									${isLastRow ? "border-b" : ""}`}
								key={rest.id}
							>
								<CopyButton content={source} variant="transparent" />
								<Component />
								<h1 className="text-xs font-mono text-secondary-foreground font-medium uppercase absolute bottom-2">
									{rest.title}
								</h1>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
