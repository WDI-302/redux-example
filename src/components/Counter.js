import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counterSlice'
import { addUser } from "../redux/usersSlice";

const Counter = () => {
    // redux store looks like the following:
    // state: {
    //     counter:{
    //         value:0
    //     },
    //     post: {
    //         posts: []
    //     }
    // }
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const usersArr = useSelector((state) => state.users.usersArray)
    // new Selector for totalAges
    const [onChange, setOnChange] = useState(0)
    const [newUser, setNewUser] = useState('')

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <input type='number'  onChange={(e) => setOnChange(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(onChange))}>Submit</button>
        
        <p>{usersArr.map(e => e.name + ', ')}</p>
        <h3>Total Users Ages: </h3>
        <button>Add Ages</button><br />
        <input type='text' onChange={(e) => setNewUser(e.target.value)} placedholder='please enter new user'/>
        <button onClick={() => dispatch(addUser(newUser))}>Add User</button>

    </div>
    
  )
}

export default Counter

