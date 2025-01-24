"use server";

import { getExampleSource } from "@/lib/general";
import { getCachedHighlighter } from "@/lib/highighter";
import { FileIcon } from "lucide-react";
import CopyButton from "../component-docs/copy-button";
import ExpandableCodeContent from "./expandable-code-content";

export default async function CodeBlock({
	source,
	code,
	fileName,
}: {
	source?: string;
	code?: string;
	fileName?: string;
	highlightedLines?: number[];
}) {
	console.log({ source });
	const file = source ? ((await getExampleSource(`src/${source}`)) ?? "") : "";

	const highlighter = await getCachedHighlighter();

	const _code = source ? file : (code ?? "");
	const out = highlighter.codeToHtml(_code, {
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

	const allowExpand = _code.length > 1000;
	return (
		<div className="relative bg-white dark:bg-carbon-dark-300 w-full overflow-auto min-h-max rounded-xl dark:shadow-sm-dark ring-1 ring-carbon-500 dark:ring-carbon-dark-500">
			{fileName && (
				<div className="text-sm font-medium text-secondary-foreground border-b px-7 py-2 w-full flex items-center gap-2">
					<FileIcon className="size-4" />
					<span>{fileName}</span>
				</div>
			)}
			<CopyButton content={_code} />
			<ExpandableCodeContent html={out} isExpandable={allowExpand} />
		</div>
	);
}
