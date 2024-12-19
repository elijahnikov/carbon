"use server";

import { Button } from "@/components/ui/button";
import { logos } from "@/lib/constants";
import { componentData } from "@/lib/doc-data";
import { getSourceUrl } from "@/lib/general";
import Link from "next/link";
import CodeBlock from "../code-blocks/code-block";
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
		installationSource,
	} =
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		componentData[slug]!;
	return (
		<div className="flex justify-between px-16">
			<div className="flex flex-col w-full max-w-[50vw]">
				<div className="text-left mb-8 w-full space-y-4">
					<div>
						<h1 className="text-3xl font-semibold">{title}</h1>
						<p className="text-secondary-foreground">{description}</p>
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
				<h1 className="text-lg font-medium">Installation</h1>
				<p className="text-sm text-secondary-foreground">
					Install the following dependencies.
				</p>
				<CodeBlock source={`${installationSource}`} />
			</div>
			<PageStepper />
		</div>
	);
}
