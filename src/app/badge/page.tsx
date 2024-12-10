import ThemeToggle from "@/components/common/theme-toggle";
import Badge, { type BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	BadgeCheck,
	Briefcase,
	DoorOpen,
	Heart,
	Rocket,
	Send,
	Share,
	Trash,
	X,
} from "lucide-react";

export default function BadgePage() {
	const badgeConfigurations: BadgeProps[] = [
		// Size variations
		{ size: "sm", children: "Small Badge" },
		{ size: "md", children: "Medium Badge" },
		{ size: "lg", children: "Large Badge" },

		// Color variations
		{ color: "primary", children: "Primary" },
		{
			color: "primary",
			children: "1.4k",
			before: <Heart className="fill-current" />,
		},
		{ color: "green", children: "Green" },
		{ color: "yellow", children: "Yellow" },
		{ color: "red", children: "Red" },
		{ color: "purple", children: "Purple" },
		{ color: "blue", children: "Blue" },
		{ color: "indigo", children: "Indigo" },
		{ color: "orange", children: "Orange" },
		{ color: "pink", children: "Pink" },
		{ color: "teal", children: "Teal" },

		// Shape variations
		{ shape: "rounded", children: "Rounded" },
		{ shape: "pill", children: "Pill" },

		// Stroke variations
		{ stroke: true, children: "With Stroke" },
		{ stroke: false, children: "No Stroke" },

		// Combined variations
		{
			size: "lg",
			color: "blue",
			shape: "pill",
			stroke: true,
			before: <Share />,
			children: "Share",
		},
		{
			size: "md",
			color: "green",
			shape: "rounded",
			before: <Rocket />,
			after: <BadgeCheck />,
			children: "Complete",
		},
		{
			size: "sm",
			color: "red",
			shape: "pill",
			before: <Briefcase />,
			className: "border-dashed",
			children: "Work",
		},
	];
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<ThemeToggle />
			<div className="max-w-3xl space-x-2 space-y-2">
				{badgeConfigurations.map((config, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Badge key={index} {...config}>
						{config.children}
					</Badge>
				))}
			</div>
		</div>
	);
}
