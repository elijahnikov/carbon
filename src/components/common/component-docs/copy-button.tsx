"use client";

import { Button, type buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function CopyButton({
	content,
	variant = "outline",
}: {
	content: string | null;
	variant?: VariantProps<typeof buttonVariants>["variant"];
}) {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const copy = async () => {
		if (!content) return;
		await navigator.clipboard.writeText(content);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<Button
			size="sm"
			variant={variant}
			className="absolute top-2 z-40 right-2"
			onClick={copy}
			isIconOnly
		>
			<div className="relative h-4 w-4">
				<div
					className={`absolute inset-0 transition-all duration-200 ${
						isCopied
							? "transform scale-100 opacity-100"
							: "transform scale-50 opacity-0"
					}`}
				>
					<CheckIcon className="h-4 w-4 text-green-500" />
				</div>
				<div
					className={`absolute inset-0 transition-all duration-200 ${
						!isCopied
							? "transform scale-100 opacity-100"
							: "transform scale-50 opacity-0"
					}`}
				>
					<CopyIcon className="h-4 w-4" />
				</div>
			</div>
		</Button>
	);
}
