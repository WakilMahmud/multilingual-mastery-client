import axios from "axios";
import { useState } from "react";

const Instructors = () => {
	const [instructors, setInstructors] = useState([]);
	axios
		.get("https://multilingual-mastery-server.vercel.app/users/instructor")
		.then((res) => {
			// Handle the response data
			setInstructors(res.data);
		})
		.catch((error) => {
			console.error(error);
		});
	return (
		<>
			<div className="grid grid-col-1 lg:grid-cols-3 gap-4 my-32">
				{instructors.map((instructor) => {
					return (
						<div key={instructor?._id} className="card card-compact w-96 bg-base-100 shadow-xl">
							<figure>
								<img className="h-80 w-full" src={instructor?.photoURL} alt="Instructor" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{instructor?.name}</h2>
								<p>Email: {instructor?.email}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Instructors;
