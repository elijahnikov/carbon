import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronsDownIcon, CircleDashedIcon, CommandIcon } from "lucide-react";

export default function AccordionIconExample() {
	return (
		<div className="w-[400px]">
			<Accordion variant={"table-fill"} type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger icon={<CommandIcon />}>
						Section One
					</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger icon={<ChevronsDownIcon />}>
						Section Two
					</AccordionTrigger>
					<AccordionContent>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger icon={<CircleDashedIcon />}>
						Section Three
					</AccordionTrigger>
					<AccordionContent>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
