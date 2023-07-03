import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import ErrorPic from "../../../assets/Error.json";

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error?.message);
	return (
		<section className="flex items-center h-screen">
			<div className="container flex flex-col items-center justify-center space-y-4">
				<Lottie animationData={ErrorPic} loop={true} />

				<div className="text-center">
					<Link to="/">
						<button className="btn btn-outline btn-info">Back to Home</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
