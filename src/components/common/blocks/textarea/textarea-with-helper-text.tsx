import { Textarea } from "@/components/ui/textarea";

export default function HelperText() {
	return (
		<Textarea
			label="Helper text"
			required
			tooltip="An example tooltip"
			placeholder="Type something…"
			helperText="Some description about the input field"
		/>
	);
}
