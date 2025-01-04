import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

export default function BaseDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button isIconOnly variant={"outline"}>
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem>Item 1</DropdownMenuItem>
				<DropdownMenuItem>Item 2</DropdownMenuItem>
				<DropdownMenuItem>Item 3</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
