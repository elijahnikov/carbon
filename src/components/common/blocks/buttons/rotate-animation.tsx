"use client";

import { Button } from "@/components/ui/button";
import {
	CheckIcon,
	CopyIcon,
	MenuIcon,
	MoonIcon,
	SunIcon,
	XIcon,
} from "lucide-react";
import { useState } from "react";

export default function RotateAnimationButton() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Button variant="outline" onClick={() => setIsOpen(!isOpen)} isIconOnly>
			<div className="relative h-4 w-4">
				<div
					className={`absolute inset-0 transition-all duration-200 ${
						isOpen
							? "transform rotate-180 opacity-100"
							: "transform rotate-0 opacity-0"
					}`}
				>
					<XIcon className="h-4 w-4" />
				</div>
				<div
					className={`absolute inset-0 transition-all duration-200 ${
						!isOpen
							? "transform rotate-0 opacity-100"
							: "transform rotate-180 opacity-0"
					}`}
				>
					<MenuIcon className="h-4 w-4" />
				</div>
			</div>
		</Button>
	);
}
