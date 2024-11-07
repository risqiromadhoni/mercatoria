export interface CarouselItem {
	title: string;
	image: string;
	link: string;
}

export interface HeroCarouselProps {
	items: CarouselItem[];
}
