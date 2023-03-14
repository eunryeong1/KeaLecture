import React from "react"
class Car extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"Ford",
            model:"Mustang",
            color:"red",
            year:1964
        }
    }
    changeColor=()=>{
        this.setState({color:"blue"})
    }
    render(){
        return(
           <div>
            <h1>My {this.state.brand}</h1>
            <p>
                <h3>it is a {this.state.model}</h3>
                this color is {this.state.color} and from {this.state.year}
            </p>
            <button
            type="button"
            onClick={this.changeColor}
            >changeColor</button>
           </div> 
        );
    }
}
export default Car