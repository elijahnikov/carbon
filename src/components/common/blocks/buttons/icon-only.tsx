import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

export default function IconOnlyButton() {
	return (
		<Button variant={"outline"} isIconOnly>
			<UploadIcon />
		</Button>
	);
}
