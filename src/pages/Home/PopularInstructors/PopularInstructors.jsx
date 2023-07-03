import axios from "axios";
import { useEffect, useState } from "react";
import PopularInstructor from "./PopularInstructor";

const PopularInstructors = () => {
	const [PopularInstructors, setPopularInstructors] = useState([]);

	useEffect(() => {
		axios.get("https://multilingual-mastery-server.vercel.app/popular-instructors").then((res) => {
			// console.log(res.data);
			setPopularInstructors(res.data);
		});
	}, []);
	return (
		<section className="my-32 mx-2 lg:mx-0">
			<h2 className="font-bold text-3xl text-center my-10">Popular Instructors</h2>
			<div className="grid grid-col-1 lg:grid-cols-3 gap-4">
				{PopularInstructors.map((instructor, index) => (
					<PopularInstructor key={index} instructor={instructor}></PopularInstructor>
				))}
			</div>
		</section>
	);
};

export default PopularInstructors;
