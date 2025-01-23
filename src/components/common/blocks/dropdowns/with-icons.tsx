import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	DownloadIcon,
	EyeOffIcon,
	MailIcon,
	PinIcon,
	RedoIcon,
	TrashIcon,
} from "lucide-react";

export default function WithIconDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>With icons</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<RedoIcon />
						<span>Reply</span>
					</DropdownMenuItem>

					<DropdownMenuItem>
						<PinIcon />
						<span>Pin</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<DownloadIcon />
						<span>Download</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
