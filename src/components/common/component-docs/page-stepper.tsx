import { Button } from "@/components/ui/button";
import { components } from "@/lib/constants";
import _ from "lodash";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
export default function PageStepper({ slug }: { slug: string }) {
	const currentIndex = components.indexOf(slug);

	const previousComponent = React.useMemo(
		() =>
			currentIndex === 0
				? components[components.length - 1]
				: components[currentIndex - 1],
		[currentIndex],
	);

	const nextComponent = React.useMemo(
		() =>
			currentIndex === components.length - 1
				? components[0]
				: components[currentIndex + 1],
		[currentIndex],
	);

	return (
		<div className="w-full flex mt-4 items-center justify-between gap-4">
			<Button variant={"outline"} asChild before={<ChevronLeftIcon />}>
				<Link href={`/components/${previousComponent}`}>
					{_.startCase(previousComponent?.replace(/-/g, " ") ?? "")}
				</Link>
			</Button>
			<Button variant={"outline"} asChild after={<ChevronRightIcon />}>
				<Link href={`/components/${nextComponent}`}>
					{_.startCase(nextComponent?.replace(/-/g, " ") ?? "")}
				</Link>
			</Button>
		</div>
	);
}
