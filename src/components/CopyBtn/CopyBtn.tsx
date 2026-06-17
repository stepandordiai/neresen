"use client";

import { useState } from "react";
import "./CopyBtn.scss";

type CopyBtnProps = {
	value: string;
};

export default function CopyBtn({ value }: CopyBtnProps) {
	const [btnValueCopied, setBtnValueCopied] = useState(false);

	// TODO: learn this
	// navigator.clipboard.writeText() is async
	const handleCopy = async (value: string) => {
		try {
			await navigator.clipboard.writeText(value);
			setBtnValueCopied(true);
			setTimeout(() => setBtnValueCopied(false), 2000);
		} catch (err) {
			console.error("Copy failed:", err);
		}
	};

	return (
		<button
			type="button"
			onClick={() => handleCopy(value)}
			className={`copy-btn ${btnValueCopied ? "copy-btn--copied" : ""}`.trim()}
			disabled={btnValueCopied}
			title="Kliknutím zkopírujete"
		>
			{btnValueCopied ? "Zkopírováno" : value}
		</button>
	);
}
