import type { Examples } from "@/lib/doc-data";
import ShowcaseCodeBlock from "../code-blocks/showcase-code-block";

export default function MoreExamples({ examples }: { examples: Examples }) {
	const renderDescription = (description: string) => {
		return description.split(/(`[^`]+`)/).map((part, i) => {
			if (part.startsWith("`") && part.endsWith("`")) {
				const content = part.slice(1, -1);
				return (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-secondary-foreground/10"
					>
						{content}
					</span>
				);
			}
			return part;
		});
	};
	return (
		<section id="examples" className="mt-8">
			<h1 className="text-xl mb-4 font-medium">Examples</h1>
			<div className="flex flex-col gap-8">
				{examples.map((example, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} id={example.id}>
						<div className="mb-4">
							<h1 className="text-lg mb-2 font-medium">{example.title}</h1>
							{example.description && (
								<div className="text-xs font-medium text-secondary-foreground">
									{renderDescription(example.description)}
								</div>
							)}
						</div>
						<ShowcaseCodeBlock filePath={example.source} />
					</div>
				))}
			</div>
		</section>
	);
}
