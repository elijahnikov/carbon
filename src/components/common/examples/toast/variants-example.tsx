"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ToastVariantsExample() {
	return (
		<div className="flex flex-col gap-2">
			<Button onClick={() => toast.success("An example success toast")}>
				Success
			</Button>
			<Button onClick={() => toast.error("An example error toast")}>
				Error
			</Button>
			<Button onClick={() => toast.warning("An example warning toast")}>
				Warning
			</Button>
			<Button onClick={() => toast.info("An example info toast")}>Info</Button>
		</div>
	);
}
