"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

export default function CopyInput() {
	const [isCopied, setIsCopied] = React.useState<boolean>(false);
	const [inputValue, setInputValue] = React.useState<string>("bun run dev");

	const copy = async () => {
		await navigator.clipboard.writeText(inputValue);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};
	return (
		<div className="relative">
			<Input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				label="Copy input"
				className="pe-6"
				placeholder="Type something…"
			/>
			<div className="absolute top-1/2 -mt-[2px] end-1">
				<Button
					variant="transparent"
					onClick={copy}
					isIconOnly
					className="hover:bg-transparent active:bg-transparent"
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
			</div>
		</div>
	);
}
