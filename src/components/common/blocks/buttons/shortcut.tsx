import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ShortcutButton() {
	return (
		<Button
			variant="outline"
			className="h-8"
			after={
				<span className="ml-1 px-1 h-max py-0.5 rounded w-max border text-xs">
					⌘S
				</span>
			}
		>
			Share
		</Button>
	);
}
