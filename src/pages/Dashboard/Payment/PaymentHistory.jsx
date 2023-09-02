import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
	const { user } = useContext(AuthContext);
	const token = localStorage.getItem("access-token");
	// console.log(user?.email);
	const { data: payments = [] } = useQuery({
		queryKey: ["payments"],
		queryFn: async () => {
			const res = await fetch(`https://multilingual-mastery-server.vercel.app/payment-history?email=${user?.email}`, {
				headers: { authorization: `bearer ${token}` },
			});
			return res.json();
		},
	});
	console.log(payments);
	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr className="text-center">
						<th>#</th>
						<th>Name</th>
						<th>ClassName</th>
						<th>Transaction Id</th>
						<th>Price ($)</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{payments?.map((payment, index) => (
						<tr key={payment?._id}>
							<td>{index + 1}</td>
							<td>{payment?.name}</td>
							<td>{payment?.className}</td>
							<td>{payment?.transactionId}</td>
							<td>{payment?.price}</td>
							<td>{payment?.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PaymentHistory;
