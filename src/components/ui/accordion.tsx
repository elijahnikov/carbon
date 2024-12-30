"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { ChevronDown, Minus, Plus } from "lucide-react";
import * as React from "react";
import { cn } from "../utils/cn";

const accordionItemVariants = cva("", {
	variants: {
		variant: {
			line: "border-b",
			"full-border":
				"border-0 dark:ring-1 ring-inset dark:ring-carbon-dark-400 dark:border-t dark:border-carbon-dark-500 mt-2 border-carbon-400 shadow-overlay rounded-xl dark:bg-carbon-dark-300 bg-carbon-100 px-3",
			table: "border px-3",
			"table-fill": "px-3",
		},
	},
	defaultVariants: {
		variant: "line",
	},
});

export type AccordionElement = React.ElementRef<typeof AccordionPrimitive.Root>;
export type AccordionProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Root
> & {
	iconType?: "chevron" | "plus";
	iconPosition?: "left" | "right";
} & VariantProps<typeof accordionItemVariants>;

type AccordionContextProps = {
	iconType?: AccordionProps["iconType"];
	iconPosition?: AccordionProps["iconPosition"];
	variant?: AccordionProps["variant"];
};

const AccordionContext = React.createContext<AccordionContextProps>({
	iconType: "chevron",
	iconPosition: "right",
});

function useAccordionContext() {
	const context = React.useContext(AccordionContext);

	if (!context) {
		throw new Error(
			"Accordion components must be used within a Accordion or Accordion.Root component",
		);
	}

	return context;
}

// const Accordion = AccordionPrimitive.Root;
const Accordion = React.forwardRef<AccordionElement, AccordionProps>(
	(
		{
			children,
			className,
			iconType = "chevron",
			iconPosition = "right",
			variant = "line",
			...props
		},
		ref,
	) => {
		return (
			<AccordionPrimitive.Root
				ref={ref}
				className={cn(
					variant === "table-fill" &&
						"border-0 dark:ring-1 ring-inset dark:ring-carbon-dark-400 dark:border-t dark:border-carbon-dark-500 mt-2 border-carbon-400 shadow-overlay rounded-lg dark:bg-carbon-dark-300 bg-carbon-100",
					className,
				)}
				{...props}
			>
				<AccordionContext.Provider
					value={{
						iconType,
						iconPosition,
						variant,
					}}
				>
					{children}
				</AccordionContext.Provider>
			</AccordionPrimitive.Root>
		);
	},
);
Accordion.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
	const { variant } = useAccordionContext();
	return (
		<AccordionPrimitive.Item
			ref={ref}
			className={cn(
				variant === "table" &&
					"first-of-type:rounded-t-lg -my-px last-of-type:rounded-b-lg",
				variant === "table-fill" && "border-b last:border-b-0",
				accordionItemVariants({ variant }),
				className,
			)}
			{...props}
		/>
	);
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
		icon?: React.ReactElement<HTMLElement>;
	}
>(({ className, children, icon, ...props }, ref) => {
	const { iconType, iconPosition } = useAccordionContext();

	const toggleIcon =
		iconType === "chevron" ? (
			<ChevronDown
				className={cn(
					"h-4 w-4 shrink-0 transition-transform duration-200",
					"group-data-[state=open]:rotate-180",
				)}
			/>
		) : (
			<div className="relative h-4 w-4">
				<Plus
					className={cn(
						"absolute h-4 w-4 transition-all duration-200",
						"group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0",
					)}
				/>
				<Minus
					className={cn(
						"absolute h-4 w-4 transition-all duration-200",
						"opacity-0 group-data-[state=open]:opacity-100",
					)}
				/>
			</div>
		);

	const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
		const Component = React.isValidElement(icon) ? Slot : "span";

		const iconClasses = cn(
			"dark:text-carbon-900 text-secondary-foreground m-0 p-0 size-4 mr-2",
			icon.props?.className,
		);

		return <Component className={iconClasses}>{icon}</Component>;
	};

	const innerContent = (
		<div className="flex w-full items-center">
			<div className="flex items-center gap-2">
				{iconPosition === "left" && toggleIcon}
				{icon && renderIcon(icon)}
			</div>
			<span className={cn(iconPosition === "left" && !icon && "ml-2")}>
				{children}
			</span>
			{iconPosition === "right" && <div className="ml-auto">{toggleIcon}</div>}
		</div>
	);

	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(
					"group flex w-full items-center py-4 font-medium transition-all",
					className,
				)}
				{...props}
			>
				{innerContent}
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}
	>
		<div className={cn("pb-4 pt-0 text-secondary-foreground", className)}>
			{children}
		</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
