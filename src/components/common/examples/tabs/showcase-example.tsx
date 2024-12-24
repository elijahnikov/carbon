import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ShowcaseExample() {
	return (
		<Tabs variant={"fill"} defaultValue="account" className="w-[400px] mx-auto">
			<TabsList stretch className="w-full">
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="security">Security</TabsTrigger>
			</TabsList>

			<TabsContent value="account">
				<Card className="space-y-4">
					<h3 className="text-md text-secondary-foreground font-medium">
						Account Settings
					</h3>
					<div className="grid gap-4">
						<div className="space-y-2">
							<Label required htmlFor="name">
								Name
							</Label>
							<Input type="text" id="name" placeholder="John Doe" />
						</div>
						<div className="space-y-2">
							<Label required htmlFor="email">
								Email
							</Label>
							<Input type="email" id="email" placeholder="john@example.com" />
						</div>
					</div>
				</Card>
			</TabsContent>

			<TabsContent value="security" className="mt-6">
				<Card className="space-y-4">
					<h1 className="text-md text-secondary-foreground font-medium">
						Security Settings
					</h1>
					<div className="space-y-3">
						<div className="space-y-2">
							<Label required htmlFor="current-password">
								Current Password
							</Label>
							<Input type="password" id="current-password" />
						</div>
						<div className="space-y-2">
							<Label required htmlFor="new-password">
								New Password
							</Label>
							<Input type="password" id="new-password" />
						</div>
						<Button className="w-full">Change Password</Button>
					</div>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
