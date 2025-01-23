import BlockPage from "@/components/common/block-page";
import { blocks } from "@/lib/constants";
import { redirect } from "next/navigation";

export default async function SingleBlockPage({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	if (!blocks.includes(slug)) {
		return redirect("/");
	}

	return <BlockPage slug={slug} />;
}
