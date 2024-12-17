import { SidebarNavigation } from "@/components/common/sidebar-navigation";

export default function DocsLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex min-h-[calc(100vh-3rem)]">
			<SidebarNavigation />
			<main className="flex-1 p-6 relative mt-12 ml-64">{children}</main>
		</div>
	);
}
