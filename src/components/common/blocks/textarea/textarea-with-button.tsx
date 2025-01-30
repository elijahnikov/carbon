import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaWithButton() {
	return (
		<div className="flex flex-col gap-2">
			<Textarea label="Textarea with button" className="min-w-[300px]" />
			<Button size="xs" className="text-sm" variant="outline">
				Submit
			</Button>
		</div>
	);
}
