"use client";

import { Slot } from "@radix-ui/react-slot";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../utils/cn";

const tabListVariants = cva("", {
	variants: {
		variant: {
			fill: "gap-2 dark:bg-carbon-dark-300 bg-carbon-400 border dark:border-border border-carbon-500 rounded-xl py-2",
			underlined: "gap-2 border-b dark:border-border border-carbon-600",
			"underlined-fill": "-space-x-px bg-transparent p-0",
			pill: "gap-2",
		},
	},
	defaultVariants: {
		variant: "underlined",
	},
});

const tabVariants = cva(
	"leading-6 data-[state=active]:font-medium text-carbon-900",
	{
		variants: {
			variant: {
				fill: [
					"rounded-lg h-8 bg-transparent text-secondary-foreground hover:text-black dark:hover:text-white",
					"dark:data-[state=active]:bg-carbon-dark-100 data-[state=active]:bg-carbon-200 data-[state=active]:text-black dark:data-[state=active]:text-white",
					"data-[state=active]:ring-1 ring-inset dark:data-[state=active]:ring-carbon-dark-400 data-[state=active]:ring-carbon-100",
				],
				underlined: [
					"-mb-px border-b-2 border-transparent text-secondary-foreground px-3 pb-1.5 pt-2 hover:border-carbon-900 dark:hover:border-carbon-dark-500 hover:text-black dark:hover:text-white focus-visible:-outline-offset-2",
					"data-[state=active]:border-primary data-[state=active]:text-primary dark:data-[state=active]:border-primary",
				],
				"underlined-fill": [
					"h-10 dark:data-[state=active]:bg-carbon-dark-300 text-secondary-foreground data-[state=active]:bg-carbon-100 dark:data-[state=active]:bg-carbon-200 data-[state=active]:text-black dark:data-[state=active]:text-white",
					"relative overflow-hidden rounded-none border border-carbon-500 dark:border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s-xl last:rounded-e-xl data-[state=active]:after:bg-primary",
				],
				pill: [
					"rounded-lg h-8 bg-transparent text-secondary-foreground hover:text-black dark:hover:text-white",
					"dark:data-[state=active]:bg-carbon-dark-100 data-[state=active]:bg-carbon-400 data-[state=active]:text-black dark:data-[state=active]:text-white",
					"data-[state=active]:ring-1 ring-inset dark:data-[state=active]:ring-carbon-dark-400 data-[state=active]:ring-carbon-600",
				],
			},
		},
		defaultVariants: {
			variant: "underlined",
		},
	},
);

export type TabsElement = React.ElementRef<typeof TabsPrimitive.Root>;
export type TabsProps = React.ComponentPropsWithoutRef<
	typeof TabsPrimitive.Root
> &
	VariantProps<typeof tabVariants>;

type TabsContextProps = {
	variant?: TabsProps["variant"];
	orientation?: TabsProps["orientation"];
};

const TabsContext = React.createContext<TabsContextProps | null>(null);

function useTabsContext() {
	const context = React.useContext(TabsContext);

	if (!context) {
		throw new Error(
			"Tabs components must be used within a Tabs or Tabs.Root component",
		);
	}

	return context;
}

const Tabs = React.forwardRef<TabsElement, TabsProps>(
	({ children, className, orientation = "horizontal", ...props }, ref) => (
		<TabsPrimitive.Root
			ref={ref}
			className={cn(
				"antialiased",
				orientation === "vertical" && "flex flex-wrap space-x-6",
				orientation === "horizontal" && "space-y-6",
				className,
			)}
			orientation={orientation}
			{...props}
		>
			<TabsContext.Provider value={{ variant: props.variant }}>
				{children}
			</TabsContext.Provider>
		</TabsPrimitive.Root>
	),
);

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
		stretch?: boolean;
	}
>(({ className, stretch, ...props }, ref) => {
	const { variant, orientation } = useTabsContext();
	return (
		<TabsPrimitive.List
			ref={ref}
			className={cn(
				"inline-flex h-10 items-center justify-center p-1",
				stretch && "w-full grow [&>*]:grow",
				variant === "underlined-fill"
					? orientation === "horizontal"
						? "[&>*:not(:last-child)]:border-b"
						: "[&>*:not(:last-child)]:border-r"
					: "",
				tabListVariants({ variant }),
				className,
			)}
			{...props}
		/>
	);
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
		before?: React.ReactElement<HTMLElement>;
		after?: React.ReactElement<HTMLElement>;
	}
>(({ className, children, before, after, asChild, ...props }, ref) => {
	const { variant } = useTabsContext();

	const renderIcon = (icon: React.ReactElement<HTMLElement>) => {
		const Component = React.isValidElement(icon) ? Slot : "span";

		const iconClasses = cn(
			"text-current m-0 p-0 size-5",
			icon.props?.className,
		);

		return <Component className={iconClasses}>{icon}</Component>;
	};

	const isElementWithChildren = (
		element: React.ReactNode,
	): element is React.ReactElement<{ children?: React.ReactNode }> =>
		React.isValidElement(element) &&
		typeof (element as React.ReactElement<{ children?: React.ReactNode }>).props
			.children !== "undefined";

	const innerContent = asChild ? (
		React.cloneElement(children as React.ReactElement, {
			children: (
				<>
					{before ? renderIcon(before) : null}
					{isElementWithChildren(children) && children?.props?.children}
					{after ? renderIcon(after) : null}
				</>
			),
		})
	) : (
		<>
			{before ? renderIcon(before) : null}
			{children ? <span className="px-1">{children}</span> : null}
			{after ? renderIcon(after) : null}
		</>
	);

	return (
		<TabsPrimitive.Trigger
			ref={ref}
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap gap-1 px-3 py-2 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
				tabVariants({ variant }),
				className,
			)}
			{...props}
		>
			{innerContent}
		</TabsPrimitive.Trigger>
	);
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			className,
		)}
		{...props}
	/>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function TabDemo() {
//   return (
//     <Tabs defaultValue="tab-1">
//       <TabsList className="h-auto -space-x-px bg-background p-0 shadow-sm shadow-black/5 rtl:space-x-reverse">
//         <TabsTrigger
//           value="tab-1"
//           className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
//         >
//           Tab 1
//         </TabsTrigger>
//         <TabsTrigger
//           value="tab-2"
//           className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
//         >
//           Tab 2
//         </TabsTrigger>
//         <TabsTrigger
//           value="tab-3"
//           className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
//         >
//           Tab 3
//         </TabsTrigger>
//       </TabsList>
//       <TabsContent value="tab-1">
//         <p className="p-4 text-center text-xs text-muted-foreground">Content for Tab 1</p>
//       </TabsContent>
//       <TabsContent value="tab-2">
//         <p className="p-4 text-center text-xs text-muted-foreground">Content for Tab 2</p>
//       </TabsContent>
//       <TabsContent value="tab-3">
//         <p className="p-4 text-center text-xs text-muted-foreground">Content for Tab 3</p>
//       </TabsContent>
//     </Tabs>
//   );
// }
