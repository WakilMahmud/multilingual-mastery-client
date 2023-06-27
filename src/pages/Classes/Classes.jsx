import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useRole from "../../hooks/useRole";
import Swal from "sweetalert2";

const Classes = () => {
	const [approvedClasses, setApprovedClasses] = useState([]);
	const { user } = useContext(AuthContext);
	const [role] = useRole(user);
	axios
		.get("http://localhost:5000/approved-classes")
		.then((res) => {
			// Handle the response data
			setApprovedClasses(res.data);
		})
		.catch((error) => {
			console.error(error);
		});

	const handleSelect = () => {
		if (!user) {
			Swal.fire({
				title: "Please Login before selecting the course",
			});
		}
	};
	return (
		<div className="grid grid-cols-3 gap-2">
			{approvedClasses.map((Class) => {
				// console.log(Class?.availableSeats);
				return (
					<div key={Class?._id} className={`card card-compact w-96  shadow-xl ${Class?.availableSeats == 0 ? "bg-red-500" : "bg-base-100"}`}>
						<figure>
							<img className="h-64 w-full" src={Class?.classImage} alt="Class" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{Class?.className}</h2>
							<p>Instructor Name: {Class?.instructorName}</p>
							<p>Available Seats: {Class?.availableSeats}</p>
							<p>Price: {Class?.price}$</p>
							<button onClick={() => handleSelect()} className="btn btn-info" disabled={Class?.availableSeats == 0 || role != "student"}>
								Select
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Classes;
