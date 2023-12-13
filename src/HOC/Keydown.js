import React from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'
const Keydown = (props) => {

  return (
    <div>
      <h1> KeyDown Compo : {props.countar}  </h1>
      <button onKeyDown={props.handle} >KeyDown btn</button>
    </div>
  )
}

export default IncrementCountarHoc(Keydown)
