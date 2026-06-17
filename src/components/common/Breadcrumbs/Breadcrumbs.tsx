import Link from "next/link";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import { Fragment } from "react/jsx-runtime";
import "./Breadcrumbs.scss";

type BreadcrumbsProps = {
	links: {
		label: string;
		href?: string;
	}[];
};

const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
	return (
		<nav className="breadcrumbs">
			<ol className="breadcrumbs-list">
				<li>
					<Link className="breadcrumbs__link" href="/">
						Uvod
					</Link>
					<ChevronRightIcon size={14} />
				</li>
				{links.map((link, i) => {
					const isLastLink = i === links.length - 1;

					return (
						<Fragment key={i}>
							{!isLastLink && link.href ? (
								<li>
									<Link className="breadcrumbs__link" href={link.href}>
										{link.label}
									</Link>
									<ChevronRightIcon size={14} />
								</li>
							) : (
								<li style={{ opacity: "0.5" }}>{link.label}</li>
							)}
						</Fragment>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
