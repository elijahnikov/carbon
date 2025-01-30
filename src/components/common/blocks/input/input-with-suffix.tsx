import { Input } from "@/components/ui/input";

export default function InputWithSuffix({
	suffix,
}: {
	suffix: React.ReactNode;
}) {
	return (
		<Input suffix={".com"} label="Input with suffix" placeholder="website" />
	);
}
