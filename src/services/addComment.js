import { toastOptions } from "./create";
import { toast } from "react-toastify";

const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const addComment = async (newtoken, postID, description) => {
  const Succes = () => {
      window.location.reload();
  };
  const Failure = () => {
      toast.error("Algo anda mal con tu comentario...", toastOptions);
  };
  let response = await fetch(`${BASE_URL}/post/comment/${postID}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${newtoken}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      description: description,
    }),
  })
    .then((rsp) => {
      console.log(rsp);
      rsp.ok ? Succes() : Failure();
    })
    .catch((err) => console.error(err));
};

export default addComment;
