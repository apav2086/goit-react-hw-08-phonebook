import { createSlice } from "@reduxjs/toolkit";
import { logOutUser, signUpUser, logInUser  } from "./operators";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}; 

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(signUpUser.pending, state => {
            state.isLoggedIn = false;
        })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
             .addCase(logInUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logOutUser.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.user = { name: null, email: null };
                state.token = null;
            })
           
    }
});

export default userSlice.reducer;