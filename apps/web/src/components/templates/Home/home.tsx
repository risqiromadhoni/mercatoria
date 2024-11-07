import {
	AppBar,
	Button,
	Category,
	Footer,
	HeroCarousel,
	ProductCard,
} from "@/components";
import { carouselItems } from "@/mocks/carousel";

import "./style.css";
import { ProductHead, SectionHead } from "@/components";
import { categoryItems } from "@/mocks/category";
import { IconChevronDown } from "@tabler/icons-react";

const HomeTemplate = () => {
	return (
		<div className="w-full">
			<AppBar />
			<main>
				<section>
					<HeroCarousel items={carouselItems} />
				</section>
				<section className="container py-6">
					<Category items={categoryItems} />
				</section>
				<section className="container py-6 space-y-4">
					<SectionHead variant="minimal" title="NEW ARRIVAL" />
					<div className="relative h-[350px]">
						<div className="absolute left-0 hidden md:block">
							<ProductHead variant="new-arrival" />
						</div>
						<div className="relative z-30 w-5/6 ml-auto h-full grid grid-cols-5 gap-4 py-6">
							<ProductCard />
							<ProductCard isWishlist />
							<ProductCard />
							<ProductCard />
							<ProductCard />
						</div>
					</div>
				</section>
				<section className="container py-6 space-y-4">
					<SectionHead variant="minimal" title="PRODUK POPULER" />
					<div className="relative h-[350px]">
						<div className="absolute left-0 hidden md:block">
							<ProductHead variant="best-seller" />
						</div>
						<div className="relative z-30 w-5/6 ml-auto h-full grid grid-cols-5 gap-4 py-6">
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
							<ProductCard />
						</div>
					</div>
				</section>
				<section className="container py-6 space-y-4">
					<SectionHead variant="default" title="REKOMENDASI UNTUK ANDA" />
					<div className="w-full h-full grid grid-cols-2 md:grid-cols-5 gap-4">
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
					<div className="w-fit mx-auto">
						<Button variant="outline" color="primary" className="group mx-auto">
							Lihat Lebih Banyak
							<IconChevronDown className="transform group-hover:rotate-180" />
						</Button>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default HomeTemplate;
