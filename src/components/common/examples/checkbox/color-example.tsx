import { Checkbox } from "@/components/ui/checkbox";

export default function ColorExample() {
	return (
		<div className="grid grid-cols-8 gap-4">
			<Checkbox defaultChecked />
			<Checkbox defaultChecked color="green" />
			<Checkbox defaultChecked color="red" />
			<Checkbox defaultChecked color="yellow" />
			<Checkbox defaultChecked color="teal" />
			<Checkbox defaultChecked color="orange" />
			<Checkbox defaultChecked color="purple" />
			<Checkbox defaultChecked color="gray" />
		</div>
	);
}
