import { useNavigate } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';

import {BsFillEyeSlashFill} from 'react-icons/bs';
import Toogle from './edit/toogle';
import Portal from '../../Components/portal';
import { useState, useEffect } from 'react';
import Modal from '../../services/modal';

import update from '../../services/Update';


 


const Card = ({identify, post, image, date, description, likes=[], user, active }) => {

    const navigate = useNavigate();
    const [modalActive, setModalActive] = useState(false);
    const toogle = () => {setModalActive(!modalActive);}
    const [tittleForm, newTittle] = useState('');
    const [descriptionForm, newDescription] = useState('');
    const [imageForm, newImage] = useState('');
    const token = localStorage.getItem('token')
    const helper = false;

    const ident = () => {
        console.log(identify);
    }
    const onChange = (e, save) => {
        save(e.target.value);
        
        console.log("descripcion ",descriptionForm);
        console.log("imagen ", imageForm);
        console.log("titulo ,", tittleForm)
    }
    
    
    const onSubmitHandler =  async (e) => {
        e.preventDefault();
        const Data =  update(identify, token, tittleForm, descriptionForm, imageForm );
        console.log(Data)
        alert("Post Actualizado")
        toogle(!modalActive);
       
        
        
        

       
    }
    
  
    return (
        (
            <div className ="w-11/12 p-8 rounded-xl shadow-xl border border-coolgray-400 my-6 bg-white relative">
                <h1 className = "lg:text-4xl text-2xl uppercase font-bold"> {user.username}</h1>
                <img className="rounded my-2 lg:my-8" src = {image} alt = {`Image posted from user ${user.username} `} />
                <div className ="w-max right-8 mt-1  flex flex-row absolute lg:text-4xl gap-2">
                {/* <IoBookmarkSharp id="Favorite" className="cursor-pointer text-gray-400 text-opacity-50 hover:text-yellow-600 transition-all transform hover:scale-125" ></IoBookmarkSharp>
                <AiOutlineMessage id="Message" className="cursor-pointer text-gray-400 text-opacity-50 hover:text-black transition-all transform hover:scale-125" ></AiOutlineMessage>
                <AiTwotoneHeart className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-500 transition-all transform hover:scale-125" ></AiTwotoneHeart> */}
                {/* <Icon type="like"></Icon>
                <Icon type="comment"></Icon>
                <Icon type="fav"></Icon> */}
                <AiFillHeart  className="text-red-600 transition-all transform hover:scale-125"/><p>{likes.length}</p>
               
                <FiEdit  onClick={toogle} className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                <Toogle identifier={identify}
                active = {active}/>
                
                </div>
                
                <p className = "font-RobotoSlab lg:text-2xl">{post}</p>
                <p className ="font-RobotoSlab font-light lg:text-lg text-xs">{description}</p>
                <p className ="font-RobotoSlab font-light lg:text-lg text-xs">fecha: {date}</p>
                <Modal active={modalActive} toogle={toogle}
                ident= {ident} onChangeTitle={(e) => onChange(e, newTittle)} onSubmit={onSubmitHandler}
                onChangeDescription={(e) => onChange(e, newDescription)}
                onChangeImage={(e) => onChange(e, newImage)}
                >

                </Modal>
                  
            </div>
        )
    );
};





export default Card;