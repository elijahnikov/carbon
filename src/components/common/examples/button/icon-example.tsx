import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from "lucide-react";

export default function ButtonIconExample() {
	return (
		<div className="flex gap-4 justify-center flex-wrap">
			<Button before={<ArrowLeftIcon />}>Left icon</Button>
			<Button after={<ArrowRightIcon />}>Right icon</Button>
			<Button isIconOnly>
				<ArrowUpIcon />
			</Button>
		</div>
	);
}
