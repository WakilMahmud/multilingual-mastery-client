import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import EnrolledClass from "./EnrolledClass";

const EnrolledClasses = () => {
	const { user } = useContext(AuthContext);
	const [enrolledClasses, setEnrolledClasses] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/enrolled-classes?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEnrolledClasses(data);
			});
	}, [user?.email]);

	return (
		<div className="grid grid-cols-2 gap-2">
			{enrolledClasses.map((Class) => (
				<EnrolledClass key={Class?._id} Class={Class}></EnrolledClass>
			))}
		</div>
	);
};

export default EnrolledClasses;
