import { Button } from "@/components/ui/button";
import { ArrowRightIcon, MessageSquareIcon } from "lucide-react";

export default function TwoIconsButton() {
	return (
		<Button
			variant="secondary"
			before={<MessageSquareIcon />}
			after={<ArrowRightIcon />}
		>
			Send message
		</Button>
	);
}
