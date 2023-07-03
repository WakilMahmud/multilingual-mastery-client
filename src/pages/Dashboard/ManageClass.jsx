import { useQuery } from "@tanstack/react-query";

import ManageAClass from "./ManageAClass";

const ManageClass = () => {
	const { data: classes = [], refetch } = useQuery({
		queryKey: ["classes"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/classes");
			return res.json();
		},
	});

	return (
		<div className="grid grid-cols-2 gap-2">
			{classes?.map((Class) => (
				<ManageAClass key={Class?._id} Class={Class} refetch={refetch}></ManageAClass>
			))}
		</div>
	);
};

export default ManageClass;
