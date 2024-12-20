import ComponentPage from "@/components/common/component-docs";
import { components } from "@/lib/constants";
import { redirect } from "next/navigation";

export default function AlertPage({ params }: { params: { slug: string } }) {
	const { slug } = params;

	if (!components.includes(slug)) {
		return redirect("/");
	}

	return <ComponentPage slug={slug} />;
}
