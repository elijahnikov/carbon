import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";

export default function ButtonGroupVariantExample() {
	return (
		<div className="flex flex-col gap-4">
			<ButtonGroup>
				<ButtonGroupItem variant="outline">Button 1</ButtonGroupItem>
				<ButtonGroupItem variant="outline">Button 2</ButtonGroupItem>
				<ButtonGroupItem variant="outline">Button 3</ButtonGroupItem>
			</ButtonGroup>
			<ButtonGroup>
				<ButtonGroupItem variant="secondary">Button 1</ButtonGroupItem>
				<ButtonGroupItem variant="secondary">Button 2</ButtonGroupItem>
				<ButtonGroupItem variant="secondary">Button 3</ButtonGroupItem>
			</ButtonGroup>
			<ButtonGroup>
				<ButtonGroupItem variant="primary">Button 1</ButtonGroupItem>
				<ButtonGroupItem variant="primary">Button 2</ButtonGroupItem>
				<ButtonGroupItem variant="primary">Button 3</ButtonGroupItem>
			</ButtonGroup>
		</div>
	);
}
