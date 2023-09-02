import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useRole from "../../hooks/useRole";
import SelectAClass from "./SelectAClass";

const Classes = () => {
	const [approvedClasses, setApprovedClasses] = useState([]);
	const { user } = useContext(AuthContext);
	const [role] = useRole(user);

	useEffect(() => {
		axios
			.get("https://multilingual-mastery-server.vercel.app/approved-classes")
			.then((res) => {
				// Handle the response data
				setApprovedClasses(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="grid grid-col-1 lg:grid-cols-3 gap-4 my-32 px-2 lg:px-0">
			{approvedClasses.map((Class) => (
				<SelectAClass key={Class?._id} Class={Class} role={role} user={user}></SelectAClass>
			))}
		</div>
	);
};

export default Classes;
