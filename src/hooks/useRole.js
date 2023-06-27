import { useEffect, useState } from "react";

const useRole = (user) => {
	const [role, setRole] = useState(null);
	const [roleLoading, setRoleLoading] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:5000/users?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setRole(data.role);
				setRoleLoading(false);
			});
	}, [user]);

	return [role, roleLoading];
};

export default useRole;
