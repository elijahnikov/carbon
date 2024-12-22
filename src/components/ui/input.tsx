import * as React from "react";
import { cn } from "../utils/cn";
import { Label } from "./label";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	required?: boolean;
	tooltip?: React.ReactNode;
	disabled?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, type, disabled = false, label, required, tooltip, ...props },
		ref,
	) => {
		return (
			<div className={cn("flex flex-col", label ? "gap-2" : "gap-0")}>
				{label && (
					<Label tooltip={tooltip} required={required} disabled={disabled}>
						{label}
					</Label>
				)}
				{!label && required && <span className="text-red-500">*</span>}
				<input
					type={type}
					disabled={disabled}
					className={cn(
						"flex h-9 w-full rounded-lg border-0 dark:border font-medium bg-input shadow-overlay dark:shadow-sm-dark px-3 py-1 text-sm transition-colors placeholder:text-secondary-foreground/50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					ref={ref}
					{...props}
				/>
			</div>
		);
	},
);
Input.displayName = "Input";

export { Input };
