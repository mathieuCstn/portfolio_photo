/**
 * https://axios-http.com/fr/docs/interceptors
 */

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { axiosPrivate } from '../api/axios'
import useRefreshToken from './useRefreshToken'

const useAxiosPrivate = () => {
    const refresh = useRefreshToken() 
    const auth = useSelector((state) => state.auth)

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(config => {
            if(!config.headers['Authorization']) config.headers['Authorization'] = `Bearer ${auth?.token}`
            return config
        }, error => Promise.reject(error))

        const responseIntercept = axiosPrivate.interceptors.response.use(config => {
            return config
        }, async error => {
            const prevRequest = error?.config
            if(error?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true
                const newAccessToken = await refresh()
                prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                return axiosPrivate(prevRequest)
            }
            return Promise.reject(error)
        })

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [auth, refresh])

    return axiosPrivate
}

export default useAxiosPrivate