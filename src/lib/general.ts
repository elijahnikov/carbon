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

export const splitJsxAndImports = (code: string) => {
	const imports = code.split(/\n\s*\n/)[0];
	// biome-ignore lint/correctness/noEmptyCharacterClassInRegex: <explanation>
	const jsxRegex = /return\s*(?:\(\s*([^]*?)\s*\)|\s+([^;]*));/;
	const jsxMatch = code.match(jsxRegex);

	let jsx = "";
	if (jsxMatch) {
		// jsxMatch[1] for multi-line (parentheses), jsxMatch[2] for single-line
		const rawJsx = jsxMatch[1] || jsxMatch[2];
		// Remove the first two levels of indentation (8 spaces or 2 tabs)
		jsx = rawJsx
			? rawJsx
					.split("\n")
					.map((line) => line.replace(/^\t\t|\s{8}/, ""))
					.join("\n")
					.trim()
			: "";
	}

	return { imports, jsx };
};
