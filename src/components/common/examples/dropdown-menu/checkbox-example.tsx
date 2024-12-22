"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";

export default function DropdownMenuCheckboxExample() {
	const [selected, setSelected] = React.useState<string>("checkbox-1");
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Select</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuCheckboxItem
					onCheckedChange={(e) => e && setSelected("checkbox-1")}
					checked={selected === "checkbox-1"}
				>
					Checkbox 1
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					onCheckedChange={(e) => e && setSelected("checkbox-2")}
					checked={selected === "checkbox-2"}
				>
					Checkbox 2
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					onCheckedChange={(e) => e && setSelected("checkbox-3")}
					checked={selected === "checkbox-3"}
				>
					Checkbox 3
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
