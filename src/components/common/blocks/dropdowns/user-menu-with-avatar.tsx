"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	LogOutIcon,
	SettingsIcon,
	UserCircleIcon,
	UserIcon,
} from "lucide-react";
import * as React from "react";

export default function UserMenuAvatarDropdown() {
	const [selected, setSelected] = React.useState("medium");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button isIconOnly variant={"outline"}>
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuLabel className="flex gap-2 items-center">
					<Avatar
						src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
						size="sm"
						alt="John Doe"
					/>
					<div className="flex flex-col gap-0">
						<span className="text-sm font-medium">John Doe</span>
						<span className="text-xs dark:text-carbon-900">user@carbon.co</span>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<UserCircleIcon />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<SettingsIcon />
						<span>Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem destructive>
						<LogOutIcon />
						<span>Logout</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
