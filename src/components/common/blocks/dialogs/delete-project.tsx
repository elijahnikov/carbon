"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { InfoIcon } from "lucide-react";
import * as React from "react";

const PROJECT_NAME = "Carbon";

export default function DeleteProjectDialog() {
	const [inputValue, setInputValue] = React.useState<string>("");
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Delete project</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm text-center">
				<DialogHeader className="flex flex-col items-center">
					<div className="border rounded-full p-2 dark:shadow-overlay-dark shadow-overlay">
						<InfoIcon />
					</div>
					<DialogTitle className="text-center">
						Delete your project?
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className="leading-normal">
					This action cannot be undone. Please type the project name{" "}
					<span className="font-semibold text-white">{PROJECT_NAME}</span> to
					confirm.
				</DialogDescription>
				<Input
					label="Project name"
					required
					placeholder={`Type ${PROJECT_NAME} to confirm`}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<div className="w-full gap-2 flex">
					<DialogClose asChild>
						<Button className="w-full" variant="outline">
							Cancel
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button disabled={inputValue !== PROJECT_NAME} className="w-full">
							Delete
						</Button>
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	);
}
