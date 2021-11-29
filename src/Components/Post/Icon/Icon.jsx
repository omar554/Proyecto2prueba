import React from 'react';
import { IoHeartOutline} from 'react-icons/io5';
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

import {IoBookmarkSharp} from 'react-icons/io5';
import {AiTwotoneHeart} from 'react-icons/ai';

export default class Icon extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
          like: true,
          fav: true,
      }
    }
    

    render() {
        
        if(this.props.type == "like"){
            const {getlike} = this.props;
            return(
                this.state.like ? 
                <span>
                    <IoHeartOutline onClick = {()=>{this.setState({like: !this.state.like})} } onAuxClick={getlike} className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                </span> : 
                <span>
                    <AiTwotoneHeart onClick = {()=>{this.setState({like: !this.state.like})}} className="cursor-pointer text-red-600 transition-all transform hover:scale-125"/>
                </span>
                
            )
        }
        if (this.props.type == "comment"){
            return(
                <span>
                    <AiOutlineMessage className="cursor-pointer text-gray-400 text-opacity-50 hover:text-coolgray-700 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                </span>
            )
        }
        
        if (this.props.type == "fav") {
            return(
              

                this.state.like ? 
                <span>
                    <IoBookmarkOutline onClick = {()=>{this.setState({like: !this.state.like})}} className="cursor-pointer text-gray-400 text-opacity-50 hover:text-yellow-600 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                </span> : 
                <span>
                    <IoBookmarkSharp onClick = {()=>{this.setState({like: !this.state.like})}} className="cursor-pointer text-yellow-600 transition-all transform hover:scale-125"/>
                </span>
            )
        }
    }
}