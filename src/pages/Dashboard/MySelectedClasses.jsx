import { useQuery } from "@tanstack/react-query";
import MySelectedClass from "./MySelectedClass";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MySelectedClasses = () => {
	const { user } = useContext(AuthContext);
	const { data: selectedClasses = [], refetch } = useQuery({
		queryKey: ["selectedClasses"],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/register-classes?email=${user?.email}`);
			return res.json();
		},
	});

	return (
		<div className="grid grid-cols-2 gap-2">
			{selectedClasses.map((Class) => (
				<MySelectedClass key={Class?._id} Class={Class} refetch={refetch}></MySelectedClass>
			))}
		</div>
	);
};

export default MySelectedClasses;
