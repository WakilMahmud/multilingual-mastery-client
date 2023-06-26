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
		element: <Dashboard></Dashboard>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/dashboard",
				element: <h1 className="font-bold text-7xl">DASHBOARD</h1>,
			},
			{
				path: "/dashboard/selectedClasses",
				element: <MySelectedClasses></MySelectedClasses>,
			},
		],
	},
]);

export default router;
