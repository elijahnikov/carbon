"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/components/utils/cn";
import { SendIcon } from "lucide-react";
import * as React from "react";

export default function FeedbackDialog() {
	const [rating, setRating] = React.useState<number | null>(null);
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Feedback</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm">
				<DialogHeader className="flex flex-col">
					<DialogTitle>Help us improve Carbon UI</DialogTitle>
				</DialogHeader>

				<div>
					<p className="text-sm text-secondary-foreground">
						Rate the difficulty of setting up Carbon UI in your existing project
					</p>
					<div className="flex mt-4">
						{Array.from({ length: 10 }).map((_, index) => (
							<Button
								variant={"outline"}
								key={index}
								onClick={() => setRating(index)}
								className={cn(
									rating === index &&
										"ring-2 ring-primary dark:ring-primary-ring -ml-px",
									"w-full rounded-none first:rounded-l-md last:rounded-r-md",
								)}
							>
								{index}
							</Button>
						))}
					</div>
					<div className="flex mt-1 items-center w-full justify-between">
						<p className="text-xs text-secondary-foreground/75">Very easy</p>
						<p className="text-xs text-secondary-foreground/75">Very hard</p>
					</div>

					<div className="mt-4">
						<Textarea
							label="Leave an optional comment"
							className="min-h-24"
							placeholder="What do you like about Carbon UI?"
						/>
					</div>
				</div>
				<div className="w-full gap-2 flex">
					<DialogClose asChild>
						<Button className="w-full" variant="outline">
							Cancel
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button className="w-full" after={<SendIcon />}>
							Submit
						</Button>
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	);
}
