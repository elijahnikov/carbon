import Badge from "@/components/ui/badge";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CheckCircle,
	InfoIcon,
	XCircle,
} from "lucide-react";

export default function BadgeIconExample() {
	return (
		<div className="flex flex-wrap gap-4">
			<Badge color="primary" before={<InfoIcon />}>
				Message
			</Badge>
			<Badge color="green" before={<CheckCircle />}>
				Success
			</Badge>
			<Badge color="red" before={<XCircle />}>
				Error
			</Badge>
			<Badge color="blue" before={<ArrowLeftIcon />}>
				Left
			</Badge>
			<Badge color="teal" after={<ArrowRightIcon />}>
				Right
			</Badge>
		</div>
	);
}
