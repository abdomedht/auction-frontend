import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    userId: null,
};
// int x =0 ;
// " x is : " + x
//  ` srirbviu ${count}`
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
    },
});

export const { setToken, setUserId } = userSlice.actions;

export default userSlice.reducer;
