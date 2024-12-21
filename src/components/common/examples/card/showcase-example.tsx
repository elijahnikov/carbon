import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function CardExample() {
	return (
		<Card className="max-w-sm overflow-hidden">
			<img
				src="https://images.nike.com/is/image/DotCom/DM0029_101_A_PREM"
				alt="Nike Air Force 1"
				className="w-full hover:scale-[1.01] transition-all duration-300 h-48 object-cover rounded-lg dark:shadow-sm-dark shadow-overlay"
			/>
			<div className="mt-2">
				<div className="flex gap-4 items-center">
					<div className="flex flex-col">
						<h1 className="text-lg font-medium">Nike Air Force 1 '07</h1>
						<p className="text-xs opacity-50 text-secondary-foreground leading-none">
							4 sizes available
						</p>
					</div>
					<Badge color="green" before={<DollarSign />} className="mt-2">
						110.00
					</Badge>
				</div>
				<Button variant={"outline"} className="mt-4 w-full">
					Add to Bag
				</Button>
			</div>
		</Card>
	);
}
