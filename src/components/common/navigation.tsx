import { Button } from "@/components/ui/button";
import { Grid2x2Icon, PuzzleIcon } from "lucide-react";
import Link from "next/link";
import CarbonLogo from "./logo";
import ThemeToggle from "./theme-toggle";

const links = [
	{
		label: "Components",
		href: "/",
		icon: <PuzzleIcon />,
	},
	{
		label: "Blocks",
		href: "/",
		icon: <Grid2x2Icon />,
	},
];

export default function Navigation() {
	return (
		<div className="h-12 w-full border-b flex items-center justify-center">
			<div className="w-[85%] flex items-center justify-between h-12">
				<CarbonLogo />
				<div className="flex items-center gap-4">
					{links.map((link) => (
						<Button
							asChild
							key={link.label}
							variant={"link"}
							before={link.icon}
						>
							<Link className="text-sm cursor-pointer gap-1" href={link.href}>
								{link.label}
							</Link>
						</Button>
					))}
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
}
