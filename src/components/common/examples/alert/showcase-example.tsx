import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Example() {
	return (
		<Alert>
			<AlertTitle>Network Error</AlertTitle>
			<AlertDescription>
				Your session has expired. Please log in again to continue.
			</AlertDescription>
		</Alert>
	);
}
