import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../components/UI/NotFound/NotFound";
import PostsIdPage from "../pages/PostsIdPage";
import Login from "../pages/Login";

const RoutesApp = () => {

  const isAuth = true;

  return (
    
    <Routes>
      { isAuth ? <Route path="/login" element={<Login/>}/> :
      <>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostsIdPage/>}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/posts"/> }/>
      </>
      }
    </Routes>
  );
};

export default RoutesApp;
