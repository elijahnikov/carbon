import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipShowcaseExample() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button>Hover me</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>This is a tooltip</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
