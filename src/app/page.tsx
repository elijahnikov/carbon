import {
	BadgeCheck,
	Briefcase,
	Heart,
	PersonStanding,
	Rocket,
	Share,
	User,
} from "lucide-react";
import ThemeToggle from "../components/common/theme-toggle";
import Badge from "../components/ui/badge";
import { cn } from "../components/utils/cn";

export default function HomePage() {
	const darkColors = [
		{ hex: "#121212", name: "Dark 2 - Secondary BG" },
		{ hex: "#1A1A1A", name: "Dark 3 - Card BG" },
		{ hex: "#242424", name: "Dark 4 - Hover States" },
		{ hex: "#2E2E2E", name: "Dark 5 - Borders" },
		{ hex: "#383838", name: "Dark 6 - High Contrast" },
	];
	const lightColors = [
		{ hex: "#F8F8F8", name: "Light 2 - Secondary BG" },
		{ hex: "#F0F0F0", name: "Light 3 - Card BG" },
		{ hex: "#E8E8E8", name: "Light 4 - Hover States" },
		{ hex: "#E0E0E0", name: "Light 5 - Borders" },
		{ hex: "#D8D8D8", name: "Light 6 - High Contrast" },
	];

	return (
		<main className="flex  max-h-[50vh] flex-col items-center justify-center">
			<ThemeToggle />
			<div className="w-full grid grid-cols-5 gap-4 rounded-xl">
				<div
					className={cn(
						"h-24 flex flex-end flex-col p-2 rounded-xl shadow-overlay dark:shadow-none border",
						"dark:bg-carbon-dark-100 bg-carbon-100",
					)}
				>
					<p className="text-neutral-400">#1</p>{" "}
				</div>
				<div
					className={cn(
						"h-24 flex flex-end flex-col p-2 rounded-xl border ",
						"dark:bg-carbon-dark-200 bg-carbon-200",
					)}
				>
					<p className="text-neutral-400">#2</p>{" "}
				</div>
				<div
					className={cn(
						"h-24 flex flex-end flex-col p-2 rounded-xl border ",
						"dark:bg-carbon-dark-300 bg-carbon-300",
					)}
				>
					<p className="text-neutral-400">#3</p>{" "}
				</div>
				<div
					className={cn(
						"h-24 flex flex-end flex-col p-2 rounded-xl border ",
						"dark:bg-carbon-dark-400 bg-carbon-400",
					)}
				>
					<p className="text-neutral-400">#4</p>{" "}
				</div>
				<div
					className={cn(
						"h-24 flex flex-end flex-col p-2 rounded-xl border ",
						"dark:bg-carbon-dark-500 bg-carbon-500",
					)}
				>
					<p className="text-neutral-400">#5</p>{" "}
				</div>
			</div>

			<div className="max-w-[50vw] flex-wrap flex items-center p-16 justify-center space-x-4 h-[25vh] bg-[#F0F0F0] dark:bg-[#1A1A1A]">
				{/* <div className="bg-yellow-600/50 rounded-md px-2 ring-inset py-1 ring-1 ring-yellow-700">
					<p className="font-medium text-yellow-200 text-sm">In progress</p>
				</div>
				<div className="bg-red-600/50 rounded-md px-2 ring-inset py-1 ring-1 ring-red-700">
					<p className="font-medium text-red-200 text-sm">Cancelled</p>
				</div>
				<div className="bg-purple-600/50 rounded-md px-2 ring-inset py-1 ring-1 ring-purple-700">
					<p className="font-medium text-purple-200 text-sm">Internal</p>
				</div> */}
				{/* <Badge
					className="border-dashed"
					before={<PersonStanding />}
					color="primary"
				>
					<p>Completed</p>
				</Badge>
				<Badge before={<BadgeCheck />} after={<BadgeCheck />} color="red">
					<p>Completed</p>
				</Badge>
				<Badge color="teal">
					<p>Completed</p>
				</Badge>
				<Badge before={<User />}>123</Badge>
				<Badge size="lg" shape="rounded" color="indigo">
					<p>Completed</p>
				</Badge> */}
				{/* {badgeConfigurations.map((config, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Badge key={index} {...config}>
						{config.children}
					</Badge>
				))} */}
			</div>
		</main>
	);
}
