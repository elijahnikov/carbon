import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuDisabledExample() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Open</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem key="item-1" disabled>
					Item 1
				</DropdownMenuItem>
				<DropdownMenuItem key="item-2">Item 2</DropdownMenuItem>
				<DropdownMenuItem key="item-3">Item 3</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
