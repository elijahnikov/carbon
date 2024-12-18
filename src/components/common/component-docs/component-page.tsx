"use server";

import ShowcaseCodeBlock from "./showcase-code-block";

type ComponentPageProps = {
	title: string;
	description: string;
	basicUsagePath: string;
	sourceUrl?: string;
	// apiReference: {
	//   props: Array<{
	//     name: string
	//     type: string
	//     default?: string
	//     description: string
	//     required?: boolean
	//   }>
	// }
	// examples?: Array<{
	//   title: string
	//   description?: string
	//   code: string
	// }>
};

export default async function ComponentPage({
	basicUsagePath,
	title,
	description,
}: ComponentPageProps) {
	return (
		<div className="flex justify-between px-16">
			<div className="flex flex-col w-full max-w-[50vw]">
				<div className="text-left w-full">
					<h1 className="text-2xl font-bold">{title}</h1>
					<p className="text-secondary-foreground">{description}</p>
				</div>
				<ShowcaseCodeBlock filePath={basicUsagePath} />
			</div>
			<div className="flex flex-col">
				<p>On this page</p>
			</div>
		</div>
	);
}
