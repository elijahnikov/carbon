import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowRightIcon, LinkIcon, PlusCircle } from "lucide-react";

export default function Members() {
	return (
		<Card className="w-[500px]">
			<div className="flex mb-3 items-center justify-between">
				<h1 className="text-md text-secondary-foreground font-medium">
					Invite new members by email
				</h1>
				<Button size="sm" before={<LinkIcon />} variant={"outline"}>
					Invite link
				</Button>
			</div>
			<div className="grid my-2 grid-cols-3 gap-y-2 gap-x-1">
				<Input
					value="user@carbon.com"
					className="col-span-2"
					placeholder="Email"
				/>
				<Select value="admin">
					<SelectTrigger>
						<SelectValue placeholder="Select role" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="admin">Admin</SelectItem>
						<SelectItem value="member">Member</SelectItem>
						<SelectItem value="viewer">Viewer</SelectItem>
					</SelectContent>
				</Select>
				<Input className="col-span-2" placeholder="Email" />
			</div>
			<Button className="mb-6 mt-2" size="sm" before={<PlusCircle />}>
				Add more
			</Button>
			<hr className="-mx-6" />
			<div className="flex items-center mt-3 justify-between -mb-2">
				<p className="text-sm text-secondary-foreground">
					This feature is available on the Pro plan.
				</p>
				<Button variant={"outline"} after={<ArrowRightIcon />}>
					Upgrade
				</Button>
			</div>
		</Card>
	);
}
