import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../components/UI/NotFound/NotFound";
import PostsIdPage from "../pages/PostsIdPage";
import Login from "../pages/Login";
import { AuthContext } from "../context";

const RoutesApp = () => {

 const { state, dispatch } = useContext(AuthContext)
 
  return (
    
    <Routes>
      { state.isAuth ? 
      
      <>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<Navigate to="/login"/>}/>
      </>
      :
      <>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostsIdPage/>}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/posts"/> }/>
      <Route path="/login" element={<Navigate to="/posts"/> }/>
      </>
      }
    </Routes>
  );
};

export default RoutesApp;
