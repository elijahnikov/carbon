"use client";

import { Button, type buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
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
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={isCopied ? "check" : "copy"}
					initial={{ scale: 0.5, opacity: 0.5 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 1, opacity: 0 }}
					transition={{
						duration: 0.05,
						type: "spring",
						stiffness: 1000,
						damping: 25,
						opacity: { duration: 0.05 },
					}}
					className="h-4 w-4"
				>
					{isCopied ? (
						<CheckIcon className="h-4 w-4" />
					) : (
						<CopyIcon className="h-4 w-4" />
					)}
				</motion.div>
			</AnimatePresence>
		</Button>
	);
}
