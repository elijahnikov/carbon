import type { components } from "./constants";

export type ComponentObject = {
	title: string;
	description: string;
	installationSource: string | string[];
	extraInstallationSource?: {
		fileName: string;
		code: string;
	};
	apiSource?: string;
	showcaseFileSource: string;
	basicUsageFileSource?: string;
	dependencies?: string[];
	apiReference?: ApiReference;
	examples?: Examples;
};

export type ComponentData = Record<
	(typeof components)[number],
	ComponentObject
>;

type Props = {
	name: string;
	tooltip?: string;
	type: string;
	default?: string;
	required?: boolean;
};
export type ApiReference = Array<{
	id: string;
	title?: string;
	description?: string;
	radixReference?: string;
	customLabel?: string;
	props?: Props[];
}>;

export type Examples = Array<{
	id: string;
	title: string;
	description?: string;
	source: string;
}>;

export const componentData: ComponentData = {
	accordion: {
		title: "Accordion",
		description: "Displays collapsible content to the user.",
		showcaseFileSource:
			"components/common/examples/accordion/showcase-example.tsx",
		installationSource: "components/ui/accordion.tsx",
		basicUsageFileSource:
			"components/common/examples/accordion/showcase-example.tsx",
		dependencies: ["@radix-ui/react-accordion"],
		apiSource: "https://www.radix-ui.com/docs/primitives/components/accordion",
		extraInstallationSource: {
			fileName: "tailwind.config.ts",
			code: `animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},`,
		},
		apiReference: [
			{
				id: "accordion",
				title: "<Accordion />",
				radixReference:
					"https://www.radix-ui.com/docs/primitives/components/accordion",
				props: [
					{
						name: "iconType",
						type: "'chevron' | 'plus'",
						default: "chevron",
					},
					{
						name: "iconPosition",
						type: "'left' | 'right'",
						default: "right",
					},
					{
						name: "variant",
						type: "'line' | 'table-fill' | 'table' | 'full-border'",
						default: "line",
					},
					{
						name: "type",
						type: "'single' | 'multiple'",
						default: "single",
					},
					{
						name: "collapsible",
						type: "boolean",
						default: "false",
					},
				],
			},
			{
				id: "accordion-item",
				title: "<AccordionItem />",
				radixReference:
					"https://www.radix-ui.com/docs/primitives/components/accordion#accordionitem",
			},
			{
				id: "accordion-trigger",
				title: "<AccordionTrigger />",
				radixReference:
					"https://www.radix-ui.com/docs/primitives/components/accordion#accordiontrigger",
				props: [
					{
						name: "icon",
						type: "React.ReactElement<HTMLElement>",
						default: undefined,
					},
				],
			},
			{
				id: "accordion-content",
				title: "<AccordionContent />",
				radixReference:
					"https://www.radix-ui.com/docs/primitives/components/accordion#accordioncontent",
			},
		],
		examples: [
			{
				id: "variants",
				title: "Variants",
				description:
					"The following example shows all variants of the Accordion component.",
				source: "components/common/examples/accordion/variants-example.tsx",
			},
			{
				id: "icon",
				title: "Icon",
				description:
					"The following example shows how to use a custom icon on for the AccordionTrigger.",
				source: "components/common/examples/accordion/icon-example.tsx",
			},
			{
				id: "trigger-icon",
				title: "Trigger Icon",
				description:
					"The following example shows how to change the icon position in the trigger, and how to choose between a `Plus` or `Chevron` icon.",
				source: "components/common/examples/accordion/trigger-icon-example.tsx",
			},
		],
	},
	avatar: {
		title: "Avatar",
		description: "Displays an avatar to the user.",
		showcaseFileSource:
			"components/common/examples/avatar/showcase-example.tsx",
		installationSource: "components/ui/avatar.tsx",
		basicUsageFileSource:
			"components/common/examples/avatar/showcase-example.tsx",
		dependencies: ["@radix-ui/react-avatar"],
		apiReference: [],
		examples: [],
	},
	"avatar-group": {
		title: "Avatar Group",
		description: "Displays a group of avatars to the user.",
		showcaseFileSource:
			"components/common/examples/avatar-group/showcase-example.tsx",
		installationSource: [
			"components/ui/avatar.tsx",
			"components/ui/avatar-group.tsx",
		],
		basicUsageFileSource:
			"components/common/examples/avatar-group/showcase-example.tsx",
		dependencies: ["@radix-ui/react-avatar"],
		apiReference: [
			{
				id: "avatar-group",
				title: "<AvatarGroup />",
				props: [
					{
						name: "size",
						type: "'sm' | 'md' | 'lg'",
						default: "md",
					},
				],
			},
		],
		examples: [],
	},
	// ALERT
	alert: {
		title: "Alert",
		description: "Displays important information to the user.",
		showcaseFileSource: "components/common/examples/alert/showcase-example.tsx",
		basicUsageFileSource:
			"components/common/examples/alert/showcase-example.tsx",
		installationSource: "components/ui/alert.tsx",
		apiReference: [
			{
				id: "alert",
				title: "<Alert	/>",
				props: [
					{
						name: "variant",
						type: "'default' | 'error' | 'success' | 'warning' | 'message'",
						default: "default",
					},
					{
						name: "size",
						type: "'sm' | 'md' | 'lg'",
						default: "md",
					},
					{
						name: "icon",
						type: "React.ReactElement<HTMLElement>",
						default: undefined,
					},
					{
						name: "noIcon",
						type: "boolean",
						default: "false | undefined",
					},
				],
			},
		],
		examples: [
			{
				id: "variants",
				title: "Variants",
				description:
					"The following example shows all variants of the Alert component: `default`, `error`, `success`, `warning`, `message`.",
				source: "components/common/examples/alert/alert-example.tsx",
			},
			{
				id: "custom-icon",
				title: "Custom icon",
				description:
					"This example shows how to use a custom icon in the Alert component.",
				source: "components/common/examples/alert/custom-icon-example.tsx",
			},
		],
	},
	// BADGE
	badge: {
		title: "Badge",
		description: "Displays a badge to the user.",
		showcaseFileSource: "components/common/examples/badge/showcase-example.tsx",
		installationSource: "components/ui/badge.tsx",
		basicUsageFileSource:
			"components/common/examples/badge/showcase-example.tsx",
		apiReference: [
			{
				id: "badge",
				title: "<Badge />",
				props: [
					{
						name: "variant",
						type: "'primary' | 'green' | 'yellow' | 'red' | 'purple' | 'blue' | 'indigo' | 'orange' | 'pink' | 'teal'",
						default: "primary",
					},
					{
						name: "size",
						type: "'sm' | 'md' | 'lg'",
						default: "md",
					},
					{
						name: "shape",
						type: "'rounded' | 'pill'",
						default: "rounded",
					},
					{
						name: "stroke",
						type: "boolean",
						default: "true",
					},
					{
						name: "before",
						type: "React.ReactElement<HTMLElement>",
						default: undefined,
					},
					{
						name: "after",
						type: "React.ReactElement<HTMLElement>",
						default: undefined,
					},
				],
			},
		],
		examples: [
			{
				id: "colors",
				title: "Colors",
				description:
					"The following example shows all color variants of the Badge component: `primary` `blue` `green` `red` `yellow` `purple` `indigo` `orange` `pink` `teal`.",
				source: "components/common/examples/badge/color-example.tsx",
			},
			{
				id: "icons",
				title: "Icons",
				description:
					"The following example shows how to use an icon on the left or right side of the badge.",
				source: "components/common/examples/badge/icon-example.tsx",
			},
		],
	},
	button: {
		title: "Button",
		description: "Displays a button to the user.",
		showcaseFileSource:
			"components/common/examples/button/showcase-example.tsx",
		installationSource: "components/ui/button.tsx",
		basicUsageFileSource:
			"components/common/examples/button/showcase-example.tsx",
		apiReference: [
			{
				id: "button",
				title: "<Button />",
				props: [
					{
						name: "variant",
						type: "'primary' | 'destructive' | 'black' | 'secondary' | 'outline' | 'transparent' | 'link'",
						default: "primary",
					},
					{
						name: "size",
						type: "'xs' | 'sm' | 'md' | 'lg'",
						default: "sm",
					},
					{
						name: "shape",
						type: "'rounded' | 'square' | 'pill'",
						default: "rounded",
					},
					{
						name: "isIconOnly",
						type: "boolean",
						default: "false",
					},
					{
						name: "before",
						type: "React.ReactElement<HTMLElement>",
						default: undefined,
					},
					{
						name: "after",
						type: "React.ReactElement<HTMLElement>",
						default: undefined,
					},
					{
						name: "asChild",
						type: "boolean",
						default: "false",
					},
				],
			},
		],
		examples: [
			{
				id: "variants",
				title: "Variants",
				description:
					"The following example shows all variants of the Button component: `primary` `destructive` `black` `secondary` `outline` `transparent` `link`.",
				source: "components/common/examples/button/variant-example.tsx",
			},
			{
				id: "icons",
				title: "Icons",
				description:
					"The following example shows how to use an icon on the left or right side of the button using the `before` `after` and `isIconOnly` props.",
				source: "components/common/examples/button/icon-example.tsx",
			},
			{
				id: "disabled",
				title: "Disabled",
				description:
					"The following example shows how to use the `disabled` prop on the button.",
				source: "components/common/examples/button/disabled-example.tsx",
			},
		],
	},
	"button-group": {
		title: "Button Group",
		description: "Displays a group of buttons to the user.",
		showcaseFileSource:
			"components/common/examples/button-group/showcase-example.tsx",
		installationSource: [
			"components/ui/popover.tsx",
			"components/ui/button-group.tsx",
		],
		basicUsageFileSource:
			"components/common/examples/button-group/showcase-example.tsx",
		apiReference: [
			{
				id: "button-group",
				title: "<ButtonGroup />",
				props: [
					{
						name: "orientation",
						type: "'horizontal' | 'vertical'",
						default: "horizontal",
					},
					{
						name: "size",
						type: "'sm' | 'md' | 'lg'",
						default: "md",
					},
					{
						name: "disabled",
						type: "boolean",
						default: "false",
					},
				],
			},
			{
				id: "button-group-item",
				title: "<ButtonGroupItem />",
				props: [
					{
						name: "variant",
						type: "'primary' | 'destructive' | 'black' | 'secondary' | 'outline' | 'transparent' | 'link'",
						default: "primary",
					},
					{
						name: "isIconOnly",
						type: "boolean",
						default: "false",
					},
					{
						name: "before",
						type: "React.ReactElement<HTMLElement>",
						default: undefined,
					},
					{
						name: "after",
						type: "React.ReactElement<HTMLElement>",
						default: undefined,
					},
					{
						name: "asChild",
						type: "boolean",
						default: "false",
					},
				],
			},
		],
		examples: [
			{
				id: "variants",
				title: "Variants",
				description:
					"The following example shows all variants of the Button Group component: `primary` `secondary` `destructive`.",
				source: "components/common/examples/button-group/variant-example.tsx",
			},
			{
				id: "icons",
				title: "Icons",
				description:
					"The following example shows how to use an icon on the left or right side of the button using the `before` `after` and `isIconOnly` props.",
				source: "components/common/examples/button-group/icon-example.tsx",
			},
			{
				id: "orientation",
				title: "Orientation",
				description:
					"The following example shows how to use the `orientation` prop on the Button Group component.",
				source:
					"components/common/examples/button-group/orientation-example.tsx",
			},
			{
				id: "size",
				title: "Size",
				description:
					"The following example shows how to use the `size` prop on the Button Group component.",
				source: "components/common/examples/button-group/size-example.tsx",
			},
		],
	},
	card: {
		title: "Card",
		description: "Displays a card with content inside.",
		showcaseFileSource: "components/common/examples/card/showcase-example.tsx",
		installationSource: "components/ui/card.tsx",
		basicUsageFileSource: "components/common/examples/card/basic-example.tsx",
		apiReference: [],
		examples: [],
	},
	checkbox: {
		title: "Checkbox",
		description: "Displays a checkbox to the user.",
		showcaseFileSource:
			"components/common/examples/checkbox/showcase-example.tsx",
		installationSource: "components/ui/checkbox.tsx",
		basicUsageFileSource:
			"components/common/examples/checkbox/basic-example.tsx",
		apiReference: [
			{
				id: "checkbox",
				title: "<Checkbox />",
				props: [
					{
						name: "color",
						type: "'primary' | 'green' | 'red' | 'yellow' | 'teal' | 'orange' | 'purple' | 'gray'",
						default: "primary",
					},
					{
						name: "size",
						type: "'sm' | 'md' | 'lg'",
						default: "md",
					},
				],
			},
		],
		examples: [
			{
				id: "size",
				title: "Size",
				description:
					"The following example shows how to use the `size` prop on the Checkbox component.",
				source: "components/common/examples/checkbox/size-example.tsx",
			},
			{
				id: "colors",
				title: "Colors",
				description:
					"The following example shows how to use the `color` prop on the Checkbox component.",
				source: "components/common/examples/checkbox/color-example.tsx",
			},
		],
	},
	dialog: {
		title: "Dialog",
		description: "Displays a dialog popup to the user.",
		showcaseFileSource:
			"components/common/examples/dialog/showcase-example.tsx",
		apiSource: "https://www.radix-ui.com/primitives/docs/components/dialog",
		basicUsageFileSource: "components/common/examples/dialog/basic-example.tsx",
		installationSource: "components/ui/dialog.tsx",
		dependencies: ["@radix-ui/react-dialog"],
		apiReference: [
			{
				id: "dialog",
				title: "<Dialog />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dialog#root",
			},
			{
				id: "dialog-trigger",
				title: "<DialogTrigger />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dialog#trigger",
			},
			{
				id: "dialog-content",
				title: "<DialogContent />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dialog#content",
			},
			{
				id: "dialog-close",
				title: "<DialogClose />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dialog#close",
			},
			{
				id: "dialog-title",
				title: "<DialogTitle />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dialog#title",
			},
			{
				id: "dialog-description",
				title: "<DialogDescription />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dialog#description",
			},
		],
		examples: [],
	},
	"dropdown-menu": {
		title: "Dropdown Menu",
		description: "Displays a menu of options to the user.",
		showcaseFileSource:
			"components/common/examples/dropdown-menu/showcase-example.tsx",
		basicUsageFileSource:
			"components/common/examples/dropdown-menu/basic-example.tsx",
		installationSource: "components/ui/dropdown-menu.tsx",
		apiSource:
			"https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
		dependencies: ["@radix-ui/react-dropdown-menu"],
		apiReference: [
			{
				id: "dropdown-menu",
				title: "<DropdownMenu />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#root",
			},
			{
				id: "dropdown-menu-trigger",
				title: "<DropdownMenuTrigger />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger",
			},
			{
				id: "dropdown-menu-content",
				title: "<DropdownMenuContent />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content",
			},
			{
				id: "dropdown-menu-item",
				title: "<DropdownMenuItem />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item",
			},
			{
				id: "dropdown-menu-group",
				title: "<DropdownMenuGroup />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#group",
			},
			{
				id: "dropdown-menu-label",
				title: "<DropdownMenuLabel />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#label",
			},
			{
				id: "dropdown-menu-shortcut",
				title: "<DropdownMenuShortcut />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#shortcut",
			},
			{
				id: "dropdown-menu-sub",
				title: "<DropdownMenuSub />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#sub",
			},
			{
				id: "dropdown-menu-sub-trigger",
				title: "<DropdownMenuSubTrigger />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subtrigger",
			},
			{
				id: "dropdown-menu-sub-content",
				title: "<DropdownMenuSubContent />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent",
			},
			{
				id: "dropdown-menu-portal",
				title: "<DropdownMenuPortal />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#portal",
			},
			{
				id: "dropdown-menu-separator",
				title: "<DropdownMenuSeparator />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator",
			},
			{
				id: "dropdown-menu-radio-group",
				title: "<DropdownMenuRadioGroup />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radiogroup",
			},
			{
				id: "dropdown-menu-radio-item",
				title: "<DropdownMenuRadioItem />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radioitem",
			},
			{
				id: "dropdown-menu-checkbox-item",
				title: "<DropdownMenuCheckboxItem />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/dropdown-menu#checkboxitem",
			},
		],
		examples: [
			{
				id: "checkbox",
				title: "Checkbox",
				description:
					"The following example shows how to render a checkbox item in the Dropdown Menu component.",
				source: "components/common/examples/dropdown-menu/checkbox-example.tsx",
			},
			{
				id: "radio",
				title: "Radio",
				description:
					"The following example shows how to render a radio item in the Dropdown Menu component.",
				source: "components/common/examples/dropdown-menu/radio-example.tsx",
			},
			{
				id: "disabled",
				title: "Disabled",
				description:
					"The following example shows how to render a disabled item in the Dropdown Menu component.",
				source: "components/common/examples/dropdown-menu/disabled-example.tsx",
			},
			{
				id: "shortcut",
				title: "Shortcut",
				description:
					"The following example shows how to render a shortcut key for a Dropdown Menu Item.",
				source: "components/common/examples/dropdown-menu/shortcut-example.tsx",
			},
			{
				id: "icon",
				title: "Icon",
				description:
					"The following example shows how to render an icon in a Dropdown Menu Item.",
				source: "components/common/examples/dropdown-menu/icon-example.tsx",
			},
		],
	},
	input: {
		title: "Input",
		description: "Displays an input to the user.",
		showcaseFileSource: "components/common/examples/input/showcase-example.tsx",
		installationSource: "components/ui/input.tsx",
		dependencies: ["@radix-ui/react-tooltip", "@radix-ui/react-label"],
		basicUsageFileSource:
			"components/common/examples/input/showcase-example.tsx",
		apiReference: [
			{
				id: "input",
				title: "<Input />",
				props: [
					{
						name: "label",
						type: "string",
						default: "undefined",
					},
					{
						name: "required",
						type: "boolean",
						default: "false",
					},
					{
						name: "disabled",
						type: "boolean",
						default: "false",
					},
					{
						name: "tooltip",
						type: "React.ReactNode",
						default: "undefined",
					},
				],
			},
		],
		examples: [
			{
				id: "label",
				title: "Label",
				description:
					"The following example shows how to use the `label` prop on the Input component to show more information about the input.",
				source: "components/common/examples/input/label-example.tsx",
			},
			{
				id: "required",
				title: "Required",
				description:
					"The following example shows how to use the `required` prop on the Input component to show a required indicator.",
				source: "components/common/examples/input/required-example.tsx",
			},
			{
				id: "tooltip",
				title: "Tooltip",
				description:
					"The following example shows how to use the `tooltip` prop on the Input component to show a tooltip. The tooltip prop must be used in tandem with the `label` prop.",
				source: "components/common/examples/input/tooltip-example.tsx",
			},
			{
				id: "disabled",
				title: "Disabled",
				description:
					"The following example shows how to use the `disabled` prop on the Input component to disable the input.",
				source: "components/common/examples/input/disabled-example.tsx",
			},
		],
	},
	label: {
		title: "Label",
		description: "Displays a label to the user.",
		showcaseFileSource: "components/common/examples/label/showcase-example.tsx",
		installationSource: "components/ui/label.tsx",
		basicUsageFileSource:
			"components/common/examples/label/showcase-example.tsx",
		apiReference: [
			{
				id: "label",
				title: "<Label />",
				props: [
					{
						name: "required",
						type: "boolean",
						default: "false",
					},
					{
						name: "tooltip",
						type: "React.ReactNode",
						default: "undefined",
					},
					{
						name: "disabled",
						type: "boolean",
						default: "false",
					},
				],
			},
		],
		examples: [
			{
				id: "required",
				title: "Required",
				description:
					"The following example shows how to use the `required` prop on the Label component to show a required indicator.",
				source: "components/common/examples/label/required-example.tsx",
			},
			{
				id: "tooltip",
				title: "Tooltip",
				description:
					"The following example shows how to use the `tooltip` prop on the Label component to show a tooltip.",
				source: "components/common/examples/label/tooltip-example.tsx",
			},
			{
				id: "disabled",
				title: "Disabled",
				description:
					"The following example shows how to use the `disabled` prop on the Label component to disable the label.",
				source: "components/common/examples/label/disabled-example.tsx",
			},
		],
	},
	popover: {
		title: "Popover",
		description: "Displays a popover to the user.",
		showcaseFileSource:
			"components/common/examples/popover/showcase-example.tsx",
		installationSource: "components/ui/popover.tsx",
		basicUsageFileSource:
			"components/common/examples/popover/basic-example.tsx",
		dependencies: ["@radix-ui/react-popover"],
		apiSource: "https://www.radix-ui.com/primitives/docs/components/popover",
		apiReference: [
			{
				id: "popover",
				title: "<Popover />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/popover#root",
			},
			{
				id: "popover-trigger",
				title: "<PopoverTrigger />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/popover#trigger",
			},
			{
				id: "popover-content",
				title: "<PopoverContent />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/popover#content",
			},
		],
	},
	select: {
		title: "Select",
		description: "Displays a select input to the user.",
		showcaseFileSource:
			"components/common/examples/select/showcase-example.tsx",
		installationSource: "components/ui/select.tsx",
		basicUsageFileSource:
			"components/common/examples/select/showcase-example.tsx",
		dependencies: ["@radix-ui/react-select"],
		apiSource: "https://www.radix-ui.com/primitives/docs/components/select",
		apiReference: [
			{
				id: "select",
				title: "<Select />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/select#root",
			},
			{
				id: "select-trigger",
				title: "<SelectTrigger />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/select#trigger",
			},
			{
				id: "select-content",
				title: "<SelectContent />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/select#content",
			},
			{
				id: "select-item",
				title: "<SelectItem />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/select#item",
			},
		],
	},
	skeleton: {
		title: "Skeleton",
		description:
			"Displays a skeleton to the user, indicating that content is loading.",
		showcaseFileSource:
			"components/common/examples/skeleton/showcase-example.tsx",
		extraInstallationSource: {
			code: `animation: {
				shimmer: "shimmer 1.5s infinite",
			},
			keyframes: {
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
			},`,
			fileName: "tailwind.config.ts",
		},
		installationSource: "components/ui/skeleton.tsx",
		basicUsageFileSource:
			"components/common/examples/skeleton/showcase-example.tsx",
	},
	slider: {
		title: "Slider",
		description: "Displays a slider to the user.",
		showcaseFileSource:
			"components/common/examples/slider/showcase-example.tsx",
		installationSource: "components/ui/slider.tsx",
		dependencies: ["@radix-ui/react-slider"],
		basicUsageFileSource: "components/common/examples/slider/basic-example.tsx",
		apiReference: [
			{
				id: "slider",
				title: "<Slider />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/slider#root",
			},
		],
	},
	spinner: {
		title: "Spinner",
		description: "Displays a spinner to the user, indicating loading state.",
		showcaseFileSource:
			"components/common/examples/spinner/showcase-example.tsx",
		installationSource: "components/ui/spinner.tsx",
		basicUsageFileSource:
			"components/common/examples/spinner/showcase-example.tsx",
		examples: [
			{
				id: "size",
				title: "Size",
				description:
					"The following example shows how to use the `size` prop on the Spinner component.",
				source: "components/common/examples/spinner/size-example.tsx",
			},
		],
	},
	switch: {
		title: "Switch",
		description: "Displays a switch to the user.",
		showcaseFileSource:
			"components/common/examples/switch/showcase-example.tsx",
		installationSource: "components/ui/switch.tsx",
		dependencies: ["@radix-ui/react-switch"],
		basicUsageFileSource: "components/common/examples/switch/basic-example.tsx",
		apiReference: [
			{
				id: "switch",
				title: "<Switch />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/switch#root",
			},
		],
	},
	tabs: {
		title: "Tabs",
		description:
			"Displays a set of sections to the user, displaying one at a time.",
		showcaseFileSource: "components/common/examples/tabs/showcase-example.tsx",
		installationSource: "components/ui/tabs.tsx",
		dependencies: ["@radix-ui/react-tabs"],
		basicUsageFileSource: "components/common/examples/tabs/basic-example.tsx",
		apiReference: [
			{
				id: "tabs",
				title: "<Tabs />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/tabs#root",
				props: [
					{
						name: "variant",
						type: "fill | underlined | underlined-fill | pill",
						default: "underlined",
					},
					{
						name: "orientation",
						type: "horizontal | vertical",
						default: "horizontal",
					},
				],
			},
			{
				id: "tabs-list",
				title: "<TabsList />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/tabs#list",
				props: [
					{
						name: "stretch",
						type: "boolean",
						default: "false",
					},
				],
			},
			{
				id: "tabs-trigger",
				title: "<TabsTrigger />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/tabs#trigger",
			},
			{
				id: "tabs-content",
				title: "<TabsContent />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/tabs#content",
			},
		],
		examples: [
			{
				id: "variant",
				title: "Variant",
				description:
					"The following example shows how to use the `variant` prop on the Tabs component to change the appearance of the tabs.",
				source: "components/common/examples/tabs/variant-example.tsx",
			},
			{
				id: "orientation",
				title: "Orientation",
				description:
					"The following example shows how to use the `orientation` prop on the Tabs component to change the orientation of the tabs.",
				source: "components/common/examples/tabs/orientation-example.tsx",
			},
		],
	},
	textarea: {
		title: "Textarea",
		description: "Displays a textarea to the user.",
		showcaseFileSource:
			"components/common/examples/textarea/showcase-example.tsx",
		installationSource: "components/ui/textarea.tsx",
		basicUsageFileSource:
			"components/common/examples/textarea/showcase-example.tsx",
		apiReference: [
			{
				id: "textarea",
				title: "<Textarea />",
				props: [
					{
						name: "label",
						type: "string",
						default: "undefined",
					},
					{
						name: "required",
						type: "boolean",
						default: "false",
					},
					{
						name: "tooltip",
						type: "React.ReactNode",
						default: "undefined",
					},
					{
						name: "disabled",
						type: "boolean",
						default: "false",
					},
				],
			},
		],
		examples: [
			{
				id: "label",
				title: "Label",
				description:
					"The following example shows how to use the `label` prop on the Textarea component to display a label.",
				source: "components/common/examples/textarea/label-example.tsx",
			},
			{
				id: "required",
				title: "Required",
				description:
					"The following example shows how to use the `required` prop on the Textarea component to show a required indicator.",
				source: "components/common/examples/textarea/required-example.tsx",
			},
			{
				id: "tooltip",
				title: "Tooltip",
				description:
					"The following example shows how to use the `tooltip` prop on the Textarea component to show a tooltip. The tooltip prop must be used in tandem with the `label` prop.",
				source: "components/common/examples/textarea/tooltip-example.tsx",
			},
			{
				id: "disabled",
				title: "Disabled",
				description:
					"The following example shows how to use the `disabled` prop on the Textarea component to disable the textarea.",
				source: "components/common/examples/textarea/disabled-example.tsx",
			},
		],
	},
	toast: {
		title: "Toast",
		description: "Displays a toast to the user using the sonner library.",
		showcaseFileSource: "components/common/examples/toast/showcase-example.tsx",
		basicUsageFileSource:
			"components/common/examples/toast/showcase-example.tsx",
		dependencies: ["sonner"],
		installationSource: "components/ui/sonner.tsx",
		apiSource: "https://sonner.emilkowal.ski/docs/api/toast",
		extraInstallationSource: {
			code: `export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
				<html suppressHydrationWarning lang="en">
					<body className="min-h-screen bg-background antialiased">
						{children}
						<Toaster position="bottom-center" />
					</body>
				</html>
	);
}
`,
			fileName: "app/layout.tsx",
		},
		apiReference: [
			{
				id: "toast",
				title: "<Toast />",
				customLabel: "Extends Sonner's ",
				radixReference: "https://sonner.emilkowal.ski/docs/api/toast",
			},
		],
		examples: [
			{
				id: "action",
				title: "Action",
				description:
					"The following example shows how to use the `action` prop on the Toast component to add an action to the toast.",
				source: "components/common/examples/toast/action-example.tsx",
			},
			{
				id: "variants",
				title: "Variants",
				description:
					"The following example shows how to use the `toast` function to display different types of toasts.",
				source: "components/common/examples/toast/variants-example.tsx",
			},
		],
	},
	tooltip: {
		title: "Tooltip",
		description: "Displays a tooltip to the user.",
		showcaseFileSource:
			"components/common/examples/tooltip/showcase-example.tsx",
		installationSource: "components/ui/tooltip.tsx",
		basicUsageFileSource:
			"components/common/examples/tooltip/showcase-example.tsx",
		dependencies: ["@radix-ui/react-tooltip"],
		apiSource: "https://www.radix-ui.com/primitives/docs/components/tooltip",
		apiReference: [
			{
				id: "tooltip-provider",
				title: "<TooltipProvider />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/tooltip#provider",
			},
			{
				id: "tooltip",
				title: "<Tooltip />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/tooltip#root",
				props: [
					{
						name: "delayDuration",
						type: "number",
						default: "200",
					},
				],
			},
			{
				id: "tooltip-trigger",
				title: "<TooltipTrigger />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/tooltip#trigger",
			},
			{
				id: "tooltip-content",
				title: "<TooltipContent />",
				radixReference:
					"https://www.radix-ui.com/primitives/docs/components/tooltip#content",
				props: [
					{
						name: "side",
						type: "bottom | left | right | top",
						default: "top",
					},
					{
						name: "sideOffset",
						type: "number",
						default: "8",
					},
				],
			},
		],
	},
};
