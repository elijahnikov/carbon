import type { components } from "./constants";

export type ComponentObject = {
	title: string;
	description: string;
	installationSource: string;
	radixSource?: string;
	showcaseFileSource: string;
	basicUsageFileSource?: string;
	dependencies?: string[];
	apiReference?: ApiReference;
	examples: Examples;
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
	props?: Props[];
}>;

export type Examples = Array<{
	id: string;
	title: string;
	description?: string;
	source: string;
}>;

export const componentData: ComponentData = {
	// AVATAR
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
		installationSource: "components/ui/button-group.tsx",
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
		radixSource: "https://www.radix-ui.com/primitives/docs/components/dialog",
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
		radixSource:
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
};
