import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'auth',
    initialState: {user: null, token: null, roles: []},
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    }
})

export const {setCredentials, logOut} = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentRoles = (state) => state.auth.roles