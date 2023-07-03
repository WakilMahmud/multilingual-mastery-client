import { useQuery } from "@tanstack/react-query";

import ManageAClass from "./ManageAClass";

const ManageClass = () => {
	const { data: classes = [], refetch } = useQuery({
		queryKey: ["classes"],
		queryFn: async () => {
			const res = await fetch("https://multilingual-mastery-server.vercel.app/classes");
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
