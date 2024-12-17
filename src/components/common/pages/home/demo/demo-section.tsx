"use client";

import CarbonLogo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Alerts from "./alerts";
import Avatars from "./avatars";
import ButtonGroups from "./button-group";
import Buttons from "./buttons";
import CheckboxSwitch from "./checkbox-switch";
import Login from "./login";
import Members from "./members";
import Otp from "./otp";

export default function DemoSection() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex gap-4">
				<div className="flex flex-col flex-end items-end gap-2">
					<div className="top-3 relative">
						<ButtonGroups />
					</div>
					<div className="h-max w-max flex items-end gap-2">
						<div className="flex flex-col items-end gap-2">
							<CheckboxSwitch />
							<Otp />
						</div>
						<Login />
					</div>
					<div className="flex w-[500px]  items-end gap-2">
						<Alerts />
					</div>
					<div className="flex gap-4">
						<div className="flex relative -top-16 flex-col items-end justi gap-4">
							<Buttons />
							<Avatars />
						</div>
						<Members />
					</div>
				</div>
			</div>
		</div>
	);
}
