import { useEffect, useState } from "react";

const useRole = (user) => {
	const [role, setRole] = useState("student");
	const [roleLoading, setRoleLoading] = useState(true);

	useEffect(() => {
		fetch(`https://multilingual-mastery-server.vercel.app/userRole?email=${user?.email}&role=wantToKnow`)
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
