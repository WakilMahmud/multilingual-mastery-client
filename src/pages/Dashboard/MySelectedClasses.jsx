import { useQuery } from "@tanstack/react-query";
import MySelectedClass from "./MySelectedClass";

const MySelectedClasses = () => {
	const { data: selectedClasses = [], refetch } = useQuery({
		queryKey: ["selectedClasses"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/register-classes");
			return res.json();
		},
	});
	console.log(selectedClasses);
	return (
		<div className="grid grid-cols-2 gap-2">
			{selectedClasses.map((Class) => (
				<MySelectedClass key={Class?._id} Class={Class} refetch={refetch}></MySelectedClass>
			))}
		</div>
	);
};

export default MySelectedClasses;
