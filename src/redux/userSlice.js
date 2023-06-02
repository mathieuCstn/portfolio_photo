import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'auth',
    initialState: {userId: null, token: null, roles: []},
    reducers: {
        setCredentials: (state, action) => {
            const { userId, accessToken, roles } = action.payload
            state.userId = userId
            state.roles = roles
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.userId = null
            state.roles = []
            state.token = null
        }
    }
})

export const {setCredentials, logOut} = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state) => state.auth.userId
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentRoles = (state) => state.auth.roles