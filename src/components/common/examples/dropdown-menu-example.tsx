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

export default function Example() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Open Menu</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuItem disabled>
						<RedoIcon />
						<span>Reply</span>
						<DropdownMenuShortcut key={"R"}>R</DropdownMenuShortcut>
					</DropdownMenuItem>

					<DropdownMenuItem>
						<PinIcon />
						<span>Pin</span>
						<DropdownMenuShortcut key={"P"}>P</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem>
						<DownloadIcon />
						<span>Save this message</span>
						<DropdownMenuShortcut key={"S"}>S</DropdownMenuShortcut>
					</DropdownMenuItem>

					<DropdownMenuItem>
						<EyeOffIcon />
						<span>Mark as unread</span>
						<DropdownMenuShortcut key={"U"}>U</DropdownMenuShortcut>
					</DropdownMenuItem>

					<DropdownMenuItem>
						<MailIcon />
						<span>Share via email</span>
						<DropdownMenuShortcut key={"E"}>E</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
