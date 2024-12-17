"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "../ui/button";

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
		<Button
			isIconOnly
			variant={"outline"}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{currentTheme === "dark" ? <SunIcon size={14} /> : <MoonIcon size={14} />}
		</Button>
	);
}
