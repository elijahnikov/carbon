"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export default function ThemeToggle() {
	const { setTheme, theme, systemTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === "system" ? systemTheme : theme;
	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{currentTheme === "dark" ? <SunIcon size={14} /> : <MoonIcon size={14} />}
			<span>{currentTheme === "dark" ? "Light Mode" : "Dark Mode"}</span>
		</button>
	);
}
