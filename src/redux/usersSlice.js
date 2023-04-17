import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersArray: [{
            name: 'Grumpy',
            age: 40
        },
        {
            name: 'Happy',
            age: 20
        },
        {
            name: 'Sleepy',
            age: 80
        },
        {
            name: 'Dopey',
            age: 5
        },
        {
            name: 'Sneezy',
            age: 30
        }],
        totalAges: 0
        
    },
    reducers: {
        addUser: (state, action) => {
            state.usersArray.push({
                name: action.payload,
                age:99
            })
        }
        //add totalAges Function
    }
})

export const { addUser} = usersSlice.actions

export default usersSlice.reducer