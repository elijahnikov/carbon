import { Button } from "@/components/ui/button";
import { logos } from "@/lib/constants";
import { getSourceUrl } from "@/lib/general";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SocialLoginIcons } from "../pages/home/demo/login";

export default function Header({
	title,
	description,
	slug,
	apiSource,
}: {
	title: string;
	description: string;
	slug: string;
	apiSource?: string;
}) {
	return (
		<div className="bg-background border-b border-dashed justify-between -mx-8 px-4 bg-carbon-light-200 flex items-center py-4 min-h-12 -mt-4 gap-2">
			<div className="flex flex-col">
				<h1 className="font-semibold">{title}</h1>
				<p className="text-xs text-secondary-foreground font-mono">
					{description}
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Button
					variant={"outline"}
					asChild
					size="sm"
					className="gap-1"
					before={SocialLoginIcons.GitHub}
				>
					<Link href={getSourceUrl(slug)}>View Source</Link>
				</Button>
				{apiSource && (
					<Button
						size="sm"
						before={
							apiSource.includes("radix") ? logos.radix : <ArrowUpRight />
						}
						variant={"outline"}
						asChild
					>
						<Link href={apiSource}>
							{apiSource.includes("radix") ? "Radix" : "Docs"}
						</Link>
					</Button>
				)}
			</div>
		</div>
	);
}
