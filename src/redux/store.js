import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import postReducer from './postSlice'
import usersReducer from './usersSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer,
        users: usersReducer
    }
})