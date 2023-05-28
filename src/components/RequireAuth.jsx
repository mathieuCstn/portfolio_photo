import { useSelector } from "react-redux";
import { selectCurrentRoles, selectCurrentUser } from '../redux/userSlice'
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
    const roles = useSelector(selectCurrentRoles);
    const user = useSelector(selectCurrentUser);
    const location = useLocation();

    return (
        roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;