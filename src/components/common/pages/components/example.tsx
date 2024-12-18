import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Example = () => {
	return (
		<Alert variant={"success"}>
			<AlertTitle>Alert Title</AlertTitle>
			<AlertDescription>Alert Description</AlertDescription>
		</Alert>
	);
};

export default Example;
