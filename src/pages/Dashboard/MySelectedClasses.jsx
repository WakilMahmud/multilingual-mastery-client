import { useQuery } from "@tanstack/react-query";
import MySelectedClass from "./MySelectedClass";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MySelectedClasses = () => {
	const { user, loading } = useContext(AuthContext);
	const token = localStorage.getItem("access-token");
	const { data: selectedClasses = [], refetch } = useQuery({
		queryKey: ["selectedClasses"],
		enabled: !loading,
		queryFn: async () => {
			const res = await fetch(`https://multilingual-mastery-server.vercel.app/register-classes?email=${user?.email}`, {
				headers: { authorization: `bearer ${token}` },
			});
			return res.json();
		},
	});

	return (
		<div className="grid grid-col-1 lg:grid-cols-2 gap-2">
			{selectedClasses.map((Class) => (
				<MySelectedClass key={Class?._id} Class={Class} refetch={refetch}></MySelectedClass>
			))}
		</div>
	);
};

export default MySelectedClasses;
