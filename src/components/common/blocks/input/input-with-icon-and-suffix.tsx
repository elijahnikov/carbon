import { Input } from "@/components/ui/input";
import { DollarSignIcon, SearchIcon } from "lucide-react";

export default function InputWithIconAndSuffix() {
	return (
		<div className="relative">
			<Input
				label="Input with icon and suffix"
				suffix="USD"
				className="ps-5"
				placeholder="100.00"
				type="number"
			/>
			<DollarSignIcon className="absolute mt-1 top-1/2 start-0 size-5 ml-2 text-secondary-foreground/50" />
		</div>
	);
}
