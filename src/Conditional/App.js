import React from 'react'
import LogicalCompo from './LogicalCompo'
// import ConditionalCompo from './Conditional/ConditionalCompo'

import './App.css'
let arr=['BMW','AUDI','MARUTI','SWIFT']
const App = () => {
  return (
    <div className='mainfirst'>
      <h1>HELLO APP COMPONENT</h1>

      {/* <ConditionalCompo value={false} /> */}

      <LogicalCompo arrr={arr} />
       


    </div>
  )
}

export default App
