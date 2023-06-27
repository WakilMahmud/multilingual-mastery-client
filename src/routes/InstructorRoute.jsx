import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useRole from "../hooks/useRole";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../pages/Shared/Spinner/Spinner";

const InstructorRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [role, roleLoading] = useRole(user);
	const location = useLocation();

	if (loading || roleLoading) {
		return <Spinner></Spinner>;
	}

	if (user && role == "instructor") {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
