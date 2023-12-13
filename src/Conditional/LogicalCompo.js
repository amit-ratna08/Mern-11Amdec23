import React from 'react'
import '../App.css'
const LogicalCompo = (props) => {

    let result=props.arrr
  return (
    <div className='main'>
        <h1 style={{color:"red",backgroundColor:"green"}}>MY CAR IN SHOWROOM</h1>
      {
       result.length>3 && <h2>IN MY SHOWROOM I HAVE   = {result[2]} CAR </h2>
      }
    </div>
  )
}

export default LogicalCompo
