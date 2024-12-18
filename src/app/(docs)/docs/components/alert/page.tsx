"use server";

import ComponentPage from "@/components/common/component-docs/component-page";

const getExampleFilePath = (componentName: string) => {
	return `src/components/common/examples/${componentName}-example.tsx`;
};

const getSourceUrl = (componentName: string) => {
	return `src/components/common/pages/components/${componentName}.tsx`;
};

export default async function AlertPage() {
	return (
		<ComponentPage
			title="Alert"
			sourceUrl="/src/components/common/pages/components/example.tsx"
			description="Displays important information to the user."
			basicUsagePath={getExampleFilePath("alert")}
		/>
	);
}
