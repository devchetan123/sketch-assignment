import { createSlice } from "@reduxjs/toolkit";
import { setValue } from "../../utils/localStorage";
import { initialState } from "./auth.constants"

const authSlice = createSlice({
    name : "AUTH",
    initialState,
    reducers : {
        login(state, action){
            setValue("payload", action.payload)
            state.isAuth = true
        },
        logout(state){
            state.isAuth = false
            localStorage.clear()
        }
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;