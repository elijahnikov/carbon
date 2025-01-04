"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";

export default function CheckboxItemsDropdown() {
	const [selected, setSelected] = React.useState("medium");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Checkbox items</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
					<DropdownMenuRadioItem value="small">Small</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="large">Large</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
