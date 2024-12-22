import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import CarbonLogo from "../../logo";
import { SocialLoginIcons } from "../../pages/home/demo/login";

export default function DialogExample() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Sign in</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm">
				<div className="flex flex-col items-center gap-2">
					<CarbonLogo />
					<DialogHeader>
						<DialogTitle className="sm:text-center">Welcome back</DialogTitle>
						<DialogDescription className="sm:text-center">
							Enter your credentials to login to your account.
						</DialogDescription>
					</DialogHeader>
				</div>

				<div className="space-y-4">
					<div className="space-y-2">
						<Input
							id="login-email"
							placeholder="hi@yourcompany.com"
							type="email"
						/>
					</div>
					<div className="space-y-2">
						<Input
							id="login-password"
							placeholder="Enter your password"
							type="password"
						/>
					</div>
				</div>
				<div className="flex justify-between gap-2">
					<div className="flex items-center gap-2">
						<Checkbox id="login-remember" />
						<label
							htmlFor="login-remember"
							className="font-medium text-sm text-secondary-foreground"
						>
							Remember me
						</label>
					</div>
					<Button variant={"link"} size="sm">
						Forgot password?
					</Button>
				</div>
				<Button className="w-full">Sign in</Button>

				<div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
					<span className="text-xs text-secondary-foreground">Or</span>
				</div>
				<Button before={SocialLoginIcons.Google} variant="outline">
					Login with Google
				</Button>
			</DialogContent>
		</Dialog>
	);
}
