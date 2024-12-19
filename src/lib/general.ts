import fs from "node:fs/promises";
import path from "node:path";

export const getSourceUrl = (componentName: string) => {
	return `https://github.com/elijahnikov/carbon/blob/main/src/components/common/examples/${componentName}-example.tsx`;
};

export async function getExampleSource(filePath: string) {
	try {
		const fullPath = path.join(process.cwd(), filePath);
		const source = await fs.readFile(fullPath, "utf-8");
		return source;
	} catch (error) {
		console.error(`Error loading example from ${filePath}:`, error);
		return null;
	}
}
