
const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1/post/toggle/";

const usetoggle = async (id, token) => {
    const response = await fetch(`${BASE_URL}${id}`, {
        "method": "PATCH",
        "headers": {
        Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    
    return data;
    };
export default usetoggle;
