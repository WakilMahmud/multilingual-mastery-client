import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
import Theme from "../Theme/Theme";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const [show, setShow] = useState(false);
	const { user, logOut } = useContext(AuthContext);

	const handleLogout = () => {
		logOut()
			.then()
			.catch((error) => console.log(error));
	};

	const navLists = (
		<>
			<li className="font-semibold text-lg">
				<Link to="/">Home</Link>
			</li>
			<li className="font-semibold text-lg">
				<Link to="/instructors">Instructors</Link>
			</li>
			<li className="font-semibold text-lg">
				<Link to="/classes">Classes</Link>
			</li>
			{user && (
				<>
					<li className="font-semibold text-lg">
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<div className="navbar-end w-auto" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
						<label className="btn btn-ghost btn-circle avatar">
							{user && <img className="w-10 rounded-full" src={user?.photoURL} alt="User Profile" />}
							{show && <small className="text-blue-500 relative lg:-right-11 lg:-top-8">{user?.displayName}</small>}
						</label>
					</div>
				</>
			)}

			{!user ? (
				<Link to="/login">
					<button className="btn btn-info btn-outline">Login</button>
				</Link>
			) : (
				<button className="btn btn-info btn-outline" onClick={handleLogout}>
					Logout
				</button>
			)}

			<Theme></Theme>
		</>
	);

	return (
		<div className="navbar font-bold bg-blue-50">
			<div className="flex md:hidden ">
				<div className="dropdown">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle"
						onClick={() => {
							setClick(!click);
						}}
					>
						<svg fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className={`menu menu-compact z-10 dropdown-content mt-3 gap-2 p-2 shadow bg-base-100 rounded-box w-52 ${click ? "hidden" : "flex"}`}
					>
						{navLists}
					</ul>
				</div>
			</div>

			<div className="w-full flex lg:justify-around">
				<div className="navbar-start w-auto flex items-center">
					<Link to="/">
						<img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
					</Link>

					<Link to="/" className="btn btn-ghost normal-case text-2xl lg:text-4xl font-extrabold">
						MultiLingual Mastery
					</Link>
				</div>
				<div className="navbar-center hidden lg:block">
					<ul className="flex flex-row menu  mt-3 p-2 gap-2 rounded-box">{navLists}</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
