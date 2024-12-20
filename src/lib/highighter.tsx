import React from "react";
import { createHighlighter } from "shiki";

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

export const getCachedHighlighter = React.cache(async () => {
	if (highlighter === null) {
		highlighter = await createHighlighter({
			themes: ["poimandres", "github-light"],
			langs: ["tsx"],
		});
	}

	return highlighter;
});
