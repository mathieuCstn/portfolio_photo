import { createSlice } from "@reduxjs/toolkit";

const screenDeviceSlice = createSlice({
    name: 'screenDevice',
    initialState: {type: null},
    reducers: {
        setType: (state, action) => {
            state.type = action.payload
        }
    }
})

export default screenDeviceSlice.reducer

export const {setType} = screenDeviceSlice.actions

export const selectDeviceType = (state) => state.screenDevice.type