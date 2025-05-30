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

export default function SignupDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Sign up</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm">
				<div className="flex flex-col items-center gap-2">
					<div className="min-w-12 min-h-12">
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							viewBox="0 0 100 100"
							className="h-full"
							preserveAspectRatio="none"
						>
							<rect
								x="20"
								y="20"
								width="60"
								height="60"
								className="fill-black dark:fill-white"
								stroke="none"
							/>
							<rect
								x="35"
								y="35"
								width="30"
								height="30"
								className="fill-white dark:fill-black"
								stroke="none"
							/>
						</svg>
					</div>
					<DialogHeader>
						<DialogTitle className="sm:text-center">
							Create an account
						</DialogTitle>
						<DialogDescription className="sm:text-center">
							Enter your credentials to create an account.
						</DialogDescription>
					</DialogHeader>
				</div>

				<div className="space-y-4">
					<Input
						label="Name"
						id="signup-name"
						placeholder="Enter your name"
						type="text"
					/>
					<Input
						label="Email"
						id="signup-email"
						placeholder="hi@yourcompany.com"
						type="email"
					/>
					<Input
						label="Password"
						id="signup-password"
						placeholder="Enter your password"
						type="password"
					/>
					<Input
						id="signup-confirm-password"
						placeholder="Confirm your password"
						type="password"
					/>
				</div>

				<Button className="w-full">Sign up</Button>

				<div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
					<span className="text-xs text-secondary-foreground">Or</span>
				</div>
				<Button
					before={
						// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
						<svg
							width="18"
							height="18"
							viewBox="0 0 256 262"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid"
						>
							<path
								d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
								fill="#4285F4"
							/>
							<path
								d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
								fill="#34A853"
							/>
							<path
								d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
								fill="#FBBC05"
							/>
							<path
								d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
								fill="#EB4335"
							/>
						</svg>
					}
					variant="outline"
				>
					Login with Google
				</Button>
			</DialogContent>
		</Dialog>
	);
}
