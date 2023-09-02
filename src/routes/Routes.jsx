import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses";

import AddAClass from "../pages/Dashboard/AddAClass";
import MyClasses from "../pages/Dashboard/MyClasses";
import ManageClass from "../pages/Dashboard/ManageClass";
import ManageUser from "../pages/Dashboard/ManageUser";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/instructors",
				element: <Instructors></Instructors>,
			},
			{
				path: "/classes",
				element: <Classes></Classes>,
			},
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/dashboard",
				element: <h1 className="font-bold text-4xl lg:text-7xl">DASHBOARD</h1>,
			},
			{
				path: "/dashboard/selectedClasses",
				element: (
					<StudentRoute>
						<MySelectedClasses></MySelectedClasses>
					</StudentRoute>
				),
			},
			{
				path: "/dashboard/bookedClasses",
				element: (
					<StudentRoute>
						<EnrolledClasses></EnrolledClasses>
					</StudentRoute>
				),
			},
			{
				path: "/dashboard/payment",
				element: (
					<StudentRoute>
						<Payment></Payment>
					</StudentRoute>
				),
			},
			{
				path: "/dashboard/payment-history",
				element: (
					<StudentRoute>
						<PaymentHistory></PaymentHistory>
					</StudentRoute>
				),
			},
			{
				path: "/dashboard/addAClass",
				element: (
					<InstructorRoute>
						<AddAClass></AddAClass>
					</InstructorRoute>
				),
			},
			{
				path: "/dashboard/myClasses",
				element: (
					<InstructorRoute>
						<MyClasses></MyClasses>
					</InstructorRoute>
				),
			},
			{
				path: "/dashboard/manageClass",
				element: (
					<AdminRoute>
						<ManageClass></ManageClass>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/manageUser",
				element: (
					<AdminRoute>
						<ManageUser></ManageUser>
					</AdminRoute>
				),
			},
		],
	},
]);

export default router;
