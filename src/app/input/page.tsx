"use client";

import ThemeToggle from "@/components/common/theme-toggle";
import {
	Alert,
	AlertDescription,
	AlertFooter,
	AlertTitle,
} from "@/components/ui/alert";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
} from "@/components/ui/avatar";
import { AvatarGroup, AvatarGroupItem } from "@/components/ui/avatar-group";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
	AlertCircle,
	ArrowRight,
	BadgeCent,
	BatteryWarning,
	CircleIcon,
	DollarSign,
	FileWarning,
	InfoIcon,
	PersonStanding,
	PresentationIcon,
	RocketIcon,
	ShieldCheck,
	Terminal,
	TerminalSquare,
	UserCheck,
} from "lucide-react";
import { useState } from "react";

export default function InputPage() {
	return (
		<div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center">
			<ThemeToggle />
			{/* <Alert icon={<AlertCircle />}>
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					You can add components to your app using the cli.
				</AlertDescription>
			</Alert> */}
			<div className="grid grid-cols-2 gap-4 w-full items-center">
				<Alert icon={<InfoIcon />}>
					<AlertTitle>
						A new software update is available. See what's new.
					</AlertTitle>
					<AlertFooter>
						<Button variant="secondary" size="xs" after={<ArrowRight />}>
							View the changelog
						</Button>
					</AlertFooter>
				</Alert>
				<Alert variant={"error"}>
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						Your session has expired. Please log in again.
					</AlertDescription>
				</Alert>
				<Alert variant={"success"}>
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						Your session has expired. Please log in again.
					</AlertDescription>
				</Alert>
				<Alert variant={"warning"}>
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						Your session has expired. Please log in again.
					</AlertDescription>
				</Alert>
				<Alert variant={"message"}>
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>
						Your session has expired. Please log in again.
					</AlertDescription>
				</Alert>
			</div>
			{/* <Card>
				<div className=" flex flex-col gap-2">
					<div className="max-w-[300px] flex flex-wrap gap-2">
						<Badge>Primary</Badge>
						<Badge before={<DollarSign />} color="green">
							500
						</Badge>
						<Badge before={<AlertCircle />} color="red">
							Red
						</Badge>
						<Badge before={<BatteryWarning />} color="yellow">
							Yellow
						</Badge>
						<Badge before={<UserCheck />} color="teal">
							Teal
						</Badge>
						<Badge before={<RocketIcon />} color="orange">
							Orange
						</Badge>
						<Badge before={<ShieldCheck />} color="purple">
							Purple
						</Badge>
					</div>
				</div>
			</Card> */}
		</div>
	);
}
