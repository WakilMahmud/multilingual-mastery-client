const EnrolledClass = ({ Class }) => {
	return (
		<div key={Class?._id} className="card card-compact w-96  shadow-xl bg-base-100">
			<figure>
				<img className="h-64 w-full" src={Class?.classImage} alt="Class" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{Class?.className}</h2>
				<p>Instructor: {Class?.instructorName}</p>
				<p>Email: {Class?.instructorEmail}</p>
				<p>Price: {Class?.price}$</p>
			</div>
		</div>
	);
};

export default EnrolledClass;
