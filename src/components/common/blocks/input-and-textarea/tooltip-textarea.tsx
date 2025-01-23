import { Textarea } from "@/components/ui/textarea";

export default function TooltipTextarea() {
	return (
		<Textarea
			tooltip="Example tooltip"
			label="Tooltip textarea"
			placeholder="Type something…"
		/>
	);
}
