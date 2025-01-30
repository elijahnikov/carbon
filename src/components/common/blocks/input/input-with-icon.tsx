import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function InputWithIcon() {
	return (
		<div className="relative">
			<Input label="Input with icon" className="ps-5" placeholder="Search" />
			<SearchIcon className="absolute mt-1 top-1/2 start-0 size-5 ml-2 text-secondary-foreground/50" />
		</div>
	);
}
