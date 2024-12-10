import ThemeToggle from "@/components/common/theme-toggle";
import { Button, type ButtonProps } from "@/components/ui/button";
import { BadgeCheck, Heart, Rocket, Send, Share, Trash, X } from "lucide-react";

export default function ButtonPage() {
	const buttonConfigurations: ButtonProps[] = [
		// Variant variations with default size
		{ variant: "primary", children: "Primary" },
		{ variant: "secondary", children: "Secondary" },
		{ variant: "destructive", children: "Destructive" },
		{ variant: "outline", children: "Outline" },
		{ variant: "transparent", children: "Transparent" },
		{ variant: "link", children: "Link" },

		// Size variations with primary variant
		{ size: "sm", children: "Small" },
		{ size: "md", children: "Medium" },
		{ size: "lg", children: "Large" },

		// Icons before/after
		{
			variant: "primary",
			before: <Heart />,
			children: "Like",
		},
		{
			variant: "primary",
			after: <Send />,
			children: "Send",
		},
		{
			variant: "primary",
			before: <Heart />,
			after: <Send />,
			children: "Both Icons",
		},

		// Icon only buttons
		{
			variant: "primary",
			isIconOnly: true,
			children: <Heart />,
		},
		{
			variant: "destructive",
			isIconOnly: true,
			children: <Trash />,
		},
		{
			variant: "outline",
			isIconOnly: true,
			children: <X />,
		},

		// Combined variations
		{
			variant: "primary",
			size: "lg",
			before: <Share />,
			children: "Share Large",
		},
		{
			variant: "destructive",
			size: "sm",
			after: <Trash />,
			children: "Delete Small",
		},
		{
			variant: "outline",
			size: "md",
			before: <Rocket />,
			after: <BadgeCheck />,
			children: "Launch Medium",
		},

		// Disabled state examples
		{
			variant: "primary",
			disabled: true,
			children: "Disabled Primary",
		},
		{
			variant: "destructive",
			disabled: true,
			children: "Disabled Destructive",
		},
	];

	return (
		<div className="min-h-screen p-8">
			<ThemeToggle />
			<div className="max-w-4xl space-y-8">
				{/* Group buttons by section */}
				<div className="space-y-2">
					<h2 className="text-lg font-semibold">Variants</h2>
					<div className="flex flex-wrap gap-2">
						{buttonConfigurations.slice(0, 6).map((config, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Button key={index} {...config} />
						))}
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-lg font-semibold">Sizes</h2>
					<div className="space-x-2">
						{buttonConfigurations.slice(6, 9).map((config, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Button key={index} {...config} />
						))}
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-lg font-semibold">With Icons</h2>
					<div className="flex flex-wrap gap-2">
						{buttonConfigurations.slice(9, 12).map((config, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Button key={index} {...config} />
						))}
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-lg font-semibold">Icon Only</h2>
					<div className="flex flex-wrap gap-2">
						{buttonConfigurations.slice(12, 15).map((config, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Button key={index} {...config} />
						))}
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-lg font-semibold">Combined Variations</h2>
					<div className="space-x-2 flex items-center">
						{buttonConfigurations.slice(15, 18).map((config, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Button key={index} {...config} />
						))}
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-lg font-semibold">Disabled States</h2>
					<div className="flex flex-wrap gap-2">
						{buttonConfigurations.slice(18).map((config, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Button key={index} {...config} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
