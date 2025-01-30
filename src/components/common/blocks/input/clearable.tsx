"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XCircleIcon } from "lucide-react";
import * as React from "react";

export default function Clearable() {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [value, setValue] = React.useState<string>("Clear me");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<div className="relative">
			<Input
				ref={inputRef}
				value={value}
				onChange={handleChange}
				label="Clearable"
				className="pe-4"
				placeholder="Type something…"
			/>
			<div className="absolute top-1/2 end-0 -mt-1">
				<Button
					onClick={() => {
						setValue("");
						inputRef.current?.focus();
					}}
					variant="transparent"
					className="h-9 rounded-l-none cursor-pointer bg-transparent hover:bg-transparent active:bg-transparent [&_svg]:text-secondary-foreground/50 hover:[&_svg]:text-white "
					isIconOnly
				>
					<XCircleIcon />
				</Button>
			</div>
		</div>
	);
}
