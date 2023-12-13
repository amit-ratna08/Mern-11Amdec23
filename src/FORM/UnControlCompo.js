import React, { useRef } from 'react'

const UnControlCompo = () => {

    const inputRef=useRef(null)

    function handlechange(e){
         e.preventDefault()

       console.log(inputRef.current.value)

       let res= document.getElementById('inputsecond').value
       console.log(res)
    }
  return (
    <div>
            <h3>Uncontrolled Component</h3>
            <form onSubmit={handlechange}>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    ref={inputRef}
                />
                <br />
                <br />
                <br />

             
                <br />   <input type='text' id='inputsecond' placeholder='Enter second text' />
                <br />

                <button type="submit">Submit</button>
            </form>
    </div>
  )
}

export default UnControlCompo
