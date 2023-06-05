import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentRoles, selectCurrentUser, setCredentials } from '../redux/userSlice'
import { useLocation, Navigate, Outlet, redirect } from "react-router-dom";
import { axiosPrivate } from "../api/axios";

function RequireAuth({ allowedRoles }) {
    const roles = useSelector(selectCurrentRoles);
    const user = useSelector(selectCurrentUser);
    const location = useLocation();
    const dispatch = useDispatch()

    useEffect(() => {
        const reconnectWithRefreshToken = async () => {
            try {
                const response = await axiosPrivate.get('/api/refresh')
                const { userId, accessToken, roles } = response.data
                console.log(dispatch(setCredentials({userId, accessToken, roles})))
            } catch (error) {
                console.log(error)
                console.log("just here")
                redirect('/login')
            }
        }
        if(!user) {
            reconnectWithRefreshToken()
        }
    }, [dispatch, user])

    return (
        roles.length ? roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
                : user
                    ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                    : <Navigate to="/login" state={{ from: location }} replace />
            : null
    );
}

export default RequireAuth;