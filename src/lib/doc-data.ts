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
	props: Props[];
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
		apiReference: [],
		examples: [],
	},
	dialog: {
		title: "Dialog",
		description: "Displays a dialog to the user.",
		showcaseFileSource: "components/common/examples/dialog-example.tsx",
		installationSource: "components/ui/dialog.tsx",
		dependencies: ["@radix-ui/react-dialog"],
		apiReference: [],
		examples: [],
	},
};
