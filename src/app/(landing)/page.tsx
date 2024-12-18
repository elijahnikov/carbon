import DemoSection from "@/components/common/pages/home/demo/demo-section";
import MainText from "@/components/common/pages/home/main-text";
import Badge from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoIcon, WrenchIcon } from "lucide-react";

export default function HomePage() {
	return (
		<main className="flex relative overflow-x-hidden min-h-[calc(100vh-3rem)] justify-center items-center">
			<div className="mt-16 w-[90%] items-center flex justify-between">
				{/* <MainText /> */}
				{/* <DemoSection /> */}
				<div className="flex flex-col gap-4">
					<Tabs defaultValue="account" className="w-full">
						<TabsList>
							<TabsTrigger before={<InfoIcon />} value="account">
								Account
							</TabsTrigger>
							<TabsTrigger before={<WrenchIcon />} value="settings">
								Settings
							</TabsTrigger>
							<TabsTrigger
								after={<Badge className="rounded-full">3</Badge>}
								value="password"
							>
								Password
							</TabsTrigger>
						</TabsList>
					</Tabs>
					<Tabs variant={"fill"} defaultValue="account" className="w-full">
						<TabsList>
							<TabsTrigger before={<InfoIcon />} value="account">
								Account
							</TabsTrigger>
							<TabsTrigger before={<WrenchIcon />} value="settings">
								Settings
							</TabsTrigger>
							<TabsTrigger
								after={<Badge className="rounded-full">3</Badge>}
								value="password"
							>
								Password
							</TabsTrigger>
						</TabsList>
					</Tabs>
					<Tabs
						variant={"underlined-fill"}
						defaultValue="account"
						className="w-full"
					>
						<TabsList>
							<TabsTrigger before={<InfoIcon />} value="account">
								Account
							</TabsTrigger>
							<TabsTrigger before={<WrenchIcon />} value="settings">
								Settings
							</TabsTrigger>
							<TabsTrigger
								after={<Badge className="rounded-full">3</Badge>}
								value="password"
							>
								Password
							</TabsTrigger>
						</TabsList>
					</Tabs>
					<Tabs variant={"pill"} defaultValue="account" className="w-full">
						<TabsList>
							<TabsTrigger before={<InfoIcon />} value="account">
								Account
							</TabsTrigger>
							<TabsTrigger before={<WrenchIcon />} value="settings">
								Settings
							</TabsTrigger>
							<TabsTrigger
								after={<Badge className="rounded-full">3</Badge>}
								value="password"
							>
								Password
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>
			</div>
		</main>
	);
}
