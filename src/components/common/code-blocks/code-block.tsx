import { getExampleSource } from "@/lib/general";
import { createHighlighter } from "shiki";
import CopyButton from "../component-docs/copy-button";
import ExpandableCodeContent from "./expandable-code-content";

export default async function CodeBlock({
	source,
	code,
}: { source?: string; code?: string }) {
	const file = (await getExampleSource(`src/${source}`)) ?? "";

	const highlighter = await createHighlighter({
		themes: ["poimandres", "github-light"],
		langs: ["tsx"],
	});

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
		<div className="relative dark:bg-carbon-dark-300 w-full overflow-auto min-h-max rounded-xl dark:shadow-sm-dark ring-1 ring-carbon-dark-500">
			<CopyButton content={_code} />
			<ExpandableCodeContent html={out} isExpandable={allowExpand} />
		</div>
	);
}
