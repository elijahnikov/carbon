"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useConfig } from "@/hooks/use-config";
import * as React from "react";
import CopyButton from "../component-docs/copy-button";

type CommandBlockProps = {
	pnpm: string;
	npm: string;
	yarn: string;
	bun: string;
};

export function CommandBlock({ pnpm, npm, yarn, bun }: CommandBlockProps) {
	const [config, setConfig] = useConfig();
	const packageManager = React.useMemo(
		() => config.packageManager || "pnpm",
		[config],
	);

	const tabs = React.useMemo(() => {
		return {
			pnpm,
			npm,
			yarn,
			bun,
		};
	}, [pnpm, npm, yarn, bun]);

	return (
		<Tabs
			className="space-y-0 w-full"
			value={packageManager}
			onValueChange={(value) => {
				setConfig({
					...config,
					packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
				});
			}}
			variant={"fill"}
		>
			<TabsList className="border-b-0 rounded-b-none" stretch>
				{Object.entries(tabs).map(([key, value]) => (
					<TabsTrigger key={key} value={key}>
						{key}
					</TabsTrigger>
				))}
			</TabsList>
			{Object.entries(tabs).map(([key, value]) => (
				<TabsContent
					className="-mt-4 rounded-t-none border-t-0"
					key={key}
					value={key}
				>
					<div className="border rounded-t-none relative bg-background flex items-center rounded-xl py-3.5 px-4">
						<code className="text-sm text-secondary-foreground">{value}</code>
						<CopyButton content={value} />
					</div>
				</TabsContent>
			))}
		</Tabs>
	);
}
