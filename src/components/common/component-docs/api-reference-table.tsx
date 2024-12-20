import Badge from "@/components/ui/badge";
import type { ApiReference } from "@/lib/doc-data";

export default function ApiReferenceTable({
	apiReference,
}: { apiReference: ApiReference }) {
	return (
		<div className="mt-8">
			<h1 className="text-xl mb-4 font-medium">API Reference</h1>
			{apiReference.map((api, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div key={index}>
					{api.title && (
						<h2 className="text-lg font-semibold text-secondary-foreground">
							{api.title}
						</h2>
					)}
					{api.description && (
						<p className="text-sm text-secondary-foreground">
							{api.description}
						</p>
					)}
					<div className="border mt-2 dark:bg-carbon-dark-200 rounded-xl dark:shadow-sm-dark ring-1 ring-carbon-dark-500 overflow-hidden">
						<table className="w-full">
							<thead className="dark:bg-carbon-dark-400">
								<tr>
									<th className="py-2 px-4 font-medium text-left">Name</th>
									<th className="py-2 px-4 font-medium text-left">Type</th>
									<th className="py-2 px-4 font-medium text-left">
										Description
									</th>
								</tr>
							</thead>
							<tbody>
								{api.props.length > 0 &&
									api.props.map((prop) => (
										<tr
											key={prop.name}
											className="border-t border-carbon-dark-500"
										>
											<td className="p-4">
												<Badge
													size={"sm"}
													className="text-xs border border-neutral-600 font-medium font-mono text-secondary-foreground"
												>
													{prop.name}
												</Badge>
											</td>
											<td className="p-4">
												<Badge
													size={"sm"}
													className="text-xs border border-neutral-600 max-w-[250px] font-medium whitespace-break-spaces font-mono text-secondary-foreground break-words"
												>
													{prop.type}
												</Badge>
											</td>
											<td className="p-4">
												<Badge
													size={"sm"}
													className="text-xs border border-neutral-600 font-medium font-mono text-secondary-foreground"
												>
													{prop.default ?? "/"}
												</Badge>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			))}
		</div>
	);
}
