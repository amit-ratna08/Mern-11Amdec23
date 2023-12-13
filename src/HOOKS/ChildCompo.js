import React, { useEffect } from 'react'

const ChildCompo = () => {

    useEffect(()=>{
        console.log("WELCOME MY SITE")
        return ()=>{
            console.log("BY BY I'M OUT ")
        }
    })
  return (
    <div>
      <h1>CHILD-COMPONENT</h1>
    </div>
  )
}

export default ChildCompo
