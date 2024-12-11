import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	BadgeCheck,
	Briefcase,
	CircleCheck,
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
			<div className="w-full max-w-[300px] gap-4 rounded-xl">
				{/* <div
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
				</div> */}
				<Dialog>
					<DialogTrigger asChild>
						<Button>Open</Button>
					</DialogTrigger>
					<DialogContent className="max-w-sm">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your account here.
							</DialogDescription>
						</DialogHeader>
						<div className="w-max gap-2">
							<Badge before={<CircleCheck />} color="green">
								<p>5.2k</p>
							</Badge>
						</div>
						<DialogFooter className="flex flex-col gap-2">
							<Button size={"md"} variant={"secondary"}>
								Cancel
							</Button>
							<Button size="md" className="w-full">
								Save
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				<div
					className={cn(
						"flex flex-end flex-col border-carbon-400 shadow-overlay p-4 rounded-xl border-0 dark:border-t dark:border-carbon-dark-500",
						"dark:bg-carbon-dark-300 bg-carbon-100",
					)}
				>
					<p className="text-neutral-400">#3</p>
					<div className="flex flex-col gap-2">
						<Button>Save</Button>
						<Button variant={"secondary"}>Cancel</Button>
					</div>
				</div>

				<Card className="mt-4">
					<h1>Edit profile</h1>
					<p>Make changes to your account here.</p>
					<div className="flex mt-4 flex-col gap-2">
						<Button>Save</Button>
						<Button variant={"secondary"}>Cancel</Button>
					</div>
				</Card>
				{/* <div
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
				</div> */}
			</div>
		</main>
	);
}
