"use client";

import { AnimatePresence, type Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

interface HyperTextProps {
	text: string;
	duration?: number;
	framerProps?: Variants;
	className?: string;
	animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function HyperText({
	text,
	duration = 800,
	framerProps = {
		initial: { opacity: 0, y: -10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 3 },
	},
	className,
	animateOnLoad = true,
}: HyperTextProps) {
	const [displayText, setDisplayText] = useState(text.split(""));
	const [trigger, setTrigger] = useState(false);
	const interations = useRef(0);
	const isFirstRender = useRef(true);

	const triggerAnimation = () => {
		interations.current = 0;
		setTrigger(true);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const interval = setInterval(
			() => {
				if (!animateOnLoad && isFirstRender.current) {
					clearInterval(interval);
					isFirstRender.current = false;
					return;
				}
				if (interations.current < text.length) {
					setDisplayText((t) =>
						t.map((l, i) =>
							l === " "
								? l
								: i <= interations.current
									? // biome-ignore lint/style/noNonNullAssertion: <explanation>
										text[i]!
									: // biome-ignore lint/style/noNonNullAssertion: <explanation>
										alphabets[getRandomInt(26)]!,
						),
					);
					interations.current = interations.current + 0.1;
				} else {
					setTrigger(false);
					clearInterval(interval);
				}
			},
			duration / (text.length * 10),
		);
		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, [text, duration, trigger, animateOnLoad]);

	return (
		<div
			className="flex scale-100 cursor-default overflow-hidden"
			onMouseEnter={triggerAnimation}
		>
			<AnimatePresence mode="wait">
				{displayText.map((letter, i) => (
					<motion.span
						suppressHydrationWarning
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className={cn("font-mono", letter === " " ? "w-3" : "", className)}
						{...framerProps}
					>
						{letter}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
}
