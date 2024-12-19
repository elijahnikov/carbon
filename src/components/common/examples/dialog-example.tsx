import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import CarbonLogo from "../logo";

export default function Example() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Example Dialog</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm">
				<div className="mb-2 flex flex-col items-center gap-2">
					<div
						className="flex size-11 shrink-0 items-center justify-center rounded-full"
						aria-hidden="true"
					>
						<CarbonLogo />
					</div>
					<DialogHeader>
						<DialogTitle className="sm:text-center">
							Never miss an update
						</DialogTitle>
						<DialogDescription className="sm:text-center">
							Subscribe to receive news and special offers.
						</DialogDescription>
					</DialogHeader>
				</div>

				<form className="space-y-5">
					<div className="space-y-2">
						<Input
							id="dialog-subscribe"
							className="peer"
							placeholder="hi@yourcompany.com"
							type="email"
							aria-label="Email"
						/>
					</div>
					<Button type="button" className="w-full">
						Subscribe
					</Button>
				</form>

				<p className="text-center text-xs text-secondary-foreground">
					By subscribing you agree to our{" "}
					<p className="underline cursor-pointer hover:no-underline">
						Privacy Policy.
					</p>
				</p>
			</DialogContent>
		</Dialog>
	);
}
