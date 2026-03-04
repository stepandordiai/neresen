"use client";

import Link from "next/link";
import TextLine from "../TextLine/TextLine";
import BtnBorders from "../BtnBorders/BtnBorders";
import { useState } from "react";
import "./PageTitle.scss";

type PageTitleProps = {
	title: string;
	hashPath: string;
	hashLinkName?: string;
	previousLinkTitle?: string;
	image: string;
	address?: string;
	addressLink?: string;
	inProcess?: string;
};

const PageTitle = ({
	title,
	hashPath,
	hashLinkName = "Zobrazit více",
	previousLinkTitle,
	image,
	address,
	addressLink,
	inProcess,
}: PageTitleProps) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	return (
		<>
			<div className="page-title-bg-img-wrapper">
				<img
					onLoad={() => setImgLoaded(true)}
					className={`page-title-bg-img ${
						imgLoaded ? "page-title-bg-img--active" : ""
					}`}
					src={image}
					alt=""
					loading="lazy"
				/>
			</div>
			<div className="page-title js-page-title">
				<TextLine>
					<h1 className="title">{title}</h1>
				</TextLine>
				<TextLine>
					<Link className="link-title" href="/">
						Úvod
					</Link>
					{previousLinkTitle && (
						<>
							<span> | </span>
							<Link className="link-title" href="/#projects">
								{previousLinkTitle}
							</Link>
						</>
					)}

					<span> | </span>
					<span>{title}</span>
				</TextLine>
				<div className="page-title__bottom-container">
					<div>
						{address && addressLink ? (
							<>
								<p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 15 }}>
									Adresa
								</p>
								<a className="link-title" href={addressLink} target="_blank">
									{address}
								</a>
							</>
						) : !address && !addressLink && inProcess ? (
							<>
								<p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 15 }}>
									Fáze
								</p>
								<p>{inProcess}</p>
							</>
						) : null}
					</div>
					<Link className="page-title__link" href={hashPath}>
						{hashLinkName}
						<BtnBorders />
					</Link>
				</div>
			</div>
		</>
	);
};

export default PageTitle;
