import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PastService from "../API/PostServise";
import Loader from "../components/UI/Loader/Loader";

const PostsIdPage = () => {
  const params = useParams();

  const [openInfoPosts, setOpenInfoPosts] = useState("");
  const [comments, setComments] = useState("");

  async function fetchPostsId() {
    const response = await PastService.getId(params.id);
    setOpenInfoPosts(response.data);
  }

  useEffect(() => {
    if (!openInfoPosts) {
      fetchPostsId();
    }
  }, [openInfoPosts]);

  async function fetchGetCommentsByPostsId() {
    const response = await PastService.getCommentsByPostId(params.id);
    setComments(response.data);
  }

  useEffect(() => {
    if (!comments) {
      fetchGetCommentsByPostsId();
    }
  }, [comments]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>The page with ID={params.id} is working!</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {!openInfoPosts ? (
          <Loader />
        ) : (
          <h3>
            {openInfoPosts.title} {openInfoPosts.body}
          </h3>
        )}
      </div>

      <h2>Comments</h2>
      
        {!comments ? (
          <Loader />
        ) : (
          comments.map((item) => {
            return (
              <div style={{ marginTop: "30px", color: "blue" }}>
                <h4>Email: {item.email}</h4>
                <h4>Body: {item.body}</h4>
              </div>
            );
          })
        )}
    </div>
  );
};

export default PostsIdPage;
