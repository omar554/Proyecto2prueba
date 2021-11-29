import {IoAddCircle as AddIcon} from "react-icons/io5"
import addComment from "../../../../services/addComment";
import SingleComment from "./SinlgeComment/SingleComment";
import { useState } from "react";

export const Comments = (props) => {
  let commentsArray = props.content;
  const sessionToken = localStorage.getItem("token");
  const [rawComment, setRawComment] = useState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = addComment(sessionToken, props.postID, rawComment);
  };

  const onChange = (e, save) => {
    save(e.target.value);
  };

  return (
    <div className ="pl-6">
      <h1 className ="text-xl -ml-5 text-coolgray-600">Comentarios</h1>
       {commentsArray.map((comment) => {
          return (
            <SingleComment
              id = {comment._id}
              description={comment.description}
              user={comment.user.username}
            />
          );
        })}
      <form onSubmit={onSubmitHandler}>
        <input 
          type="text" 
          id="comment"
          placeholder="Añade un comentario..."
          value={rawComment}
          onChange={(e) => onChange(e, setRawComment)}
          className ="rounded-xl p-2 bg-bluegray-100 -ml-5 w-full"
        />
        <button type="submit" className ="absolute text-4xl"><AddIcon/></button>
      </form>
    </div>
  );
};
