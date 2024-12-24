import { Textarea } from "@/components/ui/textarea";

export default function TextareaTooltipExample() {
	return (
		<Textarea
			label="Label"
			tooltip={"Example tooltip"}
			placeholder="Enter your message"
		/>
	);
}
