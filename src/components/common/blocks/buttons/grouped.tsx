import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

export default function GroupedButtons() {
	return (
		<ButtonGroup size={"sm"}>
			<ButtonGroupItem variant={"outline"} before={<AlignLeftIcon />}>
				Left
			</ButtonGroupItem>
			<ButtonGroupItem variant={"outline"} before={<AlignCenterIcon />}>
				Middle
			</ButtonGroupItem>
			<ButtonGroupItem variant={"outline"} before={<AlignRightIcon />}>
				Right
			</ButtonGroupItem>
		</ButtonGroup>
	);
}
