import ComponentPage from "@/components/common/component-docs/component-page";

export default function AlertPage({ params }: { params: { slug: string } }) {
	const { slug } = params;

	return <ComponentPage slug={slug} />;
}
