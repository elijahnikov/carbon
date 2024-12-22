import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function ShowcaseExample() {
	return (
		<div className="flex items-center gap-2">
			<Switch id="switch" />
			<Label htmlFor="switch">Switch</Label>
		</div>
	);
}
