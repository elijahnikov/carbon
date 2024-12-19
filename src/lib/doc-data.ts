import type { components } from "@/components/common/sidebar-navigation";

type ComponentData = Record<
	(typeof components)[number],
	{
		title: string;
		description: string;
		installationSource: string;
		radixSource?: string;
		showcaseFileSource: string;
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
	alert: {
		title: "Alert",
		description: "Displays important information to the user.",
		showcaseFileSource: "components/common/examples/alert-example.tsx",
		installationSource: "components/ui/alert.tsx",
		apiReference: [],
		examples: [],
	},
	"dropdown-menu": {
		title: "Dropdown Menu",
		description: "Displays a menu of options to the user.",
		showcaseFileSource: "components/common/examples/dropdown-menu-example.tsx",
		installationSource: "components/ui/dropdown-menu.tsx",
		radixSource:
			"https://www.radix-ui.com/primitives/docs/components/dropdown-menu",
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
