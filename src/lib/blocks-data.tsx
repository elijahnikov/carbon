type SingleBlock = string[];
type BlockData = Record<string, SingleBlock>;

export const blocksData: BlockData = {
	dropdowns: [
		"components/common/blocks/dropdowns/base.tsx",
		"components/common/blocks/dropdowns/with-icons.tsx",
		"components/common/blocks/dropdowns/grouped-items.tsx",
		"components/common/blocks/dropdowns/checkbox-items.tsx",
		"components/common/blocks/dropdowns/radio-items.tsx",
		"components/common/blocks/dropdowns/full-feature-set.tsx",
		"components/common/blocks/dropdowns/user-menu.tsx",
		"components/common/blocks/dropdowns/user-menu-with-avatar.tsx",
		"components/common/blocks/dropdowns/avatar-menu.tsx",
		"components/common/blocks/dropdowns/theme.tsx",
		"components/common/blocks/dropdowns/add.tsx",
	],
	dialogs: [
		"components/common/blocks/dialogs/base.tsx",
		"components/common/blocks/dialogs/login.tsx",
		"components/common/blocks/dialogs/signup.tsx",
		"components/common/blocks/dialogs/scrollable-sticky-header-and-footer.tsx",
		"components/common/blocks/dialogs/delete-project.tsx",
		"components/common/blocks/dialogs/checkout.tsx",
		"components/common/blocks/dialogs/feedback.tsx",
	],
};
