import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps, cva } from "class-variance-authority";
import { Check } from "lucide-react";
import * as React from "react";
import { cn } from "../utils/cn";

const defaultCheckboxClasses = [
	"rounded-md shrink-0",
	// Border
	"border-b ring-inset",
	// States
	"data-[state=checked]:border-b data-[state=unchecked]:border",
	"data-[state=unchecked]:bg-input data-[state=checked]:text-primary-foreground",
	"data-[state=checked]:ring-1 data-[state=unchecked]:ring-0",
	"dark:data-[state=unchecked]:border-carbon-dark-500 data-[state=unchecked]:border-carbon-500",
	"disabled:cursor-not-allowed disabled:opacity-50",
	// Focus styles
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
	"peer",
];

const checkboxVariants = cva(defaultCheckboxClasses, {
	variants: {
		color: {
			primary:
				"border-primary ring-primary-ring outline-primary-outline data-[state=checked]:bg-primary data-[state=checked]:border-primary-border dark:data-[state=checked]:border-primary-border",
			green:
				"border-green-500 ring-green-400 outline-green-600 data-[state=checked]:bg-green-500 dark:data-[state=checked]:border-green-600 data-[state=checked]:border-green-500",
			red: "border-red-500 ring-red-400 outline-red-600 data-[state=checked]:bg-red-500 dark:data-[state=checked]:border-red-600 data-[state=checked]:border-red-500",
			yellow:
				"border-yellow-500 ring-yellow-400 outline-yellow-600 data-[state=checked]:bg-yellow-500 dark:data-[state=checked]:border-yellow-600 data-[state=checked]:border-yellow-500",
			teal: "border-teal-500 ring-teal-400 outline-teal-600 data-[state=checked]:bg-teal-500 dark:data-[state=checked]:border-teal-600 data-[state=checked]:border-teal-500",
			orange:
				"border-orange-500 ring-orange-400 outline-orange-600 data-[state=checked]:bg-orange-500 dark:data-[state=checked]:border-orange-600 data-[state=checked]:border-orange-500",
			purple:
				"border-purple-500 ring-purple-400 outline-purple-600 data-[state=checked]:bg-purple-500 dark:data-[state=checked]:border-purple-600 data-[state=checked]:border-purple-500",
			gray: "border-gray-500 ring-gray-400 outline-gray-600 data-[state=checked]:bg-gray-500 dark:data-[state=checked]:border-gray-600 data-[state=checked]:border-gray-500",
		},
		size: {
			sm: "h-4 w-4 [&_svg]:size-3",
			md: "h-5 w-5 [&_svg]:size-4",
			lg: "h-6 w-6 [&_svg]:size-5",
		},
	},
	defaultVariants: {
		size: "md",
		color: "primary",
	},
});

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
		VariantProps<typeof checkboxVariants>
>(({ className, size, color, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(checkboxVariants({ size, color }), className)}
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
