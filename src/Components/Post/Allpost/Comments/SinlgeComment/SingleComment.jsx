import React from "react";

export default class SingleComment extends React.Component {
    constructor (props){super(props)}
    render(){
        return(
            <div>
                <h3 className ="text-blue-900 text-lg capitalize font-RobotoSlab">{this.props.user}</h3>
                <p className = "pl-4 mb-3 text-sm font-RobotoSlab">{this.props.description}</p>
            </div>
        )
    }
}