import FAQ from "../FAQ/FAQ";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";

const Home = () => {
	return (
		<>
			<Slider></Slider>
			<PopularClasses></PopularClasses>
			<PopularInstructors></PopularInstructors>
			<FAQ></FAQ>
		</>
	);
};

export default Home;
