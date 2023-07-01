import axios from "axios";
import { useEffect, useState } from "react";

const PopularClasses = () => {
	const [popularClasses, setPopularClasses] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/popular-classes").then((res) => {
			// console.log(res.data);
			setPopularClasses(res.data);
		});
	}, []);

	return (
		<section className="my-32">
			<h2 className="font-bold text-3xl text-center my-10">Popular Classes</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{popularClasses.map((classItem) => (
					<div className="card rounded-lg" key={classItem._id}>
						<img className="rounded-lg w-full h-64" src={classItem?.classImage} alt="Popular Class" />
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularClasses;
