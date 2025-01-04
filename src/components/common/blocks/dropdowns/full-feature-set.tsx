"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	AlertCircleIcon,
	ArrowUpIcon,
	BellIcon,
	CalendarIcon,
	CheckCircleIcon,
	ClipboardListIcon,
	ClockIcon,
	FlagIcon,
	LayersIcon,
	TagIcon,
	UsersIcon,
} from "lucide-react";
import { useState } from "react";

export default function AllFeaturesDropdown() {
	const [priority, setPriority] = useState("medium");
	const [status, setStatus] = useState("in-progress");
	const [features, setFeatures] = useState({
		timeTracking: true,
		notifications: false,
		subtasks: true,
	});

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Task Options</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<ClipboardListIcon className="mr-2 h-4 w-4" />
						<span>Add Subtask</span>
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<UsersIcon className="mr-2 h-4 w-4" />
						<span>Assign Task</span>
						<DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<TagIcon className="mr-2 h-4 w-4" />
						<span>Add Label</span>
						<DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CalendarIcon className="mr-2 h-4 w-4" />
						<span>Set Due Date</span>
						<DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<FlagIcon className="mr-2 h-4 w-4" />
							<span>Priority</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuRadioGroup
								value={priority}
								onValueChange={setPriority}
							>
								<DropdownMenuRadioItem value="high">
									<ArrowUpIcon className="mr-2 h-4 w-4 text-red-500" />
									High Priority
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="medium">
									<ArrowUpIcon className="mr-2 h-4 w-4 text-yellow-500" />
									Medium Priority
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="low">
									<ArrowUpIcon className="mr-2 h-4 w-4 text-blue-500" />
									Low Priority
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuSubContent>
					</DropdownMenuSub>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<AlertCircleIcon className="mr-2 h-4 w-4" />
							<span>Status</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
								<DropdownMenuRadioItem value="todo">
									<ClockIcon className="mr-2 h-4 w-4" />
									To Do
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="in-progress">
									<LayersIcon className="mr-2 h-4 w-4" />
									In Progress
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="completed">
									<CheckCircleIcon className="mr-2 h-4 w-4" />
									Completed
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuCheckboxItem
						checked={features.timeTracking}
						onCheckedChange={(checked) =>
							setFeatures((prev) => ({ ...prev, timeTracking: checked }))
						}
					>
						<ClockIcon className="mr-2 h-4 w-4" />
						Time Tracking
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={features.notifications}
						onCheckedChange={(checked) =>
							setFeatures((prev) => ({ ...prev, notifications: checked }))
						}
					>
						<BellIcon className="mr-2 h-4 w-4" />
						Notifications
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={features.subtasks}
						onCheckedChange={(checked) =>
							setFeatures((prev) => ({ ...prev, subtasks: checked }))
						}
					>
						<ClipboardListIcon className="mr-2 h-4 w-4" />
						Allow Subtasks
					</DropdownMenuCheckboxItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
