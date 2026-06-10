export interface Project {
	id: string;
	name: string;
	details: string;
	location?: string;
	accommodation?: string;
	constructionDesign?: string;
	seoDesc: string;
	img: string[];
	type: string;
	position: {
		lat: number;
		lon: number;
	};
	address?: string;
	addressLink?: string;
	inProcess?: string;
}
