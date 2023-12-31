import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyClasses = () => {
	const { user } = useContext(AuthContext);
	const token = localStorage.getItem("access-token");

	const { data: myClasses = [] } = useQuery({
		queryKey: ["myClasses", user?.email],
		queryFn: async () => {
			const res = await fetch(`https://multilingual-mastery-server.vercel.app/classes?email=${user?.email}`, {
				headers: { authorization: `bearer ${token}` },
			});
			return res.json();
		},
	});

	//Todo: Get Total Enrolled Students from Popular DB

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
					{myClasses?.map((Class, index) => (
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
							<td>{Class?.enrolledStudents || 0}</td>
							<td>{Class?.feedback}</td>
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
