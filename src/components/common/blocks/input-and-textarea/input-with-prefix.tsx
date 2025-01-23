import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { MailIcon } from "lucide-react";
import * as React from "react";

export default function InputWithPrefix() {
	return (
		<Input
			prefix={"https://"}
			label="Input with prefix"
			placeholder="example.com"
		/>
	);
}
