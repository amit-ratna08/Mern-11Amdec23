import React from 'react'
import { useParams } from 'react-router-dom'

const Mobile = () => {
    let {mobile}=useParams()
  return (
    <div>
      <h1 style={{textAlign:"center"}}>MY SEARCH RESULT .... {mobile}</h1>
      
      <div className="card" style={{width: "18rem;"}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">APPLE</li>
    <li className="list-group-item">REDMI</li>
    <li className="list-group-item">REALMI</li>
  </ul>
  <div className="card-footer">
     FOOTAR
  </div>
</div>

    </div>
  )
}

export default Mobile
