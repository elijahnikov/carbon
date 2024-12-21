import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxExample() {
	return (
		<div className="flex items-center gap-2">
			<Checkbox id="checkbox" />
			<label className="font-medium text-sm cursor-pointer" htmlFor="checkbox">
				Checkbox
			</label>
		</div>
	);
}
