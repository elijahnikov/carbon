import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

export default function GroupedButtons() {
	return (
		<ButtonGroup size={"sm"}>
			<ButtonGroupItem variant={"secondary"} isIconOnly>
				<AlignLeftIcon />
			</ButtonGroupItem>
			<ButtonGroupItem variant={"secondary"} isIconOnly>
				<AlignCenterIcon />
			</ButtonGroupItem>
			<ButtonGroupItem variant={"secondary"} isIconOnly>
				<AlignRightIcon />
			</ButtonGroupItem>
		</ButtonGroup>
	);
}
