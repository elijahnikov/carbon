import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	ChevronDownIcon,
	ClockIcon,
	FileIcon,
	SendIcon,
	TagIcon,
	TrashIcon,
} from "lucide-react";

export default function WithDropdown() {
	return (
		<ButtonGroup size={"sm"}>
			<ButtonGroupItem before={<SendIcon />}>Send</ButtonGroupItem>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<ButtonGroupItem isIconOnly>
						<ChevronDownIcon />
					</ButtonGroupItem>
				</DropdownMenuTrigger>

				<DropdownMenuContent>
					<DropdownMenuItem>
						<ClockIcon />
						<span>Schedule</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<TagIcon />
						<span>Add label</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<FileIcon />
						<span>Attach file</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem destructive>
						<TrashIcon />
						<span>Delete</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</ButtonGroup>
	);
}
