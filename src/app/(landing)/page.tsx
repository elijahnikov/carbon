import DemoSection from "@/components/common/pages/home/demo/demo-section";
import MainText from "@/components/common/pages/home/main-text";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
	return (
		<main className="flex relative overflow-x-hidden min-h-[calc(100vh-3rem)] justify-center items-center">
			<div className="mt-16 w-[90%] items-center flex justify-between">
				<MainText />
				<DemoSection />
			</div>
		</main>
	);
}
