"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? <SunIcon size={14} /> : <MoonIcon size={14} />}
			<span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
		</button>
	);
}
