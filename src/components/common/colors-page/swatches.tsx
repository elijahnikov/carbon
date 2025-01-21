"use client";

import _ from "lodash";
import { CopyIcon } from "lucide-react";

import { toast } from "sonner";

export default function Swatches({
	color,
}: { color: { name: string; shades: Record<string, string> } }) {
	const copy = async (value: string) => {
		await navigator.clipboard.writeText(value);
		toast.success(`${_.toUpper(value)} copied to clipboard`);
	};

	return (
		<div key={color.name} className="flex flex-col gap-2">
			<p className="font-medium">{_.startCase(color.name)}</p>
			<div className="flex w-full gap-2">
				{Object.entries(color.shades)
					.sort((a, b) => {
						if (a[0] === "DEFAULT") return -1;
						if (b[0] === "DEFAULT") return 1;
						return Number(a[0]) - Number(b[0]);
					})
					.map(([shade, value]) => (
						<div className="w-full" key={shade}>
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<div
								className="relative w-full group transition-all duration-100 hover:ring-2 ring-inset hover:ring-border h-12 shadow-overlay dark:shadow-xs-dark rounded-md"
								style={{ backgroundColor: value }}
								onClick={() => copy(value)}
							>
								<CopyIcon className="size-4 mix-blend-difference absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-100" />
							</div>
							<p className="text-xs mt-[2px] text-secondary-foreground">
								{shade}
							</p>
							<p className="text-[10px] mt-[2px] uppercase font-mono text-secondary-foreground/75">
								{value}
							</p>
						</div>
					))}
			</div>
		</div>
	);
}
