"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function ShowcaseExample() {
	const [value, setValue] = useState([50]);
	return (
		<div className="flex w-[300px] flex-col gap-2 justify-center">
			<Label>{value}</Label>
			<Slider value={value} onValueChange={setValue} max={100} step={5} />
		</div>
	);
}
