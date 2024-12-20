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

import ApiReferenceTable from "./api-reference-table";
import MoreExamples from "./examples";
import Header from "./header";
import InstallationSection from "./installation-section";
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
		apiReference,
		examples,
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
	} = componentData[slug]!;

	return (
		<div className="flex justify-between px-16">
			<div className="flex flex-col gap-8 w-full max-w-[50vw]">
				<Header
					title={title}
					description={description}
					slug={slug}
					radixSource={radixSource}
				/>
				<ShowcaseCodeBlock filePath={`${showcaseFileSource}`} />
				<InstallationSection
					dependencies={dependencies}
					installationSource={installationSource}
					basicUsageFileSource={basicUsageFileSource ?? ""}
				/>
				{apiReference && apiReference.length > 0 && (
					<ApiReferenceTable apiReference={apiReference} />
				)}
				{examples && examples.length > 0 && (
					<MoreExamples examples={examples} />
				)}
			</div>
			<PageStepper />
		</div>
	);
}
