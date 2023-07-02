import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAClass = () => {
	const { user } = useContext(AuthContext);

	const { register, handleSubmit, reset } = useForm();
	const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append("image", data.classImage[0]);

		fetch(img_hosting_url, { method: "POST", body: formData })
			.then((res) => res.json())
			.then((imgResponse) => {
				if (imgResponse.success) {
					const classInfo = {
						className: data.className,
						classImage: imgResponse.data.display_url,
						instructorName: data.instructorName,
						instructorEmail: data.instructorEmail,
						availableSeats: parseInt(data.availableSeats),
						price: parseFloat(data.price),
						status: "pending",
					};

					// console.log(classInfo);

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
				}
			});
	};

	return (
		<>
			<h2 className="font-bold text-7xl my-20">Add a Class</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-3/5 mx-auto  space-y-4">
				<input type="text" className="border rounded p-2" placeholder="Class Name" {...register("className")} />

				<div className="border rounded p-2">
					<label htmlFor="ClassImage" className="text-gray-400">
						Class Image{" "}
					</label>
					<input type="file" placeholder="Class Image" id="ClassImage" {...register("classImage")} />
				</div>

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
