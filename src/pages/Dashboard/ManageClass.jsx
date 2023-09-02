import { useQuery } from "@tanstack/react-query";

import ManageAClass from "./ManageAClass";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ManageClass = () => {
	const { user, loading } = useContext(AuthContext);
	const token = localStorage.getItem("access-token");

	const { data: classes = [], refetch } = useQuery({
		queryKey: ["classes"],
		enabled: !loading,
		queryFn: async () => {
			const res = await fetch(`https://multilingual-mastery-server.vercel.app/manageClasses?email=${user?.email}`, {
				headers: { authorization: `bearer ${token}` },
			});
			return res.json();
		},
	});

	return (
		<div className="grid grid-col-1 lg:grid-cols-2 gap-2">
			{classes?.map((Class) => (
				<ManageAClass key={Class?._id} Class={Class} refetch={refetch}></ManageAClass>
			))}
		</div>
	);
};

export default ManageClass;
