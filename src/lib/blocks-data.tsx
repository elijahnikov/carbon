type SingleBlock = {
	title: string;
	id: string;
	path: string;
};
type BlockData = Record<string, SingleBlock[]>;

export const blocksData: BlockData = {
	dropdowns: [
		{
			title: "Base",
			id: "base",
			path: "components/common/blocks/dropdowns/base.tsx",
		},
		{
			title: "With Icon",
			id: "with-icon",
			path: "components/common/blocks/dropdowns/with-icon.tsx",
		},
	],
};
