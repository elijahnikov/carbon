import { Button } from "@/components/ui/button";
import { logos } from "@/lib/constants";
import { getSourceUrl } from "@/lib/general";
import Link from "next/link";
import { SocialLoginIcons } from "../pages/home/demo/login";

export default function Header({
	title,
	description,
	slug,
	radixSource,
}: {
	title: string;
	description: string;
	slug: string;
	radixSource?: string;
}) {
	return (
		<div className="text-left w-full space-y-4">
			<div>
				<h1 className="text-3xl font-semibold">{title}</h1>
				<p className="font-medium text-secondary-foreground">{description}</p>
			</div>
			<div className="flex items-center gap-2">
				<Button
					variant={"secondary"}
					asChild
					className="gap-2"
					before={SocialLoginIcons.GitHub}
				>
					<Link href={getSourceUrl(slug)}>View Source</Link>
				</Button>
				{radixSource && (
					<Button before={logos.radix} variant={"secondary"} asChild>
						<Link href={radixSource}>Radix</Link>
					</Button>
				)}
			</div>
		</div>
	);
}