export default function HomePage() {
	const darkColors = [
		{ hex: "#121212", name: "Dark 2 - Secondary BG" },
		{ hex: "#1A1A1A", name: "Dark 3 - Card BG" },
		{ hex: "#242424", name: "Dark 4 - Hover States" },
		{ hex: "#2E2E2E", name: "Dark 5 - Borders" },
		{ hex: "#383838", name: "Dark 6 - High Contrast" },
	];
	const lightColors = [
		{ hex: "#F8F8F8", name: "Light 2 - Secondary BG" },
		{ hex: "#F0F0F0", name: "Light 3 - Card BG" },
		{ hex: "#E8E8E8", name: "Light 4 - Hover States" },
		{ hex: "#E0E0E0", name: "Light 5 - Borders" },
		{ hex: "#D8D8D8", name: "Light 6 - High Contrast" },
	];
	return (
		<main className="flex  min-h-screen flex-col items-center justify-center">
			<div className="w-full flex items-center p-16 justify-center h-[50vh] space-y-4 bg-[#1A1A1A]">
				<div className="grid w-[75%] grid-cols-3 gap-4 md:grid-cols-5">
					{darkColors.map((color, index) => (
						<div
							key={color.hex}
							className="overflow-hidden dark:shadow-overlay-dark shadow-overlay border border-[#2F2F2F] rounded-xl"
						>
							<div
								className="h-24 flex flex-end flex-col p-2"
								style={{ backgroundColor: color.hex }}
							>
								<p className="text-neutral-400">#{index + 1}</p>{" "}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="w-full h-[50vh] flex items-center justify-center bg-[#F0F0F0] p-16 space-y-4">
				<div className="grid w-[75%] grid-cols-3 gap-4 md:grid-cols-5">
					{lightColors.map((color, index) => (
						<div
							key={color.hex}
							className="overflow-hidden shadow-overlay border border-[#E5E5E5] rounded-xl"
						>
							<div
								className="h-24 flex flex-end flex-col p-2"
								style={{ backgroundColor: color.hex }}
							>
								<p className="text-neutral-400">#{index + 1}</p>{" "}
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
