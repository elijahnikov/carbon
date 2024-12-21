import { Checkbox } from "@/components/ui/checkbox";

export default function SizeExample() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<Checkbox id="size-sm" size="sm" />
				<label className="text-sm" htmlFor="size-sm">
					Small
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="size-md" size="md" />
				<label className="text-md" htmlFor="size-md">
					Medium
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="size-lg" size="lg" />
				<label className="text-lg" htmlFor="size-lg">
					Large
				</label>
			</div>
		</div>
	);
}
