import { Button } from "@/components/ui/button";
import { DollarSignIcon, HomeIcon, SquareChartGanttIcon } from "lucide-react";
import Link from "next/link";

const links = [
	{
		label: "Home",
		href: "#",
		icon: <HomeIcon />,
	},
	{
		label: "Products",
		href: "#",
		icon: <SquareChartGanttIcon />,
	},
	{
		label: "Pricing",
		href: "#",
		icon: <DollarSignIcon />,
	},
];

export default function LinkButton() {
	return (
		<div className="flex flex-wrap gap-2">
			{links.map((link) => (
				<Button variant="link" before={link.icon} key={link.label} asChild>
					<Link href={link.href}>
						<span className="ml-1">{link.label}</span>
					</Link>
				</Button>
			))}
		</div>
	);
}
