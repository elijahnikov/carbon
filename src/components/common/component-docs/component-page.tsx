"use server";

import { Button } from "@/components/ui/button";
import { getSourceUrl } from "@/lib/utils";
import Link from "next/link";
import CodeBlock from "../code-blocks/code-block";
import ShowcaseCodeBlock from "../code-blocks/showcase-code-block";
import { SocialLoginIcons } from "../pages/home/demo/login";
import PageStepper from "./page-stepper";

type ComponentPageProps = {
	title: string;
	description: string;
	slug: string;
	installationSource: string;
	// apiReference: {
	//   props: Array<{
	//     name: string
	//     type: string
	//     default?: string
	//     description: string
	//     required?: boolean
	//   }>
	// }
	// examples?: Array<{
	//   title: string
	//   description?: string
	//   source: string
	// }>
};

export default async function ComponentPage({
	title,
	description,
	slug,
}: ComponentPageProps) {
	return (
		<div className="flex justify-between px-16">
			<div className="flex flex-col w-full max-w-[50vw]">
				<div className="text-left mb-8 w-full space-y-4">
					<div>
						<h1 className="text-3xl font-semibold">{title}</h1>
						<p className="text-secondary-foreground">{description}</p>
					</div>
					<Button
						variant={"secondary"}
						asChild
						className="gap-2"
						before={SocialLoginIcons.GitHub}
					>
						<Link href={getSourceUrl(slug)}>View Source</Link>
					</Button>
				</div>
				<ShowcaseCodeBlock
					filePath={`components/common/examples/${slug}-example.tsx`}
				/>
				<CodeBlock source={`components/ui/dialog.tsx`} />
			</div>
			<PageStepper />
		</div>
	);
}
