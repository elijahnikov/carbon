import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

export default function InputWithActionButton() {
	return (
		<div className="relative">
			<Input
				label="Input with action button"
				className="pe-4"
				placeholder="Type something…"
			/>
			<div className="absolute top-1/2 end-0 -mt-1">
				<Button
					variant="transparent"
					className="h-9 rounded-l-none cursor-pointer bg-transparent hover:bg-transparent active:bg-transparent [&_svg]:text-secondary-foreground/50 hover:[&_svg]:text-white "
					isIconOnly
				>
					<SendIcon />
				</Button>
			</div>
		</div>
	);
}
