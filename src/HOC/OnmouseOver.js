import React from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'
const OnmouseOver = (props) => {
  return (
    <div>
      <h1>onMouseOver : {props.countar} </h1>
      <button onMouseOver={props.handle}>onMouseOver btn</button>
    </div>
  )
}

export default IncrementCountarHoc(OnmouseOver)
