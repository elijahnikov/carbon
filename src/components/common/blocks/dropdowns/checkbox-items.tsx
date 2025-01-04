"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";

export default function CheckboxItemsDropdown() {
	const [checked, setChecked] = React.useState({
		statusBar: true,
		lineNumbers: false,
		minimap: false,
	});

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Checkbox items</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuCheckboxItem
						checked={checked.statusBar}
						onCheckedChange={() =>
							setChecked({ ...checked, statusBar: !checked.statusBar })
						}
					>
						Show status bar
					</DropdownMenuCheckboxItem>

					<DropdownMenuCheckboxItem
						checked={checked.lineNumbers}
						onCheckedChange={() =>
							setChecked({ ...checked, lineNumbers: !checked.lineNumbers })
						}
					>
						Show line numbers
					</DropdownMenuCheckboxItem>

					<DropdownMenuCheckboxItem
						checked={checked.minimap}
						onCheckedChange={() =>
							setChecked({ ...checked, minimap: !checked.minimap })
						}
					>
						Show minimap
					</DropdownMenuCheckboxItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
