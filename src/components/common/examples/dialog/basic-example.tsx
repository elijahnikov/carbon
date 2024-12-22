import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";

export default function BasicExample() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>Header</DialogHeader>
				<DialogDescription>Description</DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"outline"}>Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
