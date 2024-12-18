import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";

export default function Buttons() {
	return (
		<div className="flex flex-col items-center gap-2">
			<Button
				onClick={() => {
					toast.success("Invite successfully sent");
				}}
				before={<PlusIcon />}
			>
				Invite to workspace
			</Button>
			<Button before={<TrashIcon />} variant={"destructive"}>
				Delete your project
			</Button>
		</div>
	);
}
