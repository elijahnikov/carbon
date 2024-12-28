import { Button } from "@/components/ui/button";
import { components } from "@/lib/constants";
import _ from "lodash";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function PageStepper({ slug }: { slug: string }) {
	const sortedComponents = [...components].sort();
	const currentIndex = sortedComponents.indexOf(slug);

	const previousComponent = React.useMemo(
		() =>
			currentIndex === 0
				? sortedComponents[sortedComponents.length - 1]
				: sortedComponents[currentIndex - 1],
		[currentIndex, sortedComponents],
	);

	const nextComponent = React.useMemo(
		() =>
			currentIndex === sortedComponents.length - 1
				? sortedComponents[0]
				: sortedComponents[currentIndex + 1],
		[currentIndex, sortedComponents],
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
