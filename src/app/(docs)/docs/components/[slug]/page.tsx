import ComponentPage from "@/components/common/component-docs";
import { components } from "@/lib/constants";
import { redirect } from "next/navigation";

export default async function AlertPage({
	params,
}: { params: { slug: string } }) {
	const { slug } = await params;

	if (!components.includes(slug)) {
		return redirect("/");
	}

	return <ComponentPage slug={slug} />;
}
