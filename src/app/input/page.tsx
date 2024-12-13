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
	DollarSign,
	FileWarning,
	InfoIcon,
	MessageCircle,
	PersonStanding,
	PresentationIcon,
	RocketIcon,
	ShieldCheck,
	Terminal,
	TerminalSquare,
	UserCheck,
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
