import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySelectedClass = ({ Class, refetch }) => {
	const handleDelete = (id) => {
		// console.log(id);
		fetch(`http://localhost:5000/register-classes/${id}`, { method: "DELETE", headers: { "Content-Type": "application/json" } })
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					refetch();
					Swal.fire({
						icon: "success",
						title: `Class is deleted successfully`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
	return (
		<div key={Class?._id} className="card card-compact w-96  shadow-xl bg-base-100">
			<figure>
				<img className="h-64 w-full" src={Class?.classImage} alt="Class" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{Class?.className}</h2>
				<p>Instructor Name: {Class?.instructorName}</p>
				<p>Available Seats: {Class?.availableSeats}</p>
				<p>Price: {Class?.price}$</p>
				<button className="btn btn-error" onClick={() => handleDelete(Class?._id)}>
					Delete
				</button>
				<Link to="/dashboard/payment" state={{ Class: Class }}>
					<button className="btn btn-info w-full">Pay</button>
				</Link>
			</div>
		</div>
	);
};

export default MySelectedClass;
