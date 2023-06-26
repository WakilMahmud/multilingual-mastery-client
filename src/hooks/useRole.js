import { useEffect, useState } from "react";

const useRole = (user) => {
	const [role, setRole] = useState("student");

	useEffect(() => {
		fetch(`http://localhost:5000/users?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setRole(data.role);
			});
	}, [user]);

	return [role];
};

export default useRole;
