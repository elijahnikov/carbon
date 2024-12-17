import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export default function CheckboxSwitch() {
	return (
		<div className="flex items-center gap-2">
			<Checkbox defaultChecked />
			<Switch />
		</div>
	);
}
