import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

export default function PopoverShowcaseExample() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button>Feedback</Button>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col gap-4">
				<div>
					<Label required>Send us feedback</Label>
					<Textarea placeholder="How can we improve Carbon?" />
				</div>
				<Button className="w-full">Send</Button>
			</PopoverContent>
		</Popover>
	);
}
