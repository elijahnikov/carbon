"use client";

import ThemeToggle from "@/components/common/theme-toggle";
import {
	Alert,
	AlertDescription,
	AlertFooter,
	AlertTitle,
} from "@/components/ui/alert";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
} from "@/components/ui/avatar";
import { AvatarGroup, AvatarGroupItem } from "@/components/ui/avatar-group";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
	AlertCircle,
	ArrowRight,
	BadgeCent,
	BatteryWarning,
	Check,
	CircleIcon,
	Cloud,
	CreditCard,
	DollarSign,
	FileWarning,
	Github,
	InfoIcon,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageCircle,
	MessageSquare,
	PersonStanding,
	Plus,
	PlusCircle,
	PresentationIcon,
	RocketIcon,
	Settings,
	ShieldCheck,
	Terminal,
	TerminalSquare,
	User,
	UserCheck,
	UserIcon,
	UserPlus,
	Users,
} from "lucide-react";
import { useState } from "react";

const alerts = [
	{
		variant: "default",
		title: "Information",
		description:
			"This is a general information message that requires attention.",
		icon: <InfoIcon />,
		actions: [
			{ label: "Acknowledge", before: <Check />, variant: "outline" },
			{ label: "Learn More", after: <ArrowRight />, variant: "transparent" },
		],
	},
	{
		variant: "error",
		title: "Operation Failed",
		description:
			"There was an error processing your request. Please try again.",
		icon: <AlertCircle />,
	},
	{
		variant: "success",
		title: "Successfully Saved",
		description: "Your changes have been saved successfully.",
		icon: <ShieldCheck />,
	},
	{
		variant: "warning",
		title: "Update Required",
		description: "Your application needs to be updated to the latest version.",
		icon: <BatteryWarning />,
	},
	{
		variant: "message",
		title: "New Message",
		description: "You have received a new message from the system.",
		icon: <MessageCircle />,
	},
];

export default function InputPage() {
	const [position, setPosition] = useState("bottom");

	return (
		<div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center gap-4">
			<ThemeToggle />
			<Card className="flex w-[350px] flex-col gap-4 items-center justify-center">
				<Card className="h-12 w-12">1</Card>
				<h1 className="font-medium text-lg  mb-2 text-carbon-500">
					Badge examples
				</h1>
				<Popover>
					<PopoverTrigger asChild>
						<Button>Open</Button>
					</PopoverTrigger>
					<PopoverContent className="flex flex-col gap-2" side="top">
						<Input placeholder="Enter your username" />
						<Button>hello</Button>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline">Open</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<User />
										<span>Profile</span>
										<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<CreditCard />
										<span>Billing</span>
										<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Settings />
										<span>Settings</span>
										<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Keyboard />
										<span>Keyboard shortcuts</span>
										<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<Users />
										<span>Team</span>
									</DropdownMenuItem>
									<DropdownMenuSub>
										<DropdownMenuSubTrigger>
											<UserPlus />
											<span>Invite users</span>
										</DropdownMenuSubTrigger>
										<DropdownMenuPortal>
											<DropdownMenuSubContent>
												<DropdownMenuItem>
													<Mail />
													<span>Email</span>
												</DropdownMenuItem>
												<DropdownMenuItem>
													<MessageSquare />
													<span>Message</span>
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem>
													<PlusCircle />
													<span>More...</span>
												</DropdownMenuItem>
											</DropdownMenuSubContent>
										</DropdownMenuPortal>
									</DropdownMenuSub>
									<DropdownMenuItem>
										<Plus />
										<span>New Team</span>
										<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Github />
									<span>GitHub</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<LifeBuoy />
									<span>Support</span>
								</DropdownMenuItem>
								<DropdownMenuItem disabled>
									<Cloud />
									<span>API</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<LogOut />
									<span>Log out</span>
									<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</PopoverContent>
				</Popover>
				<div className="flex flex-col gap-4 w-full">
					<div className="flex flex-col gap-1">
						<p>Username</p>
						<Input placeholder="Enter your username" />
					</div>
					<div className="flex flex-col gap-1">
						<p>Password</p>
						<Input type="password" placeholder="Enter your password" />
					</div>
					<Button className="w-full">Submit</Button>
				</div>
			</Card>
		</div>
	);
}
