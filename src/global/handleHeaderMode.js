import logoIconWhite from "/logo/mountain-white.png";
import logoIconBlack from "/logo/mountain-black.png";

export const handleHeaderMode = () => {
	const homeWrapper = document.querySelector(".js-home-wrapper");
	const projects = document.querySelector(".js-projects");
	const pageTitle = document.querySelector(".js-page-title");
	const footer = document.querySelector(".js-footer");

	const rootElement = document.querySelector(":root");
	const customDivider = document.querySelector(".js-custom-divider");
	const logoIcon = document.querySelector(".js-logo-icon");

	rootElement.style.setProperty("--scroll-clr", "#000");
	rootElement.style.setProperty("--scroll-bg-clr", "#fff");
	customDivider.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	logoIcon.src = logoIconBlack;

	// I'm checking if element is on the active page

	if (homeWrapper) {
		const homeWrapperRect = homeWrapper.getBoundingClientRect();
		if (homeWrapperRect.top <= 45 && homeWrapperRect.bottom >= 45) {
			rootElement.style.setProperty("--scroll-clr", "#fff");
			rootElement.style.setProperty("--scroll-bg-clr", "#000");
			customDivider.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
			logoIcon.src = logoIconWhite;
		}
	}

	if (projects) {
		const projectsRect = projects.getBoundingClientRect();
		if (projectsRect.top <= 45 && projectsRect.bottom >= 45) {
			rootElement.style.setProperty("--scroll-clr", "#fff");
			rootElement.style.setProperty("--scroll-bg-clr", "#000");
			customDivider.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
			logoIcon.src = logoIconWhite;
		}
	}

	if (pageTitle) {
		const pageTitleRect = pageTitle.getBoundingClientRect();
		if (pageTitleRect.top <= 45 && pageTitleRect.bottom >= 45) {
			rootElement.style.setProperty("--scroll-clr", "#fff");
			rootElement.style.setProperty("--scroll-bg-clr", "#000");
			customDivider.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
			logoIcon.src = logoIconWhite;
		}
	}

	if (footer) {
		const footerRect = footer.getBoundingClientRect();
		if (footerRect.top <= 45 && footerRect.bottom >= 45) {
			rootElement.style.setProperty("--scroll-clr", "#fff");
			rootElement.style.setProperty("--scroll-bg-clr", "#000");
			customDivider.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
			logoIcon.src = logoIconWhite;
		}
	}
	//  45 is half of header's height
};
