import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import useRole from "../hooks/useRole";
import Spinner from "../pages/Shared/Spinner/Spinner";

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [role, roleLoading] = useRole(user);
	const location = useLocation();

	if (loading || roleLoading) {
		return <Spinner></Spinner>;
	}

	if (user && role == "admin") {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
