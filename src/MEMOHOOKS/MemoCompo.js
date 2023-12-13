import React, { memo } from 'react'

const MemoCompo = (props) => {
    console.log("Memo Hooks Compo")
  return (
    <div>
      <h1>MY MEMOCOMPO VALUE  {props.value}  </h1>

      <button onClick={props.handle}>increment</button>
    </div>
  )
}

export default memo(MemoCompo)
