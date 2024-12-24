import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OrientationExample() {
	return (
		<div>
			<Tabs defaultValue="account" orientation="vertical">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>
			</Tabs>
			<Tabs defaultValue="account" orientation="horizontal">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
}
