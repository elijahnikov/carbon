import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

export default function ButtonGroupOrientationExample() {
	return (
		<div className="space-x-4">
			<ButtonGroup orientation="vertical">
				<ButtonGroupItem>Button 1</ButtonGroupItem>
				<ButtonGroupItem>Button 2</ButtonGroupItem>
				<ButtonGroupItem>Button 3</ButtonGroupItem>
			</ButtonGroup>
			<ButtonGroup orientation="horizontal">
				<ButtonGroupItem>Button 1</ButtonGroupItem>
				<ButtonGroupItem>Button 2</ButtonGroupItem>
				<ButtonGroupItem>Button 3</ButtonGroupItem>
			</ButtonGroup>
		</div>
	);
}
