"use server";

import { promises as fs } from "node:fs";
import path from "node:path";
import dynamic from "next/dynamic";

type ComponentPageProps = {
	title: string;
	description: string;
	basicUsagePath: string;
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

async function getExampleSource(filePath: string) {
	try {
		const fullPath = path.join(process.cwd(), filePath);
		const source = await fs.readFile(fullPath, "utf-8");
		return source;
	} catch (error) {
		console.error(`Error loading example from ${filePath}:`, error);
		return null;
	}
}

export default async function ComponentPage({
	basicUsagePath,
	title,
	description,
}: ComponentPageProps) {
	const file = await getExampleSource(basicUsagePath);
	const Component = dynamic(
		() => import("@/components/common/pages/components/example"),
	);

	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
			<Component />
		</div>
	);
}
