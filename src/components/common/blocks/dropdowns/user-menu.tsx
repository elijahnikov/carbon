"use client";

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

export default function UserMenuDropdown() {
	const [selected, setSelected] = React.useState("medium");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button isIconOnly variant={"outline"}>
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuLabel className="flex flex-col gap-0">
					<span className="text-sm font-medium">John Doe</span>
					<span className="text-xs dark:text-carbon-900">user@carbon.co</span>
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
