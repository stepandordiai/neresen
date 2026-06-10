"use client";

import { useState } from "react";
import "./CopyBtn.scss";

const CopyBtn = ({ txt = "" }) => {
	const [btnTxtCopied, setBtnTxtCopied] = useState(false);

	const handleCopy = (value: string) => {
		// Save value in clipboard
		navigator.clipboard.writeText(value);

		setBtnTxtCopied(true);

		setTimeout(() => {
			setBtnTxtCopied(false);
		}, 1500);
	};

	return (
		<button
			onClick={() => handleCopy(txt)}
			className={`copy-btn ${btnTxtCopied ? "copy-btn--copied" : ""}`.trim()}
			disabled={btnTxtCopied}
			title="Kliknutím zkopírujete"
		>
			{btnTxtCopied ? "Zkopírováno" : txt}
		</button>
	);
};

export default CopyBtn;
