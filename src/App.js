import React from 'react'
import OnCLickCompo from './HOC/OnCLickCompo'
import OnmouseOver from './HOC/OnmouseOver'
import Keydown from './HOC/Keydown'

const App = () => {
  return (
    <div>
      <OnCLickCompo />
      <OnmouseOver />
      <Keydown />
    </div>
  )
}

export default App
