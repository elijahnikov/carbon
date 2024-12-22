import { Spinner } from "@/components/ui/spinner";

export default function SizeExample() {
	return (
		<div className="flex items-center flex-col gap-4">
			<Spinner size="sm" />
			<Spinner size="md" />
			<Spinner size="lg" />
			<Spinner size="xl" />
			<Spinner size="2xl" />
		</div>
	);
}
