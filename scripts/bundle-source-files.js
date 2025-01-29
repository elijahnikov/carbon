import { promises as fs } from "node:fs";
import path from "node:path";

const UI_COMPONENTS_DIR = path.join(process.cwd(), "src/components/ui");
const OUTPUT_DIR = path.join(process.cwd(), "src/generated/source-files");

async function bundleSourceFiles() {
	try {
		await fs.mkdir(OUTPUT_DIR, { recursive: true });

		const files = await fs.readdir(UI_COMPONENTS_DIR);
		const componentFiles = files.filter((file) => file.endsWith(".tsx"));

		const sourceMap = {};

		for (const file of componentFiles) {
			const filePath = path.join(UI_COMPONENTS_DIR, file);
			const content = await fs.readFile(filePath, "utf-8");
			// @ts-ignore
			sourceMap[`components/ui/${file}`] = content;
		}

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
