import React, { useState } from 'react'

const Funcompo=()=>{
  const [count,setCount]=useState(1)
    return(
        <>
       <h1>MY DATA IS = {count} </h1>
       <button onClick={()=>setCount(count+3)}>increment</button>

        </>
    )
}
export default Funcompo