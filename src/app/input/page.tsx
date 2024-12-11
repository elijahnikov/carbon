import ThemeToggle from "@/components/common/theme-toggle";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function InputPage() {
	return (
		<div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center">
			<ThemeToggle />
			<Card>
				<div className="flex items-center gap-2">
					<Avatar
						src={
							"https://images.unsplash.com/photo-1560800452-f2d475982b96?auto=format&fit=crop&w=250&h=250"
						}
					/>
					<div className="flex flex-col leading-none">
						<p className="font-medium">John Doe </p>
						<p className="text-sm text-neutral-500 dark:text-neutral-400">
							john.doe@example.com
						</p>
					</div>
				</div>
				<div className="min-w-[400px] flex flex-col gap-2">
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
