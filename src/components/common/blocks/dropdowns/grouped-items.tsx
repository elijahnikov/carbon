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
} from "lucide-react";

export default function GroupedItemsDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Actions</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<MailIcon className="mr-2 h-4 w-4" />
						<span>Send Message</span>
					</DropdownMenuItem>

					<DropdownMenuItem>
						<RedoIcon className="mr-2 h-4 w-4" />
						<span>Forward</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem>
						<PinIcon className="mr-2 h-4 w-4" />
						<span>Pin to Top</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<EyeOffIcon className="mr-2 h-4 w-4" />
						<span>Hide Content</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<DownloadIcon className="mr-2 h-4 w-4" />
						<span>Save Offline</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
