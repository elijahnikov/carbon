import fs from "node:fs/promises";
import path from "node:path";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EyeIcon, TerminalSquareIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { createHighlighter } from "shiki";
import CopyButton from "./copy-button";

async function getExampleSource(filePath: string) {
	try {
		const fullPath = path.join(process.cwd(), filePath);
		console.log(fullPath);
		const source = await fs.readFile(fullPath, "utf-8");
		return source;
	} catch (error) {
		console.error(`Error loading example from ${filePath}:`, error);
		return null;
	}
}

export default async function ShowcaseCodeBlock({
	filePath,
}: { filePath: string }) {
	const file = (await getExampleSource(filePath)) ?? "";
	const Component = dynamic(
		() => import("@/components/common/component-docs/example"),
	);

	const highlighter = await createHighlighter({
		themes: ["poimandres", "github-light"],
		langs: ["tsx"],
	});
	const out = highlighter.codeToHtml(file, {
		lang: "tsx",
		themes: {
			light: "github-light",
			dark: "poimandres",
		},
		transformers: [
			{
				pre(node) {
					node.properties.style = "tab-size: 2; -moz-tab-size: 2;";
					return node;
				},
			},
		],
	});

	return (
		<div className="w-full">
			<Tabs defaultValue="preview" variant={"underlined-fill"}>
				<TabsList stretch>
					<TabsTrigger before={<EyeIcon />} value="preview">
						Preview
					</TabsTrigger>
					<TabsTrigger before={<TerminalSquareIcon />} value="code">
						Code
					</TabsTrigger>
				</TabsList>
				<TabsContent value="preview">
					<div className="border min-h-[300px] max-h-[300px] flex items-center justify-center rounded-xl p-4">
						<Component />
					</div>
				</TabsContent>
				<TabsContent value="code">
					<div className="relative dark:bg-carbon-dark-300 w-full overflow-auto min-h-[300px] max-h-[300px] rounded-xl dark:shadow-sm-dark ring-1 ring-carbon-dark-500">
						<CopyButton content={file} />
						<div
							className="h-full overflow-auto  font-mono text-sm [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: out }}
						/>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
