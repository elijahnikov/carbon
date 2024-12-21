import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

export default function ButtonGroupSizeExample() {
	return (
		<div className="justify-center space-x-4">
			<ButtonGroup size="sm">
				<ButtonGroupItem>Small</ButtonGroupItem>
				<ButtonGroupItem>Small</ButtonGroupItem>
			</ButtonGroup>
			<ButtonGroup size="md">
				<ButtonGroupItem>Medium</ButtonGroupItem>
				<ButtonGroupItem>Medium</ButtonGroupItem>
			</ButtonGroup>
			<ButtonGroup size="lg">
				<ButtonGroupItem>Large</ButtonGroupItem>
				<ButtonGroupItem>Large</ButtonGroupItem>
			</ButtonGroup>
		</div>
	);
}
