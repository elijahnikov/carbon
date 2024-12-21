import { Button } from "@/components/ui/button";

export default function ButtonVariantExample() {
	return (
		<div className="flex px-16 justify-center flex-wrap gap-4">
			<Button>Primary</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="black">Black</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="transparent">Transparent</Button>
			<Button variant="link">Link</Button>
		</div>
	);
}