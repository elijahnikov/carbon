"use client";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import {
	AlertCircle,
	AlertTriangle,
	CheckCircle,
	MessageCircle,
} from "lucide-react";
import * as React from "react";
import { cn } from "../utils/cn";

const alertVariants = cva(
	"border px-4 py-3 relative rounded-lg max-w-lg min-w-lg w-full",
	{
		variants: {
			variant: {
				default:
					"bg-card border-border border dark:ring-carbon-dark-500 ring-0 shadow-overlay dark:shadow-sm-dark dark:ring-1 ring-inset dark:[&_h4]:text-white [&_h4]:text-carbon-dark-500 text-secondary-foreground",
				error:
					"dark:bg-destructive/20 bg-destructive/20 border-destructive-ring border shadow-sm dark:shadow-sm-dark ring-destructive-border ring-1 ring-inset dark:[&_h4]:text-red-200 [&_h4]:text-red-600 text-red-500 dark:text-red-300",
				success:
					"dark:bg-green-500/20 bg-green-500/20 dark:border-green-700 border-green-500 border shadow-sm dark:shadow-sm-dark dark:ring-green-500 ring-green-300 ring-1 ring-inset dark:[&_h4]:text-green-200 [&_h4]:text-green-800 text-green-700 dark:text-green-300",
				warning:
					"dark:bg-yellow-500/20 bg-yellow-500/20 dark:border-yellow-700 border-yellow-500 border shadow-sm dark:shadow-sm-dark dark:ring-yellow-500 ring-yellow-300 ring-1 ring-inset dark:[&_h4]:text-yellow-200 [&_h4]:text-yellow-800 text-yellow-700 dark:text-yellow-300",
				message:
					"dark:bg-blue-500/20 bg-blue-500/20 dark:border-blue-700 border-blue-500 border shadow-sm dark:shadow-sm-dark dark:ring-blue-500 ring-blue-300 ring-1 ring-inset dark:[&_h4]:text-blue-200 [&_h4]:text-blue-800 text-blue-700 dark:text-blue-300",
			},
			size: {
				sm: "",
				md: "",
				lg: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

const icons = {
	default: <AlertCircle />,
	success: <CheckCircle />,
	error: <AlertTriangle />,
	warning: <MessageCircle />,
	message: <MessageCircle />,
};

export const iconVariants = cva("text-current mt-[1px] mr-1 relative", {
	variants: {
		variant: {
			default: "",
			error: "",
			success: "",
			warning: "",
			message: "",
		},
		size: {
			sm: "size-4",
			md: "size-5",
			lg: "size-6",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

type AlertProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof alertVariants> & {
		icon?: React.ReactElement<HTMLElement>;
		noIcon?: boolean;
	};

const AlertTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
	return (
		<h4 className={cn("font-semibold text-sm", className)} ref={ref} {...props}>
			{children}
		</h4>
	);
});

const AlertDescription = React.forwardRef<HTMLDivElement, AlertProps>(
	({ children, className, ...props }, ref) => {
		return (
			<div
				className={cn("text-xs font-medium", className)}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		);
	},
);

const AlertFooter = React.forwardRef<HTMLDivElement, AlertProps>(
	({ children, className, ...props }, ref) => {
		if (!children) return null;
		const Component = React.isValidElement(children) ? Slot : "span";

		return (
			<Component
				className={cn("gap-2 flex mt-2", className)}
				ref={ref}
				{...props}
			>
				{children}
			</Component>
		);
	},
);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	(
		{ children, variant, size, className, icon, noIcon = false, ...props },
		ref,
	) => {
		const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
			const Component = React.isValidElement(icon) ? Slot : "span";

			const iconClasses = cn(
				iconVariants({ size, variant }),
				icon?.props?.className,
			);

			return <Component className={iconClasses}>{icon}</Component>;
		};

		const innerContent = (
			<span className="flex w-full">
				{/* if icon is explicitly passed as null then dont render anything */}
				{/* if icon prop is not passed then render the default icon for the variant */}
				{/* if icon is passed render said icon */}
				{noIcon
					? null
					: typeof icon === "undefined"
						? renderIcon(icons[variant as keyof typeof icons])
						: renderIcon(icon)}
				{children && <span className="px-1">{children}</span>}
			</span>
		);

		return (
			<div
				className={cn(alertVariants({ variant }), className)}
				ref={ref}
				{...props}
			>
				{innerContent}
			</div>
		);
	},
);

export { Alert, AlertTitle, AlertDescription, AlertFooter };
