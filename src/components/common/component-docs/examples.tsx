import type { Examples } from "@/lib/doc-data";
import ShowcaseCodeBlock from "../code-blocks/showcase-code-block";

export default function MoreExamples({ examples }: { examples: Examples }) {
	return (
		<div className="mt-8">
			<h1 className="text-xl mb-4 font-medium">Examples</h1>
			{examples.map((example, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<ShowcaseCodeBlock key={index} filePath={example.source} />
			))}
		</div>
	);
}
