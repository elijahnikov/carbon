import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { PlusCircleIcon } from "lucide-react";

enum Role {
	Editor = "Editor",
	Viewer = "Viewer",
}
const initialMembers: {
	name: string;
	email: string;
	role: Role;
	avatar: string;
}[] = [
	{
		name: "Jane Doe",
		email: "jane.doe@example.com",
		role: Role.Editor,
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
	},
	{
		name: "Mike Smith",
		email: "mike.smith@example.com",
		role: Role.Viewer,
		avatar:
			"https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
	},
	{
		name: "Alice Johnson",
		email: "alice.johnson@example.com",
		role: Role.Viewer,
		avatar:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
	},
];

export default function TeamAccessDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Manage access</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Team access</DialogTitle>
					<DialogDescription>
						Manage access levels for your team members. Invite new members or
						adjust roles.
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4">
					{initialMembers.map((member) => (
						<div
							key={member.email}
							className="flex items-center w-full justify-between"
						>
							<div className="flex items-center gap-2">
								<Avatar src={member.avatar} />
								<div className="flex flex-col">
									<p className="text-sm font-medium">{member.name}</p>
									<p className="text-xs text-secondary-foreground/60">
										{member.email}
									</p>
								</div>
							</div>
							<div>
								<Select value={member.role}>
									<SelectTrigger className="min-w-32">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Editor">Editor</SelectItem>
										<SelectItem value="Viewer">Viewer</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					))}
				</div>
				<div className="mt-4 w-full flex items-center gap-2">
					<div className="w-full">
						<Label>Invite new member</Label>
						<Input placeholder="Enter email" className="min-w-full" />
					</div>
					<Button before={<PlusCircleIcon />} className="mt-[20px]">
						Invite
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
