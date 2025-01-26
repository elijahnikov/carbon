import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dot, Hash } from "lucide-react";

export default function Otp() {
	return (
		<Card className="w-[400px] max-w-max items-center flex flex-col justify-center text-center">
			<Button className="h-8 w-8 rounded-full pointer-events-none">
				<Hash className="size-4" />
			</Button>
			<div className="flex gap-2 my-2 flex-col">
				<div className="flex flex-col">
					<h1 className="font-semibold leading-tight text-lg">
						Enter confirmation code
					</h1>
					<p className="text-secondary-foreground leading-tight">
						Check your email and enter the code
					</p>
				</div>
				<div className="flex mt-2 items-center gap-2">
					{Array.from({ length: 3 }).map((_, index) => (
						<Input disabled className="w-4" key={index} />
					))}
					<Dot />
					{Array.from({ length: 3 }).map((_, index) => (
						<Input disabled className="w-4" key={index} />
					))}
				</div>
				<div className="mt-2 -mb-2">
					<Button size="xs" variant={"link"}>
						Resend code
					</Button>
				</div>
			</div>
		</Card>
	);
}
