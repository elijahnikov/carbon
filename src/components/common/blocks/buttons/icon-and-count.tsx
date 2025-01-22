"use client";

import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/utils/cn";
import { HeartIcon } from "lucide-react";
import * as React from "react";

const formatNumber = (num: number): string => {
	if (num >= 1000000) {
		return `${(num / 1000000).toFixed(1)}M`;
	}
	if (num >= 1000) {
		return `${(num / 1000).toFixed(1)}k`;
	}
	return num.toString();
};

export default function IconAndCountButton() {
	const [hasLiked, setHasLiked] = React.useState<boolean>(false);
	return (
		<Button
			variant="secondary"
			onClick={() => setHasLiked(!hasLiked)}
			before={
				<HeartIcon
					className={cn("w-4 h-4", hasLiked && "text-red-500 fill-red-500")}
				/>
			}
			className="w-max h-8"
			after={
				<Badge
					shape={"pill"}
					size={"sm"}
					className="h-6 min-w-max px-1 dark:bg-carbon-900/20"
				>
					<span className="text-xs">{formatNumber(1234)}</span>
				</Badge>
			}
		>
			<span>Like</span>
		</Button>
	);
}
