import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileCheckIcon } from "lucide-react";

export default function Alerts() {
	return (
		<Alert className="w-full" icon={<FileCheckIcon />} variant={"success"}>
			<AlertTitle>Successfully uploaded!</AlertTitle>
			<AlertDescription>
				Click here to view your uploaded file.
			</AlertDescription>
		</Alert>
	);
}
