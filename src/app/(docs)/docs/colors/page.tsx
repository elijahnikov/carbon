import CodeBlock from "@/components/common/code-blocks/code-block";
import Swatches from "@/components/common/colors-page/swatches";
import { carbonColors, tailwindDefaults } from "@/lib/constants";
import { getExampleSource } from "@/lib/general";
import _ from "lodash";

export default async function ColorsPage() {
	const tailwindSource = await getExampleSource("tailwind.config.ts");

	return (
		<div className="flex min-h-screen">
			<div className="flex border-r border-dashed mt-16 flex-col w-full min-w-[500px] max-w-[50vw] min-h-[calc(100vh-128px)]">
				<div className="dark:bg-carbon-dark-200 border-b border-dashed h-12 px-4 bg-carbon-light-200 flex items-center justify-between">
					<h1 className="font-semibold">Colors</h1>
				</div>
				<div className="p-8 text-secondary-foreground/75">
					<h1 className="font-medium">
						The Carbon UI color pallete is divided into two categories:
					</h1>
					<ul className="pl-4 list-disc">
						<li>
							<span className="font-medium text-black dark:text-white">
								Tailwind Defaults
							</span>{" "}
							- The default Tailwind color palette.
						</li>
						<li>
							<span className="font-medium text-black dark:text-white">
								Carbon Monochrome
							</span>{" "}
							- A monochrome color palette that is designed to be used for light
							and dark modes
						</li>
					</ul>
					<h2 className="text-md mt-8 text-black dark:text-white font-medium">
						Tailwind Defaults
					</h2>
					<p>
						Carbon UI uses the default Tailwind color palette. This is the
						standard set of colors that are used in Tailwind.
					</p>
					<div className="flex flex-col mt-4 gap-4">
						{tailwindDefaults.map((color) => (
							<Swatches color={color} key={color.name} />
						))}
					</div>
					<h2 className="text-md mt-8 text-black dark:text-white font-medium">
						Carbon Monochrome
					</h2>
					<p>
						Carbon Monochrome is a monochrome color palette that is designed to
						be used for light and dark modes.
					</p>
					<div className="flex flex-col mt-4 gap-4">
						{carbonColors.map((color) => (
							<Swatches color={color} key={color.name} />
						))}
					</div>

					<div className="mt-12">
						<p className="text-sm font-medium mb-2">
							Copy the code below to your tailwind.config.ts file to use the
							Carbon UI colors.
						</p>
						<CodeBlock
							code={tailwindSource ?? ""}
							fileName="tailwind.config.ts"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
