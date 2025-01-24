import Badge from "@/components/ui/badge";
import {
	getExampleSource,
	indentCode,
	splitJsxAndImports,
} from "@/lib/general";
import * as React from "react";
import CodeBlock from "../code-blocks/code-block";
import { CommandBlock } from "../code-blocks/command-block";

export default async function InstallationSection({
	dependencies,
	installationSource,
	basicUsageFileSource,
	extraInstallationSource,
}: {
	dependencies?: string[];
	installationSource: string | string[];
	basicUsageFileSource: string;
	extraInstallationSource?: {
		code: string;
		fileName: string;
		highlightedLines?: number[];
	};
}) {
	const basicUsageFile =
		(await getExampleSource(`src/${basicUsageFileSource}`)) ?? "";

	const { imports, jsx } = splitJsxAndImports(basicUsageFile);
	return (
		<section id="installation" className="mt-8">
			<h1 className="text-xl mb-4 font-medium">Installation & Usage</h1>
			<div className="flex flex-col gap-4">
				{dependencies && dependencies.length > 0 && (
					<div className="space-y-2 flex flex-col justify-center w-full">
						<div className="inline-flex items-center gap-2">
							<Badge>1</Badge>
							<p className="text-sm font-medium text-secondary-foreground">
								Install the following dependencies.
							</p>
						</div>
						{dependencies.map((dependency, index) => (
							<React.Fragment key={dependency}>
								<CommandBlock
									pnpm={`pnpm add ${dependency}`}
									npm={`npm install ${dependency}`}
									yarn={`yarn add ${dependency}`}
									bun={`bun add ${dependency}`}
								/>
							</React.Fragment>
						))}
					</div>
				)}
				<div className="inline-flex items-center gap-2">
					<Badge>{dependencies && dependencies.length > 0 ? 2 : 1}</Badge>
					<p className="text-sm font-medium text-secondary-foreground">
						Copy & paste the following code into your project.
					</p>
				</div>
				{extraInstallationSource && (
					<CodeBlock
						fileName={extraInstallationSource.fileName}
						highlightedLines={extraInstallationSource.highlightedLines}
						code={indentCode(extraInstallationSource.code)}
					/>
				)}
				{Array.isArray(installationSource) ? (
					installationSource.map((source, index) => (
						<CodeBlock
							fileName={`${source}`}
							source={`${source}`}
							key={index}
						/>
					))
				) : (
					<CodeBlock
						fileName={`${installationSource}`}
						source={`${installationSource}`}
					/>
				)}
				<div className="inline-flex items-center gap-2">
					<Badge>{dependencies && dependencies.length > 0 ? 3 : 2}</Badge>
					<p className="text-sm font-medium text-secondary-foreground">
						Follow this example to use the component.
					</p>
				</div>
				<CodeBlock code={imports} />
				<CodeBlock code={jsx} />
			</div>
		</section>
	);
}
