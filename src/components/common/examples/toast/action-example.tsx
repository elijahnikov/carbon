"use client";

import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { toast } from "sonner";

export default function ToastActionExample() {
	return (
		<Button
			before={<PlusCircleIcon />}
			onClick={() =>
				toast.success("Your new post has been created!", {
					action: {
						label: "Open",
						onClick: () => alert("Opening post..."),
					},
				})
			}
		>
			Click me
		</Button>
	);
}
