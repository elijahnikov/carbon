import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuShortcutExample() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Open</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<span>Like</span>
					<DropdownMenuShortcut key={"L"}>⌘L</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<span>Reply</span>
					<DropdownMenuShortcut key={"R"}>⌘R</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<span>Delete</span>
					<DropdownMenuShortcut key={"D"}>⌘D</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
