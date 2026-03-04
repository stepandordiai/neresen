export const handleHeaderMode = () => {
	const homeWrapper = document.querySelector(".js-home-hero");
	const projects = document.querySelector(".js-projects");
	const pageTitle = document.querySelector(".js-page-title");
	const footer = document.querySelector(".js-footer");

	const rootElement = document.querySelector(":root") as HTMLElement;
	const customDivider = document.querySelector(
		".js-custom-divider",
	) as HTMLElement;
	const customDividerInner = document.querySelector(
		".js-custom-divider-inner",
	) as HTMLElement;
	const logoIcon = document.querySelector(".js-logo-icon") as HTMLImageElement;

	if (!rootElement || !customDivider || !customDividerInner || !logoIcon)
		return;

	rootElement.style.setProperty("--scroll-clr", "#000");
	rootElement.style.setProperty("--scroll-bg-clr", "#fff");
	customDivider.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
	customDividerInner.style.backgroundColor = "#000";

	logoIcon.src = "/logo/mountain-black.png";

	// I'm checking if element is on the active page

	if (homeWrapper) {
		const homeWrapperRect = homeWrapper.getBoundingClientRect();
		if (homeWrapperRect.top <= 45 && homeWrapperRect.bottom >= 45) {
			rootElement.style.setProperty("--scroll-clr", "#fff");
			rootElement.style.setProperty("--scroll-bg-clr", "#000");
			customDivider.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
			customDividerInner.style.backgroundColor = "#fff";
			logoIcon.src = "/logo/mountain-white.png";
		}
	}

	if (projects) {
		const projectsRect = projects.getBoundingClientRect();
		if (projectsRect.top <= 45 && projectsRect.bottom >= 45) {
			rootElement.style.setProperty("--scroll-clr", "#fff");
			rootElement.style.setProperty("--scroll-bg-clr", "#000");
			customDivider.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
			customDividerInner.style.backgroundColor = "#fff";
			logoIcon.src = "/logo/mountain-white.png";
		}
	}

	if (pageTitle) {
		const pageTitleRect = pageTitle.getBoundingClientRect();
		if (pageTitleRect.top <= 45 && pageTitleRect.bottom >= 45) {
			rootElement.style.setProperty("--scroll-clr", "#fff");
			rootElement.style.setProperty("--scroll-bg-clr", "#000");
			customDivider.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
			customDividerInner.style.backgroundColor = "#fff";
			logoIcon.src = "/logo/mountain-white.png";
		}
	}

	if (footer) {
		const footerRect = footer.getBoundingClientRect();
		if (footerRect.top <= 45 && footerRect.bottom >= 45) {
			rootElement.style.setProperty("--scroll-clr", "#fff");
			rootElement.style.setProperty("--scroll-bg-clr", "#000");
			customDivider.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
			customDividerInner.style.backgroundColor = "#fff";
			logoIcon.src = "/logo/mountain-white.png";
		}
	}
	//  45 is half of header's height
};
