import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../pages/Shared/Navbar/Navbar";
import useRole from "../hooks/useRole";
import { HiOutlineCursorClick } from "react-icons/hi";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { MdPlaylistAddCheck } from "react-icons/md";
import { AiOutlineUser, AiOutlineRead, AiOutlineFileAdd, AiOutlineFileText } from "react-icons/ai";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const [role] = useRole(user);
	// console.log(role);

	return (
		<>
			<Navbar></Navbar>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<Outlet></Outlet>

					<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
						Open drawer
					</label>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
						{/* Sidebar content here */}
						{role == "student" ? (
							<>
								<li>
									<NavLink to="/dashboard/selectedClasses">
										<HiOutlineCursorClick></HiOutlineCursorClick>My Selected Classes
									</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/bookedClasses">
										<MdPlaylistAddCheck></MdPlaylistAddCheck>My Enrolled Classes
									</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/payment-history">
										<HiOutlineCreditCard></HiOutlineCreditCard>Payment History
									</NavLink>
								</li>
							</>
						) : role == "instructor" ? (
							<>
								<li>
									<NavLink to="/dashboard/addAClass">
										<AiOutlineFileAdd></AiOutlineFileAdd>Add a class
									</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/myClasses">
										<AiOutlineFileText></AiOutlineFileText>My Classes
									</NavLink>
								</li>
							</>
						) : (
							<>
								<li>
									<NavLink to="/dashboard/manageClass">
										<AiOutlineRead></AiOutlineRead>Manage Class
									</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/manageUser">
										<AiOutlineUser></AiOutlineUser>Manage User
									</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
