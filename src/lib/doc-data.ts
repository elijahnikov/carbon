import type { components } from "./constants";

type ComponentData = Record<
	(typeof components)[number],
	{
		title: string;
		description: string;
		installationSource: string;
		radixSource?: string;
		showcaseFileSource: string;
		basicUsageFileSource?: string;
		dependencies?: string[];
		apiReference: ApiReference;
		examples: Examples;
	}
>;

type ApiReference = Array<{
	name: string;
	type: string;
	default?: string;
	description: string;
	required?: boolean;
}>;

type Examples = Array<{
	title: string;
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
		apiReference: [],
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
