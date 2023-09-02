import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
	const [hide, setHide] = useState(true);
	const { signIn, googleLogin } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/dashboard" || "/";

	console.log(from);

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		// console.log(data);

		signIn(data.email, data.password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				// console.log(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				});
			});
	};

	const handleGoogleLogin = () => {
		// console.log("Clicked Google");
		googleLogin()
			.then((result) => {
				// The signed-in user info.
				const loggedInUser = result.user;
				// console.log(loggedInUser);
				const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: "student", photoURL: loggedInUser.photoURL };
				fetch("https://multilingual-mastery-server.vercel.app/users", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(saveUser),
				})
					.then((res) => res.json())
					.then(() => {
						navigate(from, { replace: true });
					});
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
				<h1 className="text-3xl font-extrabold mb-8">Login</h1>

				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-3/4 mx-auto  space-y-4">
					<input type="email" placeholder="Enter your email" className="border rounded p-2" {...register("email")} required />

					<div className="w-full relative">
						<input
							type={hide ? "password" : "text"}
							placeholder="Enter your password"
							className="border rounded p-2  w-full"
							{...register("password")}
							required
						/>
						{hide ? (
							<button type="button" className="w-fit absolute right-2 top-3" onClick={() => setHide(false)}>
								<HiOutlineEye></HiOutlineEye>
							</button>
						) : (
							<button type="button" className="w-fit absolute right-2 top-3" onClick={() => setHide(true)}>
								<HiOutlineEyeOff></HiOutlineEyeOff>
							</button>
						)}
					</div>

					<input className="btn btn-info rounded-full" type="submit" value="Login" />

					<p>
						Don&apos;t have an account?
						<Link to="/register">
							<button className="btn btn-active btn-link">Register</button>
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

export default Login;
