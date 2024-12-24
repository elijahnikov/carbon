import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BasicTabsExample() {
	return (
		<Tabs defaultValue="account">
			<TabsList>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="security">Security</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				<p>Account content</p>
			</TabsContent>
			<TabsContent value="security">
				<p>Security content</p>
			</TabsContent>
		</Tabs>
	);
}
