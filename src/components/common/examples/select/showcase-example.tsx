import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function SelectShowcaseExample() {
	return (
		<Select>
			<SelectTrigger className="max-w-[200px]">
				<SelectValue placeholder="Select an option" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
			</SelectContent>
		</Select>
	);
}
