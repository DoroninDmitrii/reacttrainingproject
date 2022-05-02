import React from "react";
import Postitem from "./Postitem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, removePost }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List</h1>
      <TransitionGroup>
        {posts.map((item) => (
          <CSSTransition 
          key={item.id}
          timeout={500}
          classNames="post">
            <Postitem remove={removePost} key={item.id} item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
