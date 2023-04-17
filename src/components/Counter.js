import React from 'react'
import { useSelector } from 'react-redux'

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

  return (
    <div>Counter: {count}</div>
  )
}

export default Counter

