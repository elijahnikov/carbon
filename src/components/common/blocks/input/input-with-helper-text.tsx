import { Input } from "@/components/ui/input";

export default function HelperText() {
	return (
		<Input
			label="Helper text"
			required
			tooltip="An example tooltip"
			placeholder="Type something…"
			helperText="Some description about the input field"
		/>
	);
}
