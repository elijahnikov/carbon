"use server";

import { blocksData } from "@/lib/blocks-data";
import { getExampleSource } from "@/lib/general";
import dynamic from "next/dynamic";

export default async function BlockPage({ slug }: { slug: string }) {
	const blockData = blocksData[slug];

	const paths = blockData?.map((block) => block.path) ?? [];

	const fileSources = await Promise.all(
		paths.map((path) => getExampleSource(`src/${path}`)),
	);
	const components = (await Promise.all(
		paths.map((path) => dynamic(() => import(`@/${path}`))),
	)) as unknown as Array<React.ComponentType>;

	const combined = fileSources.map((source, index) => ({
		source: source ?? "",
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		Component: components[index]!,
		...blockData?.[index],
	}));

	return (
		<div className="flex pt-8 pb-32 px-16">
			<div className="grid grid-cols-2 w-full min-w-[500px] max-w-[50vw]">
				{combined.map(({ source, Component, ...rest }) => {
					return (
						<div
							className="flex flex-col justify-center items-center"
							key={rest.id}
						>
							<Component />
							<h1>{rest.title}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
}
