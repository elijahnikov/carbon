import CarbonLogo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export const SocialLoginIcons = {
	Discord: (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 256 199"
			width="18"
			height="18"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid"
		>
			<path
				d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
				fill="#5865F2"
			/>
		</svg>
	),
	Google: (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			width="18"
			height="18"
			viewBox="0 0 256 262"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid"
		>
			<path
				d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
				fill="#4285F4"
			/>
			<path
				d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
				fill="#34A853"
			/>
			<path
				d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
				fill="#FBBC05"
			/>
			<path
				d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
				fill="#EB4335"
			/>
		</svg>
	),
};

export default function Login() {
	return (
		<Card className="flex min-h-[360px] size-[50%] flex-col gap-2 justify-center">
			<div className="flex items-center gap-2">
				<Button
					variant={"outline"}
					className="rounded-full w-12 h-12 flex items-center justify-center p-4 pointer-events-none"
				>
					<CarbonLogo />
				</Button>
				<div className="flex flex-col text-left justify-start items-start">
					<h1 className="text-md font-semibold">Welcome back</h1>
					<p className="text-carbon-900">Enter your credentials to continue</p>
				</div>
			</div>
			<div className="flex flex-col gap-2 w-full">
				<Input placeholder="Email" />
				<Input placeholder="Password" />
				<Button>Continue</Button>
			</div>
			<div className="flex justify-between w-full items-center">
				<div className="flex items-center gap-2">
					<Checkbox />
					<p>Remember me?</p>
				</div>
				<Button variant={"outline"}>Forgot password?</Button>
			</div>
			<div className="flex w-full items-center gap-4">
				<hr className="w-full" />
				<p className="whitespace-nowrap text-carbon-900">Other options</p>
				<hr className="w-full" />
			</div>
			<div className="flex flex-col w-full items-center gap-2">
				<Button
					before={SocialLoginIcons.Google}
					className="w-full"
					variant={"outline"}
				>
					Continue with Google
				</Button>
				<Button
					before={SocialLoginIcons.Discord}
					className="w-full"
					variant={"outline"}
				>
					Continue with Discord
				</Button>
			</div>
		</Card>
	);
}
