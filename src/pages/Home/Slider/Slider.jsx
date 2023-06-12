// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Slider = () => {
	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			<SwiperSlide>
				<img src="https://thumbs.dreamstime.com/b/teacher-helping-male-pupil-studying-desk-classroom-checking-work-30849928.jpg" alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW37oN9DtaDwZy6JXQ3URtI7MIPCtsrzsxNw&usqp=CAU" alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQblEe5W2dmSyzEwvY60AawA8GkRdzLgROFcA&usqp=CAU" alt="" />
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
