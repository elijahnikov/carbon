import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export default function PopoverBasicExample() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button>Open</Button>
			</PopoverTrigger>
			<PopoverContent className="flex items-center justify-center">
				Popover content here
			</PopoverContent>
		</Popover>
	);
}
