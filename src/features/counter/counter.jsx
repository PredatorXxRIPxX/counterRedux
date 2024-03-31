import React from 'react'
import { useSelector,useDispatch } from "react-redux"
import { increment,decrement,reset,incrementByAmout } from './counterSlice'
import { useState } from 'react';


function counter() {

    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmout,setIncrementAmount] = useState(0) 
    const addValue = Number(incrementAmout)||0
    const resetAll = () =>{
      setIncrementAmount(0)
      dispatch(reset())
    }

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())} >+</button>
        <button onClick={()=>dispatch(decrement())} >-</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
      </div>

      <input type='text' value={incrementAmout} onChange={(e)=>setIncrementAmount(e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmout(addValue))}>add amount</button>
      <button onClick={resetAll} >reset all</button>
    </div>
  )
}

export default counter
