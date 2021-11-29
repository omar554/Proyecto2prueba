import { ToastContainer, toast } from 'react-toastify';

const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1/post/update/";

const update = async (id, token, title, description, image) => {

const response = await fetch(`${BASE_URL}${id}`, {
  method: "PUT",
  "headers": {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: title,
    description: description,
    image: image
  })
})

const data = await response.json();
return data;
}

export default update;

