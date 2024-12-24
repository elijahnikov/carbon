"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ToastShowcaseExample() {
	return <Button onClick={() => toast("Hello, world!")}>Click me</Button>;
}
