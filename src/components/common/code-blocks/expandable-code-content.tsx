"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ExpandableCodeContent({
	html,
	isExpandable,
}: {
	html: string;
	isExpandable: boolean;
}) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="relative">
			<div
				className={`h-full overflow-auto font-mono text-sm [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all ${
					!isExpanded
						? "max-h-[300px] pointer-events-none"
						: "max-h-[600px] pointer-events-auto"
				}`}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			{isExpandable && !isExpanded && (
				<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-carbon-dark-300 to-transparent pointer-events-none" />
			)}
			{isExpandable && (
				<div className="absolute bottom-2 left-0 right-0 flex justify-center">
					<Button
						onClick={() => setIsExpanded(!isExpanded)}
						variant="secondary"
						className="z-10"
					>
						{isExpanded ? "Collapse" : "Show more"}
					</Button>
				</div>
			)}
		</div>
	);
}
