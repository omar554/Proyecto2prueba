import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import usecreate from "../../services/create";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Create() {
  const { token } = useUserContext();
  const [tittle, newTittle] = useState("");
  const [description, newDescription] = useState("");
  const [image, newImage] = useState("");
  const gettoken = localStorage.getItem("token");
  
  const onChange = (e, save) => {
    save(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const Data = usecreate(tittle, description, image, gettoken);
  };


  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen py-20 px-10">
        <><ToastContainer/></>
      <div className="border border-bluegray-200 border shadow-xl mt-8 lg:mt-24 m-auto h-max lg:w-4/12 flex flex-none flex-col p-8">
        <form onSubmit={onSubmitHandler}>
          <h2 className="my-4 font-RobotoSlab text-3xl w-m">
            Crea una nueva publicacion!
          </h2>

          <input
            type="text"
            id="tittleInput"
            placeholder="tittle"
            value={tittle}
            onChange={(e) => onChange(e, newTittle)}
            className="border w-11/12 mb-10 m-5 p-2 text-md"
          />
          <input
            type="text"
            id="descriptionInput"
            placeholder="description"
            value={description}
            onChange={(e) => onChange(e, newDescription)}
            className="border w-11/12 mb-10 m-5 p-2 text-md"
          />
          <input
            type="text"
            id="imageInput"
            placeholder="image"
            value={image}
            onChange={(e) => onChange(e, newImage)}
            className="border w-11/12 mb-10 m-5 p-2 text-md"
          />

          <div className ="flex justify-around">
          <button
            type="submit"
            className="mx-4 w-max lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100"
            >
            create
          </button>

          <button
            onClick={() => navigate("/admin")}
            className="mx-4 w-max lg:w-1/3 transition rounded border border-blue-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100"
            >
            back
          </button>
            </div>
        </form>
      </div>
    </div>
  );
}
