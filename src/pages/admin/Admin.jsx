import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Admin() {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const [post, newPost] = useState("");

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  const createHandler = () => {
    navigate("/Create");
  };

  const updateHandler = () => {
    navigate("/Update");
  };
  const ownedHandler = () => {
    navigate("/Owned");
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
      <div className="p-10 w-11/12 lg:w-1/2 h-max min-h-screen flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center mb-4">
          Página de Admin
        </h2>
        <h3 className="text-xl lg:text-4xl font-medium text-gray-700 text-center -mt-12">
          Has ingresado a la plataforma con credenciales de administrador
        </h3>

        <p className="text-lg lg:text-3xl font-medium text-gray-400 text-center -mt-12">
          Selecciona uno de los botones para realizar la acción correspondiente
        </p>

        <button
          onClick={ownedHandler}
          className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 hover:border-blue-400 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-400 py-2 px-4 hover:text-blue-700 text-gray-100"
        >
          Ver mis posts
        </button>

        <button
          className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 hover:border-blue-400 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-400 py-2 px-4 hover:text-blue-700 text-gray-100"
          onClick={createHandler}
        >
          Crear post
        </button>

        <button
          onClick={logoutHandler}
          className="mt-6 w-1/2 lg:w-1/3 transition rounded border border-blue-500 hover:border-blue-400 duration-300 ease-in-out text-lg text-extrabold uppercase bg-blue-500 hover:bg-blue-400 py-2 px-4 hover:text-blue-700 text-gray-100"
        >
          Cerrar Sesión
        </button>
      </div>
    </section>
  );
}
