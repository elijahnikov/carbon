"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Heading1Icon,
	Heading2Icon,
	PlusIcon,
	QuoteIcon,
	TypeIcon,
} from "lucide-react";

export default function AddDropdown() {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button isIconOnly variant="outline">
						<PlusIcon />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="min-w-md">
					<DropdownMenuItem className="group">
						<div className="flex items-center gap-2">
							<div className="rounded-md border p-1 group-focus:border-current">
								<TypeIcon size={16} />
							</div>
							<div className="flex flex-col gap-0">
								<h1 className="font-medium">Text</h1>
								<p className="text-xs text-secondary-foreground/75">
									Write plain text
								</p>
							</div>
						</div>
					</DropdownMenuItem>
					<DropdownMenuItem className="group">
						<div className="flex items-center gap-2">
							<div className="rounded-md border p-1 group-focus:border-current">
								<Heading1Icon size={16} />
							</div>
							<div className="flex flex-col gap-0">
								<h1 className="font-medium">Heading 1</h1>
								<p className="text-xs text-secondary-foreground/75">
									For main headings
								</p>
							</div>
						</div>
					</DropdownMenuItem>
					<DropdownMenuItem className="group">
						<div className="flex items-center gap-2">
							<div className="rounded-md border p-1 group-focus:border-current">
								<Heading2Icon size={16} />
							</div>
							<div className="flex flex-col gap-0">
								<h1 className="font-medium">Heading 2</h1>
								<p className="text-xs text-secondary-foreground/75">
									For subheadings
								</p>
							</div>
						</div>
					</DropdownMenuItem>
					<DropdownMenuItem className="group">
						<div className="flex items-center gap-2">
							<div className="rounded-md border p-1 group-focus:border-current">
								<QuoteIcon size={16} />
							</div>
							<div className="flex flex-col gap-0">
								<h1 className="font-medium">Quote</h1>
								<p className="text-xs text-secondary-foreground/75">
									Insert a quote block
								</p>
							</div>
						</div>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
