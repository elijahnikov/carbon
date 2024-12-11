import * as React from "react";
import { cn } from "../utils/cn";

export type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label?: string;
	required?: string;
	disabled?: boolean;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
	({ className, disabled = false, ...props }, ref) => {
		return (
			<textarea
				disabled={disabled}
				className={cn(
					"flex h-16 w-full rounded-lg border-0 dark:border font-medium bg-input shadow-overlay dark:shadow-sm-dark px-3 py-1 text-sm transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

export { Textarea };
