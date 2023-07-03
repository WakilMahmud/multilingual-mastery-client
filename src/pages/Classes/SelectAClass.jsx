import { useState } from "react";
import Swal from "sweetalert2";

const SelectAClass = ({ Class, role, user }) => {
	const [isDisabled, setIsDisabled] = useState(false);

	const handleSelect = (Class) => {
		if (!user) {
			Swal.fire({
				title: "Please Login before selecting the course",
			});
			return;
		}
		const saveClass = {
			userName: user?.displayName,
			userEmail: user?.email,
			availableSeats: Class?.availableSeats,
			classImage: Class?.classImage,
			className: Class?.className,
			instructorEmail: Class?.instructorEmail,
			instructorName: Class?.instructorName,
			price: Class?.price,
			status: "booked",
		};

		fetch("https://multilingual-mastery-server.vercel.app/register-classes", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(saveClass),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					setIsDisabled(true);
					Swal.fire({
						icon: "success",
						title: "Class is Booked",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
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
				<button onClick={() => handleSelect(Class)} className="btn btn-info" disabled={Class?.availableSeats == 0 || role != "student" || isDisabled}>
					Select
				</button>
			</div>
		</div>
	);
};

export default SelectAClass;
