import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import {
	BadgeAlertIcon,
	BadgeCheckIcon,
	BadgeXIcon,
	MonitorIcon,
	MoonIcon,
	SunIcon,
} from "lucide-react";

export default function ButtonGroupIconExample() {
	return (
		<div className="flex flex-col items-center gap-4">
			<ButtonGroup>
				<ButtonGroupItem isIconOnly>
					<BadgeXIcon />
				</ButtonGroupItem>
				<ButtonGroupItem isIconOnly>
					<BadgeCheckIcon />
				</ButtonGroupItem>
				<ButtonGroupItem isIconOnly>
					<BadgeAlertIcon />
				</ButtonGroupItem>
			</ButtonGroup>

			<ButtonGroup size="sm">
				<ButtonGroupItem variant="outline" before={<SunIcon />}>
					Light
				</ButtonGroupItem>
				<ButtonGroupItem variant="outline" before={<MoonIcon />}>
					Dark
				</ButtonGroupItem>
				<ButtonGroupItem variant="outline" before={<MonitorIcon />}>
					System
				</ButtonGroupItem>
			</ButtonGroup>
		</div>
	);
}
