import React from 'react';
import { IoHeartOutline} from 'react-icons/io5';
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

import {IoBookmarkSharp} from 'react-icons/io5';
import {AiTwotoneHeart} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {BsFillEyeSlashFill} from 'react-icons/bs';
import { useEffect } from 'react';

export default class Icon extends React.Component { 
    constructor(props, id) {
      super(props);
      this.state = {
          edit: true,
          eyes: true,
          
      }
    }


    render(id) {
        
        if(this.props.type == "edit"){
           
            return(
                this.state.edit ? 
                <span>
                    <FiEdit onClick = {()=>{this.setState({edit: !this.state.edit})}} className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                </span> : 
                <span>
                    <FiEdit onClick = {()=>{this.setState({edit: !this.state.edit})}} className="cursor-pointer text-red-600 transition-all transform hover:scale-125"/>
                </span>
                
            )
        }
        if(this.props.type == "eyes"){
           
            return(
                this.state.eyes?
                <span>
                    <BsFillEyeSlashFill onClick = {()=>{this.setState({eyes: !this.state.eyes})}} className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                </span> :
                <span>
                    <BsFillEyeSlashFill onClick = {()=>{this.setState({eyes: !this.state.eyes})}} className="cursor-pointer text-red-600 transition-all transform hover:scale-125"/>

                </span>
            )
        }
    }
}
    
       