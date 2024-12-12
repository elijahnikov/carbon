import * as React from "react";
import { cn } from "../utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	required?: string;
	disabled?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, disabled = false, ...props }, ref) => {
		return (
			<input
				type={type}
				disabled={disabled}
				className={cn(
					"flex h-9 w-full rounded-lg border-0 dark:border font-medium bg-input shadow-overlay dark:shadow-sm-dark px-3 py-1 text-sm transition-colors placeholder:text-secondary-hover focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
