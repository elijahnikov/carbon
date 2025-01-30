import { Textarea } from "@/components/ui/textarea";

export default function DisabledTextarea() {
	return (
		<Textarea
			disabled
			label="Disabled textarea"
			placeholder="Type something…"
		/>
	);
}
