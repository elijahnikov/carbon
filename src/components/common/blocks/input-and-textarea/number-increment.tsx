"use client";

import { Input } from "@/components/ui/input";
import { MinusIcon, PlusIcon } from "lucide-react";
import * as React from "react";

export default function NumberIncrement() {
	const [value, setValue] = React.useState<number>(230);
	return (
		<Input
			label="Number increment"
			value={value}
			className="text-center"
			onChange={(e) =>
				setValue(
					!Number.isNaN(Number(e.target.value)) ? Number(e.target.value) : 0,
				)
			}
			prefix={
				<button
					onClick={() => setValue(value - 1)}
					type="button"
					className="bg-transparent"
				>
					<MinusIcon className="size-4" />
				</button>
			}
			suffix={
				<button
					onClick={() => setValue(value + 1)}
					type="button"
					className="bg-transparent"
				>
					<PlusIcon className="size-4" />
				</button>
			}
		/>
	);
}
