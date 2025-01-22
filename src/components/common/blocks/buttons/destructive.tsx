import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

export default function DestructiveButton() {
	return (
		<Button after={<TrashIcon />} variant={"destructive"}>
			Delete
		</Button>
	);
}
