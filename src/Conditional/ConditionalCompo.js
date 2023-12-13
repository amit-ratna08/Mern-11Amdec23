import React from 'react'


const Welcome=()=>{
    return(
        <>
        <h1>HELLO WELCOME COMPONENT</h1>
        </>
    )
}


const Hello=()=>{
    return(
        <>
        <h1>WELCOME TO  HELLO COMPONENT</h1>
        </>
    )
}

const ConditionalCompo = (props) => {
   let result=props.value

//    if(result){
//     return <Welcome />
//    }
//    else{
//     return <Hello />
//    }


return(
    <>
    {

        // result ?<Welcome /> :<Hello />
    }
    
    </>
)
}


export default ConditionalCompo

// export {Welcome,Hello}
