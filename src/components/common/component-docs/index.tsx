"use server";

import { componentData } from "@/lib/doc-data";
import * as React from "react";
import ShowcaseCodeBlock from "../code-blocks/showcase-code-block";

import ApiReferenceTable from "./api-reference-table";
import MoreExamples from "./examples";
import Header from "./header";
import InstallationSection from "./installation-section";
import PageStepper from "./page-stepper";
import SectionStepper from "./section-stepper";
type ComponentPageProps = {
	slug: string;
};

export default async function ComponentPage({ slug }: ComponentPageProps) {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const component = componentData[slug]!;

	return (
		<div className="flex pb-32 justify-between px-16">
			<div className="flex flex-col gap-8 w-full min-w-[500px] max-w-[50vw]">
				<Header
					title={component.title}
					description={component.description}
					slug={slug}
					radixSource={component.radixSource}
				/>
				<section id="usage">
					<ShowcaseCodeBlock filePath={`${component.showcaseFileSource}`} />
				</section>
				<InstallationSection
					dependencies={component.dependencies}
					installationSource={component.installationSource}
					basicUsageFileSource={component.basicUsageFileSource ?? ""}
				/>
				{component.apiReference && component.apiReference.length > 0 && (
					<ApiReferenceTable apiReference={component.apiReference} />
				)}
				{component.examples && component.examples.length > 0 && (
					<MoreExamples examples={component.examples} />
				)}
				<PageStepper slug={slug} />
			</div>
			<SectionStepper componentData={component} />
		</div>
	);
}
