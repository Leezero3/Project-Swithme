import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
};

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        token: (state = initialState, action) => {
            state.token = action.payload;
        },
    },
});

export const { token } = tokenSlice.actions;

export default tokenSlice.reducer;
