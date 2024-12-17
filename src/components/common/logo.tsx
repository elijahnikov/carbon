export default function CarbonLogo() {
	return (
		<div className="min-w-12 min-h-12">
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg viewBox="0 0 100 100" className="h-full" preserveAspectRatio="none">
				<rect
					x="20"
					y="20"
					width="60"
					height="60"
					className="fill-black dark:fill-white"
					stroke="none"
				/>
				<rect
					x="35"
					y="35"
					width="30"
					height="30"
					className="fill-white dark:fill-black"
					stroke="none"
				/>
			</svg>
		</div>
	);
}
