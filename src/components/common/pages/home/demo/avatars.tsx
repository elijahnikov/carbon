import {
	AvatarGroup,
	AvatarGroupItem,
	AvatarMoreLabel,
} from "@/components/ui/avatar-group";
import { UserCircle } from "lucide-react";

const avatars = [
	"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
	"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
	"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop",
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
	"https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
	"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
];

export default function Avatars() {
	return (
		<div className="w-max">
			<AvatarGroup size="sm">
				{avatars.map((avatar) => (
					<AvatarGroupItem key={avatar} src={avatar} />
				))}
				<AvatarMoreLabel
					label={
						<div className="flex items-center gap-2">
							<UserCircle className="w-4 h-4  text-secondary-foreground" />
							<p className="text-sm text-secondary-foreground">2.1k</p>
						</div>
					}
					size="sm"
				/>
			</AvatarGroup>
		</div>
	);
}
