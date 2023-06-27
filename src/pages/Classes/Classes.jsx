import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useRole from "../../hooks/useRole";
import SelectAClass from "./SelectAClass";

const Classes = () => {
	const [approvedClasses, setApprovedClasses] = useState([]);
	const { user } = useContext(AuthContext);
	const [role] = useRole(user);

	axios
		.get("http://localhost:5000/approved-classes")
		.then((res) => {
			// Handle the response data
			setApprovedClasses(res.data);
		})
		.catch((error) => {
			console.error(error);
		});

	return (
		<div className="grid grid-cols-3 gap-2">
			{approvedClasses.map((Class) => (
				<SelectAClass key={Class?._id} Class={Class} role={role} user={user}></SelectAClass>
			))}
		</div>
	);
};

export default Classes;
