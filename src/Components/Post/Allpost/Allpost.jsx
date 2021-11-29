import { useUserContext } from "../../../context/userContext";
import { useState, useEffect } from "react";
import { useallowned } from "../../../services/allowned";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Allpostcard from "./Allpostcard";
import NavButton from "./NavButton/NavButton";

export default function Allowned() {
  const { logout } = useUserContext();
  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  const navigate = useNavigate();

  const { token } = useUserContext();
  const limit = 20;
  const gettoken = localStorage.getItem("token");

  let [page, setPage] = useState(0);
  const [post, setPost] = useState([]);

  const nextPage = () => {
    setPage((page += 1));
    document.documentElement.scrollTop = 0
  };
  const previousPage = () => {
    if (page > 0) {
      setPage((page -= 1));
    } else {
      setPage((page = 0));
    }
    document.documentElement.scrollTop = 0
  };

  useEffect(() => {
    const onSubmitHandler = async () => {
      try {
        console.log("click");
        const data = await useallowned(limit, page, gettoken);

        setPost(data);
      } catch (error) {
        console.log(error);
        console.log("esta es post", post._id);
      }
    };
    onSubmitHandler();
  }, [page]);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
        <><ToastContainer/></>
      <div className="lg:p-11 pt-8 pb-16 lg:w-1/2 w-full h-max flex flex-col justify-around items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">
          All post
        </h2>
        <div className ="flex pt-6">
        <NavButton direction="L" changePage={previousPage}/>
        <p className = "text-xl px-4 py-2 h-max w-max m-0 text-blue-400 bg-white rounded shadow text-center"> {page + 1} </p>
        <NavButton direction="R" changePage={nextPage}/>
        </div>

        {post.map((post) => {
          return (
            <Allpostcard
              identify={post._id}
              post={post.title}
              date={post.createdAt}
              image={post.image}
              description={post.description}
              likes={post.likes}
              comments={post.comments}
              user={post.user}
            />
          );
        })}
        <span className = "flex">
          <NavButton direction="L" changePage={previousPage}/>
          <p className = "text-xl px-4 py-2 h-max w-max m-0 text-blue-400 bg-white rounded shadow text-center"> {page + 1} </p>
          <NavButton direction="R" changePage={nextPage}/>
        </span>
        <button
          onClick={logoutHandler}
          className="fixed bottom-5 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white"
        >
          Log out
        </button>
      </div>
    </section>
  );
}
