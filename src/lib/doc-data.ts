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
	title?: string;
	description?: string;
	source: string;
}>;

export const componentData: ComponentData = {
	avatar: {
		title: "Avatar",
		description: "Displays an avatar to the user.",
		showcaseFileSource: "components/common/examples/avatar-example.tsx",
		installationSource: "components/ui/avatar.tsx",
		dependencies: ["@radix-ui/react-avatar"],
		apiReference: [],
		examples: [],
	},
	alert: {
		title: "Alert",
		description: "Displays important information to the user.",
		showcaseFileSource: "components/common/examples/alert/showcase-example.tsx",
		basicUsageFileSource:
			"components/common/examples/alert/showcase-example.tsx",
		installationSource: "components/ui/alert.tsx",
		dependencies: ["@radix-ui/react-slot"],
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
				description:
					"The following example shows all variants of the Alert component: `default`, `error`, `success`, `warning`, `message`.",
				source: "components/common/examples/alert/alert-example.tsx",
			},
			{
				title: "Custom icon",
				description:
					"This example shows how to use a custom icon in the Alert component.",
				source: "components/common/examples/alert/custom-icon-example.tsx",
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
