import { promises as fs } from "node:fs";
import path from "node:path";

const UI_COMPONENTS_DIR = path.join(process.cwd(), "src/components/ui");
const OUTPUT_DIR = path.join(process.cwd(), "src/generated/source-files");

async function bundleSourceFiles() {
	try {
		// Create output directory if it doesn't exist
		await fs.mkdir(OUTPUT_DIR, { recursive: true });

		// Get all files from the UI components directory
		const files = await fs.readdir(UI_COMPONENTS_DIR);
		const componentFiles = files.filter((file) => file.endsWith(".tsx"));

		// Create a map to store the source files
		const sourceMap = {};

		// Read each component file and add to the map
		for (const file of componentFiles) {
			const filePath = path.join(UI_COMPONENTS_DIR, file);
			const content = await fs.readFile(filePath, "utf-8");
			// Store with the path relative to src/
			// @ts-ignore
			sourceMap[`components/ui/${file}`] = content;
		}

		// Write the bundle file
		await fs.writeFile(
			path.join(OUTPUT_DIR, "source-files.json"),
			JSON.stringify(sourceMap, null, 2),
		);

		console.log("Successfully bundled UI component source files!");
		console.log(`Bundled ${componentFiles.length} components`);
	} catch (error) {
		console.error("Error bundling source files:", error);
		process.exit(1);
	}
}

bundleSourceFiles();
