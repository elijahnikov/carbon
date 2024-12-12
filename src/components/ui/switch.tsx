import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";
import { cn } from "../utils/cn";

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitive.Root
		className={cn(
			// Base layout and sizing
			"inline-flex h-6 w-11 shrink-0",
			"items-center rounded-full",

			// Colors and theme-specific styling
			"data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
			"dark:shadow-sm-dark dark:ring-1 dark:ring-border",
			"shadow-overlay",

			// Border handling
			"border-2 border-transparent",

			// Interactive states
			"cursor-pointer",
			"transition-colors",
			"focus-visible:outline-none focus-visible:ring-2",
			"focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
			"disabled:cursor-not-allowed disabled:opacity-50",

			// Additional classes
			"peer",
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitive.Thumb
			className={cn(
				// Base layout and sizing
				"pointer-events-none block h-5 w-5 rounded-full",

				// Colors and theme variants
				"data-[state=checked]:bg-neutral-100 data-[state=unchecked]:bg-neutral-500",
				"dark:data-[state=checked]:bg-neutral-200 dark:bg-carbon-500",

				// Animation
				"transition-transform",
				"data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
			)}
		/>
	</SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
