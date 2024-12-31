import { SidebarNavigation } from "@/components/common/sidebar-navigation";

export default function DocsLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex min-h-[calc(100vh-3rem)]">
			<SidebarNavigation />
			<main className="flex-1 ml-[450px]">{children}</main>
		</div>
	);
}
