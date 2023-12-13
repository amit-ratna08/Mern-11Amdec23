import React, { useMemo, useState } from 'react'

const MemoHooks = () => {
    const [count,setCount]=useState(2)

    const [val,setVal]=useState(5)



    function multiply(){
      console.log("call multiply function")
      return count*10
    }

    const multicount=useMemo(function multiply(){
      console.log("call multiply function")
      return count*10
    },[count])
  return (
    <div>
      <h2>Count :- {count} </h2>
      <h2>VALUE :- {val} </h2>
       <h2> {multicount} </h2>


      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setVal(val*2)}>multiplu by 2</button>


      

    </div>
  )
}

export default MemoHooks
