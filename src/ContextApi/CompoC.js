import React from 'react'
import { fname,lname } from '../App'
const CompoC = () => {
  return (
    <div>
        <fname.Consumer>
       {
        (item)=>{
            return(
                <>
               <lname.Consumer>
                {
                  (itemm)=>{
                    return(
                      <>
                      <h1>MY NAME IS {item} and  {itemm}  </h1>
                      </>
                    )
                  }
                }
               </lname.Consumer>
            
                </>
            )
        }
       }

        </fname.Consumer>
    </div>
  )
}

export default CompoC
