import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
import registerImg from "../../../assets/react.svg";

const auth = getAuth();

const Register = () => {
	const { createUser, logOut } = useContext(AuthContext);
	const [passwordError, setPasswordError] = useState("");

	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		// console.log(data);

		if (data.password.length < 6) {
			setPasswordError("Password must be at least 6 characters");
			return;
		}

		createUser(data.email, data.password)
			.then((result) => {
				const createdUser = result.user;
				console.log(createdUser);
				Swal.fire({
					icon: "success",
					title: "Successfully Registered!",
					showConfirmButton: false,
					timer: 1500,
				});

				logOut();

				updateProfile(auth.currentUser, {
					displayName: data.name,
					photoURL: data.photo,
				})
					.then(() => {
						// console.log("Profile updated");
					})
					.catch((error) => {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: error.message,
						});
					});

				setPasswordError("");
				reset();
			})
			.catch((error) => {
				console.log(error);

				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Email is already in use!",
				});
			});
	};
	return (
		<>
			<div className="flex flex-col lg:flex-row gap-4 my-32">
				<div className="flex flex-col justify-center items-center w-full lg:w-2/5 border rounded order-2">
					<h1 className="text-3xl font-extrabold ">Register</h1>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto my-10 space-y-4 w-3/5">
						{/* register your input into the hook by invoking the "register" function */}
						<input placeholder="Enter your name" className="border rounded p-2" {...register("name")} />
						<input type="email" placeholder="Enter your email" className="border rounded p-2" {...register("email")} required />

						<input type="password" placeholder="Enter your password" className="border rounded p-2" {...register("password")} required />
						{passwordError && <small className="text-red-500">{passwordError}</small>}
						<input placeholder="Photo URL" className="border rounded p-2" {...register("photo")} />

						<input className="btn btn-info rounded-full" type="submit" value="Register" />

						<p>
							Already have an account?
							<Link to="/login">
								<button className="btn btn-active btn-link">Login</button>
							</Link>
						</p>
					</form>
				</div>

				<div className="w-full lg:w-1/2 order-1">
					<img className="w-full" src={registerImg} alt="Register Image" />
				</div>
			</div>
		</>
	);
};

export default Register;
