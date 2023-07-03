const PopularInstructor = ({ instructor }) => {
	return (
		<div className="card rounded-lg border bg-pink-50">
			<img className="rounded-lg w-full h-80" src={instructor?.photoURL} alt="Popular Instructor" />
			<h1 className="font-bold text-xl text-center my-4">{instructor?.name}</h1>
		</div>
	);
};

export default PopularInstructor;
