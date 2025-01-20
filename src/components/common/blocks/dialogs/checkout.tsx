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
import { Label } from "@/components/ui/label";
import { ShoppingCartIcon } from "lucide-react";

export default function CheckoutDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button before={<ShoppingCartIcon />}>Checkout</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm">
				<div className="flex flex-col items-center gap-2">
					<div className="border rounded-full p-2 dark:shadow-overlay-dark shadow-overlay">
						<ShoppingCartIcon />
					</div>
					<DialogHeader>
						<DialogTitle className="text-center">
							Complete your purchase
						</DialogTitle>
						<DialogDescription className="text-center">
							Enter your details to securely complete your purchase.
						</DialogDescription>
					</DialogHeader>
				</div>

				<Input label="Name on card" id="signup-name" type="text" />
				<div>
					<Label className="mb-2">Card details</Label>
					<Input
						className="rounded-b-none"
						id="signup-email"
						placeholder="Card number"
						type="email"
					/>
					<div className="grid grid-cols-2">
						<Input
							className="rounded-t-none rounded-br-none"
							id="signup-password"
							placeholder="Expiry date MM/YY"
							type="password"
						/>
						<Input
							className="rounded-t-none rounded-bl-none"
							id="signup-confirm-password"
							placeholder="CVC"
							type="password"
						/>
					</div>
				</div>

				<Button className="w-full">Complete purchase</Button>
				<p className="text-xs text-center text-secondary-foreground/50">
					Your purchase will be completed after the card is charged. Cancel
					anytime.
				</p>
			</DialogContent>
		</Dialog>
	);
}
