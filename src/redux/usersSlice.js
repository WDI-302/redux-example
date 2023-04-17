import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersArray: [
            'Grumpy',
            'Happy',
            'Sleepy',
            'Dopey',
            'Doc',
            'Sneezy'
        ]
    },
    reducers: {
        addUser: (state, action) => {
            state.usersArray.push(action.payload)
        }
    }
})

export const { addUser} = usersSlice.actions

export default usersSlice.reducer