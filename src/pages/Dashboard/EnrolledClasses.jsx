import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import EnrolledClass from "./EnrolledClass";

const EnrolledClasses = () => {
	const { user } = useContext(AuthContext);
	const token = localStorage.getItem("access-token");

	const [enrolledClasses, setEnrolledClasses] = useState([]);

	useEffect(() => {
		fetch(`https://multilingual-mastery-server.vercel.app/enrolled-classes?email=${user?.email}`, {
			headers: { authorization: `bearer ${token}` },
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setEnrolledClasses(data);
			});
	}, [user?.email, token]);

	return (
		<div className="grid grid-col-1 lg:grid-cols-2 gap-2">
			{enrolledClasses.map((Class) => (
				<EnrolledClass key={Class?._id} Class={Class}></EnrolledClass>
			))}
		</div>
	);
};

export default EnrolledClasses;
