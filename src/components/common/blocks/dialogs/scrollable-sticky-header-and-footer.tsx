"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import * as React from "react";

export default function ScrollableStickyHeaderAndFooterDialog() {
	const [hasScrolledToBottom, setHasScrolledToBottom] = React.useState(false);

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

		const isAtBottom = scrollHeight - scrollTop - clientHeight < 20;
		if (isAtBottom && !hasScrolledToBottom) {
			setHasScrolledToBottom(true);
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Scrollable</Button>
			</DialogTrigger>
			<DialogContent className="bg-blue-200 max-h-[500px] -p-6">
				<DialogHeader className="p-6 border-b">
					<DialogTitle>Terms & Conditions</DialogTitle>
					<DialogDescription>
						Accept the terms and conditions to continue.
					</DialogDescription>
				</DialogHeader>
				<div
					onScroll={handleScroll}
					className="max-h-[300px] -my-4 overflow-y-auto"
				>
					<div className="p-6 space-y-4">
						<h3 className="font-semibold text-sm">1. Acceptance of Terms</h3>
						<p className="text-xs text-secondary-foreground">
							By accessing and using this website, you accept and agree to be
							bound by the terms and provision of this agreement.
						</p>

						<h3 className="font-semibold text-sm">2. Use License</h3>
						<p className="text-xs text-secondary-foreground">
							Permission is granted to temporarily download one copy of the
							materials (information or software) on this website for personal,
							non-commercial transitory viewing only.
						</p>

						<h3 className="font-semibold text-sm">3. Disclaimer</h3>
						<p className="text-xs text-secondary-foreground">
							The materials on this website are provided on an 'as is' basis. We
							make no warranties, expressed or implied, and hereby disclaim and
							negate all other warranties including, without limitation, implied
							warranties or conditions of merchantability, fitness for a
							particular purpose, or non-infringement of intellectual property
							or other violation of rights.
						</p>

						<h3 className="font-semibold text-sm">4. Limitations</h3>
						<p className="text-xs text-secondary-foreground">
							In no event shall we or our suppliers be liable for any damages
							(including, without limitation, damages for loss of data or
							profit, or due to business interruption) arising out of the use or
							inability to use the materials on this website.
						</p>

						<h3 className="font-semibold text-sm">5. Privacy Policy</h3>
						<p className="text-xs text-secondary-foreground">
							Your privacy is important to us. It is our policy to respect your
							privacy regarding any information we may collect from you across
							our website.
						</p>

						<h3 className="font-semibold text-sm">6. Governing Law</h3>
						<p className="text-xs text-secondary-foreground">
							These terms and conditions are governed by and construed in
							accordance with applicable laws, and any disputes shall be subject
							to the exclusive jurisdiction of the courts.
						</p>

						<h3 className="font-semibold text-sm">7. Changes to Terms</h3>
						<p className="text-xs text-secondary-foreground">
							We reserve the right, at our sole discretion, to modify or replace
							these terms at any time. By continuing to access or use our
							website after those revisions become effective, you agree to be
							bound by the revised terms.
						</p>
					</div>
				</div>
				<DialogFooter className="p-6 border-t">
					<DialogClose asChild>
						<Button variant="outline">Decline</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button disabled={!hasScrolledToBottom}>Accept</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
