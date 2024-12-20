import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertExample() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{/* Default Alert */}
			<Alert>
				<AlertTitle>Default Alert</AlertTitle>
				<AlertDescription>
					This is a default alert with neutral styling
				</AlertDescription>
			</Alert>

			{/* Error Alert */}
			<Alert variant="error">
				<AlertTitle>Error Alert</AlertTitle>
				<AlertDescription>
					Something went wrong! Please try again later.
				</AlertDescription>
			</Alert>

			{/* Success Alert */}
			<Alert variant="success">
				<AlertTitle>Success Alert</AlertTitle>
				<AlertDescription>Operation completed successfully!</AlertDescription>
			</Alert>

			{/* Warning Alert */}
			<Alert variant="warning">
				<AlertTitle>Warning Alert</AlertTitle>
				<AlertDescription>
					Please review the changes before proceeding.
				</AlertDescription>
			</Alert>

			{/* Message Alert */}
			<Alert variant="message">
				<AlertTitle>Message Alert</AlertTitle>
				<AlertDescription>
					Here's an informational message for you.
				</AlertDescription>
			</Alert>
		</div>
	);
}
