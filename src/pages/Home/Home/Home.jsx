import FAQ from "../FAQ/FAQ";
import Partners from "../Partners/Partners";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import Trust from "../Trust/Trust";

const Home = () => {
	return (
		<>
			<Slider></Slider>
			<PopularClasses></PopularClasses>
			<PopularInstructors></PopularInstructors>
			<Trust></Trust>
			<Services></Services>
			<Partners></Partners>
			<FAQ></FAQ>
		</>
	);
};

export default Home;
