import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const ManageUser = () => {
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	fetch("http://localhost:5000/users")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setUsers(data);
	// 		});
	// }, []);

	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/users");
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
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={user?._id}>
							<td>{index + 1}</td>
							<td>
								<div className="flex items-center space-x-3">
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
										</div>
									</div>
									<div>
										<div className="font-bold">{user?.name}</div>
									</div>
								</div>
							</td>
							<td>{user?.email}</td>
							<td>{user?.role}</td>
							<td className="flex gap-2">
								<button className="btn btn-info">Make Instructor</button>
								<button className="btn btn-info">Make Admin</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ManageUser;
