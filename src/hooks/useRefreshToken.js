import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../redux/userSlice"

const useRefreshToken = () => {
    const dispatch = useDispatch()

    const refresh = async () => {
        const response = await axios.get('/api/refresh', {
            withCredentials: true
        })
        dispatch(setAccessToken({accessToken: response.data.accessToken}))
        return response.data.accessToken
    }
    return refresh
}

export default useRefreshToken