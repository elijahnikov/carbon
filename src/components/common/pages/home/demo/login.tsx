import CarbonLogo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function Login() {
	return (
		<Card className="flex min-h-[360px] size-[50%] flex-col gap-2 justify-center">
			<div className="flex items-center gap-2">
				<Button
					variant={"outline"}
					className="rounded-full w-12 h-12 flex items-center justify-center p-4 pointer-events-none"
				>
					<CarbonLogo />
				</Button>
				<div className="flex flex-col text-left justify-start items-start">
					<h1 className="text-md font-semibold">Welcome back</h1>
					<p className="text-carbon-900">Enter your credentials to continue</p>
				</div>
			</div>
			<div className="flex flex-col gap-2 w-full">
				<Input placeholder="Email" />
				<Input placeholder="Password" />
				<Button>Continue</Button>
			</div>
			<div className="flex justify-between w-full items-center">
				<div className="flex items-center gap-2">
					<Checkbox />
					<p>Remember me?</p>
				</div>
				<Button variant={"outline"}>Forgot password?</Button>
			</div>
			<div className="flex w-full items-center gap-4">
				<hr className="w-full" />
				<p className="whitespace-nowrap text-carbon-900">Other options</p>
				<hr className="w-full" />
			</div>
			<div className="flex flex-col w-full items-center gap-2">
				<Button className="w-full" variant={"outline"}>
					Continue with Google
				</Button>
				<Button className="w-full" variant={"outline"}>
					Continue with Discord
				</Button>
			</div>
		</Card>
	);
}
