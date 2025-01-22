import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BadgeButton() {
	return (
		<Button variant="outline">
			Notifications
			<Badge shape={"pill"} size={"sm"} className="h-6 min-w-6 ml-1">
				<span>23</span>
			</Badge>
		</Button>
	);
}
