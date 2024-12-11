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
			<div className="grid grid-cols-3 max-w-[700px] w-full">
				{[...Array(9)].map((_, index) => {
					// @ts-ignore
					const { text, ...button } = buttons[index];
					return (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className={`
              min-h-[100px] min-w-[80px] flex items-center justify-center
              ${index < 6 ? "border-b" : ""} 
              ${index % 3 !== 2 ? "border-r" : ""} 
              border-dashed
            `}
						>
							{/* @ts-ignore */}
							<Button {...button}>{text}</Button>
						</div>
					);
				})}
			</div>
			<ButtonGroup>
				<ButtonGroupItem
					onClick={() => {
						console.log("delete");
					}}
					before={<Trash className="size-4" />}
					variant="secondary"
				>
					Delete
				</ButtonGroupItem>
				<ButtonGroupItem
					onClick={() => {
						console.log("save");
					}}
					before={<Save className="size-4" />}
					variant="secondary"
				>
					Save
				</ButtonGroupItem>
				<ButtonGroupItem
					onClick={() => {
						console.log("edit");
					}}
					before={<Pencil className="size-4" />}
					variant="secondary"
				>
					Edit
				</ButtonGroupItem>
			</ButtonGroup>
		</div>
	);
}
