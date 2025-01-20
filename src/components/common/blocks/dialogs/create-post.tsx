"use client";

import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { XIcon } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

export default function CreatePostDialog() {
	const [tags, setTags] = React.useState<string[]>([]);

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

			if (value.length > 20) {
				toast.error("Tag must be 20 characters or less");
				return;
			}

			setTags([...tags, value]);
			input.value = "";
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Create Post</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Submit a new post</DialogTitle>
				</DialogHeader>
				<Input label="Title" placeholder="Give your post a title" />
				<Textarea label="Content" placeholder="What's on your mind?" />
				<Input
					label="Tags"
					placeholder="Describe your post in a few words"
					onKeyDown={handleTagInput}
				/>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<Badge
							stroke
							before={<XIcon />}
							onClick={() => setTags(tags.filter((t) => t !== tag))}
							className="cursor-pointer"
							key={tag}
						>
							{tag}
						</Badge>
					))}
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="secondary">Cancel</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button>Confirm</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
