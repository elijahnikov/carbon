import Badge from "@/components/ui/badge";
import { cn } from "@/components/utils/cn";
import type { ApiReference } from "@/lib/doc-data";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function ApiReferenceTable({
	apiReference,
	radixSource,
}: {
	apiReference: ApiReference;
	radixSource?: string;
}) {
	return (
		<section id="api-reference" className="mt-8">
			<h1 className="text-xl mb-4 font-medium">API Reference</h1>
			<div className="flex flex-col gap-6">
				{apiReference.map((api, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index}>
						{api.title && (
							<h2
								id={api.id}
								className="text-md font-medium text-secondary-foreground"
							>
								{api.title}
							</h2>
						)}
						{api.description && (
							<p className="text-sm text-secondary-foreground">
								{api.description}
							</p>
						)}
						{api.radixReference && (
							<div
								className={cn(
									"text-sm flex items-center gap-1 text-neutral-400",
									api.props && api.props.length > 0 && "mb-4",
								)}
							>
								Extends Radix{" "}
								<Link
									target="_blank"
									href={api.radixReference}
									className="underline underline-offset-2 text-primary flex items-center"
								>
									{api.title}
									<ArrowUpRightIcon className="size-4" />
								</Link>{" "}
								primitive props.
							</div>
						)}
						{api.props && api.props.length > 0 && (
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
										{api.props.map((prop) => (
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
													{prop.default ? (
														<Badge
															size={"sm"}
															className="text-xs border border-neutral-600 font-medium font-mono text-secondary-foreground"
														>
															{prop.default}
														</Badge>
													) : (
														<p className="text-secondary-foreground opacity-20">
															/
														</p>
													)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
