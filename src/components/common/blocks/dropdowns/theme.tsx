"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import * as React from "react";

export default function ThemeDropdown() {
	const [theme, setTheme] = React.useState<"light" | "dark" | "system">(
		"system",
	);

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button isIconOnly variant="outline">
						{theme === "light" ? (
							<SunIcon />
						) : theme === "dark" ? (
							<MoonIcon />
						) : (
							<MonitorIcon />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="min-w-32">
					<DropdownMenuItem onClick={() => setTheme("light")}>
						<SunIcon />
						<span>Light</span>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme("dark")}>
						<MoonIcon />
						<span>Dark</span>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme("system")}>
						<MonitorIcon />
						<span>System</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
