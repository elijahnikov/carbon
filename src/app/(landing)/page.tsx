import CodeBlock from "@/components/common/code-blocks/code-block";
import DemoSection from "@/components/common/pages/home/demo/demo-section";
import MainText from "@/components/common/pages/home/main-text";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { CommandIcon, HouseIcon } from "lucide-react";

export default function HomePage() {
	return (
		<main className="flex relative overflow-x-hidden min-h-[calc(100vh-3rem)] justify-center items-center">
			<div className="mt-16 w-[90%] items-center flex justify-between">
				{/* <MainText /> */}
				{/* <DemoSection /> */}
				<div className=" min-w-[500px]">
					<Accordion
						iconType="plus"
						iconPosition="right"
						type="single"
						collapsible
						variant={"full-border"}
					>
						<AccordionItem value="item-1">
							<AccordionTrigger icon={<CommandIcon />}>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion
						iconType="plus"
						iconPosition="right"
						type="single"
						collapsible
						variant={"line"}
					>
						<AccordionItem value="item-1">
							<AccordionTrigger icon={<CommandIcon />}>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion
						iconType="plus"
						iconPosition="right"
						type="single"
						collapsible
						className="mt-4"
						variant={"table-fill"}
					>
						<AccordionItem value="item-1">
							<AccordionTrigger icon={<CommandIcon />}>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger icon={<CommandIcon />}>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger icon={<CommandIcon />}>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</main>
	);
}
