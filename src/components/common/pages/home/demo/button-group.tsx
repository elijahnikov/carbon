import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react";

export default function ButtonGroups() {
	return (
		<ButtonGroup size="sm">
			<ButtonGroupItem variant={"outline"} before={<SunIcon />}>
				Light
			</ButtonGroupItem>
			<ButtonGroupItem variant={"outline"} before={<MoonIcon />}>
				Dark
			</ButtonGroupItem>
			<ButtonGroupItem variant={"outline"} before={<ComputerIcon />}>
				System
			</ButtonGroupItem>
		</ButtonGroup>
	);
}
