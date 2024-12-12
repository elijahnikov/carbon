"use client";

import ThemeToggle from "@/components/common/theme-toggle";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
} from "@/components/ui/avatar";
import { AvatarGroup, AvatarGroupItem } from "@/components/ui/avatar-group";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { PresentationIcon } from "lucide-react";
import { useState } from "react";

export default function InputPage() {
	const [checked, setChecked] = useState(false);
	return (
		<div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center">
			<ThemeToggle />
			<Card>
				<div className="flex items-center gap-2">
					{/* <Avatar
						src={
							"https://images.unsplash.com/photo-1560800452-f2d475982b96?auto=format&fit=crop&w=250&h=250"
						}
					/> */}

					<Switch id="testing" onCheckedChange={setChecked} checked={checked} />
					<p>{checked ? "Checked" : "Unchecked"}</p>
					{/* <AvatarGroup size={"lg"}>
						<AvatarGroupItem src="https://github.com/shadcn.png" />
						<AvatarGroupItem src="https://github.com/shadcn.png" />
						<AvatarGroupItem src="https://github.com/shadcn.png" />
					</AvatarGroup> */}
				</div>
				<div className="min-w-[400px] flex flex-col gap-2">
					<Checkbox />
					<p className="font-medium">Email</p>
					<Input placeholder="Enter your email" />
					<p className="font-medium">Username</p>
					<Input placeholder="Enter your username" />

					<Textarea placeholder="Enter your message" />
					<div className="flex justify-end gap-2 items-center mt-4">
						<Button variant="outline">Cancel</Button>
						<Button>Save</Button>
					</div>
				</div>
			</Card>
		</div>
	);
}
