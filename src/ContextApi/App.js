import React, { createContext } from 'react'
import CompoA from './CompoA'

let fname=createContext()
let lname=createContext()
const App = () => {
  return (
    <div>
        <fname.Provider value={"APTRONDD"}>
            <lname.Provider value={"KUMAR"}>

                <CompoA  />
            </lname.Provider>


        </fname.Provider>
    </div>
  )
}

export default App
export {fname,lname}
