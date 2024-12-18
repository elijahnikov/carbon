export default function ShowcaseBlock({
	children,
}: { children: React.ReactNode }) {
	return <div className="bg-background p-4 rounded-md">{children}</div>;
}
