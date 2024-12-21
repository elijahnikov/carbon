import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsDownUp,
} from "lucide-react";

export default function ButtonGroupShowcaseExample() {
	return (
		<ButtonGroup>
			<ButtonGroupItem before={<ChevronLeftIcon />}>Button 1</ButtonGroupItem>
			<ButtonGroupItem>Button 2</ButtonGroupItem>
			<ButtonGroupItem after={<ChevronRightIcon />}>Button 3</ButtonGroupItem>
		</ButtonGroup>
	);
}
