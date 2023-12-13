import React, { useContext } from 'react'
import { fname, lname } from '../App'

const CompoB = () => {
    let res=useContext(fname)
    let res2=useContext(lname)
  return (
    <div>
        <h1> MY NAME IS {res} and {res2} </h1>

    </div>
  )
}

export default CompoB
