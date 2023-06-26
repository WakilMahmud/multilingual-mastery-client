import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyClasses = () => {
	const { user } = useContext(AuthContext);

	const { data: myClasses = [] } = useQuery({
		queryKey: ["myClasses", user?.email],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`);
			return res.json();
		},
	});

	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr className="text-center">
						<th>#</th>
						<th>Class Name</th>
						<th>Instructor</th>
						<th>Email</th>
						<th>Available Seat</th>
						<th>Price($)</th>
						<th>Status</th>
						<th>Total Enrolled Students</th>
						<th>Feedback</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{myClasses.map((Class, index) => (
						<tr key={Class?._id}>
							<td>{index + 1}</td>
							<td>
								<div className="flex items-center space-x-3">
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img src={Class?.classImage} alt="Avatar Tailwind CSS Component" />
										</div>
									</div>
									<div>
										<div className="font-bold">{Class?.className}</div>
									</div>
								</div>
							</td>
							<td>{Class?.instructorName}</td>
							<td>{Class?.instructorEmail}</td>
							<td>{Class?.availableSeats}</td>
							<td>{Class?.price}</td>
							<td>{Class?.status}</td>
							<td>{0}</td>
							<td>{null}</td>
							<td className="flex gap-2">
								<button className="btn btn-info">Update</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyClasses;
MyClasses;
