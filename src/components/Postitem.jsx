import React from "react";
import { useNavigate } from "react-router-dom";
import Mybutton from "./UI/button/Mybutton";

const Postitem = (props) => {

  const navigate = useNavigate()

  const navigateOpenParams = () => {
    return navigate(`/posts/${props.item.id}`)
  }

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.item.id} {props.item.title}</strong>
        <div>{props.item.body}</div>
      </div>
      <div className="post__btns">
        <Mybutton onClick={() => navigateOpenParams()}>Open</Mybutton>
      </div>
      <div className="post__btns">
        <Mybutton onClick={() => props.remove(props.item)}>Delete</Mybutton>
      </div>
    </div>
  );
};

export default Postitem;
