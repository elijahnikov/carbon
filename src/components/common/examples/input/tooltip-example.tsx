import { Input } from "@/components/ui/input";

export default function InputTooltipExample() {
	return (
		<Input
			tooltip={"This is an example tooltip for the input component."}
			label="Email"
			required
			placeholder="Enter your email"
		/>
	);
}
