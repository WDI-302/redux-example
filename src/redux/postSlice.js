import { createSlice } from "@reduxjs/toolkit";

// for example

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
      },
    reducers: {
        addPost: (state, action) => {
            state.value += action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { addPost } = postSlice.actions


export default postSlice.reducer