import Navigation from "@/components/common/navigation";

export default function LandingLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Navigation />
			<div>{children}</div>
		</>
	);
}
