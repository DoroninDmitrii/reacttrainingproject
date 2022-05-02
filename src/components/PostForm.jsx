import React from "react";
import { useState } from "react";
import Myinput from "./UI/input/Myinput";
import Mybutton from "./UI/button/Mybutton"

const PostForm = ({create}) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

    const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    create(newPost)
    setTitle('')
    setBody('')
  };

  return (
    <div>
      <form>
        <Myinput
          type="text"
          placeholder="Post's name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Myinput
          type="text"
          placeholder="Post's description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Mybutton onClick={addNewPost}>Create post</Mybutton>
      </form>
    </div>
  );
};

export default PostForm;
