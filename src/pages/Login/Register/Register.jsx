import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();

const Register = () => {
	const { createUser, logOut, googleLogin } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// console.log(data);

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

	const handleGoogleLogin = () => {
		// console.log("Clicked Google");
		googleLogin()
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
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
		<div className="flex justify-center">
			<div className="flex flex-col justify-center items-center my-32 w-full lg:w-2/5 border py-10 rounded">
				<h1 className="text-3xl font-extrabold mb-8">Register</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-3/4 mx-auto  space-y-4">
					<input placeholder="Enter your name" className="border rounded p-2" {...register("name")} />
					<input type="email" placeholder="Enter your email" className="border rounded p-2" {...register("email")} required />

					<input
						type="password"
						{...register("password", {
							required: true,
							minLength: 6,
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/,
						})}
						placeholder="password"
						className="input input-bordered"
						required
					/>

					{errors.password?.type === "minLength" && <p className="text-red-600">Password must be 6 characters</p>}
					{errors.password?.type === "pattern" && (
						<p className="text-red-600">Password must have one Uppercase, one lower case, one number and one special character.</p>
					)}
					<input type="password" placeholder="Confirm password" className="border rounded p-2" {...register("confirm_password")} required />
					<input placeholder="Photo URL" className="border rounded p-2" {...register("photo")} />

					<input className="btn btn-info rounded-full" type="submit" value="Register" />

					<p>
						Already have an account?
						<Link to="/login">
							<button className="btn btn-active btn-link">Login</button>
						</Link>
					</p>
				</form>
				<div className="divider w-full ">OR</div>
				<button className="btn btn-warning w-3/4 rounded-full" onClick={handleGoogleLogin}>
					Sign in with Google
				</button>
			</div>
		</div>
	);
};

export default Register;
