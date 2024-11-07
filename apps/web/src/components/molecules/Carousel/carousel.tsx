import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import type { FC } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { HeroCarouselProps } from "./type";

const Carousel: FC<HeroCarouselProps> = (props) => {
	const { items } = props;
	return (
		<Swiper
			slidesPerView="auto"
			initialSlide={1}
			spaceBetween={24}
			centeredSlides={true}
			loop={true}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="hero-carousel"
		>
			{items.map((item) => (
				<SwiperSlide key={item.title}>
					<a href={item.link}>
						<img src={item.image} loading="lazy" alt={item.title} />
					</a>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
