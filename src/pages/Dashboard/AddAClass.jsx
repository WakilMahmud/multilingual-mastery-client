import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAClass = () => {
	const { user } = useContext(AuthContext);

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		const classInfo = {
			className: data.className,
			classImage: data.classImage,
			instructorName: data.instructorName,
			instructorEmail: data.instructorEmail,
			availableSeats: data.availableSeats,
			price: data.price,
			status: "pending",
		};

		fetch("http://localhost:5000/classes", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(classInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					reset();
					Swal.fire({
						icon: "success",
						title: "Class is added.",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				});
			});
	};

	return (
		<>
			<h2 className="font-bold text-7xl my-20">Add a Class</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-3/5 mx-auto  space-y-4">
				<input type="text" className="border rounded p-2" placeholder="Class Name" {...register("className")} />

				{/* <input type="file" className="border rounded p-2" placeholder="Class Image" {...register("classImage")} /> */}
				<input type="text" className="border rounded p-2" placeholder="Class Image" {...register("classImage")} />

				<input type="text" className="border rounded p-2" defaultValue={user?.displayName} {...register("instructorName")} />

				<input type="text" className="border rounded p-2" defaultValue={user?.email} {...register("instructorEmail")} />

				<input type="number" className="border rounded p-2" placeholder="Available Seats" {...register("availableSeats")} />

				<input type="number" className="border rounded p-2" placeholder="Price $" {...register("price")} />

				<button type="submit" className="border rounded p-2 btn-info">
					Add Class
				</button>
			</form>
		</>
	);
};

export default AddAClass;
