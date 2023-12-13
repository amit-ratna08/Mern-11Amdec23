import React, { useState } from 'react'

const ControlCompo = () => {
  const [name,setName]=useState("")

  function handlechange(e){
    console.log(e.target.value)
    setName(e.target.value)
  }   
  return (
    <div>
         <form>
      <label >First name:</label><br />
        <input type="text"  value={name} onChange={handlechange} />
      </form>
    </div>
  )
}

export default ControlCompo
