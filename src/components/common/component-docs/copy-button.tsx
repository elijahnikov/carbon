"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ content }: { content: string | null }) {
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
			variant="outline"
			className="absolute top-2 z-50 right-2"
			onClick={copy}
			isIconOnly
		>
			{isCopied ? <CheckIcon /> : <CopyIcon />}
		</Button>
	);
}
