import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1/post/owned";

export const useowned = async (limit, page, token) => {
    
const response = await fetch(`${BASE_URL}?limit=${limit}&page=${page}`, {
  "method": "GET",
  "headers": {
    Authorization: `Bearer ${token}`
  }
})
    

    const data = await response.json();
    const arreyPost = data.data;
    console.log(data);
    console.log(arreyPost)
    


    
    
    
    return arreyPost;
};

