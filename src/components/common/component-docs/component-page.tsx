"use server";

import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { logos } from "@/lib/constants";
import { componentData } from "@/lib/doc-data";
import {
	getExampleSource,
	getSourceUrl,
	splitJsxAndImports,
} from "@/lib/general";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import CodeBlock from "../code-blocks/code-block";
import { CommandBlock } from "../code-blocks/command-block";
import ShowcaseCodeBlock from "../code-blocks/showcase-code-block";
import { SocialLoginIcons } from "../pages/home/demo/login";
import PageStepper from "./page-stepper";
type ComponentPageProps = {
	slug: string;
};

export default async function ComponentPage({ slug }: ComponentPageProps) {
	const {
		description,
		title,
		radixSource,
		showcaseFileSource,
		dependencies,
		installationSource,
		basicUsageFileSource,
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
	} = componentData[slug]!;

	const basicUsageFile =
		(await getExampleSource(`src/${basicUsageFileSource}`)) ?? "";

	const { imports, jsx } = splitJsxAndImports(basicUsageFile);

	return (
		<div className="flex justify-between px-16">
			<div className="flex flex-col w-full max-w-[50vw]">
				<div className="text-left mb-8 w-full space-y-4">
					<div>
						<h1 className="text-3xl font-semibold">{title}</h1>
						<p className="font-medium text-secondary-foreground">
							{description}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<Button
							variant={"secondary"}
							asChild
							className="gap-2"
							before={SocialLoginIcons.GitHub}
						>
							<Link href={getSourceUrl(slug)}>View Source</Link>
						</Button>
						{radixSource && (
							<Button before={logos.radix} variant={"secondary"} asChild>
								<Link href={radixSource}>Radix</Link>
							</Button>
						)}
					</div>
				</div>
				<ShowcaseCodeBlock filePath={`${showcaseFileSource}`} />
				<div className="mt-8">
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
										{index < dependencies.length - 1 && (
											<ChevronDownIcon className="w-4 h-4 text-secondary-foreground" />
										)}
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
						<CodeBlock source={`${installationSource}`} />
						<div className="inline-flex items-center gap-2">
							<Badge>{dependencies && dependencies.length > 0 ? 3 : 2}</Badge>
							<p className="text-sm font-medium text-secondary-foreground">
								Follow this example to use the component.
							</p>
						</div>
						<CodeBlock code={imports} />
						<CodeBlock code={jsx} />
					</div>
				</div>
			</div>
			<PageStepper />
		</div>
	);
}
