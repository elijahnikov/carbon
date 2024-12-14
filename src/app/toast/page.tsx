"use client";

import ThemeToggle from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { Icon, Info, InfoIcon } from "lucide-react";
import { toast } from "sonner";

export default function ToastPage() {
	return (
		<div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center">
			<ThemeToggle />
			<Button
				onClick={() =>
					toast.error("You need to log in to continue.", {
						action: {
							label: "Log in",
							onClick: () => {
								console.log("clicked");
							},
						},
					})
				}
			>
				toast
			</Button>
		</div>
	);
}
