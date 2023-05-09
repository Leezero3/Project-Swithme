import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post : [
        {
            userId:"",
            type:"",
            title:"",
            totalMember:0,
            contents:""
        }
    ]
};

const counterSlice = createSlice({
    name:'editPostStore',
    initialState,
    reducers:{
        setPost:(state, action) => {
            state.post = action.payload;
            console.log("initialState",state.post);
        }
    }
});

export const { setPost } = counterSlice.actions;
export default counterSlice.reducer;
