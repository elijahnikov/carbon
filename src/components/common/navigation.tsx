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
		<div className="h-12 z-50 bg-background fixed w-full border-b flex items-center justify-center">
			<div className="w-full px-2 flex items-center justify-between h-12">
				<Link href="/">
					<div className="flex items-center gap-2">
						<CarbonLogo />
						<p className="text-lg font-bold font-mono uppercase text-secondary-foreground">
							Carbon
						</p>
					</div>
				</Link>
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
