import React from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'
const OnCLickCompo=(props)=>{
    return(
        <>
        <h1>onClick Compo: {props.countar} </h1>
        <button onClick={props.handle}>onCLick btn</button>
        </>
    )
}
export default IncrementCountarHoc(OnCLickCompo)