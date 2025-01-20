import ComponentPage from "@/components/common/component-docs";
import { components } from "@/lib/constants";
import _ from "lodash";
import type { Metadata } from "next";
import Head from "next/head";
import { redirect } from "next/navigation";

export async function generateMetadata({
	params,
}: { params: { slug: string } }): Promise<Metadata> {
	return {
		title: `Carbon UI - ${_.startCase(params.slug)}`,
	};
}

export default async function SingleComponentPage({
	params,
}: { params: { slug: string } }) {
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
