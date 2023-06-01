import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice"
import screenDeviceReducer from "./screenDeviceSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        screenDevice: screenDeviceReducer
    }
})

export default store