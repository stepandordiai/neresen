import type { MetadataRoute } from "next";
import projects from "@/app/assets/data/projects.json";

const pages = ["", "/kontakt", "/projekty", "/gdpr"];

const BASE_URL = "https://www.neresen.cz";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		...pages.map((page) => ({
			url: `${BASE_URL}${page}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1,
		})),
		...projects.map((project) => ({
			url: `${BASE_URL}/${project.id}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
