import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VariantExample() {
	return (
		<div className="flex flex-col gap-4">
			<Tabs defaultValue="account" variant="fill">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>
			</Tabs>
			<Tabs defaultValue="account" variant="pill">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>
			</Tabs>
			<Tabs defaultValue="account" variant="underlined">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>
			</Tabs>
			<Tabs defaultValue="account" variant="underlined-fill">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
}
