"use client";

import ThemeToggle from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon, Info, InfoIcon } from "lucide-react";
import { toast } from "sonner";

export default function ToastPage() {
	return (
		<div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center">
			<ThemeToggle />
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
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
					</TooltipTrigger>
					<TooltipContent className="flex items-center gap-2">
						<div className="space-y-2">
							<div className="text-[13px] font-medium">Tuesday, Aug 13</div>
							<div className="flex items-center gap-2 text-xs">
								<svg
									width="8"
									height="8"
									fill="currentColor"
									viewBox="0 0 8 8"
									xmlns="http://www.w3.org/2000/svg"
									className="shrink-0 text-indigo-500"
									aria-hidden="true"
								>
									<circle cx="4" cy="4" r="4"></circle>
								</svg>
								<span className="flex grow gap-2">
									Sales <span className="ml-auto">$40</span>
								</span>
							</div>
							<div className="flex items-center gap-2 text-xs">
								<svg
									width="8"
									height="8"
									fill="currentColor"
									viewBox="0 0 8 8"
									xmlns="http://www.w3.org/2000/svg"
									className="shrink-0 text-purple-500"
									aria-hidden="true"
								>
									<circle cx="4" cy="4" r="4"></circle>
								</svg>
								<span className="flex grow gap-2">
									Revenue <span className="ml-auto">$74</span>
								</span>
							</div>
							<div className="flex items-center gap-2 text-xs">
								<svg
									width="8"
									height="8"
									fill="currentColor"
									viewBox="0 0 8 8"
									xmlns="http://www.w3.org/2000/svg"
									className="shrink-0 text-rose-500"
									aria-hidden="true"
								>
									<circle cx="4" cy="4" r="4"></circle>
								</svg>
								<span className="flex grow gap-2">
									Costs <span className="ml-auto">$410</span>
								</span>
							</div>
						</div>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
