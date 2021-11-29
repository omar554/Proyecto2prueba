import React, {Component} from "react";
import Portal from "../Components/portal";
import { IoClose as CloseIcon } from "react-icons/io5";


export default class Modal extends Component{
    
   
    render(){
        
        
        const {children, toogle, active, ident, onChangeTitle, onChangeDescription, onChangeImage, onSubmit, newTittle} = this.props;
        
        return(
            <Portal>
                {active     && (
                    <div className ="border rounded-md border-bluegray-300 lg:w-4/12 lg:h-max lg:p-8 w-4/5 px-4 py-8 fixed right-1/2 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md">
                        <div className = "relative">
                            <button onClick={toogle} ><CloseIcon className = "text-2xl fixed top-6 right-6 transform hover:scale-125 transition-all"/></button>
                            <h2 className = "mb-4 font-RobotoSlab text-3xl">Modifica el post</h2>
                            <form onSubmit={onSubmit}>
                                <div className ="flex flex-none flex-col">
                                    <p className ="w-max text-lg font-bold  m-auto mb-1"> Titulo</p>
                                    <input  onChange={onChangeTitle} type="text" placeholder= "Mi publicacion..." className="border w-3/4 mb-10 m-auto p-2 text-md" required></input>
                                    <p className ="w-max text-lg font-bold m-auto mb-1"> Descripción</p>
                                    <input onChange={onChangeDescription} type="text" placeholder= "Lorem ipsum..." className="border w-3/4 mb-10 m-auto p-2 text-md"></input>
                                    <p className ="w-max text-lg font-bold m-auto mb-1"> Imagen</p>
                                    <input onChange={onChangeImage} type="text" placeholder= "Url de la imagen..." className="border w-3/4 mb-10 m-auto p-2 text-md" required></input>
                                    <button onClick={ident} className = "m-auto w-1/2 lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100"> Enviar! </button>
                                </div>
                            </form>
                        </div> 
                    </div>
                )}
            </Portal>
            )
    }
}
