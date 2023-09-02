import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ManageUser = () => {
	const { user, loading } = useContext(AuthContext);
	const token = localStorage.getItem("access-token");

	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		enabled: !loading,
		queryFn: async () => {
			const res = await fetch(`https://multilingual-mastery-server.vercel.app/users?email=${user?.email}`, {
				headers: { authorization: `bearer ${token}` },
			});
			return res.json();
		},
	});

	// console.log(users);

	const handleMakeAdmin = (user) => {
		// console.log(user);
		fetch(`https://multilingual-mastery-server.vercel.app/users/admin/${user?._id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						icon: "success",
						title: `${user.name} is an Admin Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const handleMakeInstructor = (user) => {
		console.log(user);
		fetch(`https://multilingual-mastery-server.vercel.app/users/instructor/${user?._id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						icon: "success",
						title: `${user?.name} is an Instructor Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

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
					{users?.map((user, index) => (
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
								<button className="btn btn-info" onClick={() => handleMakeInstructor(user)} disabled={user?.role == "instructor"}>
									Make Instructor
								</button>
								<button className="btn btn-info" onClick={() => handleMakeAdmin(user)} disabled={user?.role == "admin"}>
									Make Admin
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ManageUser;
