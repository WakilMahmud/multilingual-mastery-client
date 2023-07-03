import { useEffect, useState } from "react";

const useRole = (user) => {
	const [role, setRole] = useState("student");
	const [roleLoading, setRoleLoading] = useState(true);
	const token = localStorage.getItem("access-token");

	useEffect(() => {
		fetch(`https://multilingual-mastery-server.vercel.app/users?email=${user?.email}&role=wantToKnow`, {
			headers: { authorization: `bearer ${token}` },
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setRole(data.role);
				setRoleLoading(false);
			});
	}, [user, token]);

	return [role, roleLoading];
};

export default useRole;
