import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../utils/cn";

const buttonVariants = cva(
	"rounded-lg select-none font-medium animate transition-colors focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 duration-100 inline-flex items-center justify-center whitespace-nowrap",
	{
		variants: {
			variant: {
				primary:
					"bg-blue-500 active:bg-blue-500/80 hover:bg-blue-500/90 ring-1 dark:ring-blue-600 ring-blue-400 border-blue-300 border-b dark:border-blue-400 outline-blue-600 text-white",
				destructive:
					"bg-red-500 active:bg-red-500/80 hover:bg-red-500/90 ring-1 dark:ring-red-600 ring-red-400 border-red-300 border-b dark:border-red-400 outline-red-600 text-white",
				secondary:
					"dark:bg-neutral-800 dark:hover:bg-neutral-700/80 dark:active:bg-neutral-700 dark:text-neutral-200 bg-neutral-300 hover:bg-neutral-300/80 active:bg-neutral-300/60 text-neutral-700",
				outline:
					"border dark:border-carbon-dark-500 border-carbon-dark-500/20 dark:hover:bg-neutral-700/80 dark:active:bg-neutral-700 dark:text-neutral-200 bg-transparent hover:bg-neutral-300/80 active:bg-neutral-300/60 text-neutral-700",
				transparent:
					"bg-transparent dark:hover:bg-neutral-700/80 hover:bg-neutral-300/80 dark:active:bg-neutral-700 active:bg-neutral-300/60 dark:text-neutral-200 text-neutral-700",
				link: "p-0 hover:underline hover:text-blue-500 underline-offset-4",
			},
			size: {
				sm: "text-md px-3 py-2 leading-4",
				md: "text-md px-6 py-2 leading-5",
				lg: "text-lg leading-6 px-6 py-3",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
		},
	},
);

export const iconVariants = cva("text-current m-0 p-0", {
	variants: {
		variant: {
			primary: "",
			secondary: "",
			outline: "",
			destructive: "",
			transparent: "",
			link: "",
		},
		size: {
			sm: "size-4",
			md: "size-5",
			lg: "size-6",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "sm",
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	isIconOnly?: boolean;
	before?: React.ReactElement<HTMLElement>;
	after?: React.ReactElement<HTMLElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = "primary",
			size = "sm",
			before,
			after,
			isIconOnly = false,
			asChild = false,
			children,
			...props
		},
		ref,
	) => {
		const useAsChild = asChild && React.isValidElement(children);
		const Component = useAsChild ? Slot : "button";

		const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
			const Component = React.isValidElement(icon) ? Slot : "span";

			const iconClasses = cn(
				iconVariants({ size, variant }),
				icon.props?.className,
			);

			return <Component className={iconClasses}>{icon}</Component>;
		};

		const innerContent = useAsChild ? (
			React.cloneElement(children as React.ReactElement, {
				children: (
					<>
						{before ? renderIcon(before) : null}
						{isIconOnly &&
							renderIcon(
								children.props.children as React.ReactElement<HTMLElement>,
							)}
						{!isIconOnly && children.props.children}
						{after ? renderIcon(after) : null}
					</>
				),
			})
		) : (
			<span className="inline-flex items-center">
				{before ? renderIcon(before) : null}
				{React.isValidElement(children) &&
					isIconOnly &&
					renderIcon(children as React.ReactElement<HTMLElement>)}
				{children && !isIconOnly && <span className="px-1">{children}</span>}
				{after ? renderIcon(after) : null}
			</span>
		);

		return (
			<Component
				className={cn(
					buttonVariants({ variant, size }),
					variant === "link" && children && "focus-visible:outline-0",
					className,
				)}
				ref={ref}
				{...props}
			>
				{innerContent}
			</Component>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
