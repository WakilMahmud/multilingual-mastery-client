import axios from "axios";
import { useEffect, useState } from "react";

const PopularClasses = () => {
	const [popularClasses, setPopularClasses] = useState([]);

	useEffect(() => {
		axios.get("https://multilingual-mastery-server.vercel.app/popular-classes").then((res) => {
			// console.log(res.data);
			setPopularClasses(res.data);
		});
	}, []);

	return (
		<section className="my-32 max-w-screen-xl mx-auto">
			<h2 className="font-bold text-3xl text-center my-10">Popular Classes</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{popularClasses.map((classItem) => (
					<div className="card rounded-lg my-2 border bg-blue-50" key={classItem?._id}>
						<img className="rounded-lg w-full h-64" src={classItem?.classImage} alt="Popular Class" />
						<h1 className="text-center font-semibold text-lg my-4">{classItem?.className}</h1>
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularClasses;
