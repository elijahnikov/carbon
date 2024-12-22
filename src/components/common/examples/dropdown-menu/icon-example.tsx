import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HeartIcon, ReplyIcon, TrashIcon } from "lucide-react";

export default function DropdownMenuIconExample() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Open</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<HeartIcon />
					<span>Like</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<ReplyIcon />
					<span>Reply</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<TrashIcon />
					<span>Delete</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
