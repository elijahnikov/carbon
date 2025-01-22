"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export default function ThemeButton() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<Button
			variant="outline"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			isIconOnly
		>
			<div className="relative h-4 w-4">
				<div
					className={`absolute inset-0 transition-all duration-200 ${
						theme === "dark"
							? "transform scale-100 opacity-100"
							: "transform scale-50 opacity-0"
					}`}
				>
					<MoonIcon className="h-4 w-4" />
				</div>
				<div
					className={`absolute inset-0 transition-all duration-200 ${
						theme === "light"
							? "transform scale-100 opacity-100"
							: "transform scale-50 opacity-0"
					}`}
				>
					<SunIcon className="h-4 w-4" />
				</div>
			</div>
		</Button>
	);
}
