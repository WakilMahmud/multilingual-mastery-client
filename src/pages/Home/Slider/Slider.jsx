// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import English from "../../../assets/English.jpg";
import Spanish from "../../../assets/Spanish.jpg";
import French from "../../../assets/french.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Slider = () => {
	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			<SwiperSlide className="text-center">
				<img className="w-full h-80  lg:h-screen object-fill" src={French} alt="French" />

				<div className="slider-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<h2 className="slider-title font-bold text-4xl lg:text-7xl text-orange-500 mb-5">French</h2>
					<p className="slider-description font-semibold text-lg lg:text-4xl text-white">
						Immerse yourself in the beauty of the French language and its nuances.
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="relative text-center">
				<img className="w-full h-80  lg:h-screen object-fill" src={Spanish} alt="Spanish Course" />
				<div className="slider-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<h2 className="slider-title font-bold text-4xl lg:text-7xl text-red-700 mb-5">Spanish</h2>
					<p className="slider-description font-semibold text-lg lg:text-4xl text-white">
						Learn Spanish and explore the rich culture of the Spanish-speaking world.
					</p>
				</div>
			</SwiperSlide>
			<SwiperSlide className="relative text-center">
				<img className="w-full h-80 lg:h-screen" src={English} alt="English Course" />
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
