import { Link } from "react-router-dom";

const Trust = () => {
	return (
		<section className="bg-blue-50 flex flex-col gap-4 lg:flex-row justify-evenly py-32 my-32 px-10 lg:px-0">
			<div className="space-y-4 lg:space-y-6">
				<h1 className="font-bold text-4xl">Trusted By</h1>
				<p className="text-3xl">500+ Happy Students</p>
			</div>
			<Link to="/login">
				<button className="btn btn-outline text-black">Join Now</button>
			</Link>
		</section>
	);
};

export default Trust;
