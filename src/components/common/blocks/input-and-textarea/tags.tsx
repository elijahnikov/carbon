"use client";

import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XCircleIcon } from "lucide-react";
import * as React from "react";

export default function Tags() {
	const [tags, setTags] = React.useState<string[]>(["example"]);

	const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const input = e.currentTarget;
		const value = input.value.trim();

		if (e.key === "Enter" && value) {
			e.preventDefault();

			if (tags.length >= 10) {
				return;
			}

			if (tags.includes(value)) {
				return;
			}

			setTags([...tags, value]);
			input.value = "";
		}
	};

	const handleRemoveTag = (tag: string) => {
		setTags(tags.filter((t) => t !== tag));
	};

	return (
		<div className="flex min-w-[300px] flex-col gap-2">
			<Input
				className="w-full"
				label="Tags"
				placeholder="Enter tags"
				onKeyDown={handleTagInput}
			/>
			<div className="flex flex-wrap gap-2">
				{tags.map((tag) => (
					<Badge
						className="h-6 px-1"
						key={tag}
						after={
							<Button
								variant={"transparent"}
								className="hover:bg-transparent ml-1 active:bg-transparent hover:text-white text-carbon-900 cursor-pointer"
								size="xs"
								isIconOnly
								onClick={() => handleRemoveTag(tag)}
							>
								<XCircleIcon className="size-4" />
							</Button>
						}
					>
						{tag}
					</Badge>
				))}
			</div>
		</div>
	);
}
