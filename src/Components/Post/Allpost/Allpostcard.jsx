import { useNavigate } from 'react-router-dom'
import Icon from '../Icon/Icon';
import Heart from './heart';
import {Comments} from './Comments/Comments';


const Allpostcard = ({identify, post, image, date, description, comments=[], likes=[], user }) => {
    const words = ["gp26_user"];

    const clickHandler = () => {
        console.log("click");
        console.log(likes);
    }


    const navigate = useNavigate();
    return (
        <div className ="w-9/12 p-8 rounded-xl shadow-xl border border-coolgray-400 my-6 bg-white relative">
            <h1 className = "lg:text-4xl text-2xl uppercase font-bold"> {user.username}</h1>
            <img className="rounded my-2 lg:my-8 m-auto" src = {image} alt = {`Image posted from user ${user.username} `} />

            <div className ="w-max right-8 mt-1  flex flex-row absolute lg:text-4xl gap-2">
                <p >{likes.length} </p>
                <Heart identifier={identify} active={likes.findIndex(like => like.username === words[0] ) != -1} />
                <Icon type="comment"></Icon>
                <Icon type="fav"></Icon>
            </div>

            <p className = "font-RobotoSlab lg:text-2xl truncate">{post}</p>
            <p className ="font-RobotoSlab font-light lg:text-lg text-xs mt-2 overflow-ellipsis overflow-hidden">{description}</p>
            <p className ="font-RobotoSlab font-light lg:text-lg text-xs mt-1">{date}</p>
            <Comments content = {comments} postID = {identify}/>
        </div>
        
    );
};

export default Allpostcard;