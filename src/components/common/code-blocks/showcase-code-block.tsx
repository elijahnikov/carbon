import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getExampleSource } from "@/lib/utils";
import { EyeIcon, TerminalSquareIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { createHighlighter } from "shiki";
import CopyButton from "../component-docs/copy-button";

export default async function ShowcaseCodeBlock({
	filePath,
}: { filePath: string }) {
	const file = (await getExampleSource(`src/${filePath}`)) ?? "";
	const Component = dynamic(() => import(`@/${filePath}`));

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
		<div className="w-full relative">
			<Tabs defaultValue="preview" variant={"fill"}>
				<TabsList stretch>
					<TabsTrigger before={<EyeIcon />} value="preview">
						Preview
					</TabsTrigger>
					<TabsTrigger before={<TerminalSquareIcon />} value="code">
						Code
					</TabsTrigger>
				</TabsList>
				<TabsContent value="preview">
					<div className="border relative min-h-[300px] max-h-[300px] flex items-center justify-center rounded-xl p-4">
						<CopyButton content={file} />
						<Component />
					</div>
				</TabsContent>
				<TabsContent value="code">
					<div className="relative dark:bg-carbon-dark-300 w-full overflow-auto min-h-max max-h-[300px] rounded-xl dark:shadow-sm-dark ring-1 ring-carbon-dark-500">
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
