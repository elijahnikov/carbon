"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function CopyButton() {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const copy = async () => {
		await navigator.clipboard.writeText("");
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<Button variant="outline" onClick={copy} isIconOnly>
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
