import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";
import { cn } from "../utils/cn";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			// Base styles
			"h-5 w-5",
			"rounded-md",
			"shrink-0",

			// Border and colors
			"border border-primary",
			"ring-inset dark:ring-blue-400 ring-blue-400",
			"outline-blue-600",

			// States
			"data-[state=checked]:bg-blue-500 data-[state=checked]:text-primary-foreground",
			"data-[state=checked]:ring-1 data-[state=unchecked]:ring-0",
			"data-[state=checked]:border-blue-500 dark:data-[state=checked]:border-blue-600 dark:data-[state=unchecked]:border-white",
			"disabled:cursor-not-allowed disabled:opacity-50",

			// Focus styles
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			"peer",
			className,
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn("flex items-center justify-center text-current")}
		>
			<Check className="h-4 w-4" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
