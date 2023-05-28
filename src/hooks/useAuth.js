import { useDispatch } from 'react-redux'
import { setCredentials } from '../redux/userSlice'

export default function useAuth() {
    return useDispatch(setCredentials())
}