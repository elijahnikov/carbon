import ThemeToggle from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function InputPage() {
	return (
		<div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center">
			<ThemeToggle />
			<Card>
				<div className="min-w-[400px] flex flex-col gap-2">
					<p className="font-medium">Email</p>
					<Input placeholder="Enter your email" />
					<p className="font-medium">Username</p>
					<Input placeholder="Enter your username" />

					<Textarea placeholder="Enter your message" />
					<div className="flex justify-end gap-2 items-center mt-4">
						<Button variant="outline">Cancel</Button>
						<Button>Save</Button>
					</div>
				</div>
			</Card>
		</div>
	);
}
