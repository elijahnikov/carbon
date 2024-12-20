import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BoxIcon } from "lucide-react";

export default function CustomIconExample() {
	return (
		<Alert icon={<BoxIcon />}>
			<AlertTitle>Custom icon</AlertTitle>
			<AlertDescription>
				The icon prop allows you to pass in a different icon or React component.
			</AlertDescription>
		</Alert>
	);
}
