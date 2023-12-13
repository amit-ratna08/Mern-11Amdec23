import React from 'react'


// let data='rahul'
class ClassCompo extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            name:"rahul",
            count:1
        }
    }
    // updatename(){
    //     // data="amana"
    //     // console.log(data)

    //     this.setState({
    //     //    name:"aman"
    //     count:this.state.count+1
    //     })
    // }


    render(){
        return(
            <>
            {/* <h1>THIS IS A CLASS COMPO {this.props.data}  </h1> */}

            {/* <h1>{this.state.name} </h1> */}
            <h1>{this.state.count} </h1>
            {/* <button onClick={this.updatename.bind(this)}>update name</button> */}

            <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>

            </>
        )
    }
}

export default ClassCompo