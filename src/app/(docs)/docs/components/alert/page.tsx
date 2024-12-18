"use server";

import ComponentPage from "@/components/common/pages/components/component-page";

export default async function AlertPage() {
	return (
		<ComponentPage
			title="Alert"
			description="Alerts are used to display important information to the user."
			basicUsagePath="/src/components/common/pages/components/example.tsx"
		/>
	);
}
