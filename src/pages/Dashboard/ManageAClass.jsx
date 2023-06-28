import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Swal from "sweetalert2";

const ManageAClass = ({ Class, refetch }) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const handleApprove = (id) => {
		fetch(`http://localhost:5000/classes/admin/${id}?status=approved`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					setIsDisabled(true);
					refetch();
					Swal.fire({
						icon: "success",
						title: `Class is Approved`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const handleDeny = (id) => {
		fetch(`http://localhost:5000/classes/admin/${id}?status=denied`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					setIsDisabled(true);
					Swal.fire({
						icon: "success",
						title: `Class is Denied`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
	return (
		<>
			<div key={Class?._id} className="card bg-base-100 shadow-xl">
				<figure>
					<img src={Class?.classImage} alt="Shoes" className="h-full w-full " />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{Class?.className}</h2>
					<p>Instructor: {Class?.instructorName}</p>
					<p>Email: {Class?.instructorEmail}</p>
					<p>Available Seats: {Class?.availableSeats}</p>
					<p>Price: {Class?.price}$</p>
					<p>Status: {Class?.status}</p>
					<div className="card-actions">
						<button className="btn btn-info" onClick={() => handleApprove(Class?._id)} disabled={isDisabled || Class?.status != "pending"}>
							Approve
						</button>
						<button className="btn btn-info" onClick={() => handleDeny(Class?._id)} disabled={isDisabled || Class?.status != "pending"}>
							Deny
						</button>

						<button className="btn btn-info" onClick={openModal}>
							Feedback
						</button>
					</div>
				</div>
			</div>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
										Feedback Form
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											Send Feedback
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default ManageAClass;
