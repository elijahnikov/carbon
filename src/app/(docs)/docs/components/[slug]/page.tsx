import ComponentPage from "@/components/common/component-docs";
import { components } from "@/lib/constants";
import _ from "lodash";
import type { Metadata } from "next";
import Head from "next/head";
import { redirect } from "next/navigation";

export async function generateMetadata({
	params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;

	return {
		title: `Carbon UI - ${_.startCase(slug)}`,
	};
}

export default async function SingleComponentPage({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	if (!components.includes(slug)) {
		return redirect("/");
	}

	return (
		<>
			<Head>
				<title>Carbon UI - {slug}</title>
			</Head>
			<ComponentPage slug={slug} />
		</>
	);
}
