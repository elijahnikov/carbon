import Badge from "@/components/ui/badge";
import { CheckCircle, Info, XCircle } from "lucide-react";

export default function BadgeExample() {
	return (
		<div className="flex flex-wrap gap-4 max-w-sm">
			<Badge color="primary">Primary</Badge>
			<Badge color="blue">Blue</Badge>
			<Badge color="green">Green</Badge>
			<Badge color="red">Red</Badge>
			<Badge color="yellow">Yellow</Badge>
			<Badge color="purple">Purple</Badge>
			<Badge color="indigo">Indigo</Badge>
			<Badge color="orange">Orange</Badge>
			<Badge color="pink">Pink</Badge>
			<Badge color="teal">Teal</Badge>
		</div>
	);
}
