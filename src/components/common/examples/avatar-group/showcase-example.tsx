import { AvatarGroup, AvatarGroupItem } from "@/components/ui/avatar-group";

export default function AvatarGroupShowcaseExample() {
	return (
		<AvatarGroup size="lg">
			<AvatarGroupItem src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" />
			<AvatarGroupItem src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
			<AvatarGroupItem src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" />
		</AvatarGroup>
	);
}
