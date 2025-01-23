import { Textarea } from "@/components/ui/textarea";

export default function RequiredTextArea() {
	return (
		<Textarea
			required
			label="Required textarea"
			placeholder="Type something…"
		/>
	);
}
