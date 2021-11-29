import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const usecreate = async (title, description, image, newtoken) => {
  
  const cleanAll = () => {
    document.getElementById('tittleInput').value = '';
    document.getElementById('descriptionInput').value = '';
    document.getElementById('imageInput').value = '';
  }
  const succesToast = () => toast.success("Succes!",toastOptions)
  const errorToast = () => toast.error("Something went wrong 😕",toastOptions)
  
  const response = await fetch(`${BASE_URL}/post/create`, {
    method: "POST",
    headers: {
      
      Authorization: `Bearer ${newtoken}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      image: image
    })
  });
  
  if (response.ok) {
    succesToast();
    cleanAll();
    console.log(response);
    const data = await response.json();
    return data;
    
    
  }
  else {
    errorToast();
    console.log(response);
    return {};
    
    
  }
  
  
  
}
export const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default usecreate;
