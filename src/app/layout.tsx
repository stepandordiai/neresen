import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Header from "../components/layout/Header/Header";
import ScrollToTop from "../utils/ScrollToTop";
import Footer from "../components/layout/Footer/Footer";
import Script from "next/script";
import { BASE_URL } from "@/lib/constants";
import "@/styles/globals.scss";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	weight: ["400", "500", "600"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		template: "%s | Neresen a.s.",
		default: "Neresen a.s. – Bytové domy a domovy pro seniory",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="cs">
			<body className={montserrat.variable}>
				<ScrollToTop />
				<Header />
				{children}
				<Footer />
				<Script
					src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBzLUqCWNklkCcKNCUPP062nse38oOTaDM&loading=async"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
