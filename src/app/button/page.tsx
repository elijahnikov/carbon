"use client";

import ThemeToggle from "@/components/common/theme-toggle";
import Badge from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/components/utils/cn";
import {
	ArrowRight,
	BadgeCheck,
	Delete,
	ExternalLink,
	Github,
	Heart,
	Mail,
	Pencil,
	Plus,
	PlusIcon,
	Rocket,
	Save,
	Send,
	Share,
	Trash,
	Trash2,
	User,
	X,
} from "lucide-react";

export default function ButtonPage() {
	const variants = [
		"primary",
		"black",
		"destructive",
		"secondary",
		"outline",
		"transparent",
		"link",
	] as const;

	const buttons = [
		{ text: "Save Changes", variant: "primary", before: <Save /> },
		{
			text: "Sign in with Github",
			variant: "black",
			before: <Github />,
			size: "md",
		},
		{ text: "Delete Account", variant: "destructive", before: <Trash2 /> },
		{
			text: "Send Message",
			variant: "secondary",
			after: <Send />,
			shape: "pill",
		},
		{ text: "Add to Favorites", variant: "outline", before: <Heart /> },
		{ text: "Edit Profile", variant: "transparent", before: <Pencil /> },
		{ text: "Documentation", variant: "link", after: <ExternalLink /> },
		{ text: "Share", variant: "primary", after: <Share />, size: "sm" },
		{
			text: "Get Started",
			variant: "black",
			shape: "pill",
			after: <ArrowRight />,
			size: "lg",
		},
	];

	return (
		<div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center">
			<ThemeToggle />
			<div className="bg-red-500 active:bg-red-500/80 hover:bg-red-500/90 ring-1 ring-inset dark:ring-red-600 ring-red-400 border-red-300 border-b dark:border-red-400 outline-red-600 text-white">
				background
			</div>
			<div className="grid grid-cols-3 max-w-[700px] w-full">
				{[...Array(9)].map((_, index) => {
					// @ts-ignore
					const { text, ...button } = buttons[index];
					return (
						<div
							key={index}
							className={`
              min-h-[100px] min-w-[80px] flex items-center justify-center
              ${index < 6 ? "border-b" : ""} 
              ${index % 3 !== 2 ? "border-r" : ""} 
              border-dashed
            `}
						>
							<Button {...button}>{text}</Button>
						</div>
					);
				})}
			</div>
			{/*"bg-blue-500 active:bg-blue-500/80 hover:bg-blue-500/90 ring-1 ring-inset dark:ring-blue-400 ring-blue-400 border-blue-500 border-b dark:border-blue-600 outline-blue-600 text-white",
			 */}

			<div className="h-8 w-fit bg-red-500/80">active</div>
			<div className="h-8 w-fit bg-red-500/90">hover</div>
			<div className="h-8 w-fit bg-red-400">ring</div>
			<div className="h-8 w-fit bg-red-600">ring dark</div>
			<div className="h-8 w-fit bg-red-300">border</div>
			<div className="h-8 w-fit bg-red-400">border dark</div>
			<div className="h-8 w-fit bg-red-600">outline</div>
			<div className="h-8 w-fit bg-white text-black border">text</div>
		</div>
	);
}
