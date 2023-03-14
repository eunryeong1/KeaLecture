import React from "react"
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={name:"eunryeong",favoritecolor:"red"}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"yellow"},1000)
        })
    }
    shouldComponentUpdate(){
        return true;
    }
    render(){
        return(
            <div>
                <h1>my name is {this.state.name}</h1>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            </div>
        );
    }
        
    
}
export default Header;