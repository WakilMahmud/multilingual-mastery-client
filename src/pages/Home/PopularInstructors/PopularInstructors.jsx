import axios from "axios";
import { useEffect, useState } from "react";

const PopularInstructors = () => {
	const [PopularInstructors, setPopularInstructors] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/popular-instructors").then((res) => {
			// console.log(res.data);
			setPopularInstructors(res.data);
		});
	}, []);
	return (
		<section className="my-32">
			<h2 className="font-bold text-3xl text-center my-10">Popular Instructors</h2>
			<div className="grid grid-cols-3 gap-4">
				{PopularInstructors.map((instructor) => (
					<div className="card rounded-lg" key={instructor._id}>
						<img className="rounded-lg w-full h-64" src={instructor?.photoURL} alt="Popular Class" />
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularInstructors;
