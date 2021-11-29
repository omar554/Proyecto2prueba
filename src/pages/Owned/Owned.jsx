
import { useUserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import  usecreate from '../../services/create'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useowned } from '../../services/owned';
import Card from "./Card";
import NavButton from "../../Components/Post/Allpost/NavButton/NavButton";
import { data } from 'autoprefixer';


export default function Owned() {


const limit = 10;
const gettoken = localStorage.getItem('token');

const [post, setPost] = useState([]);

const [helper, updateHelper] = useState(0);
let [page, setPage] = useState(0);
const nextPage = () => {
    setPage((page += 1));
  };
  const previousPage = () => {
    if (page > 0) {
      setPage((page -= 1));
    } else {
      setPage((page = 0));
    }
  };

  const actualizarHandler = () => {
    updateHelper(helper + 1);
  };




useEffect(() => {
const onSubmitHandler =  async () => {
    try {
        console.log('click')
    const data =  await useowned(limit, page, gettoken );
    
    setPost(data);
    console.log(data)
    console.log(data.map(post => post.description));
    

    
    
    }
    
   
    catch (error) {
        console.log(error)
    console.log("esta es post", post._id)
    }
    
    
    
};
onSubmitHandler();
}, [page,helper ])    



const navigate = useNavigate();


return (
        
    <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
    <div className="p-11 w-11/12 lg:w-1/2 h-max flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">Admin post</h2>
        {
      post.map( post => {
        return <Card
          
          identify={post._id}
          post={post.title}
          date={post.createdAt}
          image={post.image}
          description={post.description}
          likes={post.likes}
          user={post.user}
          active={post.active}
          />
      })
    }
     <span>
          <NavButton direction="L" changePage={previousPage}/>
          <NavButton direction="R" changePage={nextPage}/>
        </span>
       
       <button onClick= {actualizarHandler} className="fixed bottom-20 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white">Actualizar</button>
       
       <button onClick= {() => navigate('/admin')} className="fixed bottom-5 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white">Regresar</button>

    </div>
</section>
            
            
        
        
    
)
}